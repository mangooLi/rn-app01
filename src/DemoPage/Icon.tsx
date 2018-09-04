import * as React from 'react';
import { View,Text,PanResponder,PanResponderInstance} from 'react-native';
import DemoRoute from './DemoRoute';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Feather';
import AutoHeightWebView from 'react-native-autoheight-webview';


export default class IconPage extends React.Component{

    state={
        color:'#000'
    }
    toggleColor=()=>{
        const color = '#000#f00'.replace(this.state.color,'');
        this.setState({color})
    }

    render (){

        const myIcon = (<Icon name="thumbs-up" size={30} color={this.state.color} />)
        const myIcon2=(<Icon2 name="airplay" size={30} color={this.state.color} />)
        const myIcon3=(<Icon2 name="check" size={30} color={this.state.color} />)
        // return (<View>
        //     <Text>hiehei</Text>
        //     <Text onPress={this.toggleColor}>{myIcon}</Text>
        //     <Text onPress={this.toggleColor}>{myIcon2}</Text>
        //     <Text onPress={this.toggleColor}>{myIcon3}</Text>
        //     <View>
        //         <DemoRoute/>
        //     </View>
        // </View>)
        return (
            <View>

                {/* <DemoRoute/> */}
                <AutoHeightWebView 
                    source={{html:str2}}
                />
            </View>
           )
    }
}


