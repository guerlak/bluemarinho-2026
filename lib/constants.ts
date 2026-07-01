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
  { title: "WHOLE LOTTA LOVE / ROck n Roll", artist: "Led Zeppelin" },
  { title: "FEELING GOOD", artist: "Nina Simone" },
  { title: "ARE YOU GONNA BE MY GIRL", artist: "Jet" },
  { title: "HIT THE ROAD JACK", artist: "Ray Charles" },
  { title: "BEAT IT", artist: "Michael Jackson" },
  { title: "ANDO MEIO DESLIGADO", artist: "Mutantes" },
  { title: "PRO DIA NASCER FELIZ", artist: "Barão Vermelho" },
  { title: "Mania de Você", artist: "Rita Lee" },
];

export const VIDEO_LINKS: VideoLink[] = [
  { title: "THE HOUSE OF THE RISING SUN", artist: "The Animals", thumbnail: "https://picsum.photos/id/234/600/400", url: "https://www.youtube.com/watch?v=C2BnMJiFxn0" },
  { title: "STAY", artist: "Oingo Boingo", thumbnail: "https://picsum.photos/id/193/600/400", url: "https://www.youtube.com/watch?v=fYJDAFVodxk" },
  { title: "COME TOGETHER", artist: "The Beatles", thumbnail: "https://picsum.photos/id/145/600/400", url: "https://www.youtube.com/watch?v=kd57l2z8Pz8" },
  { title: "FEELING GOOD", artist: "Nina Simone", thumbnail: "https://picsum.photos/id/158/600/400", url: "https://www.youtube.com/watch?v=N-HWNH7DKWs" },
  { title: "SUPERSTITION", artist: "Stevie Wonder", thumbnail: "https://picsum.photos/id/252/600/400", url: "https://www.youtube.com/watch?v=7CZE-nETrN8" },
];

export const PRESENTATIONS: Presentation[] = [
  { day: "11", month: "JUL", year: "2026", venue: "BROOKS PUB", location: "Méier, RJ", time: "21:00" , socialLink: "https://www.instagram.com/brookspubrj"},
  { day: "25", month: "JUL", year: "2026", venue: "TRIP DO VINHO", location: "Vargem Grande, RJ", time: "21:00", socialLink: "https://www.instagram.com/tripdovinho" },
  { day: "01", month: "AGO", year: "2026", venue: "BULLDOG ROCK BAR", location: "Pechincha, RJ", time: "21:00", socialLink: "https://www.instagram.com/bulldogrockbar" },
  { day: "29", month: "AGO", year: "2026", venue: "TRIP DO VINHO", location: "Vargem Grande, RJ", time: "21:00", socialLink: "https://www.instagram.com/tripdovinho" },
  { day: "03", month: "OUT", year: "2026", venue: "MACACO CAOLHO", location: "Botafogo, RJ", time: "21:30", socialLink: "https://www.instagram.com/macacocaolhopub" },
  { day: "17", month: "OUT", year: "2026", venue: "ZIEGE ZAG", location: "Vargem Pequena, RJ", time: "17:00", socialLink: "https://www.instagram.com/ziegezag" },
  //{ day: "21", month: "NOV", year: "2026", venue: "ZIEGE ZAG", location: "Vargem Pequena, RJ", time: "17:00", socialLink: "https://www.instagram.com/ziegezag" },
];

export const CONTACT_INFO = {
  phone: "(21) 98844-4059",
  contactName: "Luís Felipe",
  site: "www.bluemarinho.com.br",
  instagram: "@bandabluemarinho",
  youtube: "youtube.com/@BlueMarinho",
};