import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

export const ApiDemo3 = () => {

  const { register, handleSubmit, reset } = useForm();

  // ===== SUBMIT HANDLER =====
  const submitHandler = async (data) => {
    try {
      console.log("Form Data:", data);

      const res = await axios.post(
        "https://your-api-url.com/register",   // 👈 change URL
        data
      );

      console.log("Response:", res.data);
      alert("Registration Successful ✅");

      reset();

    } catch (error) {
      console.log(error);
      alert("Something went wrong ❌");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>

      <h2>Register Form</h2>

      <form onSubmit={handleSubmit(submitHandler)}
        style={{
          maxWidth: "400px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "15px"
        }}
      >

        <input
          type="text"
          placeholder="Name"
          {...register("name")}
        />

        <input
          type="email"
          placeholder="Email"
          {...register("email")}
        />

        <input
          type="number"
          placeholder="Age"
          {...register("age")}
        />

        <label>
          <input
            type="checkbox"
            {...register("isActive")}
          />
          Is Active
        </label>

        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />

        <button type="submit">
          Submit
        </button>

      </form>

    </div>
  );
};
