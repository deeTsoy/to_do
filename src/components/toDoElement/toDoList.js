import React,{useState} from "react";
import ToDoForm from "./toDoForm";
import ToDo from "./toDo";

const ToDoList = () => {

    const [toDos, setToDos] = useState([]);

    const addToDo = (toDo) =>{
        if(!toDo.text || /^\s*$/.test(toDo.text)){
            return;
        }
        const newToDo = [toDo, ...toDos];

        setToDos(newToDo);
    };

    const updateToDo =(toDoId, newValue)=>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }
            setToDos( prev =>prev.map(item => (item.id === toDoId ? newValue: item)));
        }

        const removeToDo = (id) => {
            const removeArr = [...toDos].filter(toDo => toDo.id !== id)
    
            setToDos(removeArr)
        };
        const completeToDo = (id) => {
            let updateToDos = toDos.map( toDo => {
                if(toDo.id === id){
                    toDo.isComplete = !toDo.isComplete
                }
                return toDo;
            })
            setToDos(updateToDos);
        };
    
        return(<div>
            <h1>The Plan for today?</h1>
            <ToDoForm onSubmit= {addToDo}/>
            <ToDo 
            toDos ={toDos}
            completeToDo = {completeToDo}
            removeToDo = {removeToDo}
            updateToDo = {updateToDo}/>
        </div>);

};

export default ToDoList;