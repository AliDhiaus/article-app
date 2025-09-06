"use client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { apiAuth } from "@/lib/api";

const Profile = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get("token");
        const response = await apiAuth(token).get("/auth/profile");
        setUser(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

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
