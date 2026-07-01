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

export interface Presentation {
  day: string;
  month: string;
  year: string;
  venue: string;
  location: string;
  time: string;
  socialLink: string;
}