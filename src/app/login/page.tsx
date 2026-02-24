"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Lock, Mail, Loader2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Logo from "@/assets/image.png";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.error || "Invalid email or password");
      } else {
        toast.success("Welcome back!");
        router.push("/admin");
        router.refresh();
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 relative overflow-hidden font-outfit">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-sky-100/50 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-md w-full px-6 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="p-8 text-center bg-white border-b border-gray-100">
            <div className="flex justify-center mb-4">
              <Image src={Logo} alt="ITSOL Logo" className="h-16 w-auto" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">
              CMS Portal
            </h1>
            <p className="text-gray-500 text-sm">
              Secure access to control center
            </p>
          </div>

          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 block ml-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none text-gray-900"
                    placeholder="admin@itsol.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 block ml-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none text-gray-900"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gray-900 text-white font-bold rounded-xl shadow-lg hover:bg-gray-800 transition-all transform active:scale-95 disabled:opacity-70 disabled:active:scale-100 flex items-center justify-center gap-2 group"
              >
                {loading ? (
                  <Loader2 className="animate-spin h-5 w-5" />
                ) : (
                  <>
                    Sign In to Dashboard
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 text-center space-y-4">
              <p className="text-xs text-gray-400">
                Authorized Personnel Only. <br /> All activity is monitored and
                logged.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center space-y-4">
          <p className="text-sm text-gray-500">
            Don't have an account?{" "}
            <button
              onClick={() => router.push("/register")}
              className="text-blue-600 font-bold hover:underline cursor-pointer"
            >
              Sign Up
            </button>
          </p>
          <button
            onClick={() => router.push("/")}
            className="text-sm text-gray-500 hover:text-blue-600 transition-colors flex items-center justify-center gap-2 mx-auto"
          >
            ← Back to Website
          </button>
        </div>
      </div>
    </div>
  );
}