const str =' <p>每当到了七夕等节日，一些化妆品品牌就会设计出很多针对女性消费者的促销计划。这激发了我&ldquo;数据狂热&rdquo;的一面，想要一窥这些美丽产品背后的数据一面。因此，我决定将我的研究范围缩窄在一个美妆巨头&mdash;&mdash;总部在纽约的雅诗兰黛，而专营美妆产品的丝芙兰则是最适合的数据来源。雅诗兰黛有29个子品牌，其中19个在丝芙兰上架。于是我决定就研究这19个品牌。</p>↵<p>首先，我需要对爬取原始数据，并对它们进行一些清理。我决定直接从丝芙兰网站爬取数据。网站为了方便消费者检索产品，提供了不同的分类以及产品的各类信息。比如分类为化妆品、护肤品、沐浴液、洗发水等，可以按照价格高低，评论数，用户评分以及点赞数等排列。</p>↵<figure><img src="http://cf.dtcj.com/2c40f15d-119e-4f04-8e9a-2dca1522b99c.png" />↵<figcaption></figcaption>↵</figure>↵<p>然而，因众所周知的原因，网站上并没有销量数据。多亏了<a href="http://www.beautypackaging.com/"> Beauty Packaging</a> 这个网站，我才能获得一些销量方面的数据。而同时为了弄清楚这么多种类的产品究竟哪一种对雅诗兰黛带来最大的收益，我也手动爬取了雅诗兰黛的2017年财报，因为我需要的仅仅是11行数据。在收集到所有需要的数据后，我决定使用Python来进行数据清洗、处理和分析。</p>↵<figure><img src="http://cf.dtcj.com/25354883-78ce-4fd0-86b6-e9f1ce64220c.png" />↵<figcaption><span style="color: #808080;">（图片说明：数据清理流程图，Gurminder Kaur 使用了Selenium爬取数据，然后在 Jupyter Notebook 中清晰了数据）</span></figcaption>↵</figure>↵<p>我从各品牌的销售情况入手。雅诗兰黛2017年排在第三，销量为118亿美元。下图是过往7年前溜达品牌的销量变化趋势。</p>↵<figure><img src="http://cf.dtcj.com/bb95f29f-088d-4319-97c1-d0d0b2778ae6.png" />↵<figcaption><span style="color: #808080;">（图片说明：销量领先的六个化妆品品牌这几年的销量变化，其中红色实线是雅诗兰黛。）</span></figcaption>↵</figure>↵<p>简单分析可以看出：宝洁割掉了不少品牌线，从而能更好地集中在几个特定品类。2016年它将40多个品牌卖给了科蒂，对应图中科蒂的增长。雅诗兰黛的并购策略帮助它在2017年稍微超过宝洁成为第三。而且与其他品牌相比，它的市场定位很独特，专攻高端/奢侈品市场而非药房连锁店等。</p>↵<figure><img src="http://cf.dtcj.com/e7e1d2ad-5a4b-4b43-9a90-b8c2d22b1d15.png" />↵<figcaption><span style="color: #808080;">（图片说明：左为药店渠道，右为奢侈品高端渠道。）</span></figcaption>↵</figure>↵<p>在其2017财报中，化妆品曾经是销售增长的最大推动者，紧跟着的是护肤品。在营销利润率上，护肤品表现最佳。</p>↵<figure><img src="http://cf.dtcj.com/f2b0bb45-9da1-4279-93f7-b7b87df94df1.png" />↵<figcaption><span style="color: #808080;">（图片说明：财报中不同类型化妆品占据的销售比例。绿色为化妆品，黄色为护肤品，蓝色为香水，红色为护发品。）</span></figcaption>↵</figure>↵<figure><img src="http://cf.dtcj.com/8a6558f4-c0ab-4cc8-80ed-e42907acafad.png" />↵<figcaption><span style="color: #808080;">（图片说明：财报中不同类型化妆品的营销利润率，从左到右依次为：护肤品、化妆品、香水、护发品、其他。）</span></figcaption>↵</figure>↵<p>以消费者可以接触到的品牌产品数来衡量&ldquo;存在感&rdquo;的话，雅诗兰黛旗下的倩碧和福特香水最为突出。</p>↵<figure><img src="http://cf.dtcj.com/d7e43e1d-efd9-47be-8e15-403cbd5f5ba3.png" />↵<figcaption></figcaption>↵</figure>↵<p>接下来我研究了一下产品的成本，看看雅诗兰黛的哪个品牌消费者最能负担得起。格莱魅、倩碧等产品价格的中位数较低，Kilian、LaMer等更高。Kilian 的价格中位数最高，达到235美元。格莱魅最低，为24美元。</p>↵<figure><img src="http://cf.dtcj.com/f25a74c4-ec0a-4a35-95c9-157a08ff2a91.png" />↵<figcaption></figcaption>↵</figure>↵<p>这让我也想知道另一个问题的答案：所有雅诗兰黛的品牌都已经作为奢侈品在运营，但是更倾向这些产品而非连锁店产品的消费者是否仍然是对价格敏感的呢？</p>↵<p>为此我研究了顾客参与度和价格之间的关系。参与度的定义为同一品牌不同产品的平均用户评论数。由于数据有限，这可以用来代表有多少顾客体验过这个品牌的产品。产品价格也是同一品牌不同产品的平均值。下面是关系图，依次是护肤品、化妆品、香水。</p>↵<figure><img src="http://cf.dtcj.com/a734973d-6c26-4ae1-8d47-053f802b2390.png" />↵<figcaption></figcaption>↵</figure>↵<figure><img src="http://cf.dtcj.com/596a94eb-907c-485e-ba8e-66b41ac44975.png" />↵<figcaption></figcaption>↵</figure>↵<figure><img src="http://cf.dtcj.com/6c67d53d-5b24-4663-920c-d342a0225568.png" />↵<figcaption></figcaption>↵</figure>↵<p>我发现：</p>↵<ul>↵<li>护肤品 超过了特定的价格后（40美金）整体顾客参与度随着价格上升而下降。</li>↵<li>化妆品 整体来看，超过30美金后，参与度随价格上升而下降。</li>↵<li>香水价格上涨，参与度下降</li>↵</ul>↵<p>那么，参与度和价格对品牌的评分数据有影响么？</p>↵<p>我制作了气泡图，气泡大小代表品牌平均价格（依次为护肤品、化妆品、香水）。下面是各个不同品类的发现：</p>↵<ul>↵<li>护肤品、香水：对评分影响不大。</li>↵<li>化妆品：更高价格的品牌似乎有更高的评分。品牌存在感似乎并没有直接影响评分</li>↵</ul>↵<figure><img src="http://cf.dtcj.com/24c903e2-2044-47e5-a76f-09b96f209955.png" />↵<figcaption></figcaption>↵</figure>↵<figure><img src="http://cf.dtcj.com/b80ec1ed-07f0-4811-a754-6464e01ba102.png" />↵<figcaption></figcaption>↵</figure>↵<figure><img src="http://cf.dtcj.com/de5b62ac-e636-4667-9451-057a205b0214.png" />↵<figcaption></figcaption>↵</figure>↵<p>另一个有趣的发现是关于点赞数和评分。丝芙兰网站允许用户为商品点赞，然后收藏到自己的最爱物品列表中。与Facebook的点赞功能类似。但意外的是，获得点赞数高的商品却拥有较低的评分。下图同样依次为：护肤品、化妆品、香水。</p>↵<figure><img src="http://cf.dtcj.com/24c2b9fb-ff23-453a-9cd3-4ddecb6f3a74.png" />↵<figcaption></figcaption>↵</figure>↵<figure><img src="http://cf.dtcj.com/61871593-0dd1-4a7d-9bb2-4c15d602e0f3.png" />↵<figcaption></figcaption>↵</figure>↵<figure><img src="http://cf.dtcj.com/41aa920f-d79d-4380-874a-21e816b84d58.png" />↵<figcaption></figcaption>↵</figure>↵<p>综上所述，我得出了一些关于美妆产品的结论：</p>↵<ul>↵<li>雅诗兰黛将自己定位在奢侈品区间，从而与其他品牌区分</li>↵<li>化妆品是驱动雅诗兰黛销售额的核心产品，而护肤品有最高的营运收益率</li>↵<li>倩碧和汤姆香水的存在感最强</li>↵<li>Kilian 和 La Mer 最贵</li>↵<li>价格看起来会影响消费者的参与度，体现在消费者对价格敏感</li>↵<li>总体来说点赞数和平均评分之间是反向关系</li>↵</ul>↵<p>其他的数据，诸如产品层面的销售数据，用户分析，购物记录以及点评分析等，都可以用于未来更进一步的分析以及跨公司的对比。</p>↵<p><span style="color: #808080;">（本文编译自技术博客<em><a style="color: #808080;" href="https://nycdatascience.com/blog/student-works/scraping-and-analyzing-elc-brand-presence-on-sephora/"> Scraping and Analyzing ELC Brand Presence on Sephora</a></em>，仅代表作者观点。）</span></p>↵<h2><span style="color: #f75c2f;"><strong>数据侠门派</strong></span></h2>↵<p><a href="https://www.linkedin.com/in/gurminder-kaur-2018/">Gurminder Kaur</a> 在数据科学领域有超过七年的工作经验，她感兴趣的方向包括数据分析、数据科学、商业资讯等。</p>↵<figure><img src="http://cf.dtcj.com/24bd9d16-5829-4757-957d-ec8ea645d4c0.jpg" />↵<figcaption></figcaption>↵</figure>↵<h2><span style="color: #f75c2f;">关于DT&times;NYCDSA</span></h2>↵<p>DT财经与纽约数据科学学院是战略合作伙伴。DT&times;NYCDSA 系合作开设的系列专栏。</p>↵<figure><img src="http://cf.dtcj.com/f83f865c-17ba-4107-bd8f-84a641b84c7d.png" />↵<figcaption></figcaption>↵</figure>↵<h2><span style="color: #f75c2f;">加入数据侠</span></h2>↵<p>数据侠计划是由第一财经旗下DT财经发起的数据社群，包含数据侠专栏、数据侠实验室系列活动和数据侠联盟，旨在聚集大数据领域精英，共同挖掘数据价值。申请入群请添加微信公号dtcaijing003并备注&ldquo;数据社群&rdquo;，合作请联系datahero@dtcj.com。</p>↵<figure><img src="http://cf.dtcj.com/e9f8aa9b-ad10-4c47-b1bf-be768becd511.jpg" />↵<figcaption></figcaption>↵</figure>↵<p>&nbsp;</p>↵<p>&nbsp;</p>'

const str2=`
    <div>
        <h3>hehhehehehheh</h3>
        <h3>hehhehehehheh</h3>
        <h3>hehhehehehheh</h3>
        <h3>hehhehehehheh</h3>
        <p>呵呵哈哈哈</p>
    </div>
`