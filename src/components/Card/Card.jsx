import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import space from '../../Styles/NavbarStyle';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAPI, DeleteVersion, addVersion, addProject, updateProject, projectSelectors, deleteProject } from './CardReducers'
import { useDispatch } from "react-redux";
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Modals from '../Modals'
import ContextMenu from "../ContextMenu";
import img from "./card-img-sm.png";
import divStyle from '../../Styles/NavbarStyle';
function Cards() {

    
    const [show, setShow] = useState(false);
    const [workspace, setWorkspace] = useState({
        keranjangDetail: {},
        name: "",
        username: "",
        description: "",
    });

    const [showContext, setShowContext] = useState(false);
    const [contextPerimeter, setContextPerimeter] = useState({
        x: "",
        y: ""
    })
    const [Edit, setEdit] = useState(false);
    const handleDelete = (workspaces) => {
        dispatch(deleteProject(workspaces.name))

    }
    const handleEdit = (workspaces) => {
        setEdit(true)
        handleShow(workspaces)
    }
    const handleClose = () => {
        setShow(false);
        setEdit(false);
    }
    const handleShow = (workspaces) => {
        // console.log(workspace)

        setWorkspace({
            keranjangDetail: workspaces.keranjangDetail,
            name: workspaces.name,
            username: workspaces.username,
            description: workspaces.description
        })

        setShow(true);

    }
    useEffect(() => {
        const handleClick = () => setShowContext(false);
        window.addEventListener('click', handleClick);
        return () => {
            window.removeEventListener('click', handleClick)
        }

    }, [])



    const changeHandler = (event) => {
        setWorkspace((prev) => {
            return { ...prev, [event.target.name]: event.target.value }
        })
    };


    const handleSubmit = (event) => {

        if (Edit) {
            dispatch(updateProject(workspace))
        } else {
            dispatch(addProject(workspace))
            console.log("add")
        }
        handleClose()

    };

    // async function fetchingAPI(){
    //     dispatch(fetchAPI())
    // }

    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(fetchAPI())
    }, [])
    const data = useSelector(projectSelectors.selectAll)
    
    

    return (
        <div>
             <div style={{ marginBottom: "25px" }} className="row">
                <Row>
                    <Col md={{ span: 3, offset: 3 }}><div className='col-8 text-center' style={{ 
                        marginLeft: "255px",
                        fontFamily: 'Inter',              
                        fontStyle: "normal", 
                        fontWeight: "600",
                        fontSize: "16px" }}>Workspace</div></Col>
                    <Col md={{ span: 3, offset: 3 }}><Button variant='light' style={{ marginLeft: "200px", fontFamily: 'Inter',
                                                    fontStyle: "normal"}} onClick={handleShow}>+ Create</Button>`</Col>
                </Row>

            </div>
            <div className="container ">
                <Row xs="5" className="mx-auto my-auto">
                    {
                        data.map((data, index) => {
                            return (
                                <Col key={index} >
                                    <Card style={{ width: '14rem', marginTop: "15px", height: "18rem" }} onContextMenu={(e) => {
                                        e.preventDefault()
                                        setShowContext(true)
                                        setWorkspace({
                                            keranjangDetail: data,
                                            name: data.name,
                                            username: data.username,
                                            description: data.description
                                        })
                                        setContextPerimeter({
                                            x: e.pageX,
                                            y: e.pageY
                                        })
                                    }}>
                                        <Card.Img variant="top" src={img} />
                                        <Card.Body >
                                            <div >
                                                <Card.Title style={{
                                                    position: "absolute",
                                                    top: "25%", left: "5%",
                                                    color: "white",
                                                    fontSize: "20px",
                                                    fontFamily: 'Inter',
                                                    fontStyle: "normal"
                                                }}>{data.name}</Card.Title>
                                                <Card.Text style={{ fontSize: "12px", fontFamily: 'Inter',
                                                    fontStyle: "normal" }}>
                                                    {data.description}
                                                </Card.Text>
                                            </div>
                                            <br />

                                        </Card.Body>
                                        <Link to={`/project/${data.name}`}>
                                            {/* <Button style={divStyle.searchButton} className=  "btn btn-light border border-white">
                                                View Project<Button/> 
                                             */}
                                            <Button style={divStyle.viewButton} className="btn btn-light border border-white">
                                                View Projects
                                            </Button>
                                        </Link>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                    <ContextMenu perimeter={contextPerimeter} showContext={showContext} handleShow={handleEdit} workspace={workspace} handleDelete={handleDelete} />


                </Row>
            </div>


            <Modals handleClose={handleClose}
                show={show} workspace={workspace}
                changeHandler=
                {changeHandler}

                handleSubmit={handleSubmit} />
        </div>


    )
}
export default Cards;