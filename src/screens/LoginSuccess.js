import React from "react";
import { useState, useEffect } from "react";
import { getAccessToken } from "./LoginScreens";
import { useNavigate } from "react-router-dom";
import { apiInstance } from "../Instance";

const LoginSuccess = () => {
  const [list, setList] = useState([
    {
      code: "",
      name: "",
    },
  ]);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const accessToken = getAccessToken();

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, [accessToken, navigate]);
  const handleClick = async (e) => {
    e.preventDefault();
    setShow(!show);

    try {
      const response = await apiInstance.get("/shop/find", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      setList(response.data);
    } catch (error) {
      navigate("/login");
    }
  };

  return (
    <div>
      <button onClick={handleClick}>{show ? "Hide" : "Show"}</button>
      {show && (
        <>
          <h1>Danh sách</h1>
          <ul>
            {list.map((item) => (
              <li key={item.code}>{item.name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
export default LoginSuccess;
