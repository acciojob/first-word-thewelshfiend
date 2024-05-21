function firstWord(s) {
    // your code here
    let S = s.trimStart();
    const [start, end] = [0, S.indexOf(' ')];
    if (end != -1)
    {
        return S.slice(start, end);
    }
    return S;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
