import React from "react";
import {StyleSheet , View , Text, TouchableOpacity } from "react-native";

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type TaskRowProps ={
    isChecked: boolean, // para marcar se está checado
    text: string,
    onToggle?: () => void,
    onDelete?: () => void,
};

export default function TaskRow({isChecked,text,onToggle,onDelete}:TaskRowProps){
    return (
        <View style={styles.row}>

            <View style={[styles.checkboxContainer,{backgroundColor: isChecked ? 'green' : '#E88A1A'}]}>
                
                <MaterialIcons 
                    name={isChecked ? 'check-box' : 'check-box-outline-blank'}
                    size={24}
                    style={{color:'white',}}
                />
            </View>
            <Text style={styles.texto}>{text}</Text>

            <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
                <MaterialIcons 
                name={'delete-outline'}
                size={24}
                style={{color:'white'}}
                />
            </TouchableOpacity>
            
        </View>
    );

}

const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        backgroundColor: '#304163',
        width: '80%',
        marginVertical:5,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'space-between',
    },
    checkboxContainer:{
        padding:16,
        borderRadius: 5,
        alignItems:'center',
        justifyContent:'center'
    },
    deleteButton:{
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 5,
        padding:16
    },
    texto:{
        color:'white',
        fontSize: 15,
    }
});