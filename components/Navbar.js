import React from "react";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import proImg from "../public/images/ratul.jpg";

export default function Navbar() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="d-flex mt-5 align-items-center">
          <div className={`col-5`}>
            <div className={`${styles.icon}`}>
              <div className={`px-1 className=${styles.iconImg}`}>
                <Image src={proImg} alt="icon" width={60} height={60} />
              </div>
              <p className="m-0">LABBAEK</p>
            </div>
          </div>
          <div className="col-7">
            <div className="mx-5">
              <ul className={styles.navbar}>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>PORTFOLIO</li>
                <li>RESUME</li>
                <li>BLOG</li>
                <li>CONTACT</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
