

import * as React from 'react';
import { View, Text,Button ,FlatList,DatePickerIOS} from 'react-native';


export default class DatePickerIOSPage extends React.Component{


    render (){

        return (
            <DatePickerIOS 
                date={new Date()}
                onDateChange={(date)=>{
                    console.log('date is ',date)
                }}
            />
        )
    }
}