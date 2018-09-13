
import * as React from 'react';
import { View ,FlatList ,ListRenderItem,ScrollView,NativeSyntheticEvent,NativeScrollEvent ,LayoutChangeEvent,DeviceEventEmitter, ViewStyle} from 'react-native';
import {observer} from 'mobx-react';
import { SmartRefreshControl ,AnyHeader} from 'react-native-smartrefreshlayout';


import { getInformationFlow,getBanners,Response,} from '../api'

import { debounce ,MyStyleSheetCreate, noop, WindowHeight, getSize} from '../utils';


import NetError from './NetError';
import Loading from './Loading';
import FooterLoading from './FooterLoading';



interface ShowAble{
    show?:boolean
}

interface State<T>{
    informations:(T & {show?:boolean})[];
    initialized:boolean;

    loading:boolean;
    netError:boolean;

    report_product?:any[];
    banners?:BannerItem[],
}


abstract class LongList<T extends ShowAble,P> extends React.Component< P>{


   
    srf:any;
    flatList:FlatList<any>;
    layout:number[] =[];

    prev_page:number = 0;
    next_page:number = 1;
    current_page:number = 1;
    total_page:number = 1;


    state:State<T>={
        informations:[],
        initialized:false,
        loading:false,
        netError:false
    }
    style:any = {};

    componentWillMount(){
        this.init()
    }


    abstract  apiFn(pageToLoad:number) :Promise<Response<{data:T[],meta:Meta}>>

    abstract render_item(item:T,index:number):JSX.Element

    
    init(){
        this.loadData(1)
    }

    loadData(page:number,reload:boolean = false):Promise<any>{
        const { informations, loading, initialized}=this.state;
        if(page>this.total_page|| loading)return Promise.resolve();
        this.setState({loading:true})

        return this.apiFn(page).then(res=>{
            if(res && res.data){
                 
                const {data,meta}=res.data;
                if(page === 1){
                    data.forEach((item,index)=>{
                        item.show = index<=5;
                    })
                }
                if(!initialized){
                    this.setState({initialized:true})
                }
                this.setState({
                    informations: (reload?[]:informations).concat(data),
                    loading:false,
                    netError:false
                });
                this.prev_page = meta.prev_page;
                this.current_page=meta.current_page;
                this.next_page = meta.next_page;
                this.total_page = meta.total_page;

                
            }
        }).catch(()=>{
            this.setState({loading:false,netError:true});

        })
    }

    _onItemLayout(e:LayoutChangeEvent,index:number){
        this.layout[index]=e.nativeEvent.layout.height;
    }

    _onScroll=(e:NativeSyntheticEvent<NativeScrollEvent>)=>{
        const y = e.nativeEvent.contentOffset.y;
        var index=0;var cur = 0;
        while(y>cur){
            if(!this.layout[index]){
                break;
            }
            cur +=this.layout[index];
            index++
        }

        this._showImage(index)
    }

    _loadMore(){
        this.loadData(this.next_page);
    }

    _showImage(number:number){
        let {informations}=this.state;
        informations = informations.map((item,index)=>{
            item.show = (index<number+3 && index>=number -4) ;
            return item;
        });
        this.setState({informations})
    }   

    _reload(){
        this.layout =[]

        this.prev_page = 0;
        this.next_page = 1;
        this.current_page = 1;
        this.total_page = 1;

        this.setState({
            loading:false,
            // initialized:false,
            netError:false
        })
        return this.loadData(1,true)

    }

    
    head(){
        return <View />
    }


    
    render(){

        const {informations,initialized,loading,netError}=this.state;

        return (
            <View style={this.style} >
            {this.props.children}
            {initialized ?
                <FlatList
                    ref={(c:FlatList<any>)=>this.flatList=c}
                    refreshControl={
                        <SmartRefreshControl 
                            ref = {(c:any)=>this.srf=c}
                            headerHeight={getSize(40)}
                            HeaderComponent={   
                                <AnyHeader >
                                    <FooterLoading loading={true} netError={netError}/>
                                </AnyHeader>}
                                
                            onRefresh={()=>{
                                this._reload().then(()=>{
                                        this.srf.finishRefresh();
                                })
                            }}/>
                    }
                    onScroll={this._onScroll}
                    data={informations}
                    ListHeaderComponent={
                        <View>
                            {this.head()}
                        </View>
                    }

                    renderItem={({item,index})=>this.render_item(item,index)}

                    keyExtractor={(item,index) => index+''}
                    removeClippedSubviews
                    showsVerticalScrollIndicator={false}
                    onEndReached={()=>this._loadMore()}
                    onEndReachedThreshold={0.2}
                    scrollEventThrottle={500}
                    ListFooterComponent={<FooterLoading loading ={loading} netError={netError}/>}
                />
            // </ScrollView>
            :loading?<Loading />:netError?<NetError reload={()=>this._reload()}/>:<View/>}
            </View>
        )
    }
}



// export default withNavigation<Prop>(LongList)
export default LongList;




