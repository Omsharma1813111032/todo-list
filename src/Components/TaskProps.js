import { useState } from "react";
import data from "./Data";
import TaskList from "./TaskList";





function TaskProps(){

    const[list,setDeletedList] = useState(data);



    const DeleteHandle = (id) =>{
        const newList = list.filter((dt)=>dt.id!==id); 
        setDeletedList(newList);
    }


    return(
        <>

            {list.map((item)=>(
                <TaskList typ="checkbox" key={item.id} dlt={()=>DeleteHandle(item.id)} identity={item.id} task={item.task} />
            ))}


        </>
    );
}

export default TaskProps;