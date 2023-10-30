import Table from 'react-bootstrap/Table';
import TaskRow from './TaskRow';


function TaskList(props){
    return(
        <>

            <Table striped bordered hover>
                <tbody>
                    <TaskRow typ={props.typ} key={props.key} dlt={props.dlt} identity={props.identity} task={props.task}/>
                </tbody>
            </Table>


        </>
    );
}


export default TaskList;