import * as actions from './actionType';
import data from './About/component/evData';
import recipeData from './Recipe/data';

export const onAddEmployee = (emp) => {
    //api call
    return {
        type: actions.ADD_EMPLOYEE,
        payload: emp
    }
}



export const onDeleteEmployee = (id) => {
    //api call
    return {
        type: actions.DELETE_EMPLOYEE,
        payload: id
    }
}

export const onModal = (val) => {
    return {
        type: actions.REGISTER_MODAL_IS_OPEN,
        payload: val
    }
}

export const getEvData = () => (dispatch) => {
    // axios.get().then().catch();
    console.log(data)
    dispatch(
        (data => {
            return {
                type: actions.GET_EV_DATA,
                payload: data
            }
        })(data.evData)
    )
}

export const getRecipe = () => (dispatch) => {

   dispatch(
    ((data) => {
        return{
            type:actions.GET_RECIPE_DATA,
            payload : data.recipe
        } 
    })(recipeData)
   )
}



//post reuqest
// export const onAddEmployee = (emp) => (dispatch) => {

    // const option = {
    //     headers: {
    //         'content-type':'application/json'
    //     }
    // }

    // axios.post(url, JSON.stringify(emp)).then(res => {
    //     dispatch(
    //         (data => {
    //             return {
    //               type: '',
    //               payload : {
    //                 response: data
    //               }  
    //             }
    //         })(res.data)
    //     )
    // }).catch();

// }


// JSON.parse(res.data);
// JSON.stringify(emp);

// https method:get, post, post/id, delete

//get: https://jsonplaceholder.typicode.com/posts/
// https://jsonplaceholder.typicode.com/users/


// post: 