

import {observable, action,} from 'mobx';
import List from '../../Common/List';
import {remove, getSize,MyStyleSheetCreate, noop} from '../../utils';
import {Animated} from 'react-native';
import {getAccountComment,getAccountCollection,deleteStarInformations,deleteMineComment} from '../../api';

export default class CollectionModel extends List<DataDiscoverItem|DataLabItem|DataHeroItem|DataFiftyItem|CommentItem> {


    apiFn(pageToLoad:number){

        return this.type==='article'? getAccountCollection(pageToLoad):getAccountComment(pageToLoad);
    }
    @observable 
    type:string = 'article';
    @observable
    title:string = '我的收藏'
    @observable
    checkList:number[]  = [];

    @observable 
    onSetting:boolean = false;

    @observable
    position_left = new Animated.Value(-36);
    @observable
    checkAll:boolean = false;

    @action
    setType(type:string){
        this.type = type;
        switch(type){
            case 'comment':this.title='我的评论';
            default :this.title = '我的收藏';
        }
    }


    @action
    toggleSetting(){
        this.onSetting = !this.onSetting;

        if(this.onSetting){
            Animated.timing(this.position_left,{toValue:0,duration:500}).start()
        }else{
            Animated.timing(this.position_left,{toValue:-36,duration:500}).start()

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

    @action
    handleDelete(){
        const ids = this.checkAll?this.informations.map(item=>item.id):this.checkList;
        (this.type==='comment'?deleteMineComment(ids): deleteStarInformations(ids)).then(()=>{

            remove(this.informations,info=>ids.includes(info.id));
            this.toggleSetting();
            // this.loadData()
        }).catch(noop)
    }

}