export interface Film {
  episode_id: string;
  title: string;
  opening_crawl: string;
  producer: string;
  created: number;
  url: string;
}

export interface Person {
  name: string;
  gender: Gender;
  height: number;
  mass: number;
  created: string;
}

export interface Gender {
  male: string;
  female: string;
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

export interface User {
  name: string;
  password: string;
}
