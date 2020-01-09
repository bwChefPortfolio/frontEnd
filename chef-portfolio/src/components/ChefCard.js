import React, { useState } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Collapse, Popover, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../components/Recipes/recipe-card.scss';

const ChefCard = (props) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div className='recipe-card'>

            <Card>
                <CardImg src={props.image_url} top width='20%' />
                <CardBody>
                    <CardTitle>{props.title}</CardTitle>
                    <CardSubtitle>{props.chef_id}</CardSubtitle>
                    <Button onClick={toggle}>View Recipe</Button>
                    <Modal isOpen={modal} toggle={toggle}>
                        <ModalHeader>{props.title}<p>Chef Name</p></ModalHeader>
                        <CardImg src={props.image_url} top width='20%'/>
                        <ModalBody>{props.ingredients}</ModalBody>
                        <ModalBody>{props.directions}</ModalBody>
                        <ModalFooter>
                            <Button onClick={toggle}>Close</Button>
                        </ModalFooter>
                    </Modal>
                    <button>Edit</button>
                    <button>Delete</button>
                </CardBody>
            </Card>

        </div>
    )
}


export default ChefCard;