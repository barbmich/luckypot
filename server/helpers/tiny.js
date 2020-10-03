const prettylink = require('prettylink');

function createTinyUrl(id) {
  const tinyurl = new prettylink.TinyURL();
  tinyurl.short(`http://localhost:3002/dashboard/${id}`)
  .then((tiny) => {
    console.log(tiny);
    return tiny;
  })
  .catch((err) => {
    console.log(err)
    return;
  });
}

module.exports= { createTinyUrl }