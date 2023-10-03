export default function loadBalancer(chinaDownload, USDownload) {
  // Return the first promise to resolve
  return Promise.race([chinaDownload, USDownload])
    .then((result) => result)
    .catch((error) => error);
}
