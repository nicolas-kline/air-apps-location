import {initializeBlock} from '@airtable/blocks/ui';
import React from 'react';

function HelloWorldApp() {
    navigator.geolocation.getCurrentPosition((loc) => {
        console.log("Location", JSON.stringify(loc));
    })
    // YOUR CODE GOES HERE
    return <div>Location Check</div>;
}

initializeBlock(() => <HelloWorldApp />);
