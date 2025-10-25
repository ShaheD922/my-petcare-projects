
const accessories = [
  { id: 1, name: "Cozy Cat Sweater", image: "https://i.ibb.co.com/VWk9ssgH/d-ng-ph-c-h-i-tri-u-g1yzl-Pxztg-Y-unsplash.jpg" },
  { id: 2, name: "Heated Pet Bed", image: "https://i.ibb.co.com/sJ1xqqT6/tatyana-rubleva-k-Tbdbghxu-O0-unsplash.jpg" },
  { id: 3, name: "Warm Cat Jacket", image: "https://i.ibb.co.com/79mJsSS/vadim-bogulov-8ci-Ze-Msl-Y3-I-unsplash.jpg" },
];

const PetAccessories = () => (
  <section className="container mx-auto py-12">
    <h2 className="text-3xl font-bold mb-8 text-center">Winter Accessories for Pets</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {accessories.map(item => (
        <div key={item.id} className="border rounded-xl shadow-lg p-4 text-center hover:shadow-2xl transition">
          <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded mb-4"/>
          <h3 className="text-xl font-semibold">{item.name}</h3>
        </div>
      ))}
    </div>
  </section>
);

export default PetAccessories;
