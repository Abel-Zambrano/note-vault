import React from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import createNote from '../createNote';
import notes from '../notes';

function App() {
    return (
        <div>
        <Header />
        {notes.map(createNote)}
        <Footer />
        </div>
    );
}

export default App;