import * as React from 'react';
import { View,} from 'react-native';


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



const str2=`
    <div>
        <h3>hehhehehehheh</h3>
        <h3>hehhehehehheh</h3>
        <h3>hehhehehehheh</h3>
        <h3>hehhehehehheh</h3>
        <p>呵呵哈哈哈</p>
    </div>
`