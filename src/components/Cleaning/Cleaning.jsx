

import Sidebar from '../Sidebar';
import BreadCrumb from '../BreadCrumb';
import { useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';
import { useEffect } from 'react';

function Cleaning() {
    const [check, setCheck] = useState(false);
    const [data, setData] = useState([]);
    const [selectData, setSelectData] = useState()
    const { id } = useParams()
    const [method, setMethod] = useState({
        missing: false,
        columns_missing: "",
        duplication: false,
        columns_duplication: "",
        outlier: false,
    })

    const [checkData, setCheckData] = useState({
        missingData: "",
        duplicateData: "",
        outlierData: ""
    })

    useEffect(() => {
        fetchingAPI()
    }, [])

    const handleSetData = (data) => {
        setCheck(false)
        setSelectData(data)
        setCheckData({
            missingData: "",
            duplicateData: "",
            outlierData: ""
        })
    }

    const fetchingAPI = async () => {
        await axios.get("http://127.0.0.1:8000/file/list/", {
            params: {
                workspace: id,
                username: "Ryan Rick L"
            }
        }).then((res) => setData(res.data))



    }
    const fetchChecking = async () => {

        await axios.get("http://127.0.0.1:8000/preprocess/null/", {
            params: {
                username: "Ryan Rick L",
                workspace: id,
                filename: selectData.file
            }
        }).then((res) => setCheckData((prev) => {
            return { ...prev, ["missingData"]: res.data }
        }))

        await axios.get("http://127.0.0.1:8000/preprocess/duplication/", {
            params: {
                username: "Ryan Rick L",
                workspace: id,
                filename: selectData.file
            }
        }).then((res) => setCheckData((prev) => {
            return { ...prev, ["duplicateData"]: res.data }
        }))
        await axios.get("http://127.0.0.1:8000/preprocess/outlier/", {
            params: {
                username: "Ryan Rick L",
                workspace: id,
                filename: selectData.file
            }
        }).then((res) => setCheckData((prev) => {
            return { ...prev, ["outlierData"]: res.data }
        }))
    }

    const isChecking = async () => {
        setCheck(true)
        fetchChecking()

    }

    const handleApply = () => {

    }
    console.log(method)
    if (!check) {
        return (
            <>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {
                            data.map((data, index) => {
                                return (
                                    <Dropdown.Item onClick={() => setSelectData(data)} key={index}>{data.file}</Dropdown.Item>
                                )
                            })
                        }
                        {/* 
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                    </Dropdown.Menu>
                </Dropdown>
                <Sidebar id={id} />
                <BreadCrumb id={id} page={"Cleaning"} datasets={""} />
                <Button variant='primary' onClick={isChecking} > Check</Button>
                <div style={{
                    position: "absolute",
                    top: "500px",
                    left: "200px"
                }}>
                    <Form>
                        <Form.Check
                            disabled
                            type="switch"
                            id="custom-switch"
                            label="Check this switch"
                        />
                        <Form.Check
                            disabled
                            type="switch"
                            label="disabled switch"
                            id="disabled-custom-switch"
                        />
                        <Form.Check
                            disabled
                            type="switch"
                            id="custom-switch"
                            label="Check this switch"
                        />
                        <Form.Check
                            disabled
                            type="switch"
                            label="disabled switch"
                            id="disabled-custom-switch"
                        />

                    </Form>
                    <Button onClick={handleApply} disabled  >Apply</Button>
                </div>

            </>
        )
    } else {
        return (
            <>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {
                            data.map((data, index) => {
                                return (
                                    <Dropdown.Item onClick={() => handleSetData(data)} key={index}>{data.file}</Dropdown.Item>
                                )
                            })
                        }
                        {/* 
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                    </Dropdown.Menu>
                </Dropdown>
                <Sidebar id={id} />
                <BreadCrumb id={id} page={"Cleaning"} datasets={""} />
                <div>
                    {
                        Object.values(checkData.missingData).reduce((a, b) => a + b, 0)
                    }
                </div>
                <div>
                    {
                        checkData.duplicateData
                    }
                </div>
                <div>
                    {
                        Object.values(checkData.outlierData).reduce((a, b) => a + b, 0)
                    }
                </div>
                <div style={{
                    position: "absolute",
                    top: "500px",
                    left: "200px"
                }}>
                    <Form>
                        <Form.Check
                            onClick={() => setMethod((prev) => {
                                return{...prev, ["missing"]: !method.missing}
                            })}
                            type="switch"
                            id="custom-switch"
                            label="missing"
                        />
                        {method.missing && 
                            <div>
                                
                            </div>
                        }
                        <Form.Check
                            onClick={() => setMethod((prev) => {
                                return{...prev, ["duplication"]: !method.duplication}
                            })}
                            type="switch"
                            label="disabled switch"
                            id="duplication"
                        />
                        <Form.Check
                            
                            onClick={() => setMethod((prev) => {
                                return{...prev, ["outlier"]: !method.outlier}
                            })}
                            type="switch"
                            id="custom-switch"
                            label="Outlier"
                        />
                        <Form.Check
                            
                            type="switch"
                            label="disabled switch"
                            id="disabled-custom-switch"
                        />

                    </Form>
                    <Button onClick={handleApply}>Apply</Button>
                </div>
            </>


        )
    }

}
export default Cleaning;