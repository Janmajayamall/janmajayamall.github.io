import React from "react";
import Helmet from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "components/Layout";
import Container from "components/Container";

const BooksPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              author
            }
            html
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  
  return (
    <Layout pageName="books">
      <Helmet>
        <title>Books</title>
      </Helmet>
      <Container>
        <h1>Books that I find interesting</h1>
        <h4>Below are good points & notes that I made while reading books that have helped me. This is not a exhaustive list of books that I like.</h4>
        <br/>
        <h4>Also, feel free to contact me to discuss on any of the books mentioned below or any of your suggestions</h4>
        <br/>
        <br/>
        <ol>
          {data.allMarkdownRemark.edges.map((edge) => {
            const {node} = edge
            
            //checking the type of md            
            if(node.fields.slug.split("-")[0]==="book"){
                return (
                    <li>
                        <h3>{node.frontmatter.title}</h3>
                        <h4>{node.frontmatter.author}</h4>
                        <div
                            dangerouslySetInnerHTML={{__html:node.html}}
                        />                        
                    </li>
                  );
            }

            return undefined
          })}
        </ol>
      </Container>
    </Layout>
  );
};

export default BooksPage;
