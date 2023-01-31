import React from "react";

export const Contact = () => {
  return (
    <>
      <section className="contact">
        <h1>Contact me</h1>
        <form action="">
          <label className="name">
            Name:
            <input type="text" id="name" />
          </label>

          <label className="email">
            Email:
            <input type="email" />
          </label>

          <label message="message" className="message">
            Message:
            <textarea name="" id="message"></textarea>
          </label>

          <input class="button form-button" type="submit" value="SEND" />
        </form>
      </section>
    </>
  );
};
