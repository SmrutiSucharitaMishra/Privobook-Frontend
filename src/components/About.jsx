/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
function About() {
  return (
    <div style={{ position: "relative" }}>
      <div
        class="card"
        style={{
          width: "25rem",
          position: "absolute",
          left: "50%",
          transform: "translate(-50%)",
          boxShadow: "1px 2px 3px rgba(0, 0, 0, 0.388)",
        }}
      >
        <div class="card-body">
          <h5 class="card-title">PrivoBook</h5>
          <p class="card-subtitle mb-2 text-muted">
            Developer - Pallav Kumar Patra
          </p>
          <p class="card-text">
            PrivoBook is a personal notes keeping app which is only private to
            you. Sign up first to get access through your email address and then
            login through your credentials. You can then Add , Delete , Modify
            your personal notes anytime anywhere. <br />
            <hr />
            <em>Tech Stack used - </em>
            <strong>MongoDB, ReactJS, Express.js, Node.js, Bootstrap</strong>
          </p>
          <a
            target={"_blank"}
            href="https://www.linkedin.com/in/pallav-kumar-patra/"
            class="card-link"
          >
            Developer's LinkedIn
          </a>
          <a
            target={"_blank"}
            href="https://github.com/Pallav-19"
            class="card-link"
          >
            Developer's Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
