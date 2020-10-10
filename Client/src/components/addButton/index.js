import React from 'react'

function AddButton(props) {
    return (

        <div className="card-header text-right">
            <button type="button" onClick={props.buttonClicked}  className="btn btn-primary">Add</button>
        </div>
    )
}
export default AddButton;
