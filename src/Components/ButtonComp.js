import Button from 'react-bootstrap/Button';
import "./ButtonComp.css";

function ButtonComp(props){
    return(
        <Button variant={props.vari} className={props.cls} value={props.val} size={props.size} onClick={props.funct}  > {props.val} </Button>
    );
}

export default ButtonComp;