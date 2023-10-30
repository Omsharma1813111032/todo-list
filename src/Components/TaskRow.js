import Button  from "react-bootstrap/Button";


function TaskRow(props){
    return(
        <>
            <tr>
               <td className="text-center"> <input type={props.typ} onClick={props.funt} /> </td>
               <td>{props.task}</td>
               <td><Button variant="danger" onClick={props.dlt} >Delete</Button></td>
               <td><Button variant="warning" onClick={props.edit}>Edit</Button></td>
            </tr>
        </>
    )
}

export default TaskRow;