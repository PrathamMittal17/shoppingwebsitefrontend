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
                    <span className="cat-select" onClick={()=>handleOnClick("audio")}>Audio Devices</span>
                    <span className="cat-select" onClick={()=>handleOnClick("computeraccessories")}>Computer Accessories</span>
                    <span className="cat-select" onClick={()=>handleOnClick("furniture")}>Furniture</span>
                    <span className="cat-select" onClick={()=>handleOnClick("mobilephones")}>Mobile Phones</span>
                    <span className="cat-select" onClick={()=>handleOnClick("stationery")}>Stationery</span>
                    <OverlayTrigger
                        rootClose
                        trigger="click"
                        key={'bottom'}
                        placement={'bottom'}
                        overlay={
                            <Popover className="mobile-categories">
                                <Popover.Header as="h3">{"All Categories"}</Popover.Header>
                                <Popover.Body className="list-item" onClick={()=>handleOnClick("audio")}><h6>Audio Devices</h6></Popover.Body>
                                <Popover.Body className="list-item" onClick={()=>handleOnClick("computeraccessories")}><h6>Computer Accessories</h6></Popover.Body>
                                <Popover.Body className="list-item" onClick={()=>handleOnClick("furniture")}><h6>Furniture</h6></Popover.Body>
                                <Popover.Body className="list-item" onClick={()=>handleOnClick("mobilephones")}><h6>Mobile Phones</h6></Popover.Body>
                                <Popover.Body className="list-item" onClick={()=>handleOnClick("smartwearables")}><h6>Smart Wearables</h6></Popover.Body>
                                <Popover.Body className="list-item" onClick={()=>handleOnClick("stationery")}><h6>Stationery</h6></Popover.Body>
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
                                <Popover.Body className="list-item" onClick={()=>handleOnClick("audio")}><h6>Audio Devices</h6></Popover.Body>
                                <Popover.Body className="list-item" onClick={()=>handleOnClick("computeraccessories")}><h6>Computer Accessories</h6></Popover.Body>
                                <Popover.Body className="list-item" onClick={()=>handleOnClick("furniture")}><h6>Furniture</h6></Popover.Body>
                                <Popover.Body className="list-item" onClick={()=>handleOnClick("mobilephones")}><h6>Mobile Phones</h6></Popover.Body>
                                <Popover.Body className="list-item" onClick={()=>handleOnClick("smartwearables")}><h6>Smart Wearables</h6></Popover.Body>
                                <Popover.Body className="list-item" onClick={()=>handleOnClick("stationery")}><h6>Stationery</h6></Popover.Body>
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