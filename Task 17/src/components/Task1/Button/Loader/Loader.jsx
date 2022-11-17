import styles from "./Loader.module.css";

const Loader = ({show, blue}) => {
  return (
    <div className={`${styles.lds_ring} ${show ? styles.show : styles.hide} ${blue !== false ? styles.blue : ""}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
