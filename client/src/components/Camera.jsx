import QrScanner from "qr-scanner";
import { useEffect, useRef, useState } from "react";

export default function Camera() {
    const [isScanned, setIsScanned] = useState(false);
    const [data, setData] = useState(null);

    const videoRef = useRef();
    const resultRef = useRef();

    let qrScanner = null;
    useEffect(() => {
        const videoElem = videoRef.current;

        qrScanner = new QrScanner(
            videoElem,
            qrcode => {
                if (qrcode) {
                    setIsScanned(!isScanned);
                    setData(qrcode.data)

                }
            },
            {
                onDecodeError: error => { },
                highlightScanRegion: true,
                highlightCodeOutline: true,
            });

        qrScanner.start();
        var device_height = window.screen.height;
        var device_width = window.screen.width;

        // set height and width of video
        document.getElementById('qr-video').style.width = device_width + 'px';
        document.getElementById('qr-video').style.height = device_height + 'px';

        data ? window.location = data : console.log(data)

    }, [data])


    return (
        <>
            <video style={{ backgroundColor: "black", position: "relative", overflow: "hidden", whiteSpace: "nowrap" }} id="qr-video" ref={videoRef}>
            </video>
        </>
    )
}