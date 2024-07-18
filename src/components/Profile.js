import React from 'react'
import defaultIcon from '../asset/images/defalutIconMale.jpg'
import '../components/css/Profile.css'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
    const navigate = useNavigate();
    return (
        <div id='profile' className="bg-card text-card-foreground p-6 shadow-lg bg-opacity-70 bg-blue-200 lg:px-40">
            <div className='lg:flex justify-evenly items-center'>
                <div className="flex items-center mb-6 mr-auto">
                    <img src={defaultIcon} alt="userIcon" className="rounded-full mr-4 border-4 border-primary" height={100} width={100} />
                    <div>
                        <h2 className="text-2xl font-bold text-primary">Kyriollos Halim</h2>
                        <p className="text-muted-foreground">Age: 25</p>
                        <p className="text-muted-foreground">Address: 324-Qena, Egypt</p>
                        <p className="text-muted-foreground">Email: Kyriollos.halim@gmail.com</p>
                        <p className="text-muted-foreground">Mobile: 01273339173</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-primary text-primary-foreground p-4 rounded-lg boxShadowWhite">
                        <p className="font-semibold">Blood Type: O</p>
                        <p className="font-semibold">Allergies: Chocolate, Beans</p>
                        <p className="font-semibold">Diseases: Diabetic</p>
                    </div>
                    <div className="bg-accent text-accent-foreground p-4 rounded-lg boxShadowWhite">
                        <p className="font-semibold">Regular Checkups</p>
                        <p>Dr Ahmed Qenawy - Plastic Clinic</p>
                        <p>Dr Ahmed Azzab - Cardiologist</p>
                    </div>
                </div>
            </div>

            <div className="mb-6">
                <div className='flex justify-between mb-2'>
                    <h3 className="text-lg font-bold text-secondary">Medical History</h3>
                    <div onClick={() => { navigate('/treatments') }} className="text-center ml-4 bg-blue-500 text-white hover:bg-blue-600 hover:cursor-default px-2 rounded-md text-sm flex items-center h-8">ALL TREATMENTS</div>
                </div>
                <div className="flex justify-between items-center mb-2 p-2 bg-muted rounded-lg boxShadowWhite">
                    <div className="flex items-center">
                        <img src="https://placehold.co/40x40" alt="doctorProfile" className="rounded-full mr-2 border-2 border-secondary" />
                        <div>
                            <p className="font-semibold">Dr Ahmed Qenawy</p>
                            <p className="text-sm text-muted-foreground">Plastic Surgery</p>
                        </div>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                        <p>10/7/2019</p>
                        <p className="ml-4">Maadi Medical Centre, Cairo</p>
                        <p className="ml-4">Medical Surgery</p>
                    </div>
                </div>
                <div className="flex justify-between items-center p-2 bg-muted rounded-lg boxShadowWhite">
                    <div className="flex items-center">
                        <img src="https://placehold.co/40x40" alt="doctorProfile" className="rounded-full mr-2 border-2 border-secondary" />
                        <div>
                            <p className="font-semibold">Dr Ahmed Azzab</p>
                            <p className="text-sm text-muted-foreground">Cardiologist</p>
                        </div>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                        <p>10/7/2019</p>
                        <p className="ml-4">Maadi Medical Centre, Cairo</p>
                        <p className="ml-4">Medical Consultant</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-secondary text-secondary-foreground p-4 rounded-lg boxShadowWhite">
                    <p className="font-semibold">Blood Pressure</p>
                    <p>120/80 mm/Hg</p>
                    <p className="text-sm text-muted-foreground">Normal</p>
                </div>
                <div className="bg-secondary text-secondary-foreground p-4 rounded-lg boxShadowWhite">
                    <p className="font-semibold">Heart Rate</p>
                    <p>102 beats/min</p>
                    <p className="text-sm text-muted-foreground">Above Normal</p>
                </div>
                <div className="bg-secondary text-secondary-foreground p-4 rounded-lg boxShadowWhite">
                    <p className="font-semibold">Glucose</p>
                    <p>100 mg/dL</p>
                    <p className="text-sm text-muted-foreground">Normal</p>
                </div>
                <div className="bg-secondary text-secondary-foreground p-4 rounded-lg boxShadowWhite">
                    <p className="font-semibold">Cholesterol</p>
                    <p>85 mg/dL</p>
                    <p className="text-sm text-muted-foreground">Normal</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted text-muted-foreground p-4 rounded-lg boxShadowWhite">
                    <h4 className="font-bold text-secondary">Symptoms</h4>
                    <p>Excessive thirst and hunger</p>
                    <p>Frequent urination</p>
                    <p>Weight loss or gain</p>
                    <p>Fatigue</p>
                    <p>Irritability</p>
                    <p>Slow-healing wounds</p>
                </div>
                <div className="bg-muted text-muted-foreground p-4 rounded-lg boxShadowWhite">
                    <h4 className="font-bold text-secondary">Diagnosis</h4>
                    <p>May be diagnosed based on A1C criteria or plasma glucose criteria...</p>
                    <div className="flex mt-4">
                        <a href="/" className="text-primary-foreground mr-4 underline">Prescription.pdf</a>
                        <a href="/" className="text-primary-foreground underline">Blood Tests.pdf</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
