import React, { useEffect, useState } from "react";

import { Button } from 'react-bootstrap';

import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import Form from 'react-bootstrap/Form';


function ModalsUpload(
    {
        handleClose,
        show,
        workspace,
        changeHandler,

        handleSubmit

    }
) {
    return (


        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Upload File Datasets</Modal.Title>
            </Modal.Header>
            <Form>
                <Modal.Body>

                    <Form.Group className="mb-3" controlId="formWorkspace">
                        {/* <input type={"file"}
                        accept={".csv"}
                        
                        // onChange={(e) => changeHandler(e)}   

                        >
                        </input> */}
                        <Form.Control type={"file"} accept={".csv"}
                            placeholder="Drag Your File here" name="upload"
                            onChange={(e) => changeHandler(e)}/>
                    </Form.Group>
                </Modal.Body>
                
            </Form>
            <Modal.Footer>
                   
                    <Button variant="primary" onClick={handleSubmit}>
                        Browse
                    </Button>
                    <Form.Control disabled type="text" placeholder="Filename.csv" name="fileName" value={workspace} style={{
                        width: "378px"
                    }}/>
                    
                    
                </Modal.Footer>
        </Modal >
    )
}

export default ModalsUpload;