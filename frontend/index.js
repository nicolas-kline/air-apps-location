import {initializeBlock} from '@airtable/blocks/ui';
import React from 'react';
import {Component, useState} from 'react';
import {useCursor, useWatchable} from '@airtable/blocks/ui';

const HelloWorldApp = () => {

    const [location, setLocation] = useState({});
    const cursor = useCursor();

    //componentDidMount() {
        navigator.geolocation.getCurrentPosition(function(position) {
            setLocation(position);
          console.log("Latitude is :", position.coords.latitude);
          console.log("Longitude is :", position.coords.longitude);
        });
    //  }

    //const [location, setLocation] = useState("");
    //setColor("red");

    // navigator.geolocation.getCurrentPosition((position) => {
    //     setLocation(position.coords.latitude);
    // });

    return <div>Hello world 🚀 <p>{location?.coords?.latitude}</p>
    <p>{cursor.isDataLoaded ? cursor.activeTableId : ""}</p>
    {/* <p>{cursor.activeViewId}</p>
    <p>{cursor.selectedRecordIds}</p>
    <p>{cursor.selectedFieldIds}</p> */}
    </div>
}

initializeBlock(() => <HelloWorldApp />);
