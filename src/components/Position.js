import React from 'react';

function Position (props) {
    return (
        <div class="position">
            <p>{props.position.role}</p>
            <p>{props.position.years}</p>
            <ul>
            {props.position.duties.map((duty) => {
                return (
                    <li>{duty}</li>
                )
            })}
            </ul>
        </div>
    );
};

export default Position;

