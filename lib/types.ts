export interface Member {
  name: string;
  role?: string;
  image: string;
}

export interface Song {
  title: string;
  artist: string;
}

export interface VideoLink {
  title: string;
  artist: string;
  thumbnail: string;
  url: string;
}

export interface Venue {
  id: number;
  name: string;
  location: string;
  socialLink?: string;
}

export interface Presentation {
  id?: number;
  venue_id?: number;
  day: string;
  month: string;
  year: string;
  time: string;
  // Campos vindos do JOIN com a tabela venues:
  venue: string;
  location: string;
  socialLink: string;
}
