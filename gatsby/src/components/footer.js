import React from "react"
import { graphql, StaticQuery } from "gatsby"

import { FooterWrapper, FooterInner, MenuItem } from "./styledComponents"
import SiteInfoFooter from "./siteInfoFooter"
import Address from "./address"

export default () => (
  <StaticQuery
    query={graphql`
      {
        wordpressWpApiMenusMenusItems(slug: { eq: "footer" }) {
          items {
            title
            object_slug
          }
        }
      }
    `}
    render={({ wordpressWpApiMenusMenusItems }) => {
      return (
        <FooterWrapper>
          <FooterInner>
            <SiteInfoFooter />
            <Address />
            {wordpressWpApiMenusMenusItems.items.map(item => (
              <MenuItem
                to={`/${item.object_slug}`}
                key={`menu-${item.title}`}
                dangerouslySetInnerHTML={{ __html: item.title }}
                activeClassName="active"
              />
            ))}
          </FooterInner>
        </FooterWrapper>
      )
    }}
  />
)
