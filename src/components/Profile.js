import React from 'react'
import './css/Profile.css'
import icon from '../asset/icon.jpg'


export default function Profile() {
    return (
        <div className="container-fluid profileBox">
            <div className="profileIcon">
                <img src={icon} alt="Not Found" height={100} />
            </div>
            <div className="userName">Patient</div>
            <h3>some other detials</h3>

        </div>
    )
}
