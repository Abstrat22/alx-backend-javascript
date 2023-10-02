export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve('Promise resolved');
    reject(new Error('Promise rejected'));
  });
}
