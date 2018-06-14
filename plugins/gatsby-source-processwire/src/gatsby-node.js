import fetchData from './fetch'
import { Node } from './nodes'

exports.sourceNodes = async (
  { boundActionCreators },
  { apiURL = 'http://localhost:1337', contentTypes = [], headers = {} }
) => {
  const { createNode } = boundActionCreators

  const capitalize = (string) => {
    return string.replace(/^\w/, c => c.toUpperCase());
  }

  // Generate a list of promises based on the `contentTypes` option.
  const promises = contentTypes.map(contentType =>
    fetchData({
      apiURL,
      contentType,
      headers,
    })
  )

  // Execute the promises.
  const data = await Promise.all(promises)

  // Create nodes.
  contentTypes.forEach((contentType, i) => {
    const items = data[i][contentType].list

    items.forEach(item => {
      const node = Node(capitalize(contentType), item)
      createNode(node)
    })
  })
}
