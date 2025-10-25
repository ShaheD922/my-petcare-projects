import React from "react";
import { useParams, useNavigate } from "react-router";
import { toast, ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const expertVets = [
  { id: 1, name: "Dr.Ana de Armas ", hospital: "Happy Paws Clinic", specialization: "Canine Specialist", description: "Expert in canine health, grooming, and nutrition.", image: "https://i.ibb.co.com/20WYF2rH/humberto-chavez-FVh-yq-LR9e-A-unsplash.jpg" },
  { id: 2, name: "Dr.Shahed Afredi", hospital: "Feline Care Center", specialization: "Feline Specialist", description: "Specializes in feline care, behavior, and diet.", image: "https://i.ibb.co.com/1Gwsb8N8/ashkan-forouzani-DPEPYPBZp-B8-unsplash.jpg" },
  { id: 3, name: "Dr. Jhankar Mahbub", hospital: "Exotic Pets Clinic", specialization: "Exotic Pets", description: "Handles exotic pets with advanced care and treatment.", image: "https://i.ibb.co.com/JwhpVwLm/usman-yousaf-p-Trhfmj2j-DA-unsplash.jpg" },
];

const DoctorDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const doctor = expertVets.find(d => d.id === parseInt(id));

  if (!doctor) return <p>Doctor not found!</p>;

  const handleBack = () => {
    toast.info("Going back...", {
      position: "top-right",
      autoClose: 1500,
      transition: Zoom,
      theme: "colored",
    });
    setTimeout(() => navigate(-1), 1500);
  };

  return (
    <div className="container mx-auto py-12 space-y-8">
      <ToastContainer limit={2} newestOnTop={true} />
      <div className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-xl md:w-2/3 mx-auto space-y-6">
        <img src={doctor.image} alt={doctor.name} className="w-40 h-40 rounded-full object-cover shadow-lg" />
        <h2 className="text-3xl font-bold text-center text-green-700">
          {doctor.name}

        </h2>
        <p className="text-xl font-semibold text-gray-700 text-center">Hospital Name : {doctor.hospital}</p>
        <p className="text-gray-600 text-center">
       <span className="font-bold text-xl"> Description :</span>  {doctor.description}</p>
        <button
          onClick={handleBack}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          ⬅ Go Back
        </button>
      </div>
    </div>
  );
};

export default DoctorDetails;
