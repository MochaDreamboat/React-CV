import React from 'react';

// Accepts state and useState function for respective Hook.
// Iterates over state Keys and makes them input fields.

function Form (props) {
    // Edited: denotes state object in which changes will be submitted.
    const { edits } = props;

    return (
        <section className="form">
            <form>
                {
                Object.keys(edits[0]).map((field) => {
                    return (
                        <label key={field}>
                            {field}:
                            <input type="text" name={field} />
                        </label>
                    )
                })
                }
            </form>
        </section>
    )

}

export default Form;