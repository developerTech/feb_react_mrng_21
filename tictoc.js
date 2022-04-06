const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

class Tictactoe {
    constructor() { 
        this.board = [['-','-','-'],['-','-','-'],['-','-','-']];
    }
 // This prints the current state of the board on the console 
 showBoard() { 
     this.board.forEach((row) => { console.log(row); }); }
 async start() { 
     // Two players "X" and "O" will play against each other on this board. Below line of code selects a random player out of the two to play first.
    let player ="X";
    let counter = 0;
    
    while (true) { 
        console.log(`Player ${player} turn`); 
        this.showBoard(); 
        const value = await prompt("Enter row and column numbers to fix spot: "); 
        console.log();
    if (value == "") { 
        console.log("Invalid Input"); 
    } else { 
        counter = counter+1
        let a = value.split(",")[0]; 
        let b = value.split(",")[1]; 
        this.board[a][b]= player
        if(player == 'X'){
            player = '0'
        }else if(player == '0'){
            player = 'X'
        }
        let matrix = this.board
        let arr = [
            [matrix[0][0], matrix[0][1], matrix[0][2]],
            [matrix[0][0], matrix[1][0], matrix[2][0]],
            [matrix[0][1], matrix[1][1], matrix[2][1]],
            [matrix[0][2], matrix[1][2], matrix[2][2]],
            [matrix[1][0], matrix[1][1], matrix[1][2]],
            [matrix[2][0], matrix[2][1], matrix[2][2]],
            [matrix[0][0], matrix[1][1], matrix[2][2]],
            [matrix[0][2], matrix[1][1], matrix[2][0]]
        ]
        console.log(arr)

        if(counter > 5){
            for(let i=0;i<arr.length;i++){
                for(let j=0;j<arr[i].length;j++){
                    if(arr[i][0] == arr[i][1]){
                        if((arr[i][1]==arr[i][2]) && arr[i][1] !== '-' ){
                            console.log(`Player ${arr[i][0]} win`)
                            process.exit()
                        }
                    }
                }
            }

        }

        if(counter == 9){
            console.log("Its a tie array is full now")
            process.exit()
            //return "Its a tie array is full now"
            
        }
        console.log(counter)
        this.showBoard(); }
        // Task 1: Take user input in row and column format and fill the spot on the board with an "O" or "X" depending on the current player. 
        // Ex: If user inputs "2 2", it should fill current player's spot at second row, second column.
        // Task 2: Swap the turns between players, so that they can play the game and fill the board
        // Task 3: Declare a draw when the board is full
        // Task 4: After a players has played, check whether current player has won or not.
         // The definition of won is if any row, column or diagonal are filled with a player's sign. 
        } 
    }
}
const ticTacToe = new Tictactoe();
ticTacToe.start();
