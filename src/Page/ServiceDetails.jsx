import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import LoadingPage from "../Components/LoadingPage";
import { toast, ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "animate.css";
import BookServiceForm from "../Components/BookServiceForm";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);

  useEffect(() => {
    fetch("/winterCareServices.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.serviceId === parseInt(id));
        setService(found);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!service) {
    return <LoadingPage />;
  }

  const handleBack = () => {
    toast.info("Going Back to Previous Page...", 
    {
      position: "top-right",
      autoClose: 1500,
      theme: "colored",
      transition: Zoom,
      style: {
        fontSize: "16px",
        fontWeight: "600",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      },
    });
    setTimeout(() => {
      navigate(-1);
    }, 1500);
  };

  return (
    <div className="container mx-auto py-12 space-y-8">
     
      <ToastContainer limit={2} newestOnTop={true} closeOnClick pauseOnHover />
{/*  */}
      <div className="flex justify-center mb-8 animate__animated animate__backInLeft">
        <img
          src={service.image}
          alt={service.serviceName}
          className="w-full md:w-1/2 h-80 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
        />
      </div>

     
      <div className="bg-white shadow-xl rounded-2xl p-8 md:w-1/2 mx-auto space-y-4 border border-gray-100 hover:shadow-2xl transition-shadow duration-300 animate__animated animate__backInLeft">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-4">
          {service.serviceName}
        </h2>

        <div className="space-y-2 text-gray-800">
          <p className="font-semibold">
            Provider Name:{" "}
            <span className="font-normal text-gray-700">{service.providerName}</span>
          </p>
          <p className="font-semibold">
            Email:{" "}
            <span className="font-normal text-gray-700">{service.providerEmail}</span>
          </p>
          <p className="font-semibold">
            Category:{" "}
            <span className="font-normal text-gray-700">{service.category}</span>
          </p>
          <p className="font-semibold">
            Price:{" "}
            <span className="font-normal text-gray-700">${service.price}</span>
          </p>
          <p className="font-semibold">
            Rating:{" "}
            <span className="font-normal text-yellow-600">⭐ {service.rating}</span>
          </p>
          <p className="font-semibold">
            Slots Available:{" "}
            <span className="font-normal text-gray-700">{service.slotsAvailable}</span>
          </p>
          <p className="font-semibold">
            Description:{" "}
            <span className="font-normal text-gray-700">{service.description}</span>
          </p>
        </div>

   <BookServiceForm serviceName={service.serviceName} />

     
        <button
          onClick={handleBack}
          className="bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold px-4 py-2 rounded-lg hover:opacity-90 w-full mt-6 transition-all duration-200"
        >
          ⬅ Go Back
        </button>
      </div>
    </div>
  );
};

export default ServiceDetails;
//