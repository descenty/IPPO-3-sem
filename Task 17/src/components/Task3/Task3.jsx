import { useEffect, useState } from "react";
import Button from "../Task1/Button/Button";
import { buttonType, buttonState } from "../Task1/Button/Button";
import styles from "./Task3.module.css";

const Task3 = () => {
  const [goods, setGoods] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, selectCategory] = useState([]);
  const [startPriceInput, setStartPriceInput] = useState(0);
  const [endPriceInput, setEndPriceInput] = useState(0);
  const [startPrice, setStartPrice] = useState(0);
  const [endPrice, setEndPrice] = useState(0);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((response) =>
      response.json().then((data) => {
        setGoods(data);
        setCategories(Array.from(new Set(data.map((good) => good.category))));
        let minPrice = Math.min(...data.map((good) => good.price));
        let maxPrice = Math.max(...data.map((good) => good.price));
        setStartPrice(minPrice);
        setStartPriceInput(minPrice);
        setEndPrice(maxPrice);
        setEndPriceInput(maxPrice);
      })
    );
  }, []);
  useEffect(() => selectCategory(categories[0]), [categories]);
  return (
    <div className={styles.task3}>
      <div className={styles.prices_range}>
        <div>
          <span>Цена от</span>
          <input
            placeholder="цена от"
            type="number"
            value={startPriceInput}
            onChange={(event) => setStartPriceInput(event.target.value)}
          />$
        </div>
        <div>
          <span>Цена до</span>
          <input
            placeholder="цена до"
            type="number"
            value={endPriceInput}
            onChange={(event) => setEndPriceInput(event.target.value)}
          />$
        </div>
        <Button
          onClick={() => {
            setStartPrice(startPriceInput);
            setEndPrice(endPriceInput);
          }}
        >
          Применить
        </Button>
      </div>
      <div className={styles.categories}>
        {categories.map((category) => (
          <Button
            key={category}
            type={selectedCategory === category && buttonType.PRIMARY}
            onClick={() => selectCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className={styles.goods}>
        {goods.filter(
          (good) =>
            good.price >= startPrice &&
            good.price <= endPrice &&
            good.category === selectedCategory
        ).length > 0 ? (
          goods
            .filter(
              (good) =>
                good.price >= startPrice &&
                good.price <= endPrice &&
                good.category === selectedCategory
            )
            .map((good) => (
              <div key={good.id} className={styles.good}>
                <img src={good.image} alt={good.title}></img>
                <p className={styles.description}>{good.title}</p>
                <p className={styles.price}>{good.price} $</p>
              </div>
            ))
        ) : (
          <p>Товаров не нашлось</p>
        )}
      </div>
    </div>
  );
};

export default Task3;
