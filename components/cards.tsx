import React from "react";
import {StyleSheet , View , Text } from "react-native";



type CardProps = {
    titulo:string;
    quantidade?:string;
    colorText:string;
    onPress?: () => void;
}


export default function Card({titulo,quantidade,colorText,onPress}:CardProps){
    return(
        <View style={styles.cards}>
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={[styles.cardsText,{color: colorText}]}>{quantidade}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    cards:{
        alignItems:'center',
        backgroundColor:'white',
        flexDirection:'column',
        padding:12,
        borderRadius:3,
    },
    cardsText:{
        fontSize:16,
        fontWeight:'bold',
    },
    titulo:{
        fontSize:15,
        paddingBottom:5,
    }
});