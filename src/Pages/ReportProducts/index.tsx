

import * as React from 'react';
import { View ,FlatList,DeviceEventEmitter} from 'react-native';
import {observer} from 'mobx-react';
import {NavigationInjectedProps, withNavigation} from 'react-navigation';

import ReportProductsModel from './model';
import ReportProductItem from './ReportProductCard'
import {reportProductsStyle } from './style';
import HomeContainer from '../Home/HomeContainer';
import NetError from '../../Common/NetError';
import Loading from '../../Common/Loading';
import FooterLoading from '../../Common/FooterLoading';
import { WindowHeight } from '../../constant';
import { getSize } from '../../utils';

@observer
class ReportProducts  extends React.Component<NavigationInjectedProps>{

    store = new ReportProductsModel();

    componentWillMount(){
        this.store.loadData();
        this.props.navigation.addListener('willFocus',()=>{
            DeviceEventEmitter.emit('ListRouteSwipeTo',{page:2})
        })
    }


    render(){
        const {informations,loading,netError,initialized} =this.store
        return (
            <View style={[reportProductsStyle.container,{height:WindowHeight-getSize(89)}]}>
                {initialized? <FlatList 
                    data={informations}
                    renderItem={({item})=>{
                        return <ReportProductItem {...item}  />
                    }}
                    removeClippedSubviews
                    keyExtractor={item => item.id+''}
                    onEndReached={()=>this.store.loadData()}
                    onEndReachedThreshold={0.2}
                    ListFooterComponent={
                        <FooterLoading loading={loading}/>
                    }
                    getItemLayout={(data, index) => (
                        {length: 270, offset: 270 * index, index}
                      )}
                />:loading?<Loading />:netError?<NetError/>:<View/>}
            </View>
        )
    }
}

const ReportWithNavigation =  withNavigation<{}>(ReportProducts);
export default ReportWithNavigation;


export class ReportProductsWithAnimate extends React.Component {

    render (){

        return <HomeContainer>
            <ReportWithNavigation />
        </HomeContainer>
    }
}