import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import './recipe-card.scss';



const RecipeCard = () => {
    return (
        <div className='recipe-card'>
            <Card class="collapse" id="collapseExample">
                <CardImg src='https://images.unsplash.com/photo-1551987840-f62d9c74ae78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1176&q=80' top width='20%'/>
                <CardBody>
                    <CardTitle>Recipe Title</CardTitle>
                    <Button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample"
                    aria-expanded="false" aria-controls="collapseExample">
                        Expand
                    </Button>
                    <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, provident velit culpa dicta suscipit rem tenetur distinctio! Totam eveniet eos quisquam dicta, illo exercitationem, autem beatae error neque quo rem.</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default RecipeCard;

