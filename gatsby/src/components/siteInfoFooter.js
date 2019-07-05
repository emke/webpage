import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

import { SiteTitle } from "./styledComponents"

const SiteInfoWrapper = styled.div`
  display: flex;
  flex: 1;
  margin: auto 0;
`

export default () => (
  <StaticQuery
    query={graphql`
      {
        wordpressPage(slug: {eq: "contact"}) {
          acf {
            email
            phone
          }
        }
      }
    `}
    render={({wordpressPage}) => (
      <SiteInfoWrapper>
        <div>
          <SiteTitle>
            {wordpressPage.acf.email}
          </SiteTitle>
          <div>
            {wordpressPage.acf.phone}
          </div>
        </div>
      </SiteInfoWrapper>
    )}
  />
)
