import React from 'react';
import { useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClickButton = () => {
    handleSearch();
  };

  const onSearchKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo_title}>
        <img className={styles.img} src='/images/logo.png' alt='logo' />
        <h1 className={styles.title}>React Youtube Project</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type='search'
        placeholder='Search'
        onKeyPress={onSearchKeyPress}
      />
      <button className={styles.button} type='submit' onClick={onClickButton}>
        <img
          className={styles.button_image}
          src='/images/search.png'
          alt='search'
        />
      </button>
    </header>
  );
};
export default SearchHeader;
