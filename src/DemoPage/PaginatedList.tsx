import * as React from 'react';
import { View,Text,PanResponder,PanResponderInstance} from 'react-native';
// react-native-paginated-listview
// import PaginatedListView from 'react-native-paginated-listview'
import {UltimateListView} from 'rn-ultimate-listview';

import {getInformationFlow} from '../api';

export default class paginatedList extends React.Component{


  sleep = (time:number) => new Promise(resolve => setTimeout(() => resolve(), time));

  onFetch = (page = 1, startFetch:(one:any,two:any)=>void,abortFetch:()=>void) => {
    try {
        //This is required to determinate whether the first loading list is all loaded.
        let pageLimit = 20;

        let skip = (page - 1) * pageLimit;
        getInformationFlow({page,per:20}).then(res=>{

            res && res.data && startFetch( res.data.data,20)
        })

        // startFetch(rowData, pageLimit);
    } catch (err) {
        abortFetch(); //manually stop the refresh or pagination if it encounters network error
        console.log(err);
    }     
};
    render (){
        return (<View>

            <UltimateListView 
                item={(item,index)=>{
                  // console.log('item')
                  // console.log(item);
                  // console.log(index)
                    return (<Text style={{color:'black',height:30,backgroundColor:'#ef0080'}}>{item.title}</Text>)
                }}
                keyExtractor={()=>Math.random()+''}
                itemsPerPage={10}
                onFetch={this.onFetch}

                header={()=>(<Text>HeaHeadHeadHeadHeadd</Text>)}
            />
        </View>)
    }
}