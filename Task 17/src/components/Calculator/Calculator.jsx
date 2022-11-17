import { useState } from "react";
import styles from "./Calculator.module.css";

const Calculator = () => {
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);
  const [result, setResult] = useState();
  const calculateResult = (operation) =>
    setResult(
      {
        "+": `${numberA} + ${numberB} = ${numberA + numberB}`,
        "-": `${numberA} - ${numberB} = ${numberA - numberB}`,
        "*": `${numberA} * ${numberB} = ${numberA * numberB}`,
        "/": `${numberA} / ${numberB} = ${numberA / numberB}`,
      }[operation]
    );
  return (
    <div className={styles.calculator}>
      <h3>Результат: {result}</h3>
      <div className={styles.numbers}>
        <input
          type="number"
          value={numberA}
          onChange={(event) =>
            setNumberA(Number.parseFloat(event.target.value))
          }
        />
        <input
          type="number"
          value={numberB}
          onChange={(event) =>
            setNumberB(Number.parseFloat(event.target.value))
          }
        />
      </div>
      <div className={styles.buttons}>
        <button onClick={() => calculateResult("+")}>Сложить</button>
        <button onClick={() => calculateResult("-")}>Вычесть</button>
        <button onClick={() => calculateResult("*")}>Умножить</button>
        <button onClick={() => calculateResult("/")}>Поделить</button>
      </div>
    </div>
  );
};

export default Calculator;
