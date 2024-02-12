import { Link, Outlet } from "react-router-dom"
import Style from "../Styles/SidebarStyle"
import { useParams} from "react-router-dom";
import {Button} from 'react-bootstrap'

function Sidebar({
   id,
}) {
    
    
    return (
        <div>
            <div style={Style.Bar}>
                <div style={Style.Frame} >
                    <div className="nav-item nav-link active"><Link style={{textDecoration: 'none'}} to={`/project/${id}`} ><Button className = "btn btn-transparent" variant='light'>Home</Button></Link></div>
                    <div style={Style.feature}><Link style={{textDecoration: 'none'}} to={`/project/${id}/datasets` }><Button className = "btn btn-transparent" variant='light'>Datasets</Button></Link></div>
                    <div style={Style.feature}><Link style={{textDecoration: 'none'}} to={`/project/${id}/cleaning` }><Button className = "btn btn-transparent" variant='light'>Cleaning</Button></Link></div>
                    {/* <div style={Style.feature}>Lorem</div>
                    <div style={Style.feature}>Lorem</div>
                    <div style={Style.feature}>Lorem</div>
                    <div style={Style.feature}>Lorem</div> */}
                </div>

            </div>
            <Outlet />
        </div>

    )
}
export default Sidebar