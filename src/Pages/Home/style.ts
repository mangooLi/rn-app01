import {getSize} from '../../utils';

import {StyleSheet } from 'react-native';


export const homeStyle=StyleSheet.create({
    
        container:{
            flexDirection:'row',
            paddingTop:getSize(24)
        },
        img_container:{
            width:getSize(164),
            height:getSize(83),
            paddingLeft:getSize(16) 
        },
        img:{
            width:getSize(148),
            height:getSize(83),
            borderRadius:getSize(4)
        },
        detail_container:{
            flexGrow:1,
            paddingLeft:getSize(12),
            paddingRight:getSize(12),
            // overflow:'hidden',
        },
        detail_author:{
            height:getSize(17)
        },
        detail_author_text:{
            fontSize:getSize(12),
            color:'#ff570c',
        },
        detail_title:{
            
            width:getSize(187),
            height:getSize(40),
            marginTop:getSize(2)
        },
        detail_title_text:{
            fontSize:getSize(14),
            color:'#333333',
        },
        detail_date:{
            height:getSize(14),
            marginTop:getSize(4)

        },
        detail_date_text:{
            color:'#999',
            fontSize:getSize(12),
        },
        banner:{
            height:getSize(212.5)
        },
        banner_image:{
            width:getSize(375),
            height:getSize(212.5)
        }

       
    
})

