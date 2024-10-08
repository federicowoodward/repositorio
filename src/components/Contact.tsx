"use client";

import RenderTextByToLanguage from "@/utils/textRenderByLanguage";
import styles from "../styles/Contact.module.css";
import InputContact from "./InputContact";
import SendButton from "./SendButton";

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.contactContainer}>
        <div className={styles.inputsContainer}>
          <InputContact
            renderText="Email"
            type="a"
            hw={{ width: "450px", height: "50px" }}
          />
          <InputContact
            renderText={`${RenderTextByToLanguage(
              "Fullname",
              "Nombre completo"
            )}`}
            type="a"
            hw={{ width: "400px", height: "50px" }}
          />
        </div>
        <textarea placeholder={`${RenderTextByToLanguage("Message", "Mensaje")}`}></textarea>
        <div className={styles.sendButtonContainer}>
          <SendButton />
        </div>
      </div>
    </div>
  );
}
