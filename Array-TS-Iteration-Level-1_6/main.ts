const album: string[] = [
    "holidays.jpg",
    "Restaurant.jpg",
    "desktop",
    "rooms.GIF",
    "DOGATBEACH.jpg"
];

// console.log(album);

album.forEach(element => {

    const extensions: string[] = [".jpg", ".GIF"];
    const hasExtension = extensions.some(ext => element.includes(ext));

    const ExpressionPoint = element.indexOf(".");
    console.log(ExpressionPoint);

    let albumName = element.split(".");
    albumName = element.split(" ");

    const albumLowercase = element.toLowerCase();

    console.log(...albumName[0]);

    console.log(albumLowercase);

    // console.log(element);
});