import React, { useState } from 'react';

export default function AddTreatment({ addTreatment }) {
  const [formData, setFormData] = useState({
    title: '',
    doctor: '',
    date: '',
    details: '',
    description: '',
    thumbnail: '',
    detailedImage: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.date) formData.date = '2020-05-01';
    if (!formData.thumbnail) formData.thumbnail = 'https://placehold.co/50x50';
    if (!formData.detailedImage) formData.detailedImage = 'https://placehold.co/200x200';
    addTreatment(formData);
  }

  return (
    <div className="flex justify-center items-center h-screen bg-background dark:bg-foreground p-4 fixed top-0 left-0 right-0">
      <div className=" bg-card p-6 rounded-lg boxShadowWhite">
        <h3 className="text-xl font-semibold mb-4">Add New Treatment Details</h3>
        <form onSubmit={handleSubmit}>
          <div className="md:flex md:space-x-4">
            <div className="mb-4 md:mb-0 md:w-1/2">
              <label htmlFor="title" className="block text-sm font-medium text-muted-foreground">Treatment Title</label>
              <input
                type="text"
                id="title"
                value={formData.title}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-input rounded-md bg-background text-foreground"
                placeholder="Treatment Title"
              />
            </div>
            <div className="mb-4 md:w-1/2">
              <label htmlFor="doctor" className="block text-sm font-medium text-muted-foreground">Doctor</label>
              <input
                type="text"
                id="doctor"
                value={formData.doctor}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-input rounded-md bg-background text-foreground"
                placeholder="Doctor's Name"
              />
            </div>
          </div>
          <div className="md:flex md:space-x-4">
            <div className="mb-4 md:mb-0 md:w-1/2">
              <label htmlFor="date" className="block text-sm font-medium text-muted-foreground">Date</label>
              <input
                type="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-input rounded-md bg-background text-foreground"
              />
            </div>
            <div className="mb-4 md:w-1/2">
              <label htmlFor="details" className="block text-sm font-medium text-muted-foreground">Medicines</label>
              <input
                type="text"
                id="details"
                value={formData.details}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-input rounded-md bg-background text-foreground"
                placeholder="Medicines, Treatment details"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-muted-foreground">Description</label>
            <textarea
              id="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-input rounded-md bg-background text-foreground"
              placeholder="Detailed description of the treatment"
            />
          </div>
          <div className="md:flex md:space-x-4">
            <div className="mb-4 md:mb-0 md:w-1/2">
              <label htmlFor="thumbnail" className="block text-sm font-medium text-muted-foreground">Thumbnail URL</label>
              <input
                type="text"
                id="thumbnail"
                value={formData.thumbnail}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-input rounded-md bg-background text-foreground"
                placeholder="URL for the thumbnail image"
              />
            </div>
            <div className="mb-4 md:w-1/2">
              <label htmlFor="detailedImage" className="block text-sm font-medium text-muted-foreground">Detailed Image URL</label>
              <input
                type="text"
                id="detailedImage"
                value={formData.detailedImage}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-input rounded-md bg-background text-foreground"
                placeholder="URL for the detailed image"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white hover:bg-green-600 text-primary-foreground p-2 rounded-md"
          >
            Add Treatment
          </button>
        </form>
      </div>
    </div>
  );
}
