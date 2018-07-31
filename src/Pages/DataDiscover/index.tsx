import * as React from 'react';
import { View ,Text,FlatList,ScrollView,NativeScrollEvent} from 'react-native';
import DataDiscoverModel from './model';
import ArticleBrief from '../Home/ArticleBrief';

import { NavigationInjectedProps } from 'react-navigation';
import {observer} from 'mobx-react';
import {dataDiscoverStyle} from './style';
import Tags from './Tags';
import { debounce } from '../../utils';

@observer
class DataDiscover extends React.Component<NavigationInjectedProps>{



    store = new DataDiscoverModel();
    handleScroll:(e:NativeScrollEvent|undefined)=>void

    componentWillMount(){
        this.handleScroll = debounce(this.onScroll,1000)
        this.store.loadData();
    }

    

    onScroll(e:NativeScrollEvent |undefined){
        if(!e){return}
        const offsetY = e.contentOffset.y; //滑动距离
        const contentSizeHeight = e.contentSize.height; //scrollView contentSize高度
        const oriageScrollHeight = e.layoutMeasurement.height; //scrollView高度
        if (offsetY + oriageScrollHeight >= contentSizeHeight-20){
            // 滑动到底部
            this.store.loadData()
        }
    }

    render(){
        const {informations} =this.store;
        return (
            <View style={dataDiscoverStyle.container}>
            <ScrollView onScroll={(e)=>this.handleScroll(e&&e.nativeEvent)}>
                <Tags store={this.store}/>
                 <FlatList 
                    style={dataDiscoverStyle.flat_list}
                    data={informations}
                    renderItem={({item})=>{
                        return <ArticleBrief {...item}  />
                    }}
                    keyExtractor={(index) => String(index)+String(Math.random())}
                />
            </ScrollView>
            {/* <Text>hehe</Text> */}
            </View>
        )
    }
}

export default  DataDiscover