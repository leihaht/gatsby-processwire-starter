import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => {
  const tags = data.allProcessWireTag.edges
  const discussions = data.allProcessWireDiscussion.edges
  return (
  <div>
    <h1>Testing index page</h1>
    <h3>Tags below</h3>
    <ul>
      {tags.map( tag => (
        <li key={tag.node.id}>
          <h2>
            <Link to={`/${tag.node.name}`}>{tag.node.title}</Link>
          </h2>
        </li>
      ))}
    </ul>
    <h3>Discussions below</h3>
    <ul>
    {discussions.map( dis => (
      <li key={dis.node.id}>
        <h2>
          {dis.node.title}
        </h2>
      </li>
    ))}
    </ul>
  </div>
)}
export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allProcessWireTag {
      edges {
        node {
          id
          name
          title
        }
      }
    }
    allProcessWireDiscussion {
      edges {
        node {
          id
          name
          title
        }
      }
    }
  }
`;
