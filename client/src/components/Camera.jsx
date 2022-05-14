import React, { useState, useRef } from "react";
import { QrReader } from 'react-qr-reader';


const Camera = () => {

    const [data, setData] = useState('No result');


    console.log(data);

    // The styling wont listen to me :(

    return (
        <QrReader
            scanDelay={1000}
            key="environment"
            constraints={{ facingMode: 'environment' }}
            onResult={(result, error) => {
                if (!!result) {
                    setData(result?.text);
                }
            }}
            videoContainerStyle={{
                display: "flex",
                width: "100%",
                height: "100vh"
            }}
            containerStyle={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100vh",
                overflow: "hidden"
            }} />
    );
}

export default Camera;