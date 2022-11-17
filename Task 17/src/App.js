import { useState } from "react";
import Calculator from "./components/Calculator/Calculator";
import styles from "./App.module.css";
import Task1 from "./components/Task1/Task1";
import Task2 from "./components/Task2/Task2";
import Task3 from "./components/Task3/Task3";

const App = () => {
  return (
    <div className={styles.app}>
      {/* <Calculator /> */}
      <Task1 />
      <Task2 />
      <Task3 />
    </div>
  );
};

export default App;
