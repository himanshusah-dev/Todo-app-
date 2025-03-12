"use client";
import React, { useState } from "react";
// import Button from "./Button";

const Jokes = () => {
  const [jokes, setJokes] = useState("I think you are Funny");

  const fetchApi = async () => {
    try {
      const res = await fetch(
        "https://sv443.net/jokeapi/v2/joke/Programming?type=single"
      );
      const data = await res.json();
      setJokes(data.joke);
    } catch (error) {
      setJokes("Error in fetching");
    }
  };
  return (
    <>
      <div className="w-full h-full text-black flex flex-row justify-around border">
        <p className="font-bold text-center text-2xl text-green-700">{jokes}</p>
        <button className="bg-red-600 w-28 m-4 p-2 rounded-xl" onClick={fetchApi}>
          jokes
        </button>
      </div>
    </>
  );
};

export default Jokes;
