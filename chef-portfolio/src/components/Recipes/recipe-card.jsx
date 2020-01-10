import React, { useState } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Collapse, Popover, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './recipe-card.scss';

const RecipeCard = (props) => {
    const [modal, setModal] = useState(false);
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