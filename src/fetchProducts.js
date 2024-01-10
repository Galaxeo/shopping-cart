export async function fetchProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  let data = await response.json();
  data = data.slice(0, 9);
  
  return data;
}
