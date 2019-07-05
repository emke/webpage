import React from "react"
import { graphql, StaticQuery } from "gatsby"

import { LogoImage } from "./styledComponents"

export default () => (
  <StaticQuery
    query={graphql`
      {
        wordpressWpLogo {
          url {
            localFile {
              childImageSharp {
                fixed(width: 40, height: 40) {
                  src
                }
              }
            }
          }
        }
      }
    `}
    render={({ wordpressWpLogo }) => {
      return (
        <LogoImage
          src={wordpressWpLogo.url.localFile.childImageSharp.fixed.src}
        />
      )
    }}
  />
)
