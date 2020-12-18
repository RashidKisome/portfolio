import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import rashidportfoliopic2 from "../images/rashidportfoliopic2.jpg"

const BlogList = () => {
  const data = useStaticQuery(
    graphql`
      query BlogList {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { frontmatter: { blog: { eq: true } } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
              }
            }
          }
        }
      }
    `
  )
  const { allMarkdownRemark } = data

  return (
    <>
      <main role="main">
        <div className="content">
          <div class="intro-text">
            <img
              class="rashidportfoliopic"
              src={rashidportfoliopic2}
              alt="Logo"
            />
            <div className="intro-textdiv">
              {" "}
              <h3>
                My name is Rashid! I am an avid learner with a passion for
                software development and technology in general. My end goal with
                this portfolio is to not only share projects but eventually turn
                it into a blog where I also document my journey as a developer
                and share my thoughts and ideas.
              </h3>{" "}
            </div>
          </div>
          {allMarkdownRemark.edges.map(({ node }) => (
            <article className="main-article">
              {/* <h1>Hi name is rashid</h1> */}
              {/* <div className="wrap-content">
                <header className="header-article">
                  <h2 className="title-article">
                    <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                  </h2>
                  <div className="post-date">
                    <span>{node.frontmatter.date}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  </div>
                </header>
                <p>
                  {node.frontmatter.description}{" "}
                  <Link to={node.fields.slug}>(Read more ...)</Link>
                </p>
              </div> */}
            </article>
          ))}
        </div>
      </main>
    </>
  )
}

export default BlogList
