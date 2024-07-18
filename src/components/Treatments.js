import React, { useState } from 'react';
import AddTreatment from './AddTreatment';
import { useDispatch, useSelector } from 'react-redux';
import { addTreatment } from '../features/treatments/treatmentSlice';

export default function Treatments() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const dispatch = useDispatch();

  const treatments = useSelector(state => state.treatments);

  const handleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  const handleShowAddForm = () => {
    setShowAddForm(!showAddForm);
  };

  const handleAddTreatment = (treatmentDetails) => {
    dispatch(addTreatment({ ...treatmentDetails, id: treatments.length + 1 }));
    setShowAddForm(false);
  }
  return (
    <div className="bg-background dark:bg-foreground p-4 relative ">
      <section className={`max-w-4xl mx-auto space-y-4 ${showAddForm ? 'opacity-30' : ''}`}>
        <div className="flex justify-between w-full">
          <div className="flex items-center space-x-4">
            <h1 className="text-3xl font-semibold text-primary-foreground mb-4 mx-auto">Treatment History</h1>
          </div>
          <div onClick={handleShowAddForm} className="text-right ml-4 bg-blue-500 text-white hover:bg-blue-600 px-4 rounded-md text-sm font-medium flex items-center h-10">
            Add Treatment Detail
          </div>
        </div>
        {treatments.map((treatment, index) => (
          <div
            key={treatment.id}
            className={`bg-card boxShadowWhite p-4 rounded-lg shadow-md ${expandedIndex === index ? 'flex flex-col md:flex-col' : 'flex items-center'} cursor-pointer`}
            onClick={() => handleExpand(index)}
          >
            <div className="flex justify-between w-full">
              <div className="flex items-center space-x-4">
                <img src={treatment.thumbnail} alt="Treatment Thumbnail" className="rounded-lg" />
                <div>
                  <h2 className="text-lg font-semibold text-foreground">{treatment.title}</h2>
                  <p className="text-muted-foreground">Doctor {treatment.doctor}</p>
                </div>
              </div>
              <div className="text-right text-muted-foreground">
                <p>Treatment Date - {treatment.date}</p>
              </div>
            </div>
            {expandedIndex === index && (
              <div className="flex-1 mt-4 md:mt-0 md:flex md:items-start md:space-x-4">
                <div className="flex-1">
                  <p className="text-muted-foreground mt-2"><span className="font-semibold">Medicines:</span> {treatment.details}</p>
                  <p className="text-muted-foreground mt-2"><span className="font-semibold">Details:</span> {treatment.description}</p>
                </div>
                <img src={treatment.detailedImage} alt="Detailed Treatment" className="rounded-lg mt-4 md:mt-0" />
              </div>
            )}
          </div>
        ))}
      </section>
      {
        showAddForm ? (<AddTreatment addTreatment={handleAddTreatment} />) : (<></>)
      }
    </div>
  );
}
