"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const router = useRouter();
  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      setCartItems(JSON.parse(cart));
    }
  }, []);
  const removeItem = (name: string) => {
    const updatedCart = cartItems.filter((item) => item.name !== name);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const buyItem = (item: any) => {
    alert(`🛍️ You bought ${item.name} for ₱${item.price}!`);
  };
  const viewData = (data: any) => {
    localStorage.setItem("selectedProduct", JSON.stringify(data));
    router.push(`/users/view`)
  }
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        🛒 Your Shopping Cart
      </h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="max-w-5xl mx-auto w-full space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.name}
              className="flex flex-col sm:flex-row sm:items-center justify-between w-full bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
            >
              <div className="flex items-center space-x-4 mb-3 sm:mb-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg border"
                />
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h2>
                  <div className="text-yellow-500 text-sm font-medium">
                    ⭐ {item.rating}
                  </div>
                  <p className="text-gray-600 mt-1">
                    Price:{" "}
                    <span className="font-semibold text-gray-800">
                      ₱{item.price}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={() => buyItem(item)}
                  className="bg-orange-600 text-white px-3 py-2 rounded-lg font-medium hover:bg-orange-700 focus:bg-orange-700 transition-colors"
                >
                  🛍️ Buy
                </button>
                <button onClick={() => viewData(item)} className="bg-orange-600 text-white px-3 py-2 rounded-lg font-semibold hover:bg-orange-700 focus:bg-orange-700 transition-colors">
                  Checkout
                </button>
                <button
                  onClick={() => removeItem(item.name)}
                  className="text-red-500 font-medium hover:text-red-600 transition-colors"
                >
                  ✕ Remove
                </button>
              </div>
            </div>
          ))}

        </div>
      )}
    </div>
  );
}
