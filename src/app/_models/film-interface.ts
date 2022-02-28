export interface Film {
  episode_id: number
  characters: string;
  planets: string;
  starships: string;
  title: string;
  opening_crawl: string;
  producer: string;
  created: number;
  url?: string;
}

// export interface Props {
//   characters: string;
//   planets: string;
//   starships: string;
//   title: string;
//   opening_crawl: string;
//   producer: string;
//   created: number;
//   url?: string;
// }

export interface Person {
  name: string;
  gender: string;
  height: number;
  mass: number;
  created: string;
}
export interface Planet {
  name: string;
  climate: string;
  gravity: string;
  population: number;
  created: string;
}

export interface Starship {
  name: string;
  starship_class: string;
  passengers: string;
  length: number;
  created: string;
}
