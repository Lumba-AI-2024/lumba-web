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
    return(

    
    <Modal show={show}>
        <Modal.Header closeButton>
            <Modal.Title>Create Workspace</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formWorkspace">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Workspace Name" name="name" value={workspace.name || ""}
                     onChange={ (e) => changeHandler(e)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" as= "textarea" placeholder="Description" name="description" rows="3" value={workspace.description || ""} 
                    onChange={ (e) => changeHandler(e)} />
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick= {e =>  handleSubmit(workspace)}>
                Save Changes
            </Button>
        </Modal.Footer>
    </Modal>
    )
}

export default Modals;