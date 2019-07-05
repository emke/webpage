import _ from "lodash"
import styled, { createGlobalStyle } from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"

// GLOBALS
export const theme = {
  white: "#FFF",
  black: "#3A3A3A",
  darkGray: "#A7ADAD",
  lightGray: "#F1F2F2",
  whiteGray: "#F6F9F8",
  blue: "#49A9FE",
  blueWhite: "#E9E9FE",
  red: "#E74546",
  orange: "#1EE795",
}

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,400,700|Space+Mono:400&display=swap');

  body {
    font-family: "Roboto", sans-serif;
    margin: 0 16px !important;
    padding: 0 !important;
    color: ${theme.black};
    background-color: ${theme.blueWhite};
    min-height: 100vh;
  }
`

export const ViewWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const LayoutWrapper = styled.div`
  max-width: 100%;
  width: 960px;
  margin: 0 auto;
  flex: 1;
  padding-bottom: 60px;
  @media (max-width: 959px) {
    max-width: 100%;
    width: 100%;
    padding-bottom: 0;
  }
`

// TEXT
export const Headline = styled.h1`
  font-family: "Space Mono", sans-serif;
  font-weight: bold;
  font-size: 48px;
  border-bottom: 48px solid ${props => props.theme.orange};
  width: fit-content;
  @media (max-width: 959px) {
    font-size: 42px;
  }
  @media (max-width: 767px) {
    font-size: 34px;
  }
`

export const SubHeadline = styled.h2`
  font-family: "Space Mono", sans-serif;
  font-size: 34px;
  border-bottom: 28px solid ${props => props.theme.orange};
  width: fit-content;
  @media (max-width: 959px) {
    font-size: 32px;
  }
  @media (max-width: 767px) {
    font-size: 28px;
  }
`

export const Content = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: lighter;
  font-size: 34px;
  @media (max-width: 959px) {
    font-size: 32px;
  }
  @media (max-width: 767px) {
    font-size: 28px;
  }
`

export const SectionHeadline = styled.h1`
  font-family: "Space Mono", sans-serif;
  font-size: 34px;
  border-bottom: 4px solid ${props => props.theme.blue};
  width: fit-content;
  @media (max-width: 959px) {
    font-size: 32px;
  }
  @media (max-width: 767px) {
    font-size: 28px;
  }
`

// LAYOUT
export const HeaderWrapper = styled.div`
  width: 100%;
  margin: 120px 0 124px;
  @media (max-width: 767px) {
    margin: 40px 0 48px;
  }
`

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
`

export const SectionWrapper = styled.div`
  margin: 86px 0;
  @media (max-width: 767px) {
    margin: 44px 0;
  }
`

export const ItemGrid = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: auto auto auto auto;
  @media (max-width: 767px) {
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 500px) {
    grid-template-columns: auto auto;
  }
`

export const PortfolioGrid = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: auto auto;
  column-gap: 32px;
  @media (max-width: 959px) {
    grid-template-columns: auto;
  }
`

export const HideMobile = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`

// FORM
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  color: ${props => props.theme.black};
  font-size: 34px;
  margin-top: 14px;
`

export const Textarea = styled.textarea`
  flex: 1;
  line-height: 24px;
  font-size: 24px;
  padding: 14px;
  margin: 8px 0;
  border: none;
  border-left: 4px solid ${props => props.theme.lightGray};
  border-right: 4px solid ${props => props.theme.lightGray};
  outline: none;
  transition: border 0.3s;
  resize: none;
  &:focus {
    border-left: 4px solid ${props => props.theme.black};
    border-right: 4px solid ${props => props.theme.black};
  }
`

export const Input = styled.input`
  flex: 1;
  line-height: 24px;
  font-size: 24px;
  padding: 14px;
  margin: 8px 0;
  border: none;
  border-bottom: 4px solid ${props => props.theme.lightGray};
  outline: none;
  transition: border 0.3s;
  &:focus {
    border-bottom: 4px solid ${props => props.theme.black};
  }
