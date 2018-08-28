


import { StyleSheet} from 'react-native';
import {getSize,WindowWidth,MyStyleSheetCreate} from './utils';

const  styles = MyStyleSheetCreate({

  

    main:{
      backgroundColor: '#9f0',
      flexDirection:'row',
      flexWrap:'wrap',
      justifyContent: 'space-around',

    },
    main2:{
      flexDirection:'row',
      flexWrap:'wrap',
      justifyContent: 'space-around',
      backgroundColor:'#93c',
      flex:1
    },
    container: {
      flex: 1,
      
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color:'red'
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    btn:{
      width:WindowWidth/3.5,
      marginTop:10
    }
  });

  export default styles;