import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

import Logo from "./logo"
import { HideMobile, SiteTitle } from "./styledComponents"

const SiteInfoWrapper = styled.div`
  display: flex;
  flex: 1;
  margin: auto 0;
`

export default () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressSiteMetadata {
          edges {
            node {
              name
              description
            }
          }
        }
      }
    `}
    render={props => (
      <SiteInfoWrapper>
        <Logo />
        <div>
          <SiteTitle>
            {props.allWordpressSiteMetadata.edges[0].node.name}
          </SiteTitle>
          <HideMobile>
            {props.allWordpressSiteMetadata.edges[0].node.description}
          </HideMobile>
        </div>
      </SiteInfoWrapper>
    )}
  />
)
