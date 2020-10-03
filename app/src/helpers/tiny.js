const prettylink = require('prettylink');



export function generateRandomString() {
  return Math.random()    //  Returns a random number between 0 and 1.
  .toString(36)           //  Base36 encoding; use of letters with digits.
  .substring(2,8);        //  Returns the part of the string between the start and end indexes, or to the end of the string. 
};


export function createTinyUrl(id) {
  const tinyurl = new prettylink.TinyURL();
  tinyurl.short(`http://localhost:3002/dashboard/${id}`)
  .then((tiny) => {
    return tiny;
  })
  .catch((err) => {
    console.log(err)
    return;
  });
}

createTinyUrl(1);