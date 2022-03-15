const ConvertInput = props => {
    const { name, label, temp, convert } = props;
    return (
        <div>
            <label htmlFor={name}>{label}: </label>
            <input type="text" id={name} name={name} value={temp} 
                onChange={e => {convert(e.target.value)}} />
        </div>
    );
}

export default ConvertInput;