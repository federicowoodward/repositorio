"use cliente";

import styles from "../styles/Header.module.css";

interface HeaderProps {
  position: string;
}

export default function Header({ position }: HeaderProps) {
  return (
    <div className={styles.header}>
      <div className="logo">
        <h1 className={`${styles.logoh1} lily-script-one-regular Cobject`}>
          {" "}
          FW
        </h1>
      </div>
      <div className={styles.navbar}>
        <p className="lexend-zetta Coffwhite">HOME</p>
        <p className="lexend-zetta Coffwhite">ABOUT ME</p>
        <p className="lexend-zetta Coffwhite">PROJECTS</p>
        <p className="lexend-zetta Coffwhite">LET'S TALK!</p>
        <div className="toggle-button-cover">
          <div className="button r" id="button-3">
            <input type="checkbox" className="checkbox" />
            <div className="knobs"></div>
            <div className="layer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
