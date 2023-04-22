import { Fragment } from "react";
import Head from "next/head";
import ContactForm from "../components/contact/contact-form";
function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact Page</title>
        <meta name="description" content="This your contact page to find me" />
      </Head>
      <ContactForm />
    </Fragment>
  );
}

export default ContactPage;
