"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "@/app/redux/slices/UserSlice";
import { Loader, ArrowLeft } from "lucide-react";
import Link from "next/link";

const Profile = () => {
  const dispatch = useDispatch();
  const { data: user, error } = useSelector((state) => state.user);
  const { loading } = useSelector((state) => state.ui);

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="w-12 h-12 animate-spin text-gray-500" />
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-red-500 mt-10">{error}</p>;
  }

  if (!user) {
    return <p className="text-center text-gray-500 mt-10">No user data found.</p>;
  }

  return (
    <div className="min-h-screen py-10">
      <div className="max-w-xl mx-auto shadow-md rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/user/home"
            className="flex items-center gap-2 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <span className="px-3 py-1 text-xs rounded-full capitalize">
            {user.role}
          </span>
        </div>

        <div className="text-center py-2">
          <div className="mx-auto w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-gray-600">
            {user.username?.charAt(0).toUpperCase()}
          </div>
          <h2 className="mt-4 text-2xl font-bold">{user.username}</h2>
          <p className="text-sm">Member since 2024</p>
        </div>

        <div className="mt-8 border-t pt-6">
          <h3 className="text-lg font-semibold mb-2">About</h3>
          <p className="text-sm leading-relaxed">
            This is a user profile section. You can add more information here like bio,
            contact, or social links.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
