export interface Country {
    altSpellings: string[];
    area: number;
    borders: string[];
    capital: string[];
    capitalInfo: { latlng: number[] };
    car: { signs: string[]; side: string };
    cca2: string;
    cca3: string;
    ccn3: string;
    cioc: string;
    coatOfArms?: { png: string; svg: string };
    continents: string[];
    currencies: { [key: string]: any }; // Puedes definir la estructura exacta si es necesario
    demonyms: { [key: string]: any }; // Puedes definir la estructura exacta si es necesario
    fifa: string;
    flag: string;
    flags: { png: string; svg: string; alt: string };
    idd: { root: string; suffixes: string[] };
    independent: boolean;
    landlocked: boolean;
    languages: { [key: string]: string };
    latlng: number[];
    maps: { googleMaps: string; openStreetMaps: string };
    name: { common: string; official: string; nativeName: { [key: string]: string } };
    population: number;
    postalCode: { format: string; regex: string };
    region: string;
    startOfWeek: string;
    status: string;
    subregion: string;
    timezones: string[];
    tld: string[];
    translations: { [key: string]: { [key: string]: string } };
    unMember: boolean;
  }
  