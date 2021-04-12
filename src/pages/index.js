import React from "react"
import { graphql } from "gatsby"

const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    pages {
      nodes {
        title
        uri
        content
        isFrontPage
      }
    }
  }
`

export default ComponentName

