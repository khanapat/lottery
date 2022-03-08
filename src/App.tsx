import React from 'react';
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { Home, Bobo } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import GlobalCSS from './styles/Global';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <GlobalCSS /> */}
                <Route path="/" element={<Home />} />
                <Route path="/bobo" element={<Bobo />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
