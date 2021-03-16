import React from 'react';
import axios from 'axios';

import Header from '../components/Header';
import Footer from '../components/Footer';

import './about.less';

export default function About() {
    const [stateData, setStateData] = React.useState(null);

    React.useEffect(() => {
        // this effect runs once on page load
        (async () => {
            const { data } = await axios.get('/api/hello');
            console.log(data);
            setStateData(data);
        })();
    }, []);

    return (
        <div>
            <Header />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>About Page</h1>
            <pre>{JSON.stringify(stateData, undefined, 2)}</pre>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Footer />
        </div>
    )
}
