import React from 'react';
import uniqid from "uniqid";

function Skills (props) {
    const { skills } = props;

    return (
        <section id="skills">
            {skills.map((skill) => {
                return (
                    <span className="skill" key={uniqid()}>{skill}</span>
                )
            })
        }
        </section>
    )
}

export default Skills;