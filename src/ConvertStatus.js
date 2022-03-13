import StatusContext from "./StatusContext";

const ConvertStatus = () => {
    return (
        <StatusContext.Consumer>
            {props => {
                const celsius = props;
                let status;
                if (celsius > 50) {
                    status = 'Very hot';
                } else if (celsius > 30) {
                    status = 'Hot';
                } else if (celsius > 15) {
                    status = 'Warm';
                } else if (celsius > 0) {
                    status = 'Cool';
                } else if (celsius > -10) {
                    status = 'Cold';
                } else {
                    status = 'Very cold';
                }
                <div>
                    <div>{status}</div>
                </div>
            }}
        </StatusContext.Consumer>
    );
}

export default ConvertStatus;