const ConvertInput = props => {
    return (
        <div>
            <label for={props.name}>{props.label}: </label>
            <input type="text" id={props.name} name={props.name} onBlur={() => props.convert(10)} />
        </div>
    );
}

export default ConvertInput;