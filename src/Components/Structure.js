import ButtonComp from "./ButtonComp";




function Structure() {

    const msg=()=>{
        
    }

    return(
        <ButtonComp val="Add Task" cls="btn_addtotask m-3"  funct={msg} size="large" />
    );
}

  export default Structure;