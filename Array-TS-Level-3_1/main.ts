const artworks: string[] = ["Die Sternennacht - Vincent van Gogh",
    "Guernica - Pablo Picasso",
    "Die Geburt der Venus - Sandro Botticelli",
    "Die Nachtwache - Rembrandt",
    "Die Mona Lisa - Leonardo da Vinci",
    "Die Kartoffelesser - Vincent van Gogh",
    "Der Schrei - Edvard Munch",
    "Das letzte Abendmahl - Leonardo da Vinci",
    "Die freudige Botschaft - James Tissot",
    "Der Garten der Lüste - Hieronymus Bosch"];

const artworkDates: string[] = ["Die Sternennacht - 1889",
    "Guernica - 1937",
    "Die Geburt der Venus - 1486",
    "Die Nachtwache - 1642",
    "Die Mona Lisa - 1503",
    "Die Kartoffelesser - 1885",
    "Der Schrei - 1893",
    "Das letzte Abendmahl - 1495",
    "Die freudige Botschaft - 1885",
    "Der Garten der Lüste - 1505"
]


function searchArtwork(artworkName: string) {
    const artist = artworks.find(element => (element === artworkName));

    const resultSearch2 = artworkDates.find(element => (element === artworkName));

    // console.log(resultSearch);

    // console.log(resultSearch2);

    if (resultSearch == resultSearch2) console.log("Nicht gefunden");

    return { resultSearch, resultSearch2 };
}

searchArtwork("Guernica - Pablo Picasso");

searchArtwork("1889");