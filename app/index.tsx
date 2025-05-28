import React from "react";

import { Text } from "@react-navigation/elements";

import { SafeAreaView } from "react-native-safe-area-context";
import {StyleSheet , View} from "react-native";

import Card from "@/components/cards";
import TaskRow from "@/components/taskRow";




export default function ToDoList(){


    return(
        <SafeAreaView style={styles.container}>
            
            <View style={styles.tasksCards}>
                <Card titulo="Cadastradas:" colorText="black" quantidade="1"/>
                <Card titulo="Em aberto:" colorText="red" quantidade="1"/>
                <Card titulo="Finalizadas:" quantidade="1" colorText="green" />
            </View>

            <Text style={styles.text}> Em aberto: </Text>

            <View>

                <TaskRow isChecked={false} text="Enviar atividade"/>
                <TaskRow isChecked={false} text="Assistir aula sobre Hooks" />
            </View>

            
            <Text style={styles.text}> Finalizadas: </Text>
            <View>

                <TaskRow isChecked={true} text="Assistir aula sobre Telas"/>
                <TaskRow isChecked={true} text="Assistir aula sobre Estilos"/>
            </View>

        </SafeAreaView>
    );


}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#28385E',
        flexDirection:'column'
    },
    tasksCards:{
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'space-around',
        width:'90%',
        marginVertical:20,
        gap: 5,
    },
    text:{
        color:'#fff',
        fontWeight:'bold',
        fontSize: 18,
        marginLeft:10,
        marginVertical:5,
    }
});