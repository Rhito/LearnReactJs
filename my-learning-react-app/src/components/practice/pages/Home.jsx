import React from "react";
import CountComponent from "./CountComponent";
import FocusWithRef from "./FocusWithRef";
import PreviewImg from "./PreviewImg";
import PreviousState from "./PreviousState";
import Timer from "./Timer";
import TimerWithRef from "./TimerWithRef";
import TodoList from "./TodoList";
import Checkbox from "./Checkbox";
import InputMirroring from "./InputMirroring";
import Integration from "./Integration";
import NavWithParam from "./NavWithParam";
import UseCallbackExample from "./UseCallbackExample";

export default function Home() {
  return (
    <div>
      <UseCallbackExample />
      <hr />
      <NavWithParam />
      <hr />
      <CountComponent />
      <hr />
      <FocusWithRef />
      <hr />
      <InputMirroring />
      <hr />
      <Integration />
      <hr />
      <PreviewImg />
      <hr />
      <PreviousState />
      <hr />
      <Timer />
      <hr />
      <TimerWithRef />
      <hr />
      <TodoList />
      <hr />
      <Checkbox />
    </div>
  );
}
