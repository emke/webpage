import React from 'react'
import { graphql, StaticQuery } from  "gatsby"

import { FooterAddress } from "./styledComponents"

export default () => (
  <StaticQuery
    query={
      graphql`
        {
          wordpressPage(slug: {eq: "contact"}) {
            acf {
              footer_address
            }
          }
        }
      `
    }
    render={({wordpressPage}) => (
      <FooterAddress dangerouslySetInnerHTML={{__html: wordpressPage.acf.footer_address}} />
    )}
  />
)
