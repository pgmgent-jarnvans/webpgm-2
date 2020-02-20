const spotifySongs = [
  { id: 1, name: "Du Hast", artist: "Rammstein", duration: 204 },
  { id: 2, name: "Piranna", artist: "Garry Hagger", duration: 306 },
  { id: 3, name: "Dos Cervezas", artist: "Gojira", duration: 444 },
  { id: 4, name: "Sonne", artist: "Rammstein", duration: 246 }
];

const lastFmSongs = [
  { id: 5, name: "Chop Suey", artist: "System of a Down", duration: 192 },
  { id: 6, name: "Ich Will", artist: "Rammstein", duration: 186 },
  { id: 7, name: "Een toastje mee zalme", artist: "Michael Jackson", duration: 132 },
  { id: 8, name: "Perfect", artist: "Ed Sheeran", duration: 240 }
];

const allSongs = spotifySongs.concat(lastFmSongs);

const rammsteinSongs = allSongs.filter(song => song.artist === 'Rammstein');

console.log(rammsteinSongs);
