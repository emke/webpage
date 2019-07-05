import React from "react"

import Layout from "../components/layout"
import {
  HeaderWrapper,
  Headline,
  SectionWrapper,
  Content,
} from "../components/styledComponents"

export default ({ pageContext }) => (
  <Layout>
    <HeaderWrapper>
      <Headline
        dangerouslySetInnerHTML={{
          __html: pageContext.title,
        }}
      />
    </HeaderWrapper>
    <SectionWrapper>
      <Content dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    </SectionWrapper>
  </Layout>
)
