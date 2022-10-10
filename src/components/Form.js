import React from 'react';

// Accepts state and useState function for respective Hook.
// Iterates over state Keys and makes them input fields.

function Form (props) {
    // Edited: denotes state object in which changes will be submitted.
    const { section, toEdit, change, submit }= props;

    return (
        <section className="form">
            <form id="work-form" onSubmit={submit}>
                {
                Object.keys(toEdit).map((field) => {
                    return (
                        <label key={field}>
                            {field}:
                            <input type="text" name={field} onChange={(e) => {
                                change(e, section)
                            }}/>
                        </label>
                    )
                })
                }
                <button type="submit">Submit</button>
            </form>
        </section>
    )

}

export default Form;