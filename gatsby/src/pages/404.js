import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HeaderWrapper, Headline, Content } from "../components/styledComponents"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <HeaderWrapper>
      <Headline>404</Headline>
      <Content>This page seems to be gone with the wind</Content>
    </HeaderWrapper>
  </Layout>
)

export default NotFoundPage
