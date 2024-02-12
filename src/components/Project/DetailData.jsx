import BreadCrumb from "../BreadCrumb";
import { useParams, Link } from "react-router-dom";
import Sidebar from "../Sidebar";

function DetailData() {
    const { id, file } = useParams()
    return (
        <div>
            <BreadCrumb id={id} page={"Datasets"} datasets={file}></BreadCrumb>
            <Sidebar id={id} />
            <div>
                <br />
                <br />
                <h1>{datasetDetail.FileName}</h1>
                <h2>About Dataset</h2>
                <br />
                <h3>Description</h3>
                <h4>{data.Description}</h4>
                <br />
                <div>
                    <div>
                        <h3>Size</h3>
                        <h3>{datasetDetail.Size}</h3>
                    </div>
                    <div>
                        <h3>Date Created</h3>
                        <h3>{datasetDetail.createdOn}</h3>
                    </div>
                    <div>
                        <h3>Date Modified</h3>
                        <h3>{datasetDetail.modifiedOn}</h3>
                    </div>
                </div>
                <div>
                    <h3>Preview</h3>
                    <h3>Profile</h3>
                </div>
                <div>
                    <h3>number of columns: 15</h3>
                    <h3>number of rows: 15</h3>
                </div>
            </div>

        </div>
    )
}
export default DetailData;