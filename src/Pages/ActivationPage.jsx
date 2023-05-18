import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { server } from "../server/server";

const ActivationPage = () => {
  const [error, setError] = useState(false);
  const { activation_token } = useParams();
  useEffect(() => {
    const activationEmail = async () => {
      try {
        const res = await axios.post(`${server}/auth/verification`, {
          activation_token,
        });
        console.log(res.data.message);
      } catch (error) {
        // setError(true);
        console.log(error);
      }
    };
    activationEmail();
  }, []);
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {error ? (
          <p>Your token is expired!</p>
        ) : (
          <p>Your account has been created successfully!</p>
        )}
      </div>
    </div>
  );
};

export default ActivationPage;
