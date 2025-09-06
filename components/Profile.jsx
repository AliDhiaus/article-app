"use client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { apiAuth } from "@/lib/api";
import { Loader } from "lucide-react";

const Profile = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get("token");
        const response = await apiAuth(token).get("/auth/profile");
        setUser(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false)
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="w-12 h-12 animate-spin text-gray-500" />
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col p-6">
        <div className="space-y-2 border-b-2 pb-4">
          <h2 className="text-2xl font-bold">{user.username}</h2>
          <p className=" capitalize">{user.role}</p>
        </div>
        <div className="space-y-2 pt-4">
          <h3 className="text-lg font-semibold mb-2">About</h3>
          <p>
            This is a user profile section. You can add more information here
            like bio, contact, or social links.
          </p>
        </div>
      </div>
    </>
  );
};

export default Profile;
