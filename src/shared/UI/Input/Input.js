const Input = (props) => {

    return (
        <div>
            <label htmlFor={props.htmlFor}>{props.label}</label>
            <input id={props.id} type={props.type} value={props.value} onChange={props.onChange} onBlur={props.onBlur} />
        </div>
    )
}

export default Input
