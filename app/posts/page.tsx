import React from "react";
import styles from "./postPage.module.css";

const Posts = () => {
  return (
    <>
      <h1 className={styles.bgRed}>Post ni ye</h1> {/* with css module */}
      <br />
      <h1 className="bg-pink-500">Post tailwind ye</h1> {/* with tailwind */}
    </>
  );
};

export default Posts;
