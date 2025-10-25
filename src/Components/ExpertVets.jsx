import React from "react";
import { useNavigate } from "react-router";

const expertVets = [
  { id: 1, name: "Dr. Sarah Johnson", specialization: "Canine Specialist", image: "https://i.ibb.co.com/20WYF2rH/humberto-chavez-FVh-yq-LR9e-A-unsplash.jpg" },
  { id: 2, name: "Dr.Shahed Afredi", specialization: "Feline Specialist", image: "https://i.ibb.co.com/1Gwsb8N8/ashkan-forouzani-DPEPYPBZp-B8-unsplash.jpg" },
  { id: 3, name: "Dr. Jhankar Mahbub", specialization: "Exotic Pets", image: "https://i.ibb.co.com/JwhpVwLm/usman-yousaf-p-Trhfmj2j-DA-unsplash.jpg" },
];

const ExpertVets = () => 
  {
  const navigate = useNavigate();
  const handleViewDetails = (id) => 
  {
    navigate(`/doctor/${id}`);
  };

  return (
    <section className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-green-700">Meet Our Expert Vets</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {expertVets.map((vet) => 
        (
          <div key={vet.id} className="border border-gray-300 rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition cursor-pointer">
            <img src={vet.image} alt={vet.name} className="w-32 h-32 mx-auto rounded-full object-cover mb-4" />
            <h3 className="text-xl font-semibold">{vet.name}</h3>
            <p className="text-gray-600">{vet.specialization}</p>
            <button
              onClick={() => handleViewDetails(vet.id)}
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertVets;
