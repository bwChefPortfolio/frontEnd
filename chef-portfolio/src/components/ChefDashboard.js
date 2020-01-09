import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axiosWithAuth from '../utils/axiosWithAuth';


const ChefDashboard = props => {
    console.log(props)
    const userId = localStorage.getItem("id");


    useEffect(() => {
        axiosWithAuth()
            .get(`https://chef-portfolio-backend.herokuapp.com/chefs/${props.username}`)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log("The data was not returned", error)
            })
    }, [])

    console.log(props);

    return (
        // <div>
        //     <h2><span>{props.chefs.first_name}</span><span>{props.chefs.last_name}</span></h2>
        //     <p>{props.chefs.email}</p>
        //     <p>{props.chefs.location}</p>
        // </div>
        <h1>test</h1>

    )
}

const mapStateToProps = state => {
    return {
        recipes: state.recipes,
        isFetching: state.isFetching
    };
};

export default connect(mapStateToProps)(ChefDashboard)

// const ChefDashboard = () => {
//     return (
//         <div>
//             <h1>Chef Dashboard</h1>
//         </div>
//     )
// }

// export default ChefDashboard;