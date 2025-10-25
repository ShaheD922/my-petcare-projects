import React, { useState } from "react";
import { toast } from "react-toastify";

const BookServiceForm = ({ serviceName }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Successfully booked ${serviceName}!`);
    setName("");
    setEmail("");

    
  };

  return (
    <form onSubmit={handleSubmit}className="space-y-3 mt-6 animate__animated animate__fadeIn">
      <input
        type="text"
        placeholder="Your Name"
        className="input input-bordered w-full"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        className="input input-bordered w-full"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button
        type="submit"
        className="btn btn-primary w-full animate__animated animate__backInUp"
      >
        Book Now
      </button>
    </form>
  );
};

export default BookServiceForm;
