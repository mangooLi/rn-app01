

## RN 开发小结
笔者上个月开始接触RN开发，并参照IOS版DT·一财APP和设计稿，尝试开发了安卓版本。现将开发过程中碰到的问题和解决方法记录如下。

<!-- 项目使用mobx做状态管理。 -->


### 一、 登录注册

后台提供了根据账号/密码和手机/验证码登陆的接口，但是APP只需要根据账号密码登陆即可。登录页面注意以下几点。

1. 登录页面使用TextInput处理文本输入，通过TextInput组件的onChangeText事件获取输入值。
2. TextInput组件在安卓和IOS中默认样式有所不同，如果想要统一的外观，需要额外设置一些属性和样式。比如在安卓中，该组件有一个默认的底边框和padding，可以使用`underlineColorAndroid="transparent"`来去掉底边框。
3. 输入密码时，可以用`secureTextEntry={true}`来遮住输入的文字。
4. 如果需要表单验证，需要将TextInput的value属性绑定在state或者store的某个observerable属性上，每次输入时在onTextChange的回调里setState或者修改observerable属性的值，并对值进行验证，控制页面按钮的是否灰显和提示词的是否显示。这样会在每次输入时渲染页面。如果不需要表单验证，只需要获取输入框的值，可以不绑定value对象，只在onTextChange回调里将修改值。
5. 登录成功后，可以把登录信息保存在AsyncStorage中（类似于浏览器的localStorage，后面会有详细介绍）。同时，也需要把token和userName的其他页面需要用到的信息保存在global对象上。global对象是一个全局的跨页面的对象，类似与浏览器中的window对象。由于APP不存在浏览器中的刷新页面的情况，因此不用担心刷新后全局对象的属性丢失的问题。
6. 如果需要页面对全局的变化作出响应，可以新建一个全局mobx observerable Model。APP中应该很少碰到这种情况。
7. APP的登录页面需要设置渐变的背景色。ReactNative的background不支持设置渐变。这里引入第三方库`react-native-linear-gradient`来满足设计需求。详细使用见[该第三方库的GitHub](https://github.com/react-native-community/react-native-linear-gradient#readme)
8. 单选框checkbox。ReactNative没有提供自带的checkBox组件。可以根据设计稿封装一个。主要思路是一个背景为白色，带边框圆角的View，内部一个带✅的图片。checked为true 的时候，图片显示，false的时候，图片隐藏。



### 二、列表页

列表页列表的渲染，推荐使用FlatList。FlatList是一个高性能的简单列表组件，支持以下常用功能：

+ 支持水平布局模式`（horizontal={true}）`

+ 支持单独的头部组件`(ListHeaderComponent)`

+ 支持单独的尾部组件`(ListFooterComponent)`

+ 列表为空时的提示组件`(ListEmptyComponent)`

+ 支持自定义行间分隔组件`(ItemSeparatorComponent)`

+ 支持下拉刷新
>onRefresh 下拉刷新功能。注意，该方法不支持自定义刷新提示。

+ 支持上拉加载

>`onEndReached 该回调在组件上拉到当前列表页最底下的时候触发。一般配合onEndReachedThreshold 属性，决定当距离内容最底部还有多远时触发onEndReached回调`。


列表页面的开发，有以下需要注意的：
1. 该项目用mobx做状态管理，绝大部分逻辑都写在Model中，ReactNative只负责视图的渲染。 APP内部有多个列表页。列表页有部分逻辑是相同的，因此可以把这部分逻辑抽象出来，设计成一个抽象类，每个列表页的Model继承该类。以该APP为例，设计的抽象如下：
```
export default abstract class  List<T> {
    @observable informations:T[] = [];  // 列表页的数据
    pageToLoad:number = 1;  // 分页参数
    total_page:number = 1;  //总页数
    loadding :boolean = false;

    // 通过API获取数据的抽象方法。每个列表页都需要实现这个方法。
    abstract  apiFn(pageToLoad:number) :Promise<Response<{data:T[],meta:Meta}>>

    @action
    addInfo (list:T[]){  //将从API获取的数据加载到当前Model
        let pre =this.informations;
        pre = pre.concat(list);
        this.informations = observable(pre)
    }

    @action 
    loadData(){  //加载数据。
        if( (this.pageToLoad>this.total_page)|| this.loadding )return;
        this.loadding = true;
        this.apiFn(this.pageToLoad).then(res=>{
            if(this.loadding === false)return; // 表示已经有地方提前结束了loading，此时不需要作任何处理。
            this.loadding = false;
            if(res.data  ){
                this.addInfo(res.data.data);
                this.pageToLoad = this.pageToLoad +1;
                this.total_page = res.data.meta.total_page;
            }
        }).catch(()=>{
            this.loadding = false;
        })
    }
    @action
    reset (){  //重置操作。
        this.informations = observable([]);
        this.pageToLoad = 1;
        this.total_page =1;
        this.loadding = false;
    }
}
```
从上面的代码可以看出，每个列表页只是通过API从后台获取数据的方法不同，其他参数和方法都差不多。我们在这几抽象类的时候，将从后台获取参数的方法定义为抽象类，每个列表只需要根据需求实现该抽象方法，列表页的model就完成了。

2. 列表页的ListItem,其他页面会有复用。因此可以将组件封装成公共组件，供多个页面复用。封装时候，不要定义margin，或者可以通过传入参数，来设置margin值，以满足组件在不同页面中样式需求。封装的组件如果需要用到页面Store的方法，不要图方便将整个store穿进去，而是只传需要的方法。

### 首页
1. 首页轮播图，用的ScrollView实现的。首页tab页，也是用的Scroll。RN原生不支持ScrollView嵌套。为了解决这个问题，在轮播图onTouchStart 的回调里，禁用外层Scroll的scrollEnabled属性，在onScrollEndDrag回调中开启外层ScrollView的属性。这个方法性能损耗比较大，目前初步解决里ScrollView嵌套的问题。后期有机会再多尝试其他方法。
2. 轮播图用的react-native-whc-banner插件。该插件原生有一些bug，为了满足需求，修改里部分源码。修改后的组件放在项目Vendor文件夹下。


### 三 文章详情页
1. 后台返回的文字详情是一段html代码，需要用webView解析渲染。由于webView奇怪的样式表现:
   1. 当一个webView组件占一个页面时候，样式表现没有问题,与用手机浏览器打开没有大的区别。
   2. 当一个WebView 的父组件是View，且这个View没有设置宽度或者高度，那么这个View将不显示，WebView也不会显示。
   3. 如果WebView的父组件是View，且View设置了宽度和高度，那么WebView会填充满View，超过的部分可以滑动显示。
   4. 如果WebView的父组件是View,且View设置了宽高，且View中有其他元素，那么WebView的样式表现为{flexGrow:1}。这意味着如果其他兄弟组件的宽高事确定的，那么WebView会占据父组件中剩下的区域，超出的内容可以滚动。如果有兄弟与组件设置了flexGrow，那么View会和其他设置了flexGrow的元素一起瓜分剩下的区域。如果设置了宽高的兄弟元素的高度加起来超过了父组件的高度，那么WebView将不会显示。
笔者通过查找资料，找到一个第三方库[react-native-autoheight-webview](https://www.npmjs.com/package/react-native-autoheight-webview)。这个组件可以代替WebView，应用在ScrollView中。

2. 详情页下面有“更多推荐”栏目，会推荐与该文章相似的几篇文章。这些文章需要通过接口获取。为了改善体验，可以给页面ScrollView组件添加事件，待滑动到一定高度时候，才加载渲染这部分内容。但是如果文章内容较少，就需要一开始就加载该办法。可以在获取到文章内容后做判断。

3. 详情页有的需要播放视频。播放视频用的是react-native-video组件，通过组件的paused属性控制视频的播放与暂停。更多配置信息参考[文档](https://github.com/react-native-community/react-native-video#readme)

### 四 评论页
1. 评论页也是列表页，Store也可以继承列表页的抽象类。
2. 按照设计要求，评论输入框应该固定在屏幕最下方。用`position:absolute;bottom:0`定位即可。
3. 为了避免键盘弹出后遮住输入框，需要把随键盘上移的部分（这里为整个页面的根元素）用KeyboardAvoidingView组件包裹。在安卓中使用该组件之前，需要先在AndroidManifest.xml中添加android:windowSoftInputMode="adjustResize"，否则不起作用。
4. 评论页点赞的icon，有两种解决方法。
   1. 准备两张不同颜色的图片，在已点赞/未点赞的时候，显示不同的图片。
   2. 引入Icon。笔者这里用的是react-native-vector-icons。npm install 该包后，运行npm link react-native-vector-icons,并在android/app/build.gradle文件中加入`apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"`，重新react-native run-android，就能使用Icon。具体安装和使用见[github](https://github.com/oblador/react-native-vector-icons/tree/12ac7ecd9f3d353c43569c018af7ac31ae224d0a)


### 五 报告详情页
1. 报告页详情需要展示PDF，用的[react-native-pef](https://www.npmjs.com/package/react-native-pdf)插件。传入PDF的路径，组件回自己解析PDF。
2. 通过 ProgressBarAndroid 组件，在页面显示进度条。
3. 在react-native-pdf组件的onLoadProgress回调里，获取组件解析PDF的进度，并修改 ProgressBarAndroid 的进度。
4. 在react-native-pdf组件的onLoadComplete回调里，将ProgressBarAndroid 的进度设为1，并隐藏进度条。
5. react-native-pdf组件自带一个进度提示。通过设置`activityIndicator={<View/>}`，将其进度提示组件隐藏。
6. 设计需要感知横屏事件。RN不提供该事件，可以在页面根View组件的onLayout事件中，根据屏幕高宽，来判断是否横屏。
7. 判断横屏幕后，在RN组件内部调用this.forceUpdate()方法，可以强制render组件。

### 六 用户中心页
1. Modal 。RN提供了自带的Modal组件，通过visible属性控制modal的显示和隐藏。弹窗的内容可以包裹在Modal标签内。
2. 获取图片。用户中心有更换用户头像的功能，可以通过拍照或从手机相册选取图片。图片的获取用的是[react-native-image-crop-picker](https://github.com/ivpusic/react-native-image-crop-picker#readme)组件。这个组件既能通过拍照获取图片，也能从相册读取图片。获取到的图片还能裁剪。在使用该组件前，需要给APP配置拍照和读取本地相册的权限。
3. 当TextInput设置autoFocus为true的时候，键盘会自动弹出。

### 七 首页
#### 首页结构
1. 首页主要由三个列表页（全部、数据洞察、数据报告）组成，三个列表之间可以左右滑动切换。
2. 顶部tabbar右侧点击后，首页向左边折叠，现实出右侧的用户中心信息。
#### 解决方法
最先采用的解决方案如下：
1. 首页和用户中心页面放在一个组件里，两者通过zIndex上下层叠。
2. 首页三个列表页面布置在一个水平放心的ScrollView里，左右滑动到不同页面。
3. 点击顶部TabBar最右侧按钮后，首页向右边折叠。
这个方案存下如下问题：
1. ScrollView会一次加载所有的子组件。这意味着首页会一次加载三个列表页，非常影响性能和体验。
2. 首页第一个列表页最上方是一个轮播图，也是用ScrollView实现的。ScrollView不支持嵌套。因此在轮播图滑动前，要禁用外层ScrollView的滑动。轮播图一次滑动结束后，重启外层ScrollView的滑动。
3. 首页下方的TabBar是一个只存在于首页组件内部的子组件，不是 首页-数据侠页 这个路由的公共tabbar。从首页跳转到数据侠计划页的时候，该组件会销毁，并重新加载数据侠页面的该类组件。

经过不断研究，采取改进版本的解决方法如下：
1. 三个列表页面分为两层，上层是列表，下层是用户中心。
2. 三个列表页通过一个路由createMaterialTopTabNavigator组织起来。
3. 这个路由组件的tabBarComponent设为之前的tabbar。
4. 当列表页向左边动画缩进的时候，顶部和底部的tabBarComponent并不会跟着动。因此，需要将这两个TabBar设置为绝对定位，并给起设置响应的动画效果。


