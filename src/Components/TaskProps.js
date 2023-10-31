import { useState } from "react";
import data from "./Data";
import TaskList from "./TaskList";





function TaskProps(){

    const[list,SetUpdatedList] = useState(data);

    const SearcResult = (event) =>{
        const value = event.target.value;
        const newList = list.filter((dt)=>(dt.task.includes(value)))
        SetUpdatedList(newList);
    }


    const DeleteHandle = (id) =>{
        const newList = list.filter((dt)=>dt.id!==id); 
        SetUpdatedList(newList);
    }


    return(
        <>

            {list.map((item)=>(
                <TaskList typ="checkbox" key={item.id} search={SearcResult} dlt={()=>DeleteHandle(item.id)} identity={item.id} task={item.task} />
            ))}


        </>
    );
}

export default TaskProps;