import * as React from 'react';
import { View,Text,PanResponder,PanResponderInstance} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Feather'


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
        return (<View>
            <Text>hiehei</Text>
            <Text onPress={this.toggleColor}>{myIcon}</Text>
            <Text onPress={this.toggleColor}>{myIcon2}</Text>
            <Text onPress={this.toggleColor}>{myIcon3}</Text>
        </View>)
    }
}