import React,{useCallback} from "react";
import {Container, OverlayTrigger,Popover } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import'./CategoryBar.css'


const CategoryBar = () => {
    const history = useHistory();

    const handleOnClick = useCallback((category) => {
        history.push(`/category/${category}`)
    }, [history]);

  

   

    return(
        <div style={{backgroundColor:"#232F3E",color:'white'}}>
            <Container>
                <div className="cat-list" >
                    <span className="cat-select" onClick={()=>handleOnClick("audio-devices")}>Audio Devices</span>
                    <span className="cat-select" onClick={()=>handleOnClick("mobile-phones")}>Mobile Phones</span>
                    <span className="cat-select" onClick={()=>handleOnClick("smart-wearables")}>Smart Wearables</span>
                    <OverlayTrigger
                        rootClose
                        trigger="click"
                        key={'bottom'}
                        placement={'bottom'}
                        overlay={
                            <Popover className="mobile-categories">
                                <Popover.Header as="h3">{"All Categories"}</Popover.Header>
                                <Popover.Body className="list-item" onClick={()=>handleOnClick("audio-devices")}><h6>Audio Devices</h6></Popover.Body>
                                <Popover.Body className="list-item" onClick={()=>handleOnClick("computer-accessories")}><h6>Computer Accessories</h6></Popover.Body>
                                <Popover.Body className="list-item" onClick={()=>handleOnClick("mobile-phones")}><h6>Mobile Phones</h6></Popover.Body>
                                <Popover.Body className="list-item" onClick={()=>handleOnClick("smart-wearables")}><h6>Smart Wearables</h6></Popover.Body>
                            </Popover>
                        }
                        >
                    <span className="cat-select mobile-categories "><b>Explore All Categories</b></span>
                    </OverlayTrigger>

                    <OverlayTrigger
                        rootClose
                        trigger="click"
                        key={'right'}
                        placement={'right'}
                        overlay={
                            <Popover className="big-cats">
                                <Popover.Header as="h3">{"All Categories"}</Popover.Header>
                                <Popover.Body className="list-item" onClick={()=>handleOnClick("audio-devices")}><h6>Audio Devices</h6></Popover.Body>
                                <Popover.Body className="list-item" onClick={()=>handleOnClick("computer-accessories")}><h6>Computer Accessories</h6></Popover.Body>
                                <Popover.Body className="list-item" onClick={()=>handleOnClick("mobile-phones")}><h6>Mobile Phones</h6></Popover.Body>
                                <Popover.Body className="list-item" onClick={()=>handleOnClick("smart-wearables")}><h6>Smart Wearables</h6></Popover.Body>
                            </Popover>
                        }
                        >
                    <span className="cat-select big-cats"><b>Explore All Categories</b></span>
                    </OverlayTrigger>
                </div>
            </Container>
        </div>
    );
}

export default CategoryBar;