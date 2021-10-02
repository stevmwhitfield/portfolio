import React from "react";

import * as styles from "../styles/Form.module.scss";

const Form = () => {
  return (
    <form
      id={styles.form}
      name="contact"
      action="/success"
      method="POST"
      netlify
    >
      <div id={styles.nameContainer}>
        <label>
          Name
          <input type="text" name="name" required minLength="2" />
        </label>
      </div>
      <div id={styles.emailContainer}>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
      </div>
      <div id={styles.messageContainer}>
        <label>
          Message
          <textarea name="message" cols="30" rows="8" required></textarea>
        </label>
      </div>
      <button type="submit">Send</button>
    </form>
  );
};

export default Form;
