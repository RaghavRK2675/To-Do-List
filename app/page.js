"use client";
import React, { useState } from "react";

const Page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [maintask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...maintask, { title, description }]);
    setTitle("");
    setDescription("");
  };

  const deleteHandler = (i) => {
    let copied = [...maintask];
    copied.splice(i, 1);
    setMainTask(copied);
  };

  // Default message when no tasks exist
  let renderedTask = (
    <h2>
      <br />
      <center>No tasks yet</center>
    </h2>
  );

  // Render the task list if there are tasks
  if (maintask.length > 0) {
    renderedTask = (
      <>
        {/* Heading for Title and Description */}
        <li className="flex items-center justify-between mb-8">
          <div className="flex items-center justify-between w-2/3">
            <h6 className="text-xl font-semibold w-1/2">Title</h6>
            <h6 className="text-xl font-semibold w-1/2">Description</h6>
          </div>
        </li>

        {/* Task list rendering */}
        {maintask.map((t, i) => (
          <li key={i} className="flex items-center justify-between mb-8">
            <div className="flex items-center justify-between w-2/3">
              <h6 className="text-xl font-semibold w-1/2">{t.title}</h6>
              <h6 className="text-xl font-semibold w-1/2">{t.description}</h6>
            </div>
            <button
              onClick={() => {
                deleteHandler(i);
              }}
              className="bg-black-100 text-white px-4 py-2 font-bold border border-white"
            >
              Delete
            </button>
          </li>
        ))}
      </>
    );
  }

  return (
    <>
      <br />
      <h1 className="text-white p-5 text-5xl font-bold text-center">To Do List</h1>
      
      {/* Welcome message and link */}
      <div className="text-center">
        <h1>Welcome to the To-Do List App</h1>
        <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer">
          
        </a>
      </div>
      
      <br/>
      <br/>

      <form className="flex justify-center" onSubmit={submitHandler}>
        <center>
          <input
            type="text"
            className="text-2xl border border-white m-8 px-4 py-2 bg-black"
            placeholder="Enter title here"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <input
            type="text"
            className="text-2xl border border-white m-8 px-4 py-2 bg-black"
            placeholder="Enter description here"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />

          <button className="text-2xl border border-white m-8 px-4 py-2 bg-black">
            Add task
          </button>
        </center>
      </form>
      <br />
      <hr />
      <div className="p-4 bg-black-200">
        <ul>{renderedTask}</ul>
      </div>
    </>
  );
};

export default Page;
