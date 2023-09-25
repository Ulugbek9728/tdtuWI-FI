const MyInistialState = {
    fulInfo: [{test:'123456'}]
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