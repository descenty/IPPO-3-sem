import styles from './App.module.css'
import { useEffect, useState } from "react";
import CatFact from "./CatFact/CatFact";

function App() {
  const [facts, setFacts] = useState([]);
  useEffect(() => {
    fetch("https://meowfacts.herokuapp.com/?count=8").then((response) =>
      response.json().then((json) => setFacts(json.data))
    );
  }, []);

  return (
    <div className={styles.cat_facts}>
      {facts.map((fact, index) => (
        <CatFact key={index} fact={fact} />
      ))}
    </div>
  );
}

export default App;
  