import React, { useState } from 'react';

function Input(props) {
    const [note, setNote] = useState({
        title: '',
        content: ''
    })

    function handleChange(event) {
        const {name, value} = event.target;

        setNote(prevNote => {
            return {...prevNote, [name]: value};
        });
    }

    function submitNote(event) {
        props.onAdd(note)
        // Clear content
        setNote({
            title: '',
            content: ''
        })
        event.preventDefault();
    }

    return (
        <div>
            <form action="">
                <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />
                <textarea name="content" onChange={handleChange} value={note.content} placeholder="Note..." rows="3"></textarea>
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    )
}

export default Input;