const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchData = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
};
