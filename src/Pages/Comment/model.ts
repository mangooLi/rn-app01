import {observable,action,extendObservable, toJS } from 'mobx';
import {CommentItem,getInformationComments,addCommentToInformation} from '../../api';


export default class CommentModel {
    @observable id:number;
    @observable commentList:CommentItem[] = []
    @observable comment:string = '';
    pageToLoad :number = 1;
    total_page:number = 1;
    loadding = false;


    @action setId (id:number){
        if(id!==this.id){
            this.id = id;
            this.pageToLoad =1;
            this.total_page =1;
            this.getCommentsList(1);
        }
    }

    @action
    reload (){
        this.pageToLoad =1;
        this.total_page =1;
        this.updateComment('');
        this.commentList = observable([])
        this.getCommentsList(1);
    }

    @action 
    getCommentsList(pageToLoad:number){
        if((this.pageToLoad>this.total_page)|| this.loadding ){return };
        this.loadding = true;
        getInformationComments(this.id, pageToLoad).then(res=>{
            this.loadding = false;
            if(res.data){
                let pre=this.commentList;
                pre = pre.concat(res.data.data);
                this.commentList = observable(pre);
                this.total_page = res.data.meta.total_page;
                if(this.pageToLoad <= this.total_page){
                    this.pageToLoad = this.pageToLoad+1;
                }
            }
        }).catch(e=>{
            this.loadding = false;
        })
    }

    @action
    updateComment(comment:string){
        this.comment=comment
    }
    
    publish(){
        addCommentToInformation(this.id,this.comment).then(res=>{
            if(res.success){
                this.reload()
            }
        })
    }
    

}