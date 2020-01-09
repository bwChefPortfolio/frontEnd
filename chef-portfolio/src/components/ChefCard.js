import React, { useState } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Collapse, Popover, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axiosWithAuth from '../utils/axiosWithAuth';
import axios from "axios";

import '../components/Recipes/recipe-card.scss';


const ChefCard = props => {
    console.log(props)
    let recipeid = props.id
    console.log("this is the recipe id",recipeid)
    const username = localStorage.getItem('username')
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);



    
    function remover() {
        axiosWithAuth()
          .delete(
            `chefs/${username}/${recipeid}`
          )
          .then(res => {
            console.log(res.data);
          })
          .catch(err => {
            console.log(err);
          });
      }
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
                    <button
                     onClick={() => {
              remover();
            }}
            >Delete</button>
                </CardBody>
            </Card>

        </div>
    )
}


export default ChefCard;