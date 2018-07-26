import {observable,action,extendObservable, toJS } from 'mobx';


import {getInformaatinDetail,getRecommendations,RecommendationDetail} from '../../api';
import { assign } from '../../utils';



export default class DetailModel{



    @observable id:number;
    @observable article:any = {}    ;
    @observable recommendations:RecommendationDetail[] = []

    @observable number = 0;

    hasLoadRecommend:boolean = false;

    @action
    updateArticle(entity:any){
        // extendObservable(this.article,entity)
        const pre=toJS(this.article);
        const newArticle = assign({},pre,entity);
        this.article=observable(newArticle)
    }

    @action
    setId(id:number){
        this.id=id;

        this.getInfoDetail()
    }

    @action
    getInfoDetail(){
        getInformaatinDetail(this.id).then(res=>{
            if(res.data){
                this.updateArticle(res.data.data);
            }
        })
    }

    @action
    changeNumber(){
        this.number+=10;
    }

    @action
    loadRecommendations():Promise<void> {
        this.hasLoadRecommend = true;
         return getRecommendations(this.id).then(res=>{
            if(res.data){
                this.recommendations = observable(this.recommendations.concat(res.data.data)) ;
            };
        }).catch(()=>{
            this.hasLoadRecommend=false
        })
    }

}