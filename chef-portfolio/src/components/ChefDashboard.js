import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axiosWithAuth from '../utils/axiosWithAuth';
import {getChefRecipes} from '../store/actions';


const ChefDashboard = props => {
    console.log(props)

    const [recipes, setRecipes] = useState();
        const username = localStorage.getItem("username");


    // useEffect(() => {
    //     axiosWithAuth()
    //         .get(`https://chef-portfolio-backend.herokuapp.com/chefs/chefa`)
    //         .then(response => {
    //             console.log(response)
    //             // .then(res => this.setState({ movie: res.data }))
    //             this.setState({recipe: response.data})
                
    //         })
    //         .catch(error => {
    //             console.log("The data was not returned", error)
    //         })
    // }, [])

    useEffect(() => {
        getChefRecipes(username)
        setRecipes(props.recipes)
    }, [])
    console.log('logging props after chefdashboard useEffect', props);


    return (
        <div>
        <h1>test</h1>
    
    </div>
    )
}

const mapStateToProps = state => {
    return {
        recipes: state.recipes,
        isFetching: state.isFetching
    };
};

export default connect(mapStateToProps)(ChefDashboard)



    