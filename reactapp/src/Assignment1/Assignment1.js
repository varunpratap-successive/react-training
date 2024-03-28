import React from "react";

import Greeting from "./Greeting";
import UserCard from "./UserCard";
import Weather from "./Weather";
import Counter from "./Counter";
import TaskList from "./TaskList";
import Button from "./Button";

import "./Assignment1.css";

function Assignment1() {
  const tasksArray = ["Task1", "Task2", "Task3", "Task4"];
  return (
    <>
      <div id="mainass1">
        <div id="q1">
          <h3>Question1</h3>
          <Greeting />
        </div>
        <div id="q2">
          <h3>Question2</h3>
          <UserCard
            name="Varun"
            email="varun@gmail.com"
            avatarURL="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
          />
          <UserCard
            name="Shiv"
            email="shiv@gmail.com"
            avatarURL="https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk"
          />
          <UserCard
            name="Thakur"
            email="thakur@gmail.com"
            avatarURL="https://placebeard.it/250/250"
          />
        </div>
        <div id="q3">
          <h3>Question3</h3>
          <Weather temperature="26" />
          <Weather temperature="9" />
        </div>
        <div id="q4">
          <h3>Question4</h3>
          <Counter />
        </div>
        <div id="q5">
          <h3>Question5</h3>
          <TaskList taskArray={tasksArray} />
        </div>
        <div id="q6">
          <h3>Question6</h3>
          <Button text="btn1 text" textcolor="Red" />
          <Button text="btn2 text" textcolor="Blue" />
        </div>
      </div>
    </>
  );
}

export default Assignment1;
