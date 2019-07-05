import React from "react"

import { ClientImageContainer, ClientImage } from "./styledComponents"

export default ({ node }) => {
  const imageVersions = node.featured_media.localFile.childImageSharp

  return (
    <ClientImageContainer>
      <ClientImage
        fluid={[
          { media: `(min-width: 960px)`, ...imageVersions.desktop },
          { media: `(max-width: 959px)`, ...imageVersions.tablet },
          { media: `(max-width: 767px)`, ...imageVersions.mobile },
        ]}
        key={`img-${node.id}`}
      />
    </ClientImageContainer>
  )
}
