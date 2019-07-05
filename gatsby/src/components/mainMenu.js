import React from "react"
import { graphql, StaticQuery } from "gatsby"

import { MenuWrapper, MenuInner, MenuItem } from "./styledComponents"
import SiteInfo from "./siteInfo"

export default () => (
  <StaticQuery
    query={graphql`
      {
        wordpressWpApiMenusMenusItems(slug: { eq: "main-menu" }) {
          items {
            title
            object_slug
          }
        }
      }
    `}
    render={({ wordpressWpApiMenusMenusItems }) => {
      return (
        <MenuWrapper>
          <MenuInner>
            <SiteInfo />
            {wordpressWpApiMenusMenusItems.items.map(item => (
              <MenuItem
                to={`/${item.object_slug}`}
                key={`menu-${item.title}`}
                dangerouslySetInnerHTML={{ __html: item.title }}
                activeClassName="active"
              />
            ))}
          </MenuInner>
        </MenuWrapper>
      )
    }}
  />
)
