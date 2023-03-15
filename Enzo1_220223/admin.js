//  let movies = [{
//         id: 1,
//         Title: "Avatar",
//         Year: "2009",
//         Rated: "PG-13",
//         Released: "18 Dec 2009",
//         Runtime: "162 min",
//         Genre: "Action, Adventure, Fantasy,",
//         Director: "James Cameron",
//         Writer: "James Cameron",
//         Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//         Plot: "Un infante de marina parapléjico enviado a la luna Pandora en una misión única se debate entre seguir sus órdenes y proteger el mundo que siente que es su hogar.",
//         Language: "English, Spanish",
//         Country: "USA, UK",
//         Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
//         Poster: "https://m.media-amazon.com/images/I/61ADl6omqPL._AC_SL1500_.jpg",
//         Metascore: "83",
//         imdbRating: "7.9",
//         imdbVotes: "890,617",
//         imdbID: "tt0499549",
//         Type: "movie",
//         Response: "True",
//         Available: true,
//         Delete: false,
//         Principal: false,
//         Trailer: "https://www.youtube.com/watch?v=jYRtFFa4hT8&ab_channel=SensaCineTRAILERS",
//         Images: [
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BNzM2MDk3MTcyMV5BMl5BanBnXkFtZTcwNjg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY2ODQ3NjMyMl5BMl5BanBnXkFtZTcwODg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxOTEwNDcxN15BMl5BanBnXkFtZTcwOTg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMDg1Nzk1MV5BMl5BanBnXkFtZTcwMDk0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
//         ],
//     },
//     {
//         id: 2,
//         Title: "I Am Legend",
//         Year: "2007",
//         Rated: "PG-13",
//         Released: "14 Dec 2007",
//         Runtime: "101 min",
//         Genre: "Drama, Horror, Sci-Fi",
//         Director: "Francis Lawrence",
//         Writer: "Mark Protosevich (screenplay), Akiva Goldsman (screenplay), Richard Matheson (novel), John William Corrington, Joyce Hooper Corrington",
//         Actors: "Will Smith, Alice Braga, Charlie Tahan, Salli Richardson-Whitfield",
//         Plot: "Años después de que una plaga mate a la mayor parte de la humanidad y transforme al resto en monstruos, el único sobreviviente en la ciudad de Nueva York lucha valientemente para encontrar una cura.",
//         Language: "English",
//         Country: "USA",
//         Awards: "9 wins & 21 nominations.",
//         Poster: "https://es.web.img3.acsta.net/r_1280_720/medias/nmedia/18/69/52/53/20051673.jpg",
//         Metascore: "65",
//         imdbRating: "7.2",
//         imdbVotes: "533,874",
//         imdbID: "tt0480249",
//         Type: "movie",
//         Response: "True",
//         Available: true,
//         Delete: false,
//         Principal: false,
//         Trailer: "https://www.youtube.com/watch?v=DdRf3RAEEUU&ab_channel=Mr.Dutch-Trailers",
//         Images: [
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZTYwMDA0Nzc4._V1_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMTIwMDg2MDU4M15BMl5BanBnXkFtZTYwMTA0Nzc4._V1_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc5MDM1OTU5OV5BMl5BanBnXkFtZTYwMjA0Nzc4._V1_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0MTI2NjMzMzFeQTJeQWpwZ15BbWU2MDMwNDc3OA@@._V1_.jpg",
//         ],
//     },
//     {
//         id: 3,
//         Title: "300",
//         Year: "2006",
//         Rated: "R",
//         Released: "09 Mar 2007",
//         Runtime: "117 min",
//         Genre: "Action, Drama, Fantasy,",
//         Director: "Zack Snyder",
//         Writer: "Zack Snyder (screenplay), Kurt Johnstad (screenplay), Michael Gordon (screenplay), Frank Miller (graphic novel), Lynn Varley (graphic novel)",
//         Actors: "Gerard Butler, Lena Headey, Dominic West, David Wenham",
//         Plot: "El rey Leónidas de Esparta y una fuerza de 300 hombres luchan contra los persas en las Termópilas en el 480 a.C.",
//         Language: "English",
//         Country: "USA",
//         Awards: "16 wins & 42 nominations.",
//         Poster: "https://m.media-amazon.com/images/I/617ugvR0tOL._AC_SY741_.jpg",
//         Metascore: "52",
//         imdbRating: "7.7",
//         imdbVotes: "611,046",
//         imdbID: "tt0416449",
//         Type: "movie",
//         Response: "True",
//         Available: true,
//         Delete: false,
//         Principal: false,
//         Trailer: "https://www.youtube.com/watch?v=C_naqE6OyH8&ab_channel=WarnerBros.PicturesLatinoam%C3%A9rica",
//         Images: [
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNTg5MzMwMV5BMl5BanBnXkFtZTcwMzA2NTIyMw@@._V1_SX1777_CR0,0,1777,937_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwNTgyNTMzNF5BMl5BanBnXkFtZTcwNDA2NTIyMw@@._V1_SX1777_CR0,0,1777,935_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0MjQzOTEwMV5BMl5BanBnXkFtZTcwMzE2NTIyMw@@._V1_SX1777_CR0,0,1777,947_AL_.jpg",
//         ],
//     },
//     {
//         id: 4,
//         Title: "The Avengers",
//         Year: "2012",
//         Rated: "PG-13",
//         Released: "04 May 2012",
//         Runtime: "143 min",
//         Genre: "Action, Sci-Fi, Thriller",
//         Director: "Joss Whedon",
//         Writer: "Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)",
//         Actors: "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
//         Plot: "Los héroes más poderosos de la Tierra deben unirse y aprender a luchar en equipo si quieren evitar que el travieso Loki y su ejército alienígena esclavicen a la humanidad.",
//         Language: "English, Russian",
//         Country: "USA",
//         Awards: "Nominated for 1 Oscar. Another 34 wins & 75 nominations.",
//         Poster: "https://m.media-amazon.com/images/I/815oKqKUo4L._AC_SL1500_.jpg",
//         Metascore: "69",
//         imdbRating: "8.1",
//         imdbVotes: "1,003,301",
//         imdbID: "tt0848228",
//         Type: "movie",
//         Response: "True",
//         Available: true,
//         Delete: false,
//         Principal: false,
//         Trailer: "https://www.youtube.com/watch?v=4mwtDHovB3w&ab_channel=MarvelLatinoam%C3%A9ricaOficial",
//         Images: [
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0NjY0NzE4OTReQTJeQWpwZ15BbWU3MDczODg2Nzc@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE1MzEzMjcyM15BMl5BanBnXkFtZTcwNDM4ODY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwMzM2MTg1M15BMl5BanBnXkFtZTcwNjM4ODY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4NzM2Mjc5MV5BMl5BanBnXkFtZTcwMTkwOTY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3MzQ3NjA5N15BMl5BanBnXkFtZTcwMzY5OTY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
//         ],
//     },
//     {
//         id: 5,
//         Title: "The Wolf of Wall Street",
//         Year: "2013",
//         Rated: "R",
//         Released: "25 Dec 2013",
//         Runtime: "180 min",
//         Genre: "Biography, Comedy, Crime",
//         Director: "Martin Scorsese",
//         Writer: "Terence Winter (screenplay), Jordan Belfort (book)",
//         Actors: "Leonardo DiCaprio, Jonah Hill, Margot Robbie, Matthew McConaughey",
//         Plot: "Basado en la historia real de Jordan Belfort, desde su ascenso a un rico corredor de bolsa que vive la gran vida hasta su caída involucrada en el crimen, la corrupción y el gobierno federal.",
//         Language: "English, French",
//         Country: "USA",
//         Awards: "Nominated for 5 Oscars. Another 35 wins & 154 nominations.",
//         Poster: "https://m.media-amazon.com/images/I/51MAuTMt+gL._AC_.jpg",
//         Metascore: "75",
//         imdbRating: "8.2",
//         imdbVotes: "786,985",
//         imdbID: "tt0993846",
//         Type: "movie",
//         Response: "True",
//         Available: true,
//         Delete: false,
//         Principal: false,
//         Trailer: "https://www.youtube.com/watch?v=PaAvUOXUohk&ab_channel=DiamondFilmsLatam",
//         Images: [
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BNDIwMDIxNzk3Ml5BMl5BanBnXkFtZTgwMTg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0NzAxODAyMl5BMl5BanBnXkFtZTgwMDg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMTExMDk1MDE4NzVeQTJeQWpwZ15BbWU4MDM4NDM0ODAx._V1_SX1500_CR0,0,1500,999_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg3MTY4NDk4Nl5BMl5BanBnXkFtZTgwNjc0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgzMTg4MDI0Ml5BMl5BanBnXkFtZTgwOTY0MzQ4MDE@._V1_SY1000_CR0,0,1553,1000_AL_.jpg",
//         ],
//     },
//     {
//         id: 6,
//         Title: "Interstellar",
//         Year: "2014",
//         Rated: "PG-13",
//         Released: "07 Nov 2014",
//         Runtime: "169 min",
//         Genre: "Adventure, Drama, Sci-Fi",
//         Director: "Christopher Nolan",
//         Writer: "Jonathan Nolan, Christopher Nolan",
//         Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//         Plot: "Un equipo de exploradores viaja a través de un agujero de gusano en el espacio en un intento por asegurar la supervivencia de la humanidad.",
//         Language: "English",
//         Country: "USA, UK",
//         Awards: "Won 1 Oscar. Another 39 wins & 134 nominations.",
//         Poster: "https://www.cinemascomics.com/wp-content/uploads/2014/09/interestellar.jpg",
//         Metascore: "74",
//         imdbRating: "8.6",
//         imdbVotes: "937,412",
//         imdbID: "tt0816692",
//         Type: "movie",
//         Response: "True",
//         Available: true,
//         Delete: false,
//         Principal: true,
//         Trailer: "https://www.youtube.com/watch?v=NVw3DnN9WoA&ab_channel=WarnerBros.PicturesLatinoam%C3%A9rica",
//         Images: [
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NTEwOTMxMV5BMl5BanBnXkFtZTgwMjMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMzQ5ODE2MzEwM15BMl5BanBnXkFtZTgwMTMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg4Njk4MzY0Nl5BMl5BanBnXkFtZTgwMzIyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMzE3MTM0MTc3Ml5BMl5BanBnXkFtZTgwMDIyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BNjYzNjE2NDk3N15BMl5BanBnXkFtZTgwNzEyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
//         ],
//     },
//     {
//         id: 7,
//         Title: "Game of Thrones",
//         Year: "2011–",
//         Rated: "TV-MA",
//         Released: "17 Apr 2011",
//         Runtime: "56 min",
//         Genre: "Adventure, Drama, Fantasy",
//         Director: "N/A",
//         Writer: "David Benioff, D.B. Weiss",
//         Actors: "Peter Dinklage, Lena Headey, Emilia Clarke, Kit Harington",
//         Plot: "Mientras se gesta una guerra civil entre varias familias nobles en Westeros, los hijos de los antiguos gobernantes de la tierra intentan alzarse con el poder. Mientras tanto, una raza olvidada, empeñada en la destrucción, planea regresar después de miles de años en el Norte.",
//         Language: "English",
//         Country: "USA, UK",
//         Awards: "Won 1 Golden Globe. Another 185 wins & 334 nominations.",
//         Poster: "https://image.posterlounge.es/images/l/1901278.jpg",
//         Metascore: "N/A",
//         imdbRating: "9.5",
//         imdbVotes: "1,046,830",
//         imdbID: "tt0944947",
//         Type: "series",
//         totalSeasons: "7",
//         Response: "True",
//         Available: true,
//         Delete: false,
//         Principal: false,
//         Trailer: "https://www.youtube.com/watch?v=vCzW8RzDV2o&ab_channel=Elabrevadero",
//         Images: [
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BNDc1MGUyNzItNWRkOC00MjM1LWJjNjMtZTZlYWIxMGRmYzVlXkEyXkFqcGdeQXVyMzU3MDEyNjk@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BZjZkN2M5ODgtMjQ2OC00ZjAxLWE1MjMtZDE0OTNmNGM0NWEwXkEyXkFqcGdeQXVyNjUxNzgwNTE@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMDk4Y2Y1MDAtNGVmMC00ZTlhLTlmMmQtYjcyN2VkNzUzZjg2XkEyXkFqcGdeQXVyNjUxNzgwNTE@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BNjZjNWIzMzQtZWZjYy00ZTkwLWJiMTYtOWRkZDBhNWJhY2JmXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BNTMyMTRjZWEtM2UxMS00ZjU5LWIxMTYtZDA5YmJhZmRjYTc4XkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
//         ],
//     },
//     {
//         id: 8,
//         Title: "Vikings",
//         Year: "2013–",
//         Rated: "TV-14",
//         Released: "03 Mar 2013",
//         Runtime: "44 min",
//         Genre: "Action, Drama, History",
//         Director: "N/A",
//         Writer: "Michael Hirst",
//         Actors: "Travis Fimmel, Clive Standen, Gustaf Skarsgård, Katheryn Winnick",
//         Plot: "El mundo de los vikingos cobra vida a través del viaje de Ragnar Lothbrok, el primer vikingo que emerge de la leyenda nórdica y llega a las páginas de la historia: un hombre al borde del mito.",
//         Language: "English, Old English, Norse, Old, Latin",
//         Country: "Ireland, Canada",
//         Awards: "Nominated for 7 Primetime Emmys. Another 17 wins & 49 nominations.",
//         Poster: "https://m.media-amazon.com/images/I/61noa0sujTL._AC_SY679_.jpg",
//         Metascore: "N/A",
//         imdbRating: "8.6",
//         imdbVotes: "198,041",
//         imdbID: "tt2306299",
//         Type: "series",
//         totalSeasons: "5",
//         Response: "True",
//         Available: true,
//         Delete: false,
//         Principal: false,
//         Trailer: "https://www.youtube.com/watch?v=ah1B1eZfvz0&ab_channel=criollogameplay",
//         Images: [
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM5MTM1ODUxNV5BMl5BanBnXkFtZTgwNTAzOTI2ODE@._V1_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BNzU2NDcxODMyOF5BMl5BanBnXkFtZTgwNDAzOTI2ODE@._V1_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMzMzIzOTU2M15BMl5BanBnXkFtZTgwODMzMTkyODE@._V1_SY1000_SX1500_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2NTQ2MDA3NF5BMl5BanBnXkFtZTgwODkxMDUxODE@._V1_SY1000_SX1500_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcxOTQ3NTA5N15BMl5BanBnXkFtZTgwMzExMDUxODE@._V1_SY1000_SX1500_AL_.jpg",
//         ],
//     },
//     {
//         id: 9,
//         Title: "Gotham",
//         Year: "2014–",
//         Rated: "TV-14",
//         Released: "01 Aug 2014",
//         Runtime: "42 min",
//         Genre: "Action, Crime, Drama",
//         Director: "N/A",
//         Writer: "Bruno Heller",
//         Actors: "Ben McKenzie, Donal Logue, David Mazouz, Sean Pertwee",
//         Plot: "La historia detrás del ascenso a la prominencia del detective James Gordon en Gotham City en los años previos a la llegada de Batman.",
//         Language: "English",
//         Country: "USA",
//         Awards: "Nominated for 4 Primetime Emmys. Another 3 wins & 22 nominations.",
//         Poster: "https://m.media-amazon.com/images/I/51Vq3exGduL._AC_.jpg",
//         Metascore: "N/A",
//         imdbRating: "8.0",
//         imdbVotes: "133,375",
//         imdbID: "tt3749900",
//         Type: "series",
//         totalSeasons: "3",
//         Response: "True",
//         Available: true,
//         Delete: false,
//         Principal: false,
//         Trailer: "https://www.youtube.com/watch?v=_axxvmMBgQk&ab_channel=TrailersSpainTvThree-Clips%2CTvMaterial",
//         Images: [
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BNDI3ODYyODY4OV5BMl5BanBnXkFtZTgwNjE5NDMwMDI@._V1_SY1000_SX1500_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5OTExMTIwNF5BMl5BanBnXkFtZTgwMjI5NDMwMDI@._V1_SY1000_SX1500_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA3MDY2NjA3MzBeQTJeQWpwZ15BbWU4MDU0MDkzODgx._V1_SX1499_CR0,0,1499,999_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3MzYzNDgzOV5BMl5BanBnXkFtZTgwMjQwOTM4ODE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQwODAyNjk0NF5BMl5BanBnXkFtZTgwODU4MzMyODE@._V1_SY1000_CR0,0,1500,1000_AL_.jpg",
//         ],
//     },
//     {
//         id: 10,
//         Title: "Power",
//         Year: "2014–",
//         Rated: "TV-MA",
//         Released: "N/A",
//         Runtime: "50 min",
//         Genre: "Crime, Drama",
//         Director: "N/A",
//         Writer: "Courtney Kemp Agboh",
//         Actors: "Omari Hardwick, Joseph Sikora, Andy Bean, Lela Loren",
//         Plot: 'James "Ghost" St. Patrick, un rico propietario de un club nocturno de Nueva York que lo tiene todo, atiende a la élite de la ciudad y sueña en grande, vive una doble vida como capo de la droga.',
//         Language: "English",
//         Country: "USA",
//         Awards: "1 win & 6 nominations.",
//         Poster: "https://www.bolsamania.com/seriesadictos/wp-content/uploads/2018/06/power-season-5-poster-key-art-starz.jpg",
//         Metascore: "N/A",
//         imdbRating: "8.0",
//         imdbVotes: "14,770",
//         imdbID: "tt3281796",
//         Type: "series",
//         totalSeasons: "3",
//         Response: "True",
//         Available: true,
//         Delete: false,
//         Principal: false,
//         Trailer: "https://www.youtube.com/watch?v=xOgepzeExMY&ab_channel=TrailersInSpanish",
//         Images: [
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc2ODg0MzMzM15BMl5BanBnXkFtZTgwODYxODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcyMjA0MzczNV5BMl5BanBnXkFtZTgwNTIyODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk0MTI0NzQ2NV5BMl5BanBnXkFtZTgwMDkxODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4Mzk1ODcxM15BMl5BanBnXkFtZTgwNDQyODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwNTE0NDI1M15BMl5BanBnXkFtZTgwMDQyODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
//         ],
//     },
//     {
//         id: 11,
//         Title: "Narcos",
//         Year: "2015–",
//         Rated: "TV-MA",
//         Released: "28 Aug 2015",
//         Runtime: "49 min",
//         Genre: "Biography, Crime, Drama",
//         Director: "N/A",
//         Writer: "Carlo Bernard, Chris Brancato, Doug Miro, Paul Eckstein",
//         Actors: "Wagner Moura, Boyd Holbrook, Pedro Pascal, Joanna Christie",
//         Plot: "Una mirada crónica a las hazañas criminales del narcotraficante colombiano Pablo Escobar.",
//         Language: "English, Spanish",
//         Country: "USA",
//         Awards: "Nominated for 2 Golden Globes. Another 4 nominations.",
//         Poster: "https://img.ecartelera.com/noticias/fotos/33400/33455/1.jpg",
//         Metascore: "N/A",
//         imdbRating: "8.9",
//         imdbVotes: "118,680",
//         imdbID: "tt2707408",
//         Type: "series",
//         totalSeasons: "2",
//         Response: "True",
//         Available: true,
//         Delete: false,
//         Principal: false,
//         Trailer: "https://www.youtube.com/watch?v=OuefmTHrfLk&ab_channel=NetflixLatinoam%C3%A9rica",
//         Images: [
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2MDMzMTc0MF5BMl5BanBnXkFtZTgwMTAyMzA1OTE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxMDkyOTEyNV5BMl5BanBnXkFtZTgwNjY3Mjc3OTE@._V1_SY1000_SX1500_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA2NDUwMTU2NV5BMl5BanBnXkFtZTgwNTI1Mzc3OTE@._V1_SY1000_CR0,0,1499,1000_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BODA1NjAyMTQ3Ml5BMl5BanBnXkFtZTgwNjI1Mzc3OTE@._V1_SY1000_CR0,0,1499,1000_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU0NzQ0OTAwNl5BMl5BanBnXkFtZTgwMDAyMzA1OTE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
//         ],
//     },
//     {
//         id: 12,
//         Title: "Breaking Bad",
//         Year: "2008–2013",
//         Rated: "TV-14",
//         Released: "20 Jan 2008",
//         Runtime: "49 min",
//         Genre: "Crime, Drama, Thriller",
//         Director: "N/A",
//         Writer: "Vince Gilligan",
//         Actors: "Bryan Cranston, Anna Gunn, Aaron Paul, Dean Norris",
//         Plot: "Un profesor de química de secundaria diagnosticado con cáncer de pulmón inoperable se dedica a la fabricación y venta de metanfetamina para asegurar el futuro financiero de su familia.",
//         Language: "English, Spanish",
//         Country: "USA",
//         Awards: "Won 2 Golden Globes. Another 132 wins & 218 nominations.",
//         Poster: "https://i.pinimg.com/750x/a4/b9/de/a4b9de044d3967643e70a87827523ef2.jpg",
//         Metascore: "N/A",
//         imdbRating: "9.5",
//         imdbVotes: "889,883",
//         imdbID: "tt0903747",
//         Type: "series",
//         totalSeasons: "5",
//         Response: "True",
//         Available: true,
//         Delete: false,
//         Principal: false,
//         Trailer: "https://www.youtube.com/watch?v=ceqOTZnhgY8&ab_channel=Klaba",
//         Images: [
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgyMzI5NDc5Nl5BMl5BanBnXkFtZTgwMjM0MTI2MDE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2NDkwNDk5NV5BMl5BanBnXkFtZTgwNDM0MTI2MDE@._V1_SY1000_CR0,0,1495,1000_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM4NDcyNDMzMF5BMl5BanBnXkFtZTgwOTI0MTI2MDE@._V1_SY1000_CR0,0,1495,1000_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAzMTczMjM3NjFeQTJeQWpwZ15BbWU4MDc1MTI1MzAx._V1_SY1000_CR0,0,1495,1000_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5MTE3MTgwMF5BMl5BanBnXkFtZTgwOTQxMjUzMDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
//         ],
//     },
//     {
//         id: 13,
//         ComingSoon: true,
//         Title: "Doctor Strange",
//         Year: "2016",
//         Rated: "N/A",
//         Released: "04 Nov 2016",
//         Runtime: "N/A",
//         Genre: "Action, Adventure, Fantasy",
//         Director: "Scott Derrickson",
//         Writer: "Scott Derrickson (screenplay), C. Robert Cargill (screenplay), Jon Spaihts (story by), Scott Derrickson (story by), C. Robert Cargill (story by), Steve Ditko (comic book)",
//         Actors: "Rachel McAdams, Benedict Cumberbatch, Mads Mikkelsen, Tilda Swinton",
//         Plot: "Después de que su carrera es destruida, un cirujano brillante pero arrogante y engreído obtiene una nueva oportunidad de vida cuando un hechicero lo toma bajo su protección y lo entrena para defender al mundo contra el mal.",
//         Language: "English",
//         Country: "USA",
//         Awards: "N/A",
//         Poster: "https://dam.smashmexico.com.mx/wp-content/uploads/2022/02/doctor-strange-nuevo-poster.jpg",
//         Metascore: "N/A",
//         imdbRating: "N/A",
//         imdbVotes: "N/A",
//         imdbID: "tt1211837",
//         Type: "movie",
//         Response: "True",
//         Available: true,
//         Delete: false,
//         Principal: false,
//         Trailer: "https://www.youtube.com/watch?v=dOhfaLMbvxA&ab_channel=PLAYLIVETrailers",
//         Images: [
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3ODc1ODI5Ml5BMl5BanBnXkFtZTgwODMzMDY3OTE@._V1_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxNTAyNTU0NV5BMl5BanBnXkFtZTgwNzMzMDY3OTE@._V1_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE5NDc5NzUwNV5BMl5BanBnXkFtZTgwMDM3MDM2NzE@._V1_.jpg",
//         ],
//     },
//     {
//         id: 14,
//         ComingSoon: true,
//         Title: "Rogue One: A Star Wars Story",
//         Year: "2016",
//         Rated: "N/A",
//         Released: "16 Dec 2016",
//         Runtime: "N/A",
//         Genre: "Action, Adventure, Sci-Fi",
//         Director: "Gareth Edwards",
//         Writer: "Chris Weitz (screenplay), Tony Gilroy (screenplay), John Knoll (story), Gary Whitta (story), George Lucas (characters)",
//         Actors: "Felicity Jones, Riz Ahmed, Mads Mikkelsen, Ben Mendelsohn",
//         Plot: "La Rebelión hace un movimiento arriesgado para robar los planos de la Estrella de la Muerte, configurando la saga épica a seguir.",
//         Language: "English",
//         Country: "USA",
//         Awards: "1 nomination.",
//         Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQyMzI2OTA3OF5BMl5BanBnXkFtZTgwNDg5NjQ0OTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
//         Metascore: "N/A",
//         imdbRating: "N/A",
//         imdbVotes: "N/A",
//         imdbID: "tt3748528",
//         Type: "movie",
//         Response: "True",
//         Available: true,
//         Delete: false,
//         Principal: false,
//         Trailer: "https://www.youtube.com/watch?v=6BKHwGz0M_c&ab_channel=CineMovsTrailers",
//         Images: [
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3MzA4Nzk3NV5BMl5BanBnXkFtZTgwNjAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BNDMxMTQzMjQxM15BMl5BanBnXkFtZTgwNzAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUyNjkxOTk5NV5BMl5BanBnXkFtZTgwODAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BNjM4MzExNDAyNl5BMl5BanBnXkFtZTgwOTAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3NTgxMDcyNV5BMl5BanBnXkFtZTgwMDExMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
//         ],
//     },
//     {
//         id: 15,
//         ComingSoon: true,
//         Title: "Assassin's Creed",
//         Year: "2016",
//         Rated: "N/A",
//         Released: "21 Dec 2016",
//         Runtime: "N/A",
//         Genre: "Action, Adventure, Fantasy",
//         Director: "Justin Kurzel",
//         Writer: "Bill Collage (screenplay), Adam Cooper (screenplay), Michael Lesslie (screenplay)",
//         Actors: "Michael Fassbender, Michael Kenneth Williams, Marion Cotillard, Jeremy Irons",
//         Plot: "Cuando Callum Lynch explora los recuerdos de su antepasado Aguilar y adquiere las habilidades de un Maestro Asesino, descubre que es descendiente de la sociedad secreta de Asesinos.",
//         Language: "English",
//         Country: "UK, France, USA, Hong Kong",
//         Awards: "N/A",
//         Poster: "https://sm.ign.com/ign_es/screenshot/default/17mech-ac-intl1sheet-campb-spain_5bz5.jpg",
//         Metascore: "N/A",
//         imdbRating: "N/A",
//         imdbVotes: "N/A",
//         imdbID: "tt2094766",
//         Type: "movie",
//         Response: "True",
//         Available: true,
//         Delete: false,
//         Principal: false,
//         Trailer: "https://www.youtube.com/watch?v=8K-P38FoMDk&ab_channel=20thCenturyStudiosLA",
//         Images: [
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BN2EyYzgyOWEtNTY2NS00NjRjLWJiNDYtMWViMjg5MWZjYjgzXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwOWYzOTctOTc4My00ZmJkLTgzMTctMmUxNDI5ODQzYzNjXkEyXkFqcGdeQXVyNDAyODU1Njc@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BZTY5ZGUxMTAtYTU0OC00NGQ2LTkzNzgtZGZmNjlmNjY3MGU0XkEyXkFqcGdeQXVyNTY0MTkxMTg@._V1_SY1000_CR0,0,1500,1000_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BZjA0MWYwZTEtYzc5Yi00NGM2LTg1YTctNjY2YzQ0NDJhZDAwXkEyXkFqcGdeQXVyNDAyODU1Njc@._V1_SY1000_CR0,0,1499,1000_AL_.jpg",
//         ],
//     },
//     {
//         id: 16,
//         ComingSoon: true,
//         Title: "Luke Cage",
//         Year: "2016–",
//         Rated: "TV-MA",
//         Released: "30 Sep 2016",
//         Runtime: "55 min",
//         Genre: "Action, Crime, Drama",
//         Director: "N/A",
//         Writer: "Cheo Hodari Coker",
//         Actors: "Mahershala Ali, Mike Colter, Frankie Faison, Erik LaRay Harvey",
//         Plot: "Con superfuerza y ​​durabilidad gracias a un experimento saboteado, un hombre acusado injustamente escapa de la prisión para convertirse en un superhéroe a sueldo.",
//         Language: "English",
//         Country: "USA",
//         Awards: "N/A",
//         Poster: "https://m.media-amazon.com/images/I/71xby-zAr7L._AC_SY679_.jpg",
//         Metascore: "N/A",
//         imdbRating: "N/A",
//         imdbVotes: "N/A",
//         imdbID: "tt3322314",
//         Type: "series",
//         totalSeasons: "1",
//         Response: "True",
//         Available: true,
//         Delete: false,
//         Principal: false,
//         Trailer: "https://www.youtube.com/watch?v=DLAnrGkvea8&ab_channel=CineTelevisi%C3%B3n",
//         Images: [
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjc1NjI0NV5BMl5BanBnXkFtZTgwNzA0NzY0ODE@._V1_SY1000_CR0,0,1497,1000_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI1MDg3NjY2OF5BMl5BanBnXkFtZTgwNDE1NDU4OTE@._V1_SY1000_CR0,0,1497,1000_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BOTYzOTQyNDYxNl5BMl5BanBnXkFtZTgwNzA1NDU4OTE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMjA3MTQ5Ml5BMl5BanBnXkFtZTgwOTA1NDU4OTE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
//             "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMyNjg5ODYwNF5BMl5BanBnXkFtZTgwMTE1NDU4OTE@._V1_SY1000_CR0,0,1477,1000_AL_.jpg",
//         ],
//     },
//     {
//         id: 17,
//         ComingSoon: true,
//         Title: "Flash",
//         Year: "2014–",
//         Rated: "TV-14",
//         Released: "25 Ago 2014",
//         Runtime: "44 min",
//         Genre: "Drama, Sci-Fi & Fantasy",
//         Director: "N/A",
//         Writer: "Greg Berlanti",
//         Actors: "Grant Gustin, Candice Patton, Danielle Panabaker, Jesse L. Martin.",
//         Plot: "Después de que un acelerador de partículas cause una extraña tormenta, al investigador científico de la policía, Barry Allen, le cae un rayo y entra en coma. Meses después despierta con el poder de moverse a súper velocidad permitiéndole ser el ángel de la guardia de Central City.",
//         Language: "English",
//         Country: "USA",
//         Awards: "N/A",
//         Poster: "https://oyster.ignimgs.com/wordpress/stg.ign.com/2015/08/FLA2_KeyArt-720x900.jpg",
//         Metascore: "N/A",
//         imdbRating: "N/A",
//         imdbVotes: "N/A",
//         imdbID: "tt3322315",
//         Type: "series",
//         totalSeasons: "8",
//         Response: "True",
//         Available: true,
//         Delete: false,
//         Principal: false,
//         Trailer: "https://www.youtube.com/watch?v=l93kQ0km_Ec&ab_channel=MegaTrailers",
//         Images: [
//             "https://cdn-images-1.medium.com/max/1200/1*B6LCZInKx0DbZuMtTKm6Hg.jpeg",
//             "https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/01/Ezra_Miller_Grant_Gustin_The_Flash-1.jpg?fit=1280%2C720&quality=80&ssl=1",
//             "https://i.blogs.es/52d3af/the-flash/1366_2000.jpeg",
//             "https://cinematicos.net/wp-content/uploads/83bb8ba5-123d-4e18-ac9a-0e845c154582-theflash2022.png",
//         ],
//     },
//     {
//         id: 18,
//         ComingSoon: true,
//         Title: "Siniestro",
//         Year: "2014",
//         Rated: "13",
//         Released: "25 Oct 2012",
//         Runtime: "1h 50min",
//         Genre: "Terror, Suspense",
//         Director: "Scott Derrickson",
//         Writer: "N/A",
//         Actors: "Ethan Hawke, Juliet Rylance, Vincent D'Onofrio, James Ransone",
//         Plot: "Un periodista viaja con su familia a lo largo y ancho del país para investigar terribles asesinatos que luego convierte en libros. Cuando llega a una casa donde ha tenido lugar el asesinato de una familia, encuentra una cinta que desvela horribles pistas que van más allá del esclarecimiento de la tragedia.",
//         Language: "English",
//         Country: "USA",
//         Awards: "N/A",
//         Poster: "http://3.bp.blogspot.com/-jEuLRdn07MM/UEXtJ9efYhI/AAAAAAAATOE/gVPlYkpT5J0/s1600/SINISTER+FINAL.jpg",
//         Metascore: "N/A",
//         imdbRating: "N/A",
//         imdbVotes: "N/A",
//         imdbID: "tt3322316",
//         Type: "movie",
//         Response: "True",
//         Available: true,
//         Delete: false,
//         Principal: false,
//         Trailer: "https://www.youtube.com/watch?v=6ISo7Q9B4HM&ab_channel=AlfaFilmsArgentina",
//         Images: [
//             "https://www.themoviedb.org/t/p/original/cSgDucubHzMSoWhUoA2URo6bRlC.jpg",
//             "https://www.themoviedb.org/t/p/original/6tZKFuG9qyYSWRCpkSkBuqZ9GkM.jpg",
//             "https://www.themoviedb.org/t/p/original/wjuNaJJgNpge1LecKF0C6vTeHnJ.jpg",
//             "https://www.themoviedb.org/t/p/original/tesZNusWHOUigLkgmJKM1rFKRfU.jpg",
//         ],
//     },
//     {
//         id: 19,
//         ComingSoon: true,
//         Title: "El Conjuro",
//         Year: "2013",
//         Rated: "13",
//         Released: "5 Sep 2013",
//         Runtime: "1h 52min",
//         Genre: "Terror, Thriller",
//         Director: "James Wan",
//         Writer: "N/A",
//         Actors: "Vera Farmiga, Patrick Wilson, Lili Taylor, Ron Livingston",
//         Plot: "Basada en una historia real documentada por los reputados demonólogos Ed y Lorraine Warren. Narra los encuentros sobrenaturales que vivió la familia Perron en su casa de Rhode Island a principios de los 70.",
//         Language: "English",
//         Country: "USA",
//         Awards: "N/A",
//         Poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
//         Metascore: "N/A",
//         imdbRating: "N/A",
//         imdbVotes: "N/A",
//         imdbID: "tt3322317",
//         Type: "movie",
//         Response: "True",
//         Available: true,
//         Delete: false,
//         Principal: false,
//         Trailer: "https://www.youtube.com/watch?v=k10ETZ41q5o&ab_channel=WarnerBros.Pictures",
//         Images: [
//             "https://www.themoviedb.org/t/p/original/ogbUktEq60qm14hPq8iYgHEJH30.jpg",
//             "https://www.themoviedb.org/t/p/original/6HkIkXERJHl2Eab1zLrof8EYsBR.jpg",
//             "https://www.themoviedb.org/t/p/original/xep7Dm0JZQhQlvRp6BFoxkH9VNz.jpg",
//             "https://www.themoviedb.org/t/p/original/hUOL6nNwTfSIHfKZbJaGm8F371r.jpg",
//         ],
//     },
//     {
//         id: 20,
//         ComingSoon: true,
//         Title: "El Aro",
//         Year: "2002",
//         Rated: "16",
//         Released: "30 Jan 2002",
//         Runtime: "1h 55min",
//         Genre: "Terror, Mystery",
//         Director: "Gore Verbinski",
//         Writer: "N/A",
//         Actors: "Naomi Watts, Martin Henderson, David Dorfman, Brian Cox",
//         Plot: "Rachel Keller es una periodista de investigación que no da mucho crédito a lo que considera una especie de leyenda urbana: al parecer, circula por ahí una cinta de vídeo con imágenes aterradoras, que va acompañada de una llamada telefónica en la que se predice, con una semana de antelación, la muerte de quien las ha visto.",
//         Language: "English",
//         Country: "USA",
//         Awards: "N/A",
//         Poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ibg14SFP5AydxkbJYuihKhKVa8W.jpg",
//         Metascore: "N/A",
//         imdbRating: "N/A",
//         imdbVotes: "N/A",
//         imdbID: "tt3322318",
//         Type: "movie",
//         Response: "True",
//         Available: true,
//         Delete: false,
//         Principal: false,
//         Trailer: "https://www.youtube.com/watch?v=dZUUCSJhfAU&ab_channel=CineXcusas",
//         Images: [
//             "https://www.themoviedb.org/t/p/original/ecSSbMesnRqm4yWWhQQ53IvKU5b.jpg",
//             "https://www.themoviedb.org/t/p/original/6TBaTZCq0FdjrXcj9mKdHGpcr2D.jpg",
//             "https://www.themoviedb.org/t/p/original/oLOPivSI72ZRpeFIrDbk6D66orW.jpg",
//             "https://www.themoviedb.org/t/p/original/A4o1syQdk73sauoV7xZaA5mnYen.jpg",
//         ],
//     },
//     {
//         id: 21,
//         ComingSoon: true,
//         Title: "Cuando las luces se apagan",
//         Year: "2016",
//         Rated: "PG-13",
//         Released: "30 Dec 2013",
//         Runtime: "1h 30min",
//         Genre: "Terror, Suspense, Mystery",
//         Director: "David F. Sandberg",
//         Writer: "N/A",
//         Actors: "Teresa Palmer, Maria Bello, Gabriel Bateman, Alexander DiPersia",
//         Plot: "Rebecca es una joven que es perseguida desde niña por Diana, un ser extraño que sólo puede atacar en la oscuridad. El espíritu de Diana está relacionado con la madre de Rebecca. Ahora que se está convirtiendo en adulta, Diana va a por su hermano pequeño, Martín.",
//         Language: "English",
//         Country: "USA",
//         Awards: "N/A",
//         Poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sS5mCrpSXghQl4kh2y3aTN4M74v.jpg",
//         Metascore: "N/A",
//         imdbRating: "N/A",
//         imdbVotes: "N/A",
//         imdbID: "tt332220",
//         Type: "movie",
//         Response: "True",
//         Available: true,
//         Delete: false,
//         Principal: false,
//         Trailer: "https://www.youtube.com/watch?v=w1VXHtIqrYU&ab_channel=WarnerBros.PicturesEspa%C3%B1a",
//         Images: [
//             "https://www.themoviedb.org/t/p/original/ide0V4u77zJEEsN1XJzVb6nOebU.jpg",
//             "https://www.themoviedb.org/t/p/original/odWJnaBo3grrrUpd7awJdTWF9yT.jpg",
//             "https://www.themoviedb.org/t/p/original/kjPerSfiRFNqp6ljsz2bMjV757J.jpg",
//             "https://www.themoviedb.org/t/p/original/3eBpa5mkJYYfERAy5xP1DkGST6U.jpg",
//         ],
//     },
//     {
//         id: 22,
//         ComingSoon: true,
//         Title: "El exorcismo de Emily Rose",
//         Year: "2005",
//         Rated: "PG-13",
//         Released: "1 Dec 2015",
//         Runtime: "1h 59min",
//         Genre: "Terror, Drama, Suspense, Mystery",
//         Director: "Scott Derrickson",
//         Writer: "N/A",
//         Actors: "Laura Linney, Tom Wilkinson, Campbell Scott, Jennifer Carpenter",
//         Plot: "Emily Rose una noche, sola en su dormitorio, sufre la primera alucinación aterradora, así como una pérdida de conocimiento. Puesto que los ataques son cada vez más frecuentes e intensos, Emily, católica devota, decide someterse a un exorcismo dirigido por el cura de su parroquia, el padre Richard Moore.",
//         Language: "English",
//         Country: "USA",
//         Awards: "N/A",
//         Poster: "https://www.themoviedb.org/t/p/original/2H445u87FDUOl3EijrvUJqZekoY.jpg",
//         Metascore: "N/A",
//         imdbRating: "N/A",
//         imdbVotes: "N/A",
//         imdbID: "tt3322321",
//         Type: "movie",
//         Response: "True",
//         Available: true,
//         Delete: false,
//         Principal: false,
//         Trailer: "https://www.youtube.com/watch?v=Bi-PLwxwvy8",
//         Images: [
//             "https://www.themoviedb.org/t/p/original/lbrKiflbz32EkHou0HaFSIrAamD.jpg",
//             "https://www.themoviedb.org/t/p/original/v0i5IcJZUOK0fRtJ5LmwXoTz2se.jpg",
//             "https://www.themoviedb.org/t/p/original/7KzoGooe5CvPqie0jDcG7xsOZhg.jpg",
//             "https://www.themoviedb.org/t/p/original/cEpM1VUjqmbArgueLek5aJiZdKC.jpg",
//         ],
//     },
//     {
//         id: 22,
//         ComingSoon: true,
//         Title: "Midsommar",
//         Year: "2019",
//         Rated: "16",
//         Released: "19 Sep 2019",
//         Runtime: "2h 28min",
//         Genre: "Terror, Drama, Mystery",
//         Director: "Ari Aster",
//         Writer: "N/A",
//         Actors: "Florence Pugh, Jack Reynor, William Jackson Harper, Will Poulter",
//         Plot: "Una pareja estadounidense que no está pasando por su mejor momento acude con unos amigos a un festival de verano que se celebra cada noventa años en una aldea remota de Suecia.",
//         Language: "English",
//         Country: "USA",
//         Awards: "N/A",
//         Poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/km0ta4N96yjoZPVy5A3gbcE3Ne8.jpg",
//         Metascore: "N/A",
//         imdbRating: "N/A",
//         imdbVotes: "N/A",
//         imdbID: "tt3322322",
//         Type: "movie",
//         Response: "True",
//         Available: true,
//         Delete: false,
//         Principal: false,
//         Trailer: "https://www.youtube.com/watch?v=fcylOJ0twFw",
//         Images: [
//             "https://www.themoviedb.org/t/p/original/uFvVvHia2UMlS0rtE8cetUnFJdb.jpg",
//             "https://www.themoviedb.org/t/p/original/lXROVuH79JEyfpc5mNPZmiXbto2.jpg",
//             "https://www.themoviedb.org/t/p/original/4flWhS16tQFGn9hpMhaVVXWZC5F.jpg",
//             "https://www.themoviedb.org/t/p/original/t3mQ48WhWKVWK7yjWrmY2tD5F0P.jpg",
//         ],
//     },
// ];
//  localStorage.setItem("listMovies", JSON.stringify(movies)); // Borrar hasta aqui cuando junte con lo de mi equipo

