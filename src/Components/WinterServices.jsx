import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import LoadingPage from "./LoadingPage";
import { AuthContext } from "../provider/AuthProvider";
import "animate.css";
const WinterServices = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/winterCareServices.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) 
    return <LoadingPage />;

  const displayedServices = showAll 
  ? services 
  : services.slice(0, 9);

  const handleViewDetails = (id) => 
    {
    if (!user) {
      navigate("/auth/login", { state: { from: `/service/${id}` } });
    } else {
      navigate(`/service/${id}`);
    }
  };

  const handleViewAll = () => {
    if (!user) {
      navigate("/auth/login", { state: { from: "/category" } });
    } else {
      setShowAll(true);
    }
  };

  return (
    <section className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-green-700 animate__animated animate__fadeInDown">
        Popular PetCare Services 🐾
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {displayedServices.map((service, index) => (
          <div
            key={service.serviceId}
            className={`border border-gray-300 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl cursor-pointer hover:scale-105 transition ease-in-out bg-white animate__animated animate__fadeInUp`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img
              src={service.image}
              alt={service.serviceName}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {service.serviceName}
              </h3>

              <p className="text-sm text-gray-500 mb-2">
                <span className="font-medium text-gray-700">Category:</span>{" "}
                {service.category}
              </p>

              <div className="flex justify-between items-center text-sm mb-3">
                <p className="text-yellow-600 font-medium">⭐ {service.rating}</p>
                <p className="text-blue-600 font-semibold">${service.price}</p>
              </div>

              <p className="text-sm text-gray-600 mb-3">
                <span className="font-medium text-gray-700">Slots Available:</span>{" "}
                {service.slotsAvailable}
              </p>

              <button
                onClick={() => handleViewDetails(service.serviceId)}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full block text-center"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {!showAll && services.length > 9 && (
        <div className="text-center mt-8 animate__animated animate__fadeInUp animate__delay-1s">
          <button
            onClick={handleViewAll}
            className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-200"
          >
            View All
          </button>
        </div>
      )}
    </section>
  );
};

export default WinterServices;
