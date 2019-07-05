import _ from "lodash"
import React from "react"
import styled from "styled-components"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import Map from "../components/map"
import {
  Headline,
  HeaderWrapper,
  SubHeadline,
  Content,
  Form,
  Label,
  Textarea,
  Input,
  Button,
  ActionsWrapper,
  SectionWrapper,
} from "../components/styledComponents"

const SendButton = styled(Button)`
  background-color: ${props => props.theme.blue};
`

const mapProps = context => {
  const center = {
    lat: Number(_.get(context, "acf.address_map.lat", 50)),
    lng: Number(_.get(context, "acf.address_map.lng", 10)),
  }
  return {
    options: {
      center,
      zoom: 14,
      disableDefaultUI: true,
      draggable: false,
      draggableCursor: "default",
      scaleControl: false,
    },
    onMount: map => {
      new window.google.maps.Marker({
        position: center,
        map,
        title: "first2nd",
      })
    },
  }
}

export default ({ pageContext }) => (
  <StaticQuery
    query={graphql`
      {
        wordpressPage(slug: { eq: "contact" }) {
          title
          acf {
            address_map {
              lat
              lng
            }
            email_label
            message_label
            address_header_title
            google_api_key
          }
        }
      }
    `}
    render={({ wordpressPage }) => {
      return (
        <Layout>
          <HeaderWrapper>
            <Headline dangerouslySetInnerHTML={{ __html: pageContext.title }} />
          </HeaderWrapper>
          <SectionWrapper>
            <Form
              id="contact-form"
              method="post"
              action="https://formspree.io/maik@first2nd.com"
            >
              <Label
                dangerouslySetInnerHTML={{
                  __html: wordpressPage.acf.email_label,
                }}
              />
              <Input type="email" name="_replyto" />
              <Label
                dangerouslySetInnerHTML={{
                  __html: wordpressPage.acf.message_label,
                }}
              />
              <Textarea name="message" rows="12" />
              <ActionsWrapper>
                <Button type="reset">
                  <Content>Reset</Content>
                </Button>
                <SendButton type="submit">
                  <Content>Send</Content>
                </SendButton>
              </ActionsWrapper>
            </Form>
          </SectionWrapper>
          <SectionWrapper>
            <SubHeadline
              dangerouslySetInnerHTML={{
                __html: wordpressPage.acf.address_header_title,
              }}
            />
          </SectionWrapper>
          <SectionWrapper>
            <Content
              dangerouslySetInnerHTML={{ __html: pageContext.content }}
            />
          </SectionWrapper>
          <SectionWrapper>
            <Map
              id="address-map"
              {...mapProps(wordpressPage)}
              google_api_key={wordpressPage.acf.google_api_key}
            />
          </SectionWrapper>
        </Layout>
      )
    }}
  />
)
