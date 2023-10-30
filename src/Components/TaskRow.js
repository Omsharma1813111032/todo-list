import Button  from "react-bootstrap/Button";


function TaskRow(props){
    return(
        <>
            <tr key={props.key}>
               <td className="text-center"> <input type={props.typ}/> </td>
               <td>{props.identity}</td>
               <td>{props.task}</td>
               <td><Button variant="danger" onClick={props.dlt} >Done</Button></td>
               <td><Button variant="warning" onClick={props.edit}>Edit</Button></td>
            </tr>
        </>
    )
}

export default TaskRow;