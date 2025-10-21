"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function Page() {
  const [product, setProduct] = useState<any>(null);
  const [checkCart, setCheckCart] = useState<any[]>([]);
  const router = useRouter();
  useEffect(() => {
    const selectedProduct = localStorage.getItem("selectedProduct");
    if (selectedProduct) {
      setProduct(JSON.parse(selectedProduct));
    }
    const cart = localStorage.getItem("cart");
    if (cart) {
      setCheckCart(JSON.parse(cart));
    }
  }, []);
  const addToCart = () => {
    const cart = localStorage.getItem("cart");
    let cartItems = cart ? JSON.parse(cart) : [];
    if (!cartItems.find((item: any) => item.name === product.name)) {
      cartItems.push(product);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      setCheckCart(cartItems);
      router.push("/users/cart");
    }
  };
  const isInCart = checkCart.some((item: any) => item.name === product?.name);
  return (
    <div>
      <h1 className="text-xl font-semibold mt-5">View Product</h1>
      <img
        src={product?.image}
        alt={product?.name}
        className="w-full h-48 object-cover rounded-md mt-5"
      />
      <p className="mt-5">{product?.name}</p>
      <div className="text-sm text-yellow-500 font-medium">
        ⭐ {product?.rating}
      </div>
      <p className="mt-5">Price: ₱{product?.price}</p>
      <button
        onClick={addToCart}
        disabled={isInCart}
        className={`w-full p-2 text-white font-medium rounded-md mt-5 transition-colors ${
          isInCart
            ? "bg-orange-400 cursor-not-allowed"
            : "bg-orange-600 hover:bg-orange-700 focus:bg-orange-700 cursor-pointer"
        }`}
      >
        {isInCart ? "Already in Cart" : "Add to Cart"}
      </button>
    </div>
  );
}
