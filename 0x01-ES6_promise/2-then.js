export default function handleResponseFromAPI(promise) {
  promise.then(() => {
    console.log('Got a response from the API');
    return { status: 200, body: 'Success' };
  }).then(() => {
    console.log('Got a response from the API');
  }).then(() => {
    console.log('Got a response from the API');
  }).catch(() => { throw Error(); });
}
