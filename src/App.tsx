import React from 'react';
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import Home from './pages/Home';

import GlobalCSS from './styles/Global';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo/client';

function App() {
    return (
        <React.Fragment>
            {/* <GlobalCSS /> */}
            <ApolloProvider client={client}>
                <Home />
            </ApolloProvider>
        </React.Fragment >
    );
}

export default App;
