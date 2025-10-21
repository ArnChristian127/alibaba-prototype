"use client";
import { useState, useEffect } from "react";
import { Bell } from "lucide-react";
import Profile from "./profile";

export default function Header() {
  const [userData, setUserData] = useState<any>(null);
  useEffect(() => {
    const jsonString = localStorage.getItem("auth");
    if (jsonString) {
      setUserData(JSON.parse(jsonString));
    }
  }, []);
  return (
    <header className="bg-gray-800 text-white px-5 py-5 rounded-b-2xl">
      <div className="flex items-center justify-between">
        {userData && <Profile data={userData} />}
        <Bell />
      </div>
    </header>
  );
}
