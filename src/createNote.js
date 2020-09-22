import React from 'react';
import Note from './components/Note';

function createNote(note) {
    return <Note 
    key={note.key}
    title={note.title}
    content={note.content}
    />

}

export default createNote;