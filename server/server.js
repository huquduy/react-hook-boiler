const PORT = 9000
const express = require('express')
const fs = require("fs")
const path = require('path')
const app = express()
const SEO = require('./SEO.constant')

const buildPath = path.join(__dirname, '..', 'build')

app.use(express.static(buildPath))

app.get('/*', function (req, res) {
  // get the html file created with the create-react-app build
  const filePath = path.join(buildPath, 'index.html')
  const { originalUrl } = req
  if (!SEO[originalUrl]) {
    return res.sendFile(filePath)
  }

  const { title  = '', description = '', keywords = '' } = SEO[originalUrl] || {}
  const SEOContents = `
    <title>${title}</title>
    <meta name="description" content="${description}">
    <meta name="keywords" content="${keywords}">`

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error(err)
      return res.status(404).end()
    }

    // now inject the rendered app into our html and send it to the client
    return res.send(
      htmlData
        // write the HTML header tags
        .replace('<title>Hokibet188</title>', SEOContents)
  );
  })
});

app.listen(PORT, () => {
  console.log( `server started at http://localhost:${ PORT }` )
});