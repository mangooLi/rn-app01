import {observable,action, toJS } from 'mobx';


import {getInformaatinDetail,getRecommendations,} from '../../api';
import { assign ,MyStyleSheetCreate, noop} from '../../utils';



export default class DetailModel{


    @observable _type:string;
    @observable laboIndex:number ;
    @observable id:number;
    @observable article:any = {}    ;
    @observable recommendations:RecommendationDetail[] = [];
    @observable informationCards :InformationCardItem[] = []
    @observable video :Video;
    @observable number = 0;



    @action
    updateArticle(entity:any){
        // extendObservable(this.article,entity)
        const pre=toJS(this.article);
        const newArticle = assign({},pre,entity);
        this.article=observable(newArticle)
    }

    @action
    setId(id:number,type?:string){
        this.id=id;
        this._type=type||'';
        this.getInfoDetail()
    }

    @action
    getInfoDetail(){
        getInformaatinDetail(this.id,this._type).then(res=>{
            if(res.data){
                this.updateArticle(res.data.data);
                const {content} = this.article; 
                
                if(res.data.data.video){
                    this.video = observable(res.data.data.video)
                }

                if(this._type === 'data_lab_information' && (res.data.data as DataLabInformations).category==='for_review'){
                    this.informationCards = observable((res.data.data as DataLabInformations).information_cards)
                    // let tag = res.data.data.tags[0];
                    // if(tag && tag.name.includes('dt-labo-')){
                    //     this.laboIndex = Number(tag.name.replace('dt-labo-',''))
                    // }
                }
            }
        }).catch(noop)
    }

    @action
    changeNumber(){
        this.number+=10;
    }

    @action
    loadRecommendations():Promise<void> {

         return getRecommendations(this.id).then(res=>{
            if(res.data){
                this.recommendations = observable(res.data.data) ;
            };
        }).catch(noop)
    }

}