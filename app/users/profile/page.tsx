"use client";
import { User, LogOut, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();
  const [userData, setUserData] = useState<any>({});
  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth) {
      setUserData(JSON.parse(auth));
    }
  }, []);
  const handleLogout = () => {
    router.push("/");
  };
  return (
    <div className="mt-5">
      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-24 h-24 rounded-full bg-gray-800 flex items-center justify-center">
            <User size={40} className="text-white" />
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-semibold">{userData.username}</h1>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Mail size={16} />
              <span>{userData.email}</span>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}