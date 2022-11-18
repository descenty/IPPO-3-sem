import { useEffect, useState } from "react";
import styles from "./CatFact.module.css";

const CatFact = ({fact}) => {
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    fetch("https://cataas.com/cat").then((response) =>
      response.blob().then((imageBlob) => {
        setImageURL(URL.createObjectURL(imageBlob));
      })
    );
  }, []);

  return (
    <div className={styles.cat_fact}>
      <img className={styles.cat_image} src={imageURL} alt="cat" />
      <p>{fact.length > 150 ? `${fact.slice(0, 150)}...` : fact }</p>
    </div>
  );
};

export default CatFact;
