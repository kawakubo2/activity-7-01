import ConvertInput from "./ConvertInput";
import ConvertStatus from "./ConvertStatus";

const ConvertForm = props => {
    return (
        <div>
            <h1>{props.children}</h1>
            <form>
                <ConvertInput name={'celsius'} label={'Celsius'} temp={props.celsius} 
                    convert={props.getFahrenheit} />
                <ConvertInput name={'fahrenheit'} label={'Fahrenheit'} temp={props.fahrenheit}
                    convert={props.getCelsius} />
            </form>
            <ConvertStatus />
        </div>
    );
}

export default ConvertForm;