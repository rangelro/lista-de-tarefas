import React, { useState } from "react";

import { Text } from "@react-navigation/elements";

import { SafeAreaView } from "react-native-safe-area-context";
import {Alert, FlatList, StyleSheet , TextInput, TouchableOpacity, View} from "react-native";

import Card from "@/components/cards";
import TaskRow from "@/components/taskRow";

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



interface Task{
    id: string,
    text: string,
    isChecked:boolean,
}


export default function ToDoList(){

    const [newTaskText,setNewTaskText] = useState("");
    const [tasks,setTasks] = useState<Task[]>([]);

    const tasksOpen = tasks.filter(task => !task.isChecked);
    const tasksClosed = tasks.filter(task => task.isChecked);


    const addTask = () =>{
        if(newTaskText.trim()){
            const newTask:  Task = {
                id: String(Date.now()),
                text: newTaskText.trim(),
                isChecked:false,
            };
            setTasks([...tasks,newTask])
            setNewTaskText('');
            Alert.alert(
                "Tarefa adicionada",
                "Sua tarefa foi adicionada com sucesso!",
            )
        }

    }

    const toggleDone = (id:string) =>{
        setTasks(
            tasks.map(task => 
                task.id === id ? {...task,isChecked: !task.isChecked} : task
            )
        );
    }
    const deleteTask = (id:string) => {

        Alert.alert(
            "Confirmar exclusão",
            "Tem certeza que deseja deletar essa tarefa?",
            [
                {text:"Cancelar", style: 'cancel'},
                {text:"Excluir", style: 'destructive',onPress: () => {
                    setTasks(tasks.filter(task => task.id !== id));
                }}
            ]
        );
    }

    return(
        <SafeAreaView style={styles.container}>

            <View style={styles.addTaskContainer}>
                <TextInput
                    style={styles.text} 
                    placeholder="Nova tarefa"
                    value={newTaskText}
                    onChangeText={setNewTaskText}
                />
                <TouchableOpacity style={styles.taskInputBtn} onPress={addTask}>
                    <MaterialIcons
                        name="add-task"
                        size={24}
                        style={{color:'#fff'}} 
                    />
                </TouchableOpacity>
            </View>
            
            <View style={styles.tasksCards}>
                <Card titulo="Cadastradas:" colorText="black" quantidade={tasks.length.toString()}/>
                <Card titulo="Em aberto:" colorText="red" quantidade={tasks.filter(tasks => !tasks.isChecked).length.toString()}/>
                <Card titulo="Finalizadas:" colorText="green" quantidade={tasks.filter(tasks => tasks.isChecked).length.toString()}/>
            </View>

            <Text style={styles.text}> Em aberto: </Text>

            <View>
                <FlatList 
                data={tasksOpen} 
                keyExtractor={(item => item.id)}
                renderItem={({item}) => (
                    <TaskRow
                        isChecked={item.isChecked}
                        text={item.text}
                        onToggle={() => toggleDone(item.id)} 
                        onDelete={() => deleteTask(item.id)}
                    />
                )}                
                />

            </View>

            
            <Text style={styles.text}> Finalizadas: </Text>
            <View>
                <FlatList 
                    data={tasksClosed} 
                    keyExtractor={(item => item.id)}
                    renderItem={({item}) => (
                        <TaskRow
                            isChecked={item.isChecked}
                            text={item.text}
                            onToggle={() => toggleDone(item.id)} 
                            onDelete={() => deleteTask(item.id)}
                        />
                    )}                
                />
               
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
    },
    addTaskContainer:{
        flexDirection:'row',
        backgroundColor: '#252627',
        height: 50,
        marginHorizontal:20,
        marginVertical:10,
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:5,
        fontSize:24,
    },
    taskInputBtn:{
        backgroundColor: '#1E1E1E',
        height:50,
        width:50,
        paddingHorizontal:5,
        justifyContent:'center',
        alignItems:'center'
    },


});