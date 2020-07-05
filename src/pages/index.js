import React from "react";
import Helmet from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";

import img_gatsby from "assets/images/cover.jpeg";

const IndexPage = () => {
  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Container>
        <p className="cover">
          <img style={{borderRadius:20}} src={img_gatsby} alt="Woops..something went" />
        </p>
        <h1 className="heading">Hello! I am Janmajaya.</h1>
        <p>Welcome to my site. I use this to write stuff.</p>
      </Container>
    </Layout>
  );
};

export default IndexPage;
