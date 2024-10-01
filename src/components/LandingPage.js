import React from 'react'
import '../App.css'
import doctorPatient from '../asset/images/locterPatient.jpeg'

export default function LandingPage() {
  return (
    <div className="bg-[var(--background)] py-16 lg:px-40">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 ">
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-4xl font-bold text-[var(--foreground)]">
            We Ensure the Best <span className="text-[var(--primary)]">Health</span> services for You.
          </h1>
          <p className="mt-4 text-[var(--muted-foreground)]">
            We prioritize your well-being, offering expert guidance and support. Your health is our top concern, and we are committed to providing exceptional care and understanding.
          </p>
          <button className="mt-8 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600">
            <a href="#appointment">Get Appointment </a>
          </button>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img src={doctorPatient} alt="Two doctors smiling" className="rounded-lg shadow-lg" />
        </div>
      </div>


      <div className="bg-background text-foreground p-6 mt-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Easy <span className="text-primary">steps</span> for your care</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-card p-6 rounded-lg text-center boxShadowWhite">
            <div className="text-6xl mb-4">📝</div> {/* Icon for Registration */}
            <h3 className="font-semibold">Register & Login</h3>
            <p className="text-muted-foreground">Register your account and log in to start managing your healthcare.</p>
          </div>
          <div className="bg-primary p-6 rounded-lg boxShadowWhite text-center">
            <div className="text-6xl mb-4">🩺</div> {/* Icon for Health Details */}
            <h3 className="font-semibold text-primary-foreground">Update Health Details</h3>
            <p className="text-primary-foreground">Update your health information to keep your records accurate and up-to-date.</p>
          </div>
          <div className="bg-card p-6 rounded-lg boxShadowWhite text-center">
            <div className="text-6xl mb-4">💼</div> {/* Icon for Treatment Slips */}
            <h3 className="font-semibold">Save Treatment Slips</h3>
            <p className="text-muted-foreground">Save and manage your treatment slips for easy access and tracking.</p>
          </div>
          <div className="bg-card p-6 rounded-lg boxShadowWhite text-center">
            <div className="text-6xl mb-4">📈</div> {/* Icon for Medical History */}
            <h3 className="font-semibold">Get Medical History Anytime</h3>
            <p className="text-muted-foreground">Access your complete medical history whenever you need it.</p>
          </div>

        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between"  id='appointment'>
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Book an <span className="text-primary">Appointment</span> online</h2>
            <p className="text-muted-foreground mb-4">At MediTail, we prioritize your health. Booking an appointment has never been easier. Our platform allows you to schedule visits with your healthcare provider at your convenience.</p>
            <p className="text-muted-foreground mb-4">Whether you need a routine check-up or a specialized consultation, our user-friendly interface guides you through the process seamlessly.</p>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>Medic is your reliable healthcare partner.</li>
              <li>Expert care, your well-being.</li>
            </ul>
          </div>



          <div className="md:w-1/3 bg-card p-6 rounded-lg boxShadowWhite">
            <h3 className="text-xl font-semibold mb-4">Make Appointment</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground">Name</label>
                <input type="text" id="name" className="mt-1 block w-full p-2 border border-input rounded-md bg-background text-foreground" placeholder="Name" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">Email</label>
                <input type="email" id="email" className="mt-1 block w-full p-2 border border-input rounded-md bg-background text-foreground" placeholder="example@mail.com" />
              </div>
              <div className="mb-4">
                <label htmlFor="department" className="block text-sm font-medium text-muted-foreground">Department</label>
                <select id="department" className="mt-1 block w-full p-2 border border-input rounded-md bg-background text-foreground">
                  <option>Choose Department...</option>
                  <option>Cardiology</option>
                  <option>Neurology</option>
                  <option>Orthopedics</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="time" className="block text-sm font-medium text-muted-foreground">Select Time</label>
                <input type="time" id="time" className="mt-1 block w-full p-2 border border-input rounded-md bg-background text-foreground" />
              </div>
              <button type="submit" className="w-full bg-green-500 text-white hover:bg-green-600 text-primary-foreground p-2 rounded-md">Book Appointment</button>
            </form>
          </div>
        </div>
      </div>



      {/* people say about us */}

      <div className="flex flex-col items-center space-y-8 mt-20">
        <h2 className="text-3xl font-bold text-foreground">
          What our patients <span className="text-primary">says</span> about us
        </h2>
        <div className="flex space-x-6">
          <div className="bg-card p-6 rounded-lg boxShadowWhite w-80 text-center hover:bg-gray-500 mt-5">
            <p className="text-muted-foreground mb-4">
              MediTail has completely transformed how I manage my health records. The ease of accessing my medical history has made my appointments so much smoother. Highly recommend!
            </p>
            <div className="flex items-center justify-center space-x-4">
              <img src="https://placehold.co/50x50" alt="Mary Jane" className="rounded-full" />
              <div>
                <p className="text-foreground font-semibold">Mary Jane</p>
                <p className="text-primary">★★★★★</p>
              </div>
            </div>
          </div>

          <div className="bg-primary p-6 rounded-lg boxShadowWhite w-80 text-center hover:bg-gray-500 ">
            <p className="text-primary-foreground mb-4">
              As a healthcare provider, I find MediTail's integration with existing systems to be seamless. It allows me to provide better care to my patients with quick access to their medical histories.
            </p>
            <div className="flex items-center justify-center space-x-4 hover:bg-gray-500">
              <img src="https://placehold.co/50x50" alt="Mr. Jhon" className="rounded-full" />
              <div>
                <p className="text-primary-foreground font-semibold">Mr. Jhon</p>
                <p className="text-primary-foreground">★★★★★</p>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg boxShadowWhite w-80 text-center hover:bg-gray-500 mt-5">
            <p className="text-muted-foreground mb-4">
              I love how MediTail empowers me to take control of my health. I can easily track my prescriptions and treatments, and the interface is so user-friendly!
            </p>
            <div className="flex items-center justify-center space-x-4">
              <img src="https://placehold.co/50x50" alt="Mr. David" className="rounded-full" />
              <div>
                <p className="text-foreground font-semibold">Mr. David</p>
                <p className="text-primary">★★★★★</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}