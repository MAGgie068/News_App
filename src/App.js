import React from 'react';
import './App.css';
import { NewsContextProvider } from './NewsContext';
import News from './Components/News';


function App() {

    return (
        <div>
            <NewsContextProvider>
                <News />
            </NewsContextProvider>

        </div>
    );
}


export default App;
