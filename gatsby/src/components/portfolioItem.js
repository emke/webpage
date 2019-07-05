import React from "react"

import {
  PortfolioImage,
  SectionHeadline,
  Content,
  PortfolioItemWrapper,
  PortfolioImageWrapper,
} from "./styledComponents"

export default ({ node }) => {
  const imageVersions = node.featured_media.localFile.childImageSharp

  return (
    <PortfolioItemWrapper key={`portfolio-item-${node.id}`}>
      <PortfolioImageWrapper>
        <PortfolioImage
          fluid={[
            { media: `(min-width: 960px)`, ...imageVersions.desktop },
            { media: `(max-width: 959px)`, ...imageVersions.tablet },
            { media: `(max-width: 767px)`, ...imageVersions.mobile },
          ]}
          key={`img-${node.id}`}
        />
      </PortfolioImageWrapper>
      <SectionHeadline dangerouslySetInnerHTML={{ __html: node.title }} />
      <Content dangerouslySetInnerHTML={{ __html: node.content }} />
    </PortfolioItemWrapper>
  )
}
