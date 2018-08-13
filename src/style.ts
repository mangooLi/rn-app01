


import { StyleSheet} from 'react-native';
import {getSize,WindowWidth} from './utils';

const  styles = StyleSheet.create({

    main:{
      backgroundColor: '#fff',
      // flexDirection:'row',
      // wrap:'wrap'
    },
    container: {
      flex: 1,
      justifyContent: 'space-around',
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
      width:WindowWidth/2.5
    }
  });

  export default styles;