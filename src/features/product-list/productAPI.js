
export function fetchAllProducts(amount = 1) {
  return new Promise(async(resolve) => {
    // TODO: we will not hard-code server url here

    const response = await fetch('http://localhost:3004/products')
    const result = await response.json()
    resolve({data})
  }
  );
}
