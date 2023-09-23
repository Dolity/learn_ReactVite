import React from 'react'

function CalBMI({ id, weight, height, deletePost }) {

    function calculateBMI() {
        const cal = weight / ((height / 100) * (height / 100));
        console.log(cal);
        return cal;
    }

    return (
        <div className="Post">
            <button className="Post_delete" onClick={() => deletePost(id)}>
                X
            </button>
            <div className="Post_title">
                {id}
                <h2 className="Post_image">{calculateBMI()}</h2>
            </div>
        </div>
    )
}

export default CalBMI