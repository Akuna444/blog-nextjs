import classes from "./contact.module.css";

function ContactForm() {
  return (
    <section className={classes.contact}>
      <h1>Contact Form</h1>
      <form className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input id="email" type="email" placeholder="Your Email" required />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input id="name" type="text" placeholder="Your Name" required />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" rows="5" placeholder="Your Message" />
        </div>
        <div className={classes.actions}>
          <button>Submit</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
