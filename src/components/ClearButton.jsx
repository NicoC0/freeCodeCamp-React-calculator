import "../css/clearButton.css"

const ClearButton = (props) => (
    <div className="button-clear"
    onClick={props.manejarClear}>
        {props.children}
    </div>
)

export default ClearButton