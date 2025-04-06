import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "@/utils/axiosInstance";

export default function useAuthCheck(shouldCheck = true) {
  const [isChecking, setIsChecking] = useState(shouldCheck);
  const navigate = useNavigate();

  useEffect(() => {
    if (!shouldCheck) {
      setIsChecking(false);
      return;
    }

    const checkAuth = async () => {
      try {
        await axiosInstance.get("/user/profile");
      } catch (err) {
        localStorage.removeItem("accessToken");
        navigate("/login");
      } finally {
        setIsChecking(false);
      }
    };

    checkAuth();
  }, [shouldCheck]);

  return isChecking;
}
