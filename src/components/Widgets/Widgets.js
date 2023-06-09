import React,{useState} from "react";
import "./Widgets.css";
import {Col, Modal, ModalBody, Row} from "reactstrap";
import { ModalHeader } from "reactstrap";

function Widgets(){
    const [modal,setmodal]= useState(false)
    return (
        <div>
            <Modal
            size='lg'
            isOpen={modal}
            toggle={()=>setmodal(!modal)}
            >
                <ModalHeader
                toggle={()=> setmodal(!modal)}>
                    PopUp
                </ModalHeader>
                <ModalBody>
                    <form>
                        <Row>
                            <Col lg={12}>
                                <div>
                                    <label htmlFor='name'>
                                        Name
                                    </label>
                                        <input
                                        type="text"
                                        className='form-control'
                                        placeholder="Enter name"
                                        />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div>
                                    <label htmlFor='name'>
                                        Name
                                    </label>
                                        <input
                                        type="text"
                                        className='form-control'
                                        placeholder="Enter name"
                                        />
                                </div>
                            </Col> <Col lg={12}>
                                <div>
                                    <label htmlFor='name'>
                                        Name
                                    </label>
                                        <input
                                        type="text"
                                        className='form-control'
                                        placeholder="Enter name"
                                        />
                                </div>
                            </Col>
                        </Row>
                    </form>
                    <button className= 'btn mt-3' style={{backgroundColor:"#0b3629",color:"white"}} >
            Submit
        </button>
                </ModalBody>
            </Modal>
        <button className= 'btn mt-3' style={{backgroundColor:"#0b3629",color:"white"}} onClick={()=>setmodal(true)}>
            Add Card
        </button>
    </div>
    );
}

export default Widgets;