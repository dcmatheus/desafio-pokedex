const apiUrl = 'https://pokeapi.co/api/v2';
const defaultRequest = `${apiUrl}/pokemon?limit=100&offset=0`;

type PokeRes = {
  url: string,
  name: string
};

type PokeTypes = {
  slot: number,
  type: {
    name: string,
    url: string
  }
};

export async function getPokemons(url: string = defaultRequest) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function getPokemonInfo(url: string) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function getPokemonsWithInfos(url: string = defaultRequest) {
  try {
    const { next, results, count } = await getPokemons(url);
    const pokemons = await Promise.all(results.map(async (pokemon: PokeRes) => {
      const {
        name, id, types, sprites,
      } = await getPokemonInfo(pokemon.url);
      return {
        id,
        name,
        sprite: sprites.front_default,
        types: types.map(({ type }: PokeTypes) => type.name),
      };
    }));
    return { next, pokemons, count };
  } catch (error) {
    console.error(error);
    return { pokemons: [], next: '', count: 0 };
  }
}
