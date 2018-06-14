import React from 'react'
import Link from 'gatsby-link'

const TagTemplate = ({data}) => {
  const tag = data.processWireTag;
  return (
  <div>
      <h1>{tag.title}</h1>
      <p>{tag.title}</p>
      <p>{tag.title}</p>
  </div>
)}
export default TagTemplate

export const query = graphql`
  query TagTemplate ($name: String!){
    processWireTag (name: {eq: $name}){
      id
      name
      title
    }
  }
`;
