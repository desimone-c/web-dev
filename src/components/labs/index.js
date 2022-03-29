import React from "react";
import {Link} from "react-router-dom";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoList from "./todo/TodoList";

import ReduxExamples from "./redux-examples";


const Labs = () => {
    return(
      <>
          <h1>Labs</h1>
          <ReduxExamples/>
          <h1>Non React.js Assignments</h1>
            <ul>
              <li><a href="./a2/index.html">Assignment 2</a></li>
              <li><a href="./a3/css/index.html">Assignment 3</a></li>
              <li><a href="./a4/bootstrap/index.html">Assignment 4</a></li>
              <li><a href="./a5/js/index.html">Assignment 5</a></li>
            </ul>
          <Link to="/hello">
              Hello
          </Link> |
          <Link to="/tuiter">
              Tuiter
          </Link>
      </>
    )
};

export default Labs;
