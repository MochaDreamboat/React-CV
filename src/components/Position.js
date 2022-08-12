import React from 'react';

function Position ({position}) {
    return (
        <div class="position">
            <p>{position.role}</p>
            <p>{position.years}</p>
            <ul>
            {position.duties.map((duty) => {
                return (
                    <li>{duty}</li>
                )
            })}
            </ul>
        </div>
    );
};

export default Position;

