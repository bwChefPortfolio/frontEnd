import React, { useState } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Collapse, Popover, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './recipe-card.scss';




// const RecipeCard = (props) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const toggle = () => setIsOpen(!isOpen);

//     // const [popoverOpen, setPopoverOpen] = useState(false);
//     // const toggle = () => setPopoverOpen(!popoverOpen);

//     return (
//         <div className='recipe-card'>
            
//                 <Card class="collapse" id="collapseExample">
//                     <CardImg src='https://images.unsplash.com/photo-1551987840-f62d9c74ae78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1176&q=80' top width='20%'/>
//                     <CardBody>
//                         <CardTitle>Borger</CardTitle>
//                         <CardSubtitle>Chef Name</CardSubtitle>
//                         <Button onClick={toggle} style={{ marginBottom: '1rem' }}>View Recipe</Button>
//                         {/* <Button id='Popover1' type='button'>View Recipe</Button> */}
//                     <Collapse isOpen={isOpen}>
//                     {/* <Popover trigger='focus' placement='bottom' isOpen={popoverOpen} target='Popover1' toggle={toggle}> */}
//                         <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, provident velit culpa dicta suscipit rem tenetur distinctio! Totam eveniet eos quisquam dicta, illo exercitationem, autem beatae error neque quo rem.</CardText>
//                     {/* </Popover> */}
//                     </Collapse>
//                     </CardBody>
//                 </Card>
//         </div>
//     )
// }

const RecipeCard = (props) => {
    const [modal, setModal] = useState(false);
    console.log('this is model state',modal);
    const toggle = () => setModal(!modal);

    return (
        <div className='recipe-card'>
            <Card>
                <div className='image-container'>
                <CardImg src={props.image_url} top width='20%' />
                </div>
                <CardBody>
                    <CardTitle>{props.title}</CardTitle>
                    <CardSubtitle></CardSubtitle>
                    <div className='middle'>
                        <Button onClick={toggle}>View Recipe</Button>
                    </div>
                    <Modal isOpen={modal} toggle={toggle}>
                        <ModalHeader>{props.title}<p>{props.meal_type}</p></ModalHeader>
                        <CardImg src={props.image_url} top width='20%'/>
                        <ModalBody>{props.ingredients}</ModalBody>
                        <ModalBody>{props.directions}</ModalBody>
                        <ModalFooter>
                            <Button onClick={toggle}>Close</Button>
                        </ModalFooter>
                    </Modal>
                </CardBody>
            </Card>
        </div>
    )
}


export default RecipeCard;

