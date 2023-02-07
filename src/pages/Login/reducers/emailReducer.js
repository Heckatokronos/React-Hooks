const emailReducer = (state, action) => {

    if (action.type === 'USER_EMAIL') {
        return {
            value: action.val,
            isValid: action.val.includes('@'),
        }
    }

    if (action.type === 'EMAIL_BLUR') {
        return {
            value: state.value,
            isValid: state.value,
            isValid: state.value.includes('@'),
        }
    }

    return {
        value: '',
        isValid: false,
    }
}

export default emailReducer