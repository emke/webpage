import React from "react"
import { ThemeProvider } from "styled-components"

import {
  ViewWrapper,
  GlobalStyles,
  LayoutWrapper,
  theme,
} from "./styledComponents"
import MainMenu from "./mainMenu"
import Footer from "./footer"
import Favicon from "./favIcon"
import Seo from "./seo"

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <ViewWrapper>
      <Seo title="Maik Kuntze " />
      <Favicon />
      <GlobalStyles />
      <MainMenu />
      <LayoutWrapper>{children}</LayoutWrapper>
      <Footer />
    </ViewWrapper>
  </ThemeProvider>
)
