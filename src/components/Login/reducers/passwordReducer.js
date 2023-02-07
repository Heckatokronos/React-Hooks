const passwordReducer = (state, action) => {

    if (action.type === 'USER_PASSWORD') {
        return {
            value: action.val,
            isValid: action.val.trim().length > 6
        }
    }

    if (action.type === 'PASSWORD_BLUR') {
        return {
            value: state.value,
            isValid: state.value,
            isValid: state.value.trim().length > 6
        }
    }

    return {
        value: '',
        isValid: false,
    }
}

export default passwordReducer