let bntNewMovieDOM = document.getElementById("btnNewMovie");
let tbodyAdminDOM = document.getElementById("adminTableMovie");
let formCRUDMovieDOM = document.getElementById("formCRUDMovie");
let listMovies = [];
let movieToEdit = null;
const storageMovie = localStorage.getItem("listMovies");
if (storageMovie) {
    listMovies = JSON.parse(storageMovie);
}

//funcion para cargar la pelicula editada
function loadEditMovie(movie) {
    document.querySelector(
        "#exampleModalLabel"
    ).innerText = `Edit ${movie.Title}`;
    movieToEdit = movie;
    console.log(movieToEdit);
    const idDOM = document.getElementById("movieIdForm");
    idDOM.value = movie.id;
    const titleDOM = document.getElementById("movieTitleForm");
    titleDOM.value = movie.Title;
    const genreDOM = document.getElementById("genreForm");
    genreDOM.value = movie.Genre;
    const plotDOM = document.getElementById("plotForm");
    plotDOM.value = movie.Plot; 
}

//funcion para eliminar pelicula
function deleteMovie(id) {
    swal({
        title: "Estas seguro que quieres eliminar?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            listMovies = listMovies.filter((m) => m.id != id);
            localStorage.setItem("listMovies", JSON.stringify(listMovies));
            generateTableMovies(listMovies);
            swal("Poof! La Película fue eliminada con exito!", {
                icon: "success",
            });
        } else {
            swal("Tu Película fue salvada!");
        }
    });
}

