import fetch from 'node-fetch'

module.exports = async ({ apiURL, contentType, headers }) => {
  console.time('Fetch ProcessWire data')
  console.log(`Starting to fetch data from ProcessWire (${contentType})`)

  // Set authorization token
  /*
  let fetchRequestConfig = {}
  if (jwtToken !== null) {
    fetchRequestConfig.headers = {
      Authorization: `Bearer ${jwtToken}`,
    }
  }
  */
  const query = `{
    ${contentType} {
      list {
        id
        name
        title
      }
    }
  }`

  const options = {
    body: 'query='+query,
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      ...headers,
    },
    method: 'POST',
  }
//console.log("fetch data: ", options)
  // Make API request.
  const response = await fetch(apiURL, options)
  const result = await response.json()
//console.log("result data: ",  result)

  //const documents = await axios(apiEndpoint, fetchRequestConfig)

  // Query all documents from client.
  console.timeEnd('Fetch ProcessWire data')

  // Map and clean data.
  return result.data//.map(item => clean(item))
}

/**
 * Remove fields starting with `_` symbol.
 *
 * @param {object} item - Entry needing clean
 * @returns {object} output - Object cleaned
 */
const clean = item => {
  forEach(item, (value, key) => {
    if (startsWith(key, `__`)) {
      delete item[key]
    } else if (startsWith(key, `_`)) {
      delete item[key]
      item[key.slice(1)] = value
    } else if (isObject(value)) {
      item[key] = clean(value)
    }
  })

  return item
}
