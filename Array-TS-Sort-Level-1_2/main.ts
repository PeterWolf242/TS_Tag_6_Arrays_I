const codingLanguages: string[] = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

function sortDescending() {
    console.log("Array vor Sortierung: " + codingLanguages);

    codingLanguages.sort().reverse();
    console.log("Array absteigend sortiert: " + codingLanguages);
}

sortDescending();