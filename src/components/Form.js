import React from "react";

import * as styles from "../styles/Form.module.scss";

const Form = () => {
  return (
    <form id={styles.form} name="contact" netlify>
      <div id={styles.nameContainer} className={styles.formField}>
        <label>Name</label>
        <input type="text" name="name" />
      </div>
      <div id={styles.emailContainer} className={styles.formField}>
        <label>Email</label>
        <input type="email" name="email" />
      </div>
      <div id={styles.messageContainer} className={styles.formField}>
        <label>Message</label>
        <textarea name="message" cols="30" rows="8"></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  );
};

export default Form;
