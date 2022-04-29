const apiUrl = 'https://pokeapi.co/api/v2';

export async function getPokemons(url: string = `${apiUrl}/pokemon?limit=10&offset=0`) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}

export async function getPokemon(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}
