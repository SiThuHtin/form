"use client";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [form, setform] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setform((prevValue) => {
      return { ...prevValue, [name]: value };
    });
    
  };
  function handleSubmit(event) {

    event.preventDefault();
    axios
      .post("http://localhost:8000/api/user", {
        email: form.email,
        password : form.password
      })
      .then((response) => {
        alert(response.data);
        console.log("Insert Successfully");
      })
      .catch(() => {
        alert("not");
        console.log("Oops, request is failed");
      });
  }
  return (
    <main className="flex  items-center justify-center h-screen">
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleSubmit}
      >
        <h1>Login</h1>
        <input
          className="mb-5"
          placeholder="email"
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          className="mb-5"
          placeholder="password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <button class="bg-blue-500 text-white px-2 py-1 rounded " type="submit">
          Log In
        </button>
      </form>
    </main>
  );
}
