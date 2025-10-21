import { ShoppingCart, User, Home } from "lucide-react";
import Link from "next/link";
import Header from "@/components/ui/header";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col">
      <Header/>
      <main className="flex-1 overflow-y-auto px-5">{children}</main>
      <footer className="bg-orange-600 px-5 py-5 text-white flex justify-between items-center rounded-t-xl">
        <Link href="/users" className="flex items-center flex-col">
          <Home size="20" />
          <h1 className="font-medium">Home</h1>
        </Link>
        <Link href="/users/cart" className="flex items-center flex-col">
          <ShoppingCart size="20" />
          <h1 className="font-medium">Cart</h1>
        </Link>
        <Link href="/users/profile" className="flex items-center flex-col">
          <User size="20" />
          <h1 className="font-medium">Profile</h1>
        </Link>
      </footer>
    </div>
  );
}
