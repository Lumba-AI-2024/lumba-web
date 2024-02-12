import { useParams } from "react-router-dom";
import Sidebar from "../../Sidebar";
import BreadCrumb from "../../BreadCrumb";

function Home() {
  
    const { id } = useParams()
    return (
        <div>
            <BreadCrumb id={id} page={"Home"} datasets={""}></BreadCrumb>
            <Sidebar id={id} />
        </div>

    )
}
export default Home;