`

export const Button = styled.button`
  width: 180px;
  height: 60px;
  font-weight: bold;
  color: ${props => props.theme.white};
  border: 4px solid ${props => props.theme.darkGray};
  cursor: pointer;
  background-color: ${props => props.theme.darkGray};
  margin-left: 14px;
  transition: background-color 0.3s, color 0.2s, border 0.1s;
  outline: none;
  &:hover {
    background-color: ${props => props.theme.blueWhite};
    color: ${props => props.theme.orange};
    border: 4px solid ${props => props.theme.orange};
  }
`

// ELEMENTS
export const PortfolioImage = styled(Img)`
  ${props => {
    const item = _.filter(
      props.fluid,
      img => img.media === "(min-width: 960px)"
    )[0]
    return `
      height: ${item.presentationHeight}px;
      max-width: ${item.presentationWidth}px;
      margin: 0 auto;
      flex: 1;
      @media (max-width: 959px) {
        ${(props => {
          const item = _.filter(
            props.fluid,
            img => img.media === "(max-width: 959px)"
          )[0]
          if (item.aspectRatio > 1) {
            return `max-width: ${item.presentationWidth}px;height: 100%;`
          }
          return `
            height: ${item.presentationHeight / 2}px;
            max-width: ${item.presentationWidth / 2}px;
          `
        })(props)}
      }
      @media (max-width: 767px) {
        ${(props => {
          const item = _.filter(
            props.fluid,
            img => img.media === "(max-width: 767px)"
          )[0]
          if (item.aspectRatio > 1) {
            return `max-width: ${item.presentationWidth}px;height: 100%;`
          }
          return `
            height: ${item.presentationHeight}px;
            max-width: ${item.presentationWidth}px;
          `
        })(props)}
      }
    `
  }}
`

export const ClientImage = styled(Img)`
  ${props => {
    return _.map(props.fluid, image => {
      return `@media ${image.media} {
          width: ${image.presentationWidth}px;
          height: ${image.presentationHeight}px;
        }`
    }).join("\n")
  }}
`

export const PortfolioImageWrapper = styled.div`
  margin: 0 0 34px;
`

export const PortfolioItemWrapper = styled.div`
  margin: 0 0 80px;
  flex: 1;
  @media (min-width: 768px) {
    min-width: 400px;
  }
`

export const ClientImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.white};
  margin: 0 auto 60px;
  width: 200px;
  height: 200px;
  @media (max-width: 959px) {
    width: 160px;
    height: 160px;
  }
  @media (max-width: 767px) {
    width: 180px;
    height: 180px;
  }
  @media (max-width: 657px) {
    width: 140px;
    height: 140px;
  }
  @media (max-width: 500px) {
    width: 200px;
    height: 200px;
  }
  @media (max-width: 460px) {
    width: 160px;
    height: 160px;
  }
`

export const LogoImage = styled.img`
  margin-right: 10px;
  object-fit: contain;
  display: block;
`

export const FooterAddress = styled.div`
  margin-bottom: 4px;
  @media (max-width: 959px) {
    display: none;
  }
`

export const FooterContact = styled.div`
  margin-bottom: 4px;
  @media (max-width: 959px) {
    display: none;
  }
`

export const FooterWrapper = styled.div`
  display: flex;
  padding: 4px 8px;
  height: 60px;
`

export const FooterInner = styled.div`
  max-width: 960px;
  width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`

export const MenuWrapper = styled.div`
  display: flex;
  padding: 4px 8px;
  height: 60px;
`

export const MenuInner = styled.div`
  max-width: 960px;
  width: 960px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 100%;
`

export const MenuItem = styled(Link)`
  margin: 8px 24px;
  margin-right: 0;
  border-bottom: 4px solid transparent;
  color: ${props => props.theme.black};
  text-decoration: none;
  transition: color 0.6s, border 0.2s;
  &:hover,
  &.active {
    color: ${props => props.theme.blue};
    border-bottom: 4px solid ${props => props.theme.blue};
  }
`

export const ServiceIcon = styled.img`
  height: 80px;
  margin-right: 48px;
`

export const IconHeadlineWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const SiteTitle = styled.div`
  font-weight: bold;
  @media (max-width: 767px) {
    width: 50px;
  }
`
