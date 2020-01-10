import React, { useState } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Collapse, Popover, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axiosWithAuth from '../utils/axiosWithAuth';
import axios from "axios";
import {Link} from 'react-router-dom';
import '../components/Recipes/recipe-card.scss';


const ChefCard = props => {
    console.log('this is props recipeId',props)
    let recipeid = props.id

    // const [editing, setEditing] = useState(false);
    // const [recipe, setRecipe] = useState({});


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




    //   const RecipeList = (props) => {
    //     const { recipes, updateRecipes } = props
    //     console.log(recipes);
    //     const [editing, setEditing] = useState(false);
    //     const [recipeToEdit, setRecipeToEdit] = useState(initialRecipe);
    //   ​
    //   ​
    //     const editRecipe = recipe => {
    //       setEditing(true);
    //       setRecipeToEdit(recipe);
    //     };
    //   ​
    //     const saveEdit = e => {
    //       e.preventDefault();
    //       axiosWithAuth().put(`/chefs/${recipeToEdit.id}`, recipeToEdit)
    //       .then(res => {
    //         axiosWithAuth().get('/chefs')
    //           .then( res => updateRecipes(res.data))
    //         setRecipeToEdit(initialRecipe)
    //         setEditing(false)
    //       })
          
    //       .catch(err => console.log(err))
    //     };

    //   const recipeEdit = props => {
    //     e.preventDefault();
    //     console.log("testing editor console log");
    //     axiosWithAuth()
    //       .put(
    //         `chefs/${username}/${recipeid}`,
    //         recipe
    //       )
    //       .then(res => {
    //         console.log(res.data);
    //       })
    //       .catch(err => {
    //         console.log(err);
    //       });
    //   };

    //     const handleChanges = e => {
    //         setRecipe({...recipe, [e.target.recipe]: e.target.value})
    //     }
    // const [editing, setEditing] = useState(false);
    // const [recipe, setRecipe] = useState({});
    // const editer = e => {
    //   e.preventDefault();
    //   console.log("hi");
    //   setEditing(false);
    //   axiosWithAuth()
    //     .put(`/chefs/${recipeid}`,
    //       recipe
    //     )
    //     .then(res => {
    //       console.log(res.data);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // };
  
    return (
        <div className='recipe-card-dashboard'>

            <Card>
            <div className='image-container-dashboard'>
              <CardImg src={props.image_url} top width='20%' />
            </div>
                <CardBody>
                    <CardTitle>{props.title}</CardTitle>
                    <CardSubtitle></CardSubtitle>
                    <Link to={`/edit-recipe/${recipeid}`}>
                    <button
                    >Edit</button>
                    </Link>
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