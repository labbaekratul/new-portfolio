import React from "react";
import styles from "../styles/HeroSection.module.css";
import img from "../public/images/ratul-removebg-preview.png";
import Image from "next/image";
import Typewriter from "typewriter-effect";

export default function HeroSection() {
  return (
    <section className={styles.heroSize}>
      <div className="container">
        <div className="row ">
          <div className="col-6">
            <div className={styles.textArea}>
              <h6>WELCOME TO MY WORLD</h6>
              <div>
                <h1 className={styles.headingName}>
                  Hi, I’m <span>Labbaek Ratul</span>
                </h1>
                <h2
                  style={{ marginTop: "10px", fontSize: "40px" }}
                  className="d-flex"
                >
                  <Typewriter
                    options={{
                      strings: [
                        "a Professional Developer",
                        "a Freelancer",
                        "an Entrepreneur",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h2>
              </div>
              <p>
                2+ years of Experience in Designing, Developing and Integrating
                Front-End & Back-End based applications. Experience in
                developing application using javaScript, TypeScript, React,
                Next.js, Node.js, SQL, MongoDB, and Restful Web Services.
              </p>
            </div>
          </div>
          <div className="col-6">
            <div className={styles.heroImage}>
              <Image src={img} alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
