"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import dress from "@/app/users/api/local/dress";
import accessories from "./api/local/accessories";

export default function Page() {
  const router = useRouter();
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const viewData = (data: any) => {
    localStorage.setItem("selectedProduct", JSON.stringify(data));
    router.push(`/users/view`)
  }
  return (
    <>
      <h1 className="text-xl font-semibold mt-5">Featured Products</h1>
      <p>Discover our products</p>
      <div className="py-5">
        <h2 className="text-xl font-semibold mb-3 text-gray-800">
          Featured Dresses
        </h2>
        <motion.div
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {dress.clothes.map((item) => (
            <motion.div
              key={item.name}
              className="min-w-[250px] md:min-w-[280px] bg-white rounded-xl border border-gray-300 shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col snap-center"
              variants={cardVariants}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-1">
                <div className="flex-1">
                  <h1 className="text-lg font-semibold text-gray-800 line-clamp-1">
                    {item.name}
                  </h1>
                  <p className="text-sm text-gray-500 line-clamp-1">
                    {item.category}
                  </p>

                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-base font-semibold text-gray-800">
                      ₱{item.price}
                    </span>
                    <span className="text-sm text-yellow-500 font-medium">
                      ⭐ {item.rating}
                    </span>
                  </div>
                </div>
                <button onClick={() => viewData(item)} className="w-full bg-orange-600 text-white text-sm font-medium py-2 rounded-lg hover:bg-orange-700 focus:bg-orange-700 transition-colors mt-4 cursor-pointer">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <h2 className="text-xl font-semibold mb-3 text-gray-800 mt-5">
          Featured Accessories
        </h2>
        <motion.div
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {accessories.accessories.map((item) => (
            <motion.div
              key={item.name}
              className="min-w-[250px] md:min-w-[280px] bg-white rounded-xl border border-gray-300 shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col snap-center"
              variants={cardVariants}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-1">
                <div className="flex-1">
                  <h1 className="text-lg font-semibold text-gray-800 line-clamp-1">
                    {item.name}
                  </h1>
                  <p className="text-sm text-gray-500 line-clamp-1">
                    {item.category}
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-base font-semibold text-gray-800">
                      ₱{item.price}
                    </span>
                    <span className="text-sm text-yellow-500 font-medium">
                      ⭐ {item.rating}
                    </span>
                  </div>
                </div>
                <button onClick={() => viewData(item)} className="w-full bg-orange-600 text-white text-sm font-medium py-2 rounded-lg hover:bg-orange-700 focus:bg-orange-700 transition-colors mt-4 cursor-pointer">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
