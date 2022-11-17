import { useEffect, useState } from "react";
import styles from "./Task2.module.css";
import Button from "../Task1/Button/Button";
import {
  CloseOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { buttonType, buttonState } from "../Task1/Button/Button";

const Task2 = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")));
    setCompletedTasks(JSON.parse(localStorage.getItem("completed-tasks")));
  }, []);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  useEffect(() => {
    localStorage.setItem("completed-tasks", JSON.stringify(completedTasks));
  }, [completedTasks]);
  return (
    <div className={styles.task2}>
      <h2>Список задач</h2>
      <div className={styles.task_input}>
        <input
          onChange={(event) => setInputValue(event.target.value)}
          value={inputValue}
          placeholder="Добавить задачу"
        ></input>
        <Button
          type={buttonType.PRIMARY}
          state={!inputValue && buttonState.DISABLED}
          onClick={() => {
            inputValue &&
              setTasks(
                [
                  {
                    name: inputValue,
                    created_at: new Date().toLocaleString("ru", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    }),
                  },
                ].concat(tasks)
              );
            setInputValue("");
          }}
        >
          Добавить
        </Button>
      </div>
      <div className={styles.tasks}>
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <div key={index} className={styles.task}>
              <div className={styles.task_data}>
                <span>{task.created_at}</span>
                <span>{task.name}</span>
              </div>
              <CheckCircleOutlined
                className={styles.check_button}
                onClick={() => {
                  setCompletedTasks(
                    [
                      {
                        ...task,
                        completed_at: new Date().toLocaleString("ru", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        }),
                      },
                    ].concat(completedTasks)
                  );
                  setTasks(tasks.filter((_task) => task !== _task));
                }}
              />
            </div>
          ))
        ) : (
          <span className={styles.no_tasks}>нет активных задач</span>
        )}
      </div>
      <h3>Завершённые задачи:</h3>
      <div className={styles.tasks}>
        {completedTasks.length > 0 ? (
          completedTasks.map((task, index) => (
            <div key={index} className={`${styles.task} ${styles.completed}`}>
              <div className={styles.task_data}>
                <span>Выполнено: {task.completed_at}</span>
                <span>{task.name}</span>
              </div>
              <CloseCircleOutlined
                className={styles.delete_button}
                onClick={() => {
                  setCompletedTasks(
                    completedTasks.filter((_task) => task !== _task)
                  );
                }}
              />
            </div>
          ))
        ) : (
          <span className={styles.no_tasks}>нет завершённых задач</span>
        )}
      </div>
    </div>
  );
};

export default Task2;
