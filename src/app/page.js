"use client";
import React, { useState } from "react";
import Jokes from "./Jokes";

const Page = () => {
  const [title, setTitle] = useState("");
  const [disc, setDisc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const deleteHandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setMainTask(copytask);
    
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, disc }]);
    setDisc("");
    setTitle("");
    console.log(mainTask);
  };
  let renderTask = (
    <h1 className="text-2xl font-bold text-green-700">No Task available</h1>
  );

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li
          key={i}
          className="flex flex-row justify-between min-w-0 max-w-screen-lg m-auto mb-2 text-2xl  border p-2"
        >
          <h1 className="text-red-500 font-bold ">Task -{i+1}</h1>
          <h5 className="">{t.title}</h5>
          <p>{t.disc}</p>
          <button
            onClick={() => deleteHandler(i)}
            className="bg-red-600 pl-2 pr-2  rounded-lg"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
     <div>
      <h1 className="bg-green-400 text-3xl text-center p-10">Todo App</h1>
      <h1 className="m-2 p-2 text-center font-bold">Happy your day with fantastic jokes ,<span className="text-xs"> click jokes-button </span></h1>
      <div className="min-w-0 max-w-full min-h-0 max-h-full bg-white">
    
        <Jokes/>
      </div>
      <form onSubmit={handelSubmit}>
        <div className="flex flex-row justify-center items-center">
          <input
            type="text"
            placeholder="Enter Your Task"
            className="w-1/4 h-10 text-black border border-black  m-2 p-4 text-lg rounded-lg "
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></input>

          <textarea
            name="description"
            rows=""
            cols="50"
            placeholder="Description..."
            className=" text-black border-gray-800 m-2 p-2 border  text-lg rounded-lg "
            value={disc}
            onChange={(e) => {
              setDisc(e.target.value);
            }}
          ></textarea>
          <button className="bg-red-600 font-bold rounded-xl m-4 p-3">
            Add Task
          </button>
        </div>
      </form>

      <hr />
      <div className=" p-8 text-center">
        <ul >{renderTask}</ul>
      </div>
      </div>
    </>
  );
};

export default Page;
