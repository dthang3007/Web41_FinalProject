import React, { useEffect } from "react";
import { ListPost } from "../Posts/ListPost";
import { Navbar } from "./Navbar";
import {
  Route,
  Switch,
  useRouteMatch,
  NavLink,
  useParams,
} from "react-router-dom";
import { CreatePost } from "../Posts/CreatePost";

const data = [
  { id: 1, title: "Title", content: "Contentttttttttttttttttttttttt" },
  {
    id: 2,
    title: "Tizxcvtle",
    content: "xzcvConxzcvtentttzxcvttttttttttttttttttttt",
  },
];

export const Home = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ListPost}></Route>
      </Switch>
    </>
  );
};
