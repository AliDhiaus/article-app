import React from "react";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";

const ButtonSubmit = ({ isSubmit }) => {
  return (
    <>
      <Button
        type="submit"
        disabled={isSubmit}
        className={`flex items-center justify-center gap-2 flex-1 px-4 py-2 font-semibold rounded-md shadow-md text-white transition 
    ${
      isSubmit
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
    }`}
      >
        {isSubmit && <Loader2 className="w-5 h-5 animate-spin" />}
        {isSubmit ? "Processing..." : "Submit"}
      </Button>
    </>
  );
};

export default ButtonSubmit;
