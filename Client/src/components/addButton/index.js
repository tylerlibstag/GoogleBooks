import React from 'react'

function AddButton(props) {
    return (
        <div className="card-header text-right">
            <button onClick={props.buttonClicked} index={props.index} className="btn btn-primary">{props.buttonText}</button>
        </div>
    )
}
export default AddButton;
