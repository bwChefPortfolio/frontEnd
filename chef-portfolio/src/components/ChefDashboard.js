import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axiosWithAuth from '../utils/axiosWithAuth';


const ChefDashboard = props => {
    console.log(props)
    const userId = localStorage.getItem("id");


    useEffect(() => {
        axiosWithAuth()
            .get(`https://chef-portfolio-backend.herokuapp.com/chefs/chefa`)
            .then(response => {
                console.log(response)
                
            })
            .catch(error => {
                console.log("The data was not returned", error)
            })
    }, [])

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



    