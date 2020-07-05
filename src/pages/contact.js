import React from "react";
import Helmet from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";

import mail from "assets/images/SVG/mail.svg";
import linked from "assets/images/SVG/linkedin.svg";
import github from "assets/images/SVG/github.svg";
import dribbble from "assets/images/SVG/dribbble.svg";
import insta from "assets/images/SVG/instagram.svg";

const ContactPage = () => {
  return (
    <Layout pageName="contact">
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <Container>
        <h1>Contact</h1>
        <p>Feel free to contact me anytime!</p>
        <div className="contact__icon">
          <a
            href="https://github.com/janmajayamall"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="contact__icon-item">
              <use xlinkHref={`#${github.id}`} />
            </svg>
          </a>

    
          <a href="mailto:janmajayamall18@gmail.com" rel="noopener noreferrer">
            <svg className="contact__icon-item">
              <use xlinkHref={`#${mail.id}`} />
            </svg>
          </a>

          <a
            href="https://www.instagram.com/janmajayamall"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="contact__icon-item">
              <use xlinkHref={`#${insta.id}`} />
            </svg>
          </a>
        </div>
      </Container>
    </Layout>
  );
};

export default ContactPage;
