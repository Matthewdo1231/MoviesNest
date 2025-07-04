const genres = [
  { name: "Action", id: 28 },
  { name: "Adventure", id: 12 },
  { name: "Animation", id: 16 },
  { name: "Comedy", id: 35 },
  { name: "Crime", id: 80 },
  { name: "Documentary", id: 99 },
  { name: "Drama", id: 18 },
  { name: "Family", id: 10751 },
  { name: "Fantasy", id: 14 },
  { name: "History", id: 36 },
  { name: "Horror", id: 27 },
  { name: "Music", id: 10402 },
  { name: "Mystery", id: 9648 },
  { name: "Romance", id: 10749 },
  { name: "Science Fiction", id: 878 },
  { name: "TV Movie", id: 10770 },
  { name: "Thriller", id: 53 },
  { name: "War", id: 10752 },
  { name: "Western", id: 37 }
];

const countries = [
  { name: "United States", code: "US" },
  { name: "Canada", code: "CA" },
  { name: "Australia", code: "AU" },
  { name: "Spain", code: "ES" },
  { name: "United Kingdom", code: "GB" },
  { name: "South Korea", code: "KR" },
  { name: "Indonesia", code: "ID" },
  { name: "France", code: "FR" },
  { name: "Italy", code: "IT" },
  { name: "Thailand", code: "TH" },
  { name: "Ireland", code: "IE" },
  { name: "Switzerland", code: "CH" },
  { name: "Germany", code: "DE" },
  { name: "Belgium", code: "BE" },
  { name: "Czech Republic", code: "CZ" }
];


export function getTmdbValue(segment, value) {
  if (segment === 'genre') {
    const genre = genres.find(g => g.name.toLowerCase() === value.toLowerCase());
    return genre ? genre.id : null;
  } else if (segment === 'country') {
    const country = countries.find(c => c.name.toLowerCase() === value.toLowerCase());
    return country ? country.code : null;
  } else {
    return null;
  }
}
