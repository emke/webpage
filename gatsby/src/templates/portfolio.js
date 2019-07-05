import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import PortfolioItem from "../components/portfolioItem"
import { PortfolioGrid } from "../components/styledComponents"
import ClientItem from "../components/clientItem"
import { ItemGrid } from "../components/styledComponents"
import {
  HeaderWrapper,
  Headline,
  SubHeadline,
  SectionWrapper,
} from "../components/styledComponents"

export default ({ pageContext }) => (
  <StaticQuery
    query={graphql`
      {
        wordpressPage(slug: { eq: "clients" }) {
          slug
          title
        }
        allWordpressWpPortfolio {
          edges {
            node {
              id
              slug
              title
              content
              excerpt
              featured_media {
                localFile {
                  childImageSharp {
                    desktop: fluid(maxHeight: 284) {
                      ...GatsbyImageSharpFluid_noBase64
                      presentationWidth
                      presentationHeight
                    }
                    tablet: fluid(maxWidth: 760) {
                      ...GatsbyImageSharpFluid_noBase64
                      presentationWidth
                      presentationHeight
                    }
                    mobile: fluid(maxHeight: 420) {
                      ...GatsbyImageSharpFluid_noBase64
                      presentationWidth
                      presentationHeight
                    }
                  }
                }
              }
            }
          }
        }
        allWordpressWpClients {
          edges {
            node {
              id
              slug
              title
              excerpt
              featured_media {
                localFile {
                  childImageSharp {
                    desktop: fluid(maxWidth: 140) {
                      ...GatsbyImageSharpFluid_noBase64
                      presentationWidth
                      presentationHeight
                    }
                    tablet: fluid(maxWidth: 100) {
                      ...GatsbyImageSharpFluid_noBase64
                      presentationWidth
                      presentationHeight
                    }
                    mobile: fluid(maxWidth: 90) {
                      ...GatsbyImageSharpFluid_noBase64
                      presentationWidth
                      presentationHeight
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={({ wordpressPage, allWordpressWpPortfolio, allWordpressWpClients }) => {
      return (
        <Layout>
          <HeaderWrapper>
            <Headline
              dangerouslySetInnerHTML={{
                __html: pageContext.title,
              }}
            />
          </HeaderWrapper>
          <PortfolioGrid>
            {allWordpressWpPortfolio.edges.map(edge => (
              <PortfolioItem
                node={edge.node}
                key={`portfolio-item-${edge.node.id}`}
              />
            ))}
          </PortfolioGrid>
          <SectionWrapper/>
            <SubHeadline
              dangerouslySetInnerHTML={{
                __html: wordpressPage.title,
              }}
            />
          <SectionWrapper/>
          <ItemGrid>
            {allWordpressWpClients.edges.map(edge => (
              <ClientItem
                node={edge.node}
                key={`client-item-${edge.node.id}`}
              />
            ))}
          </ItemGrid>
        </Layout>
      )
    }}
  />
)
