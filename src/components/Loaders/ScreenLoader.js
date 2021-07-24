import React from 'react'
import Spinner from 'react-spinkit'

function ScreenLoader() {
    return (
        <div style={{height: "100vh",display: "grid", placeItems:"center"}}>
            <Spinner name="ball-pulse-sync" color="#3e4444" fadeIn={'none'} />
        </div>
    )
}

export default ScreenLoader
