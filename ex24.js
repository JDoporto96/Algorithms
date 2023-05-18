//Implement a hot-potato simulation using queues.

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}

class Queue {
    constructor() {
      this.players =[];
    }

    enQueue(name){
       this.players.push(name);
    }

    deQueue(){
        if(this.players.length == 0){
            console.log("No one is playing")
            return 
        }
        
        return this.players.shift();

    }

    passThePotato(){
        this.enQueue(this.deQueue());
    }

    hotPotato(){
        const player = this.deQueue();
        console.log(`${player} has been eliminated`)
        if(this.players.length ==1){
            console.log(`${this.players[0]} is the WINNER`)
            return false
        }else if(this.players.length <1){
            console.log("Can't play alone")
        }
        return true
    }

    showQueue(){
       console.log(this.players)
    }
}

const q = new Queue();

const str ="Amy Marie Robert Peter Jhon Daisy Charles Mona Lisa Qiqi";


function startGame(q, names){
    const players = names.split(" ");
    for(let i = 0; i< players.length; i++){
        q.enQueue(players[i])
    }
    q.showQueue();

    let potatoRolling = true;

    while(potatoRolling){
        let count = getRandomInt(1,10);
        let i = 0;
        while(i< count){
            q.passThePotato()
            i++;
        }
        potatoRolling = q.hotPotato()
    }
}

startGame(q, str)
