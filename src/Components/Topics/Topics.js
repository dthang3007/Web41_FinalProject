import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import { Navbar } from "../Home/Navbar";
import { ListPost } from "../Posts/ListPost";

export const Topics = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/topics/:topic" component={ListPost} />
      </Switch>
    </>
  );
};
