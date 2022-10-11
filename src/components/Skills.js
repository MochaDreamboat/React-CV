import React from 'react';
import uniqid from "uniqid";

function Skills (props) {
    const { skills } = props;

    return (
        <section id="skills">
            {skills.map((skill) => {
                return (
                    <div className="skill" key={uniqid()}>
                        <span>{skill}</span>
                    </div>
                )
            })
        }
        </section>
    )
}

export default Skills;