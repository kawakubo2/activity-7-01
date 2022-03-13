import ConvertInput from "./ConvertInput";
import ConvertStatus from "./ConvertStatus";

const ConvertForm = props => {
    return (
        <div>
            <h1>{props.children}</h1>
            <form>
                <ConvertInput name={'celsius'} label={'Celsius'} 
                    convert={props.getFarenheit} />
                <ConvertInput name={'fahrenheit'} label={'Fahrenheit'} 
                    convert={props.getCelsius} />
            </form>
            <ConvertStatus />
        </div>
    );
}

export default ConvertForm;