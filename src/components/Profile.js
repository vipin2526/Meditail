import React from 'react'
import './css/Profile.css'
import icon from '../asset/icon.jpg'


export default function Profile() {
    return (
        <div className="container-fluid profileBox">

            <div className="userProfile">
                <div className="profileIcon">
                    <img src={icon} alt="Not Found" height={100} />
                    <h1>Patient Name</h1>
                    <h1>DOB : 20/20/2020</h1>
                    <h1>Weight : 20kg</h1>
                    <h1>Gender : male</h1>
                    <h1>Blood group : B+</h1>
                    <h1>Moile : XXXXXXXXXX</h1>
                    <h1>Adhar :</h1>
                    <h1>XXXX XXXX XXXX</h1>
                </div>
            </div>

            <div className="userDetail">

                <h1 className='History heading'>HISTORY</h1>
                <l1 className="Medical-History list">
                    <h1 className='medicineDate'>20/20/2020 : Doctor</h1> 
                    <h3 className='medicineName'>Medicine :</h3>
                    <h3 className='medicineName'>Medicine :</h3>
                    <h3 className='medicineName'>Medicine :</h3>
                </l1>
                <l1 className="Medical-History list">
                    <h1 className='medicineDate'>20/20/2020 : Doctor</h1> 
                    <h3 className='medicineName'>Medicine :</h3>
                    <h3 className='medicineName'>Medicine :</h3>
                    <h3 className='medicineName'>Medicine :</h3>
                </l1>
                <l1 className="Medical-History list">
                    <h1 className='medicineDate'>20/20/2020 : Doctor</h1> 
                    <h3 className='medicineName'>Medicine :</h3>
                    <h3 className='medicineName'>Medicine :</h3>
                    <h3 className='medicineName'>Medicine :</h3>
                </l1>
                <l1 className="Medical-History list">
                    <h1 className='medicineDate'>20/20/2020 : Doctor</h1> 
                    <h3 className='medicineName'>Medicine :</h3>
                    <h3 className='medicineName'>Medicine :</h3>
                    <h3 className='medicineName'>Medicine :</h3>
                </l1>



            </div>


        </div>
    )
}
