
function arrayKey(wort: string) {

    console.log(wort);

    const wortArray = wort.split("");
    console.log(wortArray);

    const sort1 = wortArray.reverse();
    console.log(sort1);

    const newSort = sort1.join("");
    console.log(newSort);

    return (newSort);


}

arrayKey("han nesaH has ennaH");