function favoriteMovie(id) {
    const movie = listMovies.find((m) => m.id == id);
    movie.Principal = !movie.Principal;
    // console.log(movie);
    // console.log(listMovies);
    localStorage.setItem("listMovies", JSON.stringify(listMovies));
    generateTableMovies(listMovies);
}


function generateTableMovies(listMovies) {
    tbodyAdminDOM.innerHTML = '';
    listMovies.forEach((movie) => {
        const trDOM = document.createElement("tr");
        const thDOM = document.createElement("th");
        thDOM.textContent = movie.id;
        thDOM.classList = "text-center align-middle";
        const tdTitleDOM = document.createElement("td");
        tdTitleDOM.classList = "text-center align-middle";
        tdTitleDOM.textContent = movie.Title;
        const tdGenreDOM = document.createElement("td");
        tdGenreDOM.classList = "text-center align-middle";
        tdGenreDOM.textContent = movie.Genre.split(",")[0];
        const tdPlopDOM = document.createElement("td");
        tdPlopDOM.classList = "text-center  align-middle";
        tdPlopDOM.textContent = movie.Plot;
        const tdPublishDOM = document.createElement("td");
        tdPublishDOM.classList = "text-center align-middle";
        tdPublishDOM.textContent = movie.Delete ? "No" : "Si";
        const tdActionsDOM = document.createElement("td");
        tdActionsDOM.classList = " align-middle d-flex ";
        const btnEditDOM = document.createElement("button");
        btnEditDOM.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>`;
        btnEditDOM.classList = "btn btn-outline-light me-1";
        btnEditDOM.setAttribute("data-bs-toggle", "modal");
        btnEditDOM.setAttribute("data-bs-target", "#movieModal");
        btnEditDOM.onclick = () => {
            loadEditMovie(movie)    };
        const btnDeleteDOM = document.createElement("button");
        btnDeleteDOM.innerHTML = `<span class="fa fa-solid fa-trash"></span>`;
        btnDeleteDOM.classList = "btn btn-outline-danger me-1";
        btnDeleteDOM.setAttribute("data-bs-toggle", "modal");
        btnDeleteDOM.setAttribute("data-bs-target", "#confirmDelete");
        btnDeleteDOM.onclick = () => {
            deleteMovie(movie.id);
        };
        const btnFavoriteDOM = document.createElement("button");
        btnFavoriteDOM.innerHTML = `<i class="fa-regular fa-star"></i>`;
        btnFavoriteDOM.classList = `btn btn-outline-light ${
      movie.Principal ? "fav" : ""
    }`;
        btnFavoriteDOM.setAttribute("data-bs-toggle", "modal");
        btnFavoriteDOM.setAttribute("data-bs-target", "#favorite");
        btnFavoriteDOM.onclick = () => {
            favoriteMovie(movie.id);
        };
        tdActionsDOM.appendChild(btnEditDOM);
        tdActionsDOM.appendChild(btnDeleteDOM);
        tdActionsDOM.appendChild(btnFavoriteDOM);
        trDOM.appendChild(thDOM);
        trDOM.appendChild(tdTitleDOM);
        trDOM.appendChild(tdGenreDOM);
        trDOM.appendChild(tdPlopDOM);
        trDOM.appendChild(tdPublishDOM);
        trDOM.appendChild(tdActionsDOM);
        tbodyAdminDOM.append(trDOM);
    });
}

bntNewMovieDOM.onclick = (e) => {
    const idDOM = document.getElementById ("movieIdForm");
    const titleDOM = document.getElementById("movieTitleForm");
    const plotDOM = document.getElementById("plotForm");
    const genreDOM = document.getElementById("genreForm");
    idDOM.value = ''
    titleDOM.value = ''
    genreDOM.value = ''
    plotDOM.value = ''
    movieToEdit = null;
};


formCRUDMovieDOM.onsubmit = (e) => {
    e.preventDefault();
    const idDOM = document.getElementById("movieIdForm");
    const titleDOM = document.getElementById("movieTitleForm");
    const genreDOM = document.getElementById("genreForm");
    const plotDOM = document.getElementById("plotForm");
    if (
        idDOM.value &&
        titleDOM.value &&
        genreDOM.value &&
        plotDOM.value
    ) {
        if (movieToEdit) {
            const id = listMovies.findIndex((m) => m.id == movieToEdit.id);
            listMovies[id].id = idDOM.value;
            listMovies[id].Title = titleDOM.value;
            listMovies[id].Genre = genreDOM.value;
            listMovies[id].Plot = plotDOM.value;
        } else {
            const newMovie = {
                id: Date.now(),
                ComingSoon: true,
                Title: titleDOM.value,
                Year: "2016",
                Rated: "PG-13",
                Released: "30 Dec 2013",
                Runtime: "1h 30min",
                Genre: genreDOM.value,
                Director: "David F. Sandberg",
                Writer: "N/A",
                Actors: "Teresa Palmer, Maria Bello, Gabriel Bateman, Alexander DiPersia",
                Plot: plotDOM.value,
                Language: "English",
                Country: "USA",
                Awards: "N/A",
                Poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sS5mCrpSXghQl4kh2y3aTN4M74v.jpg",
                Metascore: "N/A",
                imdbRating: "N/A",
                imdbVotes: "N/A",
                imdbID: "tt332220",
                Type: "movie",
                Response: "True",
                Available: true,
                Delete: false,
                Principal: false,
                Trailer: "https://www.youtube.com/watch?v=w1VXHtIqrYU&ab_channel=WarnerBros.PicturesEspa%C3%B1a",
                Images: [
                    "https://www.themoviedb.org/t/p/original/ide0V4u77zJEEsN1XJzVb6nOebU.jpg",
                    "https://www.themoviedb.org/t/p/original/odWJnaBo3grrrUpd7awJdTWF9yT.jpg",
                    "https://www.themoviedb.org/t/p/original/kjPerSfiRFNqp6ljsz2bMjV757J.jpg",
                    "https://www.themoviedb.org/t/p/original/3eBpa5mkJYYfERAy5xP1DkGST6U.jpg",
                ],
            };

            listMovies.push(newMovie);
        }
        localStorage.setItem("listMovies", JSON.stringify(listMovies));
        generateTableMovies(listMovies);
    }
};

generateTableMovies(listMovies);