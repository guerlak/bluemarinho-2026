import { Member, Song, VideoLink, Presentation } from './types';

export const BAND_MEMBERS: Member[] = [
  { name: "PAOLA MARINHO", role: "Voz", image: "./members/paola.jpg" },
  { name: "FELIPE CAMPOS", role: "Guitarra e Voz", image: "./members/pinous.jpg" },
  { name: "FÁBIO TAVARES", role: "Guitarra", image: "./members/fabio.jpg" },
  { name: "RAPHAEL PIQUET", role: "Baixo", image: "./members/piquet.jpg" },
  { name: "RAFAEL GUERLAK", role: "Bateria", image: "./members/guerlak.jpg" },
];

export const REPERTOIRE_HIGHLIGHTS: Song[] = [
  { title: "COME TOGETHER", artist: "The Beatles" },
  { title: "SWEET CHILD O' MINE", artist: "Guns N' Roses" },
  { title: "AIN'T NO SUNSHINE", artist: "Bill Withers" },
  { title: "SUPERSTITION", artist: "Stevie Wonder" },
  { title: "STAY", artist: "Oingo Boingo" },
  { title: "MERCEDES BENZ", artist: "Janis Joplin" },
  { title: "VALERIE", artist: "Amy Winehouse" },
  { title: "SEVEN NATION ARMY", artist: "The White Stripes" },
  { title: "WHOLE LOTTA LOVE", artist: "Led Zeppelin" },
  { title: "FEELING GOOD", artist: "Nina Simone" },
  { title: "ARE YOU GONNA BE MY GIRL", artist: "Jet" },
  { title: "HIT THE ROAD JACK", artist: "Ray Charles" },
  { title: "BEAT IT", artist: "Michael Jackson" },
  { title: "ANDO MEIO DESLIGADO", artist: "Mutantes" },
];

export const VIDEO_LINKS: VideoLink[] = [
  { title: "COME TOGETHER", artist: "The Beatles", thumbnail: "https://picsum.photos/id/145/600/400", url: "#" },
  { title: "FEELING GOOD", artist: "Nina Simone", thumbnail: "https://picsum.photos/id/158/600/400", url: "#" },
  { title: "WHOLE LOTTA LOVE", artist: "Led Zeppelin", thumbnail: "https://picsum.photos/id/193/600/400", url: "#" },
  { title: "THE HOUSE OF THE RISING SUN", artist: "The Animals", thumbnail: "https://picsum.photos/id/234/600/400", url: "#" },
  { title: "ARE YOU GONNA BE MY GIRL", artist: "Jet", thumbnail: "https://picsum.photos/id/252/600/400", url: "#" },
  { title: "YOU KNOW I'M NO GOOD", artist: "Amy Winehouse", thumbnail: "https://picsum.photos/id/319/600/400", url: "#" },
];

export const PRESENTATIONS: Presentation[] = [
  { day: "12", month: "ABR", year: "2025", venue: "CERVEJARIA ZIEGE ZAG", location: "Rio de Janeiro, RJ", time: "20:00" },
  { day: "19", month: "ABR", year: "2025", venue: "MACACO CAOLHO ROCK PUB", location: "Rio de Janeiro, RJ", time: "21:30" },
  { day: "26", month: "ABR", year: "2025", venue: "COORDENADAS BAR", location: "Botafogo, RJ", time: "22:00" },
  { day: "03", month: "MAI", year: "2025", venue: "TRITON PORTOBELLO", location: "Mangaratiba, RJ", time: "19:00" },
  { day: "10", month: "MAI", year: "2025", venue: "ZZ FEST - FESTIVAL DA PRIMAVERA", location: "Rio de Janeiro, RJ", time: "16:00" },
  { day: "17", month: "MAI", year: "2025", venue: "CASA HORTO - P'ALMA SESSIONS", location: "Jardim Botânico, RJ", time: "18:00" },

];

export const CONTACT_INFO = {
  phone: "(21) 98844-4059",
  contactName: "Luís Felipe",
  site: "www.bluemarinho.com.br",
  instagram: "@bandabluemarinho",
  youtube: "youtube.com/@BlueMarinho",
};