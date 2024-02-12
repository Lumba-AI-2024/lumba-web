
import { Button } from 'react-bootstrap';
function ContextMenu({
    perimeter,
    showContext,
    handleShow,
    workspace,
    handleDelete,
}){
   
    const style= {
        width: "85px",
        height: "78px",
        background: "#FFFFFF",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.12)",
        borderRadius: "6px",
        display: "flex",
        flexDirection: "column",
        top: perimeter.y,
        left: perimeter.x,
        position: "absolute",
        display: showContext?  "flex" : "none"
    }

    const styleOpt= {
        // flex:1,
        width: "px",
        height:"70px",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer"
    }

    return (
        <div style={style}>
            <Button style={styleOpt} variant="light" onClick={e => handleShow(workspace)}>Edit</Button>
            <Button style={styleOpt} variant= "light" onClick={e => handleDelete(workspace)}>Delete</Button>
        </div>
    )
}

export default ContextMenu;