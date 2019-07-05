import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import {
  Headline,
  Content,
  SectionHeadline,
  HeaderWrapper,
  SectionWrapper,
} from "../components/styledComponents"
import ServiceItem from "../components/serviceItem"

export default ({ pageContext }) => (
  <StaticQuery
    query={graphql`
      {
        wordpressPage(slug: { eq: "services" }) {
          slug
          title
        }
        allWordpressWpServices {
          edges {
            node {
              id
              title
              content
              featured_media {
                localFile {
                  childImageSharp {
                    fixed(width: 80, height: 80) {
                      originalName
                      src
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={({ wordpressPage, allWordpressWpServices }) => {
      return (
        <Layout>
          <HeaderWrapper>
            <Headline dangerouslySetInnerHTML={{ __html: pageContext.title }} />
            <Content
              dangerouslySetInnerHTML={{
                __html: pageContext.content,
              }}
            />
          </HeaderWrapper>
          <SectionWrapper>
            <SectionHeadline
              dangerouslySetInnerHTML={{
                __html: wordpressPage.title,
              }}
            />
          </SectionWrapper>
          {allWordpressWpServices.edges.map(edge => (
            <ServiceItem
              node={edge.node}
              key={`service-section-${edge.node.id}`}
            />
          ))}
        </Layout>
      )
    }}
  />
)
