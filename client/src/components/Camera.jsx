import React, { useState, useRef } from "react";
import { QrReader } from 'react-qr-reader';
import "../index.css"


const Camera = () => {

    const [data, setData] = useState('No result');


    console.log(data);

    // The styling wont listen to me :(

    return (
        <>
            <div id="div"></div>
            <QrReader className="qr-image-wrapper"
                scanDelay={3000}
                key="environment"
                constraints={{ facingMode: 'environment' }}
                onResult={(result, error) => {
                    if (!!result) {
                        setData(result?.text);
                    }
                }}
                style={{ width: '100%' }}
            />

        </>
    );
}

export default Camera;