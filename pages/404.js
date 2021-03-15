import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function NotFound() {

    return (
        <div className="home-container">
            <Header lang="en"/>
            <h1>404 - Page does not exist</h1>
            <Footer lang="en"/>
        </div>
    )
}
