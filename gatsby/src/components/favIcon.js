import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Helmet from "react-helmet"

export default () => (
  <StaticQuery
    query={graphql`
      {
        wordpressWpFavicon {
          url {
            localFile {
              childImageSharp {
                fixed(width: 48, height: 48) {
                  src
                }
              }
            }
          }
        }
      }
    `}
    render={({ wordpressWpFavicon }) => {
      return (
        <Helmet
          meta={[
            {
              name: "description",
              content: "Maik - Full Stack Web Developer",
            },
            {
              name: "keywords",
              content: "fullstack, frontend, developer",
            },
          ]}
          link={[
            {
              rel: "icon",
              type: "image/x-icon",
              href: wordpressWpFavicon.url.localFile.childImageSharp.fixed.src,
            },
          ]}
        />
      )
    }}
  />
)
