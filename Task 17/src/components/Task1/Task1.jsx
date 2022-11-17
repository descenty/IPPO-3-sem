import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";
import Button from "./Button/Button";
import { buttonType, buttonState } from "./Button/Button";
import styles from "./Task1.module.css";

const Task1 = () => {
  const [currentButtonType, setCurrentButtonType] = useState(
    buttonType.DEFAULT
  );
  const [currentButtonState, setCurrentButtonState] = useState(
    buttonState.DEFAULT
  );
  return (
    <div className={styles.task1}>
      <div>
        <Button type={currentButtonType} state={currentButtonState}>
          Отправить
        </Button>
      </div>
      <h2>Тип кнопки:</h2>
      <div className={styles.buttons}>
        {Object.entries(buttonType).map(([key, value]) => (
          <Button
            key={key}
            onClick={() => setCurrentButtonType(value)}
            type={currentButtonType === value && buttonType.PRIMARY}
          >
            {key}
          </Button>
        ))}
      </div>
      <h2>Состояние кнопки:</h2>
      <div className={styles.buttons}>
        {Object.entries(buttonState).map(([key, value]) => (
          <Button
            key={key}
            onClick={() => setCurrentButtonState(value)}
            type={currentButtonState === value && buttonType.PRIMARY}
          >
            {key}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Task1;
