import React, {useEffect} from 'react';
// import {Link} from 'react-router-dom';
// import {connect} from 'react-redux';
// import {getChef} from '../store/actions';

// const ChefDashboard = props => {
//     const userId = localStorage.getItem("user_id");

//     useEffect(() => {
//         props.getChef(userId);
//     }, []);

//     console.log(props);

//     return (
//         <div>
//             <h2><span>{props.chefs.first_name}</span><span>{props.chefs.last_name}</span></h2>
//             <p>{props.chefs.email}</p>
//             <p>{props.chefs.location}</p>
//         </div>

//     )
// }

// const mapStateToProps = state => {
//     return {
//         chefs: state.chefs,
//         isFetching: state.isFetching
//     };
// };

// export default connect(mapStateToProps, {getChef})(ChefDashboard)

const ChefDashboard = () => {
    return (
        <div>
            <h1>Chef Dashboard</h1>
        </div>
    )
}

export default ChefDashboard;