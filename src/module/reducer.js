import * as actions from './actionType';

//central storage (store state)
const initState = {
    employee: [],
    modalIsOpen: false,
    evData: []
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actions.ADD_EMPLOYEE:
            return { ...state, employee: [...state.employee, action.payload] }
        case actions.DELETE_EMPLOYEE:
            return { ...state, employee: state.employee.filter((info) => info.id != action.payload) }
        case actions.REGISTER_MODAL_IS_OPEN:
            return { ...state, modalIsOpen: action.payload }
        case actions.GET_EV_DATA:
            console.log(action.payload)
            return { ...state, evData: action.payload }
        default:
            return state;
    }
}

export default reducer;

