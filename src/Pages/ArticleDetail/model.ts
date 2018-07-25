// import {observable,action,extendObservable, toJS } from 'mobx';


// import {getInformaatinDetail} from '../../api';


// export default class DetailModel{



//     @observable id:number;
//     @observable article:any = {}

//     @action.bound
//     updateArticle(entity:any){
//         extendObservable(this.article,entity)
//     }

//     @action
//     setId(id:number){
//         this.id=id;

//         this.getInfoDetail()
//     }

//     @action
//     getInfoDetail(){
//         getInformaatinDetail(this.id).then(res=>{
//             if(res.data){
//                 // console.log(res.data.data)
//                 this.updateArticle(res.data.data);
//                 console.log(this.article,toJS(this.article))

//             }
//         })
//     }

// }