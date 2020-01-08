import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getChef} from '../store/actions';

const ChefDashboard = props => {
    const userId = localStorage.getItem("user_id");

    useEffect(() => {
        props.getChef(userId);
    }, []);

    console.log(props);

    return (
        <div>
            <h2><span>{props.chefInfo.first_name}</span><span>{props.chefInfo.last_name}</span></h2>
            <p>{props.chefInfo.email}</p>
            <p>{props.chefInfo.location}</p>
        </div>

    )
}

const mapStateToProps = state => {
    return {
        chefInfo: state.ChefInfo,
        isFetching: state.isFetching
    };
};

export default connect(mapStateToProps, {getChef})(ChefDashboard)