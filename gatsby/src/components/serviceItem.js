import React from "react"

import {
  SubHeadline,
  Content,
  SectionWrapper,
  ServiceIcon,
  IconHeadlineWrapper,
} from "./styledComponents"

export default ({ node }) => (
  <SectionWrapper>
    <IconHeadlineWrapper>
      <ServiceIcon
        src={node.featured_media.localFile.childImageSharp.fixed.src}
        alt={node.featured_media.localFile.childImageSharp.fixed.originalName}
      />
      <SubHeadline dangerouslySetInnerHTML={{ __html: node.title }} />
    </IconHeadlineWrapper>
    <Content dangerouslySetInnerHTML={{ __html: node.content }} />
  </SectionWrapper>
)
