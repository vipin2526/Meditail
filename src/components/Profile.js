import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfileData } from '../features/profile/profileSlice';
import defaultIcon from '../asset/images/defaultIconMale.jpg';
import '../components/css/Profile.css';
import { useNavigate } from 'react-router-dom';
import UpdateProfile from './UpdateProfile';
import deleteId from '../components/js/deleteId'


export default function Profile() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { data: profile, loading, error } = useSelector((state) => state.profile);
    const profileData=deleteId(profile);
    const [showEditForm, setShowEditForm] = useState(false);

    const handleEditClick = () => {
        setShowEditForm(!showEditForm);
    };
    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!profileData) {
        return <div>No profile data available.</div>;
    }

    return (
        <div id='profile' className="bg-card text-card-foreground p-6 shadow-lg bg-opacity-70 bg-blue-200 lg:px-40">
            <div className='lg:flex justify-evenly items-center'>
                <div className="flex items-center mb-6 mr-auto">
                    <img
                        src={defaultIcon}
                        alt="userIcon"
                        className="rounded-full mr-4 border-4 border-primary"
                        height={100}
                        width={100}
                    />
                    <div>
                        <h2 className="text-2xl font-bold text-primary">
                            {profileData.name}
                            <button onClick={handleEditClick} className='px-2 ml-2 h-5 text-xs font-light rounded border-black border bg-white'>EDIT PROFILE</button>
                        </h2>
                        <p className="text-muted-foreground">Age: {profileData.age}</p>
                        <p className="text-muted-foreground">Address: {profileData.address}</p>
                        <p className="text-muted-foreground">Email: {profileData.email}</p>
                        <p className="text-muted-foreground">Mobile: {profileData.mobile}</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-primary text-primary-foreground p-4 rounded-lg boxShadowWhite">
                        <p className="font-semibold">Blood Type: {profileData.bloodType}</p>
                        <p className="font-semibold">Allergies: {profileData.allergies.join(', ')}</p>
                        <p className="font-semibold">Diseases: {profileData.diseases.join(', ')}</p>
                    </div>
                    <div className="bg-accent text-accent-foreground p-4 rounded-lg boxShadowWhite">
                        <p className="font-semibold">Regular Checkups</p>
                        {profileData.checkups.map((checkup, index) => (
                            <div key={index}>
                                <p>{checkup.doctor} - {checkup.specialty} on {checkup.date} </p>

                                {/* <p>{checkup.doctor} - {checkup.specialty} on {checkup.date} at {checkup.location}</p>
                                <p>Notes: {checkup.notes}</p> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mb-6">
                <div className='flex justify-between mb-2'>
                    <h3 className="text-lg font-bold text-secondary">Medical History</h3>
                    <div onClick={() => { navigate('/treatments') }} className="text-center ml-4 bg-blue-500 text-white hover:bg-blue-600 hover:cursor-pointer px-2 rounded-md text-sm flex items-center h-8">ALL TREATMENTS</div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(profileData.healthMetrics).map(([key, value], index) => (
                        <div key={index} className="bg-secondary text-secondary-foreground p-4 rounded-lg boxShadowWhite">
                            <p className="font-semibold">{key.charAt(0).toUpperCase() + key.slice(1)}</p>
                            <p>{value.value}</p>
                            <p className="text-sm text-muted-foreground">{value.status}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted text-muted-foreground p-4 rounded-lg boxShadowWhite">
                    <h4 className="font-bold text-secondary">Symptoms</h4>
                    {profileData.symptoms.map((symptom, index) => (
                        <p key={index}>{symptom}</p>
                    ))}
                </div>
                <div className="bg-muted text-muted-foreground p-4 rounded-lg boxShadowWhite">
                    <h4 className="font-bold text-secondary">Diagnosis</h4>
                    <p>{profileData.diagnosis}</p>
                    <div className="flex mt-4">
                        {profileData.documents.map((doc, index) => (
                            <a key={index} href={doc.link} className="text-primary-foreground mr-4 underline">{doc.name}</a>
                        ))}
                    </div>
                </div>
            </div>
            {showEditForm && (
               <UpdateProfile  handleEditClick={handleEditClick} />
            )}
        </div>
    );
}