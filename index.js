/**
 * In this github repository, I delete the implementation code, but I keep the completed code in my submitted ZIP file. 
 * Thank you :)
 */
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  return new Response('Hello worker!', {
    headers: { 'content-type': 'text/plain' },
  })
}







