

import {observable, action,} from 'mobx';
import List from '../../Common/List';
import {remove, getSize} from '../../utils';
import {Animated} from 'react-native';
import {getAccountComment,getAccountCollection,deleteStarInformation} from '../../api';

export default class CollectionModel extends List<DataDiscoverItem|DataLabItem|DataHeroItem|DataFiftyItem|CommentItem> {


    apiFn(pageToLoad:number){

        return this.type==='article'? getAccountCollection(pageToLoad):getAccountComment(pageToLoad);
    }
    @observable 
    type:string = 'article';
    @observable
    checkList:number[]  = [];

    @observable 
    onSetting:boolean = false;

    @observable
    position_left = new Animated.Value(-getSize(36));
    @observable
    checkAll:boolean = false;

    @action
    setType(type:string){
        this.type = type;
    }


    @action
    toggleSetting(){
        this.onSetting = !this.onSetting;

        if(this.onSetting){
            Animated.timing(this.position_left,{toValue:0,duration:1000}).start()
        }else{
            Animated.timing(this.position_left,{toValue:-getSize(36),duration:1000}).start()

        }

    }

    @observable
    toggleCheckItem (id:number){
        if(this.checkList.includes(id)){
            remove(this.checkList,item=>item===id);
        }else{
            this.checkList.push(id);
        }
    }
    @action 
    checkAllArticle(){
        this.checkAll = true;
    }

    handleDelete(){
        const ids = this.checkAll?this.informations.map(item=>item.id):this.checkList;
        deleteStarInformation(ids).then(()=>{

            remove(this.informations,info=>ids.includes(info.id));
            this.toggleSetting();

        })
    }

}