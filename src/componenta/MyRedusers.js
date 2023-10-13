const MyInistialState = {
    fulInfo: [
        { type: "STUDENT",
        student: {
            fullName: '',
            group: '',
            login: '',
            phone:''
        },
        data: ''}]
};

export const MyRedusers = (state = MyInistialState, action) => {
    switch (action.type) {
        case "USER_FULL_INFO" : {
            return {...state, fulInfo: action.payload}
        }
        default: {
            return state
        }
    }
};