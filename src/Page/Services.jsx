import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import LoadingPage from "../Components/LoadingPage";

import "animate.css";

const Services = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <LoadingPage />;

  const handleViewDetails = (id) => {
    if (!user) {
      navigate("/auth/login", { state: { from: `/service/${id}` } });
    } else {
      navigate(`/service/${id}`);
    }
  };

  return (
    <section className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-green-700 animate__animated animate__fadeInDown">
        Our Services 🐾
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {services.map((service, index) => (
          <div
            key={service.serviceId}
            className={`border border-gray-300 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl cursor-pointer hover:scale-105 transition ease-in-out bg-white animate__animated animate__fadeInUp`}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <img
              src={service.image}
              alt={service.serviceName}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-green-600">
                {service.serviceName}
              </h3>
              <button
                onClick={() => handleViewDetails(service.serviceId)}
                className="bg-green-600 text-white px-3 py-1 rounded mt-3 w-full hover:bg-green-700 transition"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
