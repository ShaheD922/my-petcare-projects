import React from "react";

const winterTips = [
  { id: 1, tip: "Keep your pets warm with a cozy blanket." },
  { id: 2, tip: "Avoid long baths in cold weather." },
  { id: 3, tip: "Provide extra nutritious food during winter." },
  { id: 4, tip: "Trim nails to prevent slipping on icy floors." },
  { id: 5, tip: "Check paws for cracks or dryness regularly." },
];

const WinterTips = () => (
  <section className="bg-gray-100 py-12">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Winter Care Tips for Pets
      </h2>

      {/* flex layout */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">

        {/* Image left */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src="https://i.ibb.co.com/wh6LL29K/real-estate-partners-e-LZQz-AFzy-Uc-unsplash.jpg"
            alt="Winter Pet"
            className="rounded-2xl shadow-lg w-[90%] md:w-[80%] object-cover"
          />
        </div>

        {/* List right */}
        <div className="md:w-1/2 w-full">
          <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg">
            {winterTips.map((tip) => (
              <li key={tip.id}>{tip.tip}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default WinterTips;
