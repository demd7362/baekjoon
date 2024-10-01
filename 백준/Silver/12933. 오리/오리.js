const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath)
    .toString()
    .trim()
// .split("\n")
// .map(x => x.trim());

function solution(arg) {
    const sounds = [[]]
    loop:
        for (const char of arg) {
            for (let i = 0; i < sounds.length; i++) {
                let sound = sounds[i]
                switch (sound.length) {
                    case 0: { // 시작하는 배열
                        if (char === 'q') {
                            sound.push(char)
                            continue loop
                        }
                        break
                    }
                    case 1: {
                        if (char === 'u') {
                            sound.push(char)
                            continue loop // 제 위치 찾았으면 continue loop
                        } else if (char === 'q') { // 새로운 배열 만들었으니 다음 char로
                            const newSound = [char]
                            sounds.push(newSound)
                            continue loop
                        }
                        break
                    }
                    case 2: {
                        if (char === 'a') {
                            sound.push(char)
                            continue loop
                        } else if (char === 'q') { // 새로운 배열 만들었으니 다음 char로
                            const newSound = [char]
                            sounds.push(newSound)
                            continue loop
                        }
                        break
                    }
                    case 3: { // 길이에 따른 배열
                        if (char === 'c') {
                            sound.push(char)
                            continue loop
                        } else if (char === 'q') { // 새로운 배열 만들었으니 다음 char로
                            const newSound = [char]
                            sounds.push(newSound)
                            continue loop
                        }
                        break
                    }
                    case 4: { // 마무리
                        if (char === 'k') {
                            sound.push(char)
                            continue loop
                        } else if (char === 'q') {
                            const newSound = [char]
                            sounds.push(newSound)
                            continue loop
                        }
                        break
                    }
                    case 5: {
                        if (char === 'q') {
                            sounds.splice(i, 1)
                            sounds.push([char])
                            continue loop
                        }
                        break
                    }
                } // end switch
            } // for i
            // continue loop 하지못하고 break로 루프를 전부 순회했을 경우
            console.log(-1)
            return
        }

    if (sounds.length === 0) {
        console.log(-1)
        return
    }
    for (const sound of sounds) {
        if (sound.join('') !== 'quack') {
            console.log(-1)
            return
        }
    }
    console.log(sounds.length)
}

solution(input)
