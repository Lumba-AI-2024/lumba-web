import Sidebar from "../../Sidebar";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState, Component } from "react";
import axios from 'axios';
import deleteImg from "../Delete.png";
import viewImg from "../View.png"
import downloadImg from "../Download.png"
import BreadCrumb from "../../BreadCrumb";
import Home from "./Home";
import fetchingAPI from "./DummyDatasets";
import { Button } from 'react-bootstrap';

import { fetchAPI, DeleteVersion, addVersion, addProject, updateProject, projectSelectors, deleteProject } from '../../Card/CardReducers';
import ModalsUpload from "../ModalsUpload";
import { upload } from "@testing-library/user-event/dist/upload";
import ModalsEdit from "../ModalsEdit";
import ModalsDelete from "../ModalsDelete";
import { Bar } from "react-chartjs-2";
function Datasets() {

    const { id } = useParams()
    // const [file, setFile] = useState();

    // const fileReader = new FileReader();
    // const [show, setShow] = useState(false);
    // const [showEdit, setShowEdit] = useState(false)
    // const [data, setData] = useState()
    const [dataBar, setDataBar] = useState([])
    const [dataDescribe, setDataDescribe] = useState([])
    // const [showDelete, setShowDelete] = useState(false)
    // const [dataprof, setDataProf] = useState({
    //     name: "",
    //     oldFileName: ""
    // })
    // useEffect(() => {
    //     // fetchingAPI()
    //     fetchProfiling();
    // }, [])

    useEffect(() => {
        fetchProfiling()
    }, [])
    console.log(dataDescribe)
    // const fetchingAPI = async() => {
    //     await axios.get("http://127.0.0.1:8000/file/list/", {
    //     params:{
    //         workspace: id,
    //         username: "Ryan Rick L"
    //     }
    // }).then((res) => setData(res.data))
    // }
    
    const fetchProfiling = async() => {
        console.log("MASUKKKK")
        await axios.get("http://127.0.0.1:8000/profiling/barchart/", {
            params: {
                workspace: id,
                username: "Ryan Rick L",
                filename: "covid_19_data.csv"
            }
        }).then((res) => setDataBar(res.data))

        await axios.get("http://127.0.0.1:8000/profiling/describe/", {
            params: {
                workspace: id,
                username: "Ryan Rick L",
                filename: "covid_19_data.csv"
            }
        }).then((res) => setDataDescribe(res.data));
    }

    

   
    // const handleShow = (workspaces) => {
    //     setShow(true);
    // }
    // const handleClose = () => {
    //     setShow(false);
    //     setShowEdit(false)
    //     setDataProf({
    //         name: "",
    //         oldFileName: ""
    //     })
    //     setShowDelete(false)

    // }
    // const handleOnChange = (e) => {
    //     setFile(e.target.files[0]);
    // };

    // const changeHandler = (event) => {
    //     setDataProf((prev) => {
    //         return { ...prev, [event.target.name]: event.target.value }
    //     })
    // };



    // const putAPI = async() => {
    //     let formData = new FormData()
    //     formData.append("newfilename",dataprof.name )
    //     await axios.put("http://127.0.0.1:8000/file/" + "?oldfilename=" + dataprof.oldFileName.file + 
    //     "&username=" + dataprof.oldFileName.username + "&workspace="+ dataprof.oldFileName.workspace, formData).then((res) => {
    //         console.log(res.data)
    //     })
    // }
    // const handleSubmit = (event) => {

    //     putAPI()
    //     handleClose()

    // };
    
    // const handleOnSubmit = (e) => {
    //     // e.preventDefault();

    //     if (file) {

    //         let formData = new FormData()
    //         formData.append("file", file)
    //         console.log(file.name)
    //         formData.append("username", "Ryan Rick L")
    //         formData.append("workspace", id)
    //         axios.post("http://127.0.0.1:8000/file/", formData).then((response) => {
    //             console.log(response.data);
    //         }).catch((error) => {
    //             console.log(error.response);
    //         });
    //         setShow(false)
    //         setFile({})
    //         // uploadFile(formData);

    //         // axios.post("http://34.170.78.204:8000/file/", formData).then((response) => {

    //         // fileReader.readAsText(file);
    //     }
    // };
    // const [detail, setDetail] = useState(false)
    // const [datasetDetail, setDataDetail] = useState()

    // const doShow = (fileName) => {
        
    //     setShowEdit(true);
    //     setDataProf({
    //         name: fileName.file,
    //         oldFileName: fileName
    //     })
    // }
    // const doDelete = (fileName) => {
    //     setShowDelete(true);
    //     setDataProf({
    //         oldFileName: fileName
    //     })
    // }


    // const deleteAPI = async() => {
    //     let formData = new FormData()
    //         formData.append("filename", dataprof.oldFileName.file)
    //         formData.append("workspace", dataprof.oldFileName.username)
    //         formData.append("username", dataprof.oldFileName.workspace)
    //     console.log(dataprof.oldFileName)
    //     await axios.delete("http://127.0.0.1:8000/file/", {
    //         headers: {},
    //         data: {formData}
    //     }).then((res) => res.response)
    // }

    // const deleting =(event) => {
    //     deleteAPI()
    //     handleClose()
    // }
    
    // const seeDetail = (data) => {
    //     setDetail(true);
    //     setDataDetail(data)
    //     console.log(data)
    // }
    return (
        <>
            <div>
                {/*  {Object.keys(dataBar).forEach(function(key){
                    return (
                        <Bar data={{
                            labels: dataBar[key].labels,
                            datasets: dataBar[key].datasets
                        }}>

                        </Bar>
                    )
                })} */ }
                {
                    Object.keys(dataDescribe).forEach(function(key){
                        return (
                            <div>
                                <div>{dataDescribe[key].count}</div>
                                <div>{dataDescribe[key].mean}</div>
                                <div>{dataDescribe[key].std}</div>
                                <div>{dataDescribe[key].min}</div>
                                <div>{dataDescribe[key]["25%"]}</div>
                                <div>{dataDescribe[key]["50%"]}</div>
                                <div>{dataDescribe[key]["75%"]}</div>
                                <div>{dataDescribe[key].max}</div>
                            </div>
                            
                        )
                    })
                }
            </div>
        </>
    )

    // if (!detail) {
    //     return (
    //         <div>
    //             <BreadCrumb id={id} page={"Datasets"} datasets={""}></BreadCrumb>
    //             <Sidebar id={id} />
    //             {/* <form>
    //                 <input
    //                     type={"file"}
    //                     id={"csvFileInput"}
    //                     accept={".csv"}
    //                     onChange={handleOnChange}
    //                 />

    //                 <button
    //                     onClick={(e) => {
    //                         handleOnSubmit(e);
    //                     }}
    //                 >
    //                     IMPORT CSV
    //                 </button>
    //             </form> */}
    //             <Button variant='light' style={{
    //                 marginLeft: "200px", fontFamily: 'Inter',
    //                 fontStyle: "normal"
    //             }} onClick={handleShow}>+ Create</Button>
    //             <div>
    //                 <table className="" style={{
    //                     position: "absolute",
    //                     width: "1200px",
    //                     height: "15px",
    //                     left: "230px",
    //                     top: "147px"
    //                 }}>
    //                     <thead className="align-left">
    //                         <tr>
    //                             <th scope="col">File Name</th>
    //                             <th scope="col">Size</th>
    //                             <th scope="col">Created On</th>
    //                             <th scope="col">Modified On</th>
    //                             <th scope="col">Actions</th>
    //                         </tr>

    //                     </thead>
    //                     <tbody style={{
    //                         marginTop: "150px"
    //                     }}>
    //                         {data &&
    //                             data.map((data, index) => {
    //                                 return (

    //                                     <tr key={index} scope="row" style={{
    //                                         background: "#FFFFFF",
    //                                         boxShadow: "0px 0px 10px rgba(217, 217, 217, 0.5)",
    //                                         borderRadius: "6px",

    //                                     }} className="mt-5">
    //                                         <td>{data.file}</td>
    //                                         <td>{data.Size}</td>
    //                                         <td>{data.createdOn}</td>
    //                                         <td>{data.modifiedOn}</td>
    //                                         <td>
    //                                             <div className="d-flex justify-content-between">
    //                                                 {/* <Link to={`/project/${id}/datasets/${data.file}`}><img src={viewImg}></img></Link> */}
    //                                                 <a onClick={e => seeDetail(data)} ><img src={viewImg}></img></a>
    //                                                 <a><img src={downloadImg}   onClick={(e) => {
    //                                                     e.preventDefault()
    //                                                     doShow(data)
    //                                                 }}></img></a>
    //                                                 <a><img src={deleteImg} onClick={(e) => {
    //                                                     e.preventDefault()
    //                                                     doDelete(data)
    //                                                 }}></img></a>
    //                                             </div>

    //                                         </td>   
    //                                     </tr>






    //                                 )
    //                             })
    //                         }
    //                     </tbody>
    //                 </table>

    //             </div>
    //             <ModalsUpload handleClose={handleClose} show={show}
    //                 changeHandler={handleOnChange}
    //                 handleSubmit={handleOnSubmit}></ModalsUpload>
    //             <ModalsEdit  show={showEdit} handleClose={handleClose} 
    //             workspace={dataprof} changeHandler={changeHandler} handleSubmit ={handleSubmit}/>
    //             <ModalsDelete show={showDelete} handleClose={handleClose} workspace={dataprof} handleSubmit={deleting}/>

    //         </div>

    //     )
    // } else {
    //     return (
    //         <div>
    //             <Sidebar id={id} />
    //             <br />
    //             <br />
    //             <h1>{datasetDetail.FileName}</h1>
    //             <h2>About Dataset</h2>
    //             <br />
    //             <h3>Description</h3>
    //             <h4>{data.Description}</h4>
    //             <br />
    //             <div>
    //                 <div>
    //                     <h3>Size</h3>
    //                     <h3>{datasetDetail.Size}</h3>
    //                 </div>
    //                 <div>
    //                     <h3>Date Created</h3>
    //                     <h3>{datasetDetail.createdOn}</h3>
    //                 </div>
    //                 <div>
    //                     <h3>Date Modified</h3>
    //                     <h3>{datasetDetail.modifiedOn}</h3>
    //                 </div>
    //             </div>
    //             <div>
    //                 <h3>Preview</h3>
    //                 <h3>Profile</h3>
    //             </div>
    //             <div>
    //                 <h3>number of columns: 15</h3>
    //                 <h3>number of rows: 15</h3>
    //             </div>
    //         </div>

    //     )
    // }

}

export default Datasets;