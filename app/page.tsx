"use client";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/ui/Input";
export default function Page() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [register, setRegister] = useState(false);
  const [splash, setSplash] = useState(true);
  const router = useRouter();
  const handlerForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (register) {
      localStorage.setItem(
        "auth",
        JSON.stringify({ username, email, password })
      );
      setSuccess("Account created successfully");
      setRegister(false);
    } else {
      const auth = JSON.parse(localStorage.getItem("auth") || "{}");
      if (auth.email !== email || auth.password !== password) {
        setError("Invalid email or password");
        return;
      }
      setSuccess("Login successful");
      router.push("/users");
    }
  };
  const clear = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setError("");
    setSuccess("");
  };
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 1500);
  }, [splash]);
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <div className="flex-1 flex items-center justify-center">
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeInOut" }}
          src="/assets/alibaba.png"
          alt="Alibaba"
          className="w-full h-auto max-w-[200px]"
        />
      </div>
      {!splash && (
        <motion.form
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.3 }}
          className="flex-2 bg-gray-800 rounded-t-3xl text-white py-4 px-4 flex flex-col"
          onSubmit={handlerForm}
        >
          <div className="flex-1">
            <h1 className="font-semibold text-xl">
              {!register ? "Welcome back" : "Register Form"}
            </h1>
            <p className="text-gray-300">
              {!register
                ? "Please sign in to continue"
                : "Create a new account"}
            </p>
            {register && (
              <Input
                className="mt-5"
                label="Username"
                type="text"
                placeholder="yourname"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            )}
            <Input
              className="mt-5"
              label="Email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              className="mt-5"
              label="Password"
              type="password"
              placeholder="•••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {!register && (
              <button
                type="button"
                className="text-gray-300 hover:text-gray-400 focus:text-gray-400 underline cursor-pointer mt-5"
              >
                Forgot password?
              </button>
            )}
            {error ? (
              <p className="text-red-400 mt-5">{error}</p>
            ) : (
              <p className="text-green-400 mt-5">{success}</p>
            )}
            <button
              type="submit"
              className="p-2 bg-orange-600 hover:bg-orange-700 focus:bg-orange-700 w-full rounded-md mt-5 cursor-pointer transition duration-300 font-medium"
            >
              {!register ? "Sign In" : "Sign Up"}
            </button>
            <p className="text-center mt-5">
              {!register
                ? "Don't have an account?"
                : "Already have an account?"}{" "}
              <span
                onClick={() => {
                  setRegister(!register);
                  clear();
                }}
                className="text-orange-600 cursor-pointer hover:text-orange-700 focus:text-orange-700 transition duration-300 font-medium"
              >
                {register ? "Sign In" : "Sign Up"}
              </span>
            </p>
          </div>
          <div className="text-center">
            &copy; {new Date().getFullYear()} ArnDev. Prototype Version.
          </div>
        </motion.form>
      )}
    </div>
  );
}
