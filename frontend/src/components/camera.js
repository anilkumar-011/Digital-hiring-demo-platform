import { useEffect, useRef, useState } from "react";

function Camera() {
    let videoref = useRef(null)
    let photoref = useRef(null)

    const getUserCamera = () => {
        navigator.mediaDevices.getUserMedia({
            video: true
        }).then((stream) => {
            let video = videoref.current
            video.srcObject = stream
            video.play()
        }).catch((error)=>{
            console.log(error)
        })
    }

    useEffect(() => {
        getUserCamera()
    }, [videoref])

    return(
        <div className="container">
            <h1>
                Selfie app
            </h1>
            <video ref={videoref}></video>
            <button>Start video</button>

        </div>
    )
}

export default Camera;