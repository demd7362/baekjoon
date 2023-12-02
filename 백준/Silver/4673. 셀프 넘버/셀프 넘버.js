function solution(n = 10000) {
    let selfNumbers = [];
    let numbers = Array.from({length: n},(_,index) => {
        return index + 1;
    });
    for(let i = 1; i<n; i++){
        const sum = i.toString()
            .split('')
            .map(Number)
            .reduce((acc,val) => acc + val ,0);
        const selfNumber = i + sum;
        selfNumbers.push(selfNumber);
    }
    selfNumbers = [...new Set(selfNumbers)];
    numbers
        .filter(number => !selfNumbers.includes(number))
        .forEach(number => console.log(number))
}

solution();