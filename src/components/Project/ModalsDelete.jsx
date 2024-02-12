import React, { useEffect, useState } from "react";

import { Button } from 'react-bootstrap';

import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import Form from 'react-bootstrap/Form';


function ModalsDelete(
    {
        handleClose,
        show,
        workspace,
        handleSubmit

    }
) {
    return (


        <Modal show={show}>
        <Modal.Header >
            <Modal.Title>Delete Datasets</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <div>Are You Sure want to delete this dataset?</div>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cancel
            </Button>
            <Button variant="Danger" onClick= {e =>  handleSubmit(workspace)}>
                Delete
            </Button>
        </Modal.Footer>
    </Modal>
    )
}

export default ModalsDelete;