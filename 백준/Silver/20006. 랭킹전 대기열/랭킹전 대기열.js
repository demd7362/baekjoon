const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(x => x.trim())

let createdAt = 0;


function solution([pm, ...args]) {
    const [playerCount, maxPlayer] = pm.split(' ').map(Number);

    class Room {
        constructor(createPlayer) {
            this.players = [createPlayer];
            this.minLvl = createPlayer.lvl - 10;
            this.maxLvl = createPlayer.lvl + 10;
            this.createdAt = createdAt++;
        }

        addable(player) {
            return player.lvl >= this.minLvl && player.lvl <= this.maxLvl && this.players.length < maxPlayer;
        }

        addPlayer(player) {
            if (!this.isFull() && this.addable(player)) {
                this.players.push(player);
            }
        }

        waiting() {
            console.log('Waiting!');
            [...this.players].sort((a, b) => a.name.localeCompare(b.name)).forEach(player => console.log(player.lvl, player.name));
        }

        startGame() {
            console.log('Started!');
            [...this.players].sort((a, b) => a.name.localeCompare(b.name)).forEach(player => console.log(player.lvl, player.name));
        }

        isFull() {
            return this.players.length === maxPlayer;
        }
    }

    const players = args.map(arg => {
        const [lvl, name] = arg.split(' ');
        return {lvl: Number(lvl), name};
    })
    let rooms = [];

    function findRoom(player) {
        let arr = []
        for (let i = 0; i < rooms.length; i++) {
            let room = rooms[i];

            let addable = room.addable(player);
            if (addable) {
                arr.push({
                    room,
                    index: i
                });
            }
        }

        if (arr.length > 0) {
            arr.sort((a, b) => a.room.createdAt - b.room.createdAt);
            return arr[0];
        } else {
            return null;
        }
    }
    for(const player of players){
        const recentRoom = findRoom(player);
        if (recentRoom === null) {
            const room = new Room(player);
            rooms.push(room);
        } else {
            recentRoom.room.addPlayer(player);
        }
    }
    for (let room of rooms) {
        if(room.isFull()){
            room.startGame();
        } else {
            room.waiting();
        }
    }
}

solution(input);
