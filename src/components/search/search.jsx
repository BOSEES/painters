import React, { useRef } from "react";
import styles from "./search.module.css";

const Search = ({cars}) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    cars(value);
  }

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  }

  const onClick = () => {
    handleSearch();
  }

  return(
    <form className={styles.form}>
      <div className={styles.search}>
        <h1 className={styles.title}>차량번호로 컬러코드를 조회 할 수 있습니다. </h1>
        <input className={styles.input} ref={inputRef} type="search" placeholder="예: 7351" onKeyPress={onKeyPress}/>
        <button className={styles.button} type="submit" onClick={onClick}>검 색</button>
      </div>
    </form>
  )
}
export default Search;