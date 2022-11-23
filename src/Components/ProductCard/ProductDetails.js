import {Button, Image,Tab,Tabs,Card} from 'react-bootstrap';
import React from 'react'
import './ProductDetails.css'
const ProductDetails = () =>{
    
    const about = "190 L Direct cool refrigerator: Economical and requires manual defrosting', 'Energy rating: 3 star, Annual energy consumption: 164 Kilowatt Hours', 'Proudly made in India', 'Warranty: 1 year on product, 10 years on compressor', 'Compressor: The refrigerator comes with Advanced inverter technology, Runs on Home Inverter', 'Shelf type: Toughened Glass Shelves , each shelf has the strength to hold weight up to 120 kg', 'Largest Vegetable Tray: 20 litres of storage space for fruits and vegetables', ', '2.25L Aqua Space: large 2.25 L space in the door to store the extra large bottles of water or cola easily Inside box: 1 Refrigerator, Warranty Card and Manual \u200eSpecial Features: Low starting voltage - 110v, Runs on Home Inverter, Advanced inverter technology, Stabilizer free operation, Anti Bacteria Removable Gasket, Led light and toughened glass shelves, Anti Drip Chiller Technology, Largest vegetable tray']"
    const image = 'https://m.media-amazon.com/images/I/61Q0R5cdxWL._SX522_.jpg'
    const price = 1000
    const productName = 'Noise ColorFit Pulse Grand Smart Watch with 1.69"(4.29cm) HD Display, 60 Sports Modes, 150 Watch Faces, Fast Charge, Spo2, Stress, Sleep, Heart Rate Monitoring & IP68 Waterproof (Jet Black)'
    return(
        <div style={{padding:'15px'}}>
            <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
                <p className='name'>{productName}</p>
                <Image width="250px" src={image}  fluid alt="Product Image"/>
                <div className="buttons">
                    <p className="price">Price: Rs.{price}</p>
                    <Button>Add To Cart</Button>
                </div>
                <Tabs id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="about" title="About ">
                        <p className='about'>{about}</p>
                    </Tab>
                    <Tab eventKey="recommended" title="More Like This">
                        <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'20px',flexWrap:'wrap'}}>
                            <Card style={{ width: '18rem',borderRadius:"15px"}}>
                                <Card.Img style={{width:'100%',height:'30vh',objectFit:'scale-down',padding:'10px'}} variant="top" src={image} />
                                <Card.Body>
                                    <Card.Title>{productName}</Card.Title>
                                    <Card.Text>
                                        Rs.{price}
                                    </Card.Text>
                                <Button >fs</Button>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '18rem',borderRadius:"15px"}}>
                                <Card.Img style={{width:'100%',height:'30vh',objectFit:'scale-down',padding:'10px'}} variant="top" src={image} />
                                <Card.Body>
                                    <Card.Title>{productName}</Card.Title>
                                    <Card.Text>
                                        Rs.{price}
                                    </Card.Text>
                                <Button >fs</Button>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '18rem',borderRadius:"15px"}}>
                                <Card.Img style={{width:'100%',height:'30vh',objectFit:'scale-down',padding:'10px'}} variant="top" src={image} />
                                <Card.Body>
                                    <Card.Title>{productName}</Card.Title>
                                    <Card.Text>
                                        Rs.{price}
                                    </Card.Text>
                                <Button >fs</Button>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '18rem',borderRadius:"15px"}}>
                                <Card.Img style={{width:'100%',height:'30vh',objectFit:'scale-down',padding:'10px'}} variant="top" src={image} />
                                <Card.Body>
                                    <Card.Title>{productName}</Card.Title>
                                    <Card.Text>
                                        Rs.{price}
                                    </Card.Text>
                                <Button >fs</Button>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '18rem',borderRadius:"15px"}}>
                                <Card.Img style={{width:'100%',height:'30vh',objectFit:'scale-down',padding:'10px'}} variant="top" src={image} />
                                <Card.Body>
                                    <Card.Title>{productName}</Card.Title>
                                    <Card.Text>
                                        Rs.{price}
                                    </Card.Text>
                                <Button >fs</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Tab>
                </Tabs>

            </div>
        </div>
    )
}

export default ProductDetails;