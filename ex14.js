//Given the start and end position of an NxM matrix, 
//find all possible routes from start to end given the only valid movements of right or down.

// JavaScript implementation for the above approach

// this class stores information
// about a particular cell i.e
// path upto that cell and cell's
// coordinates

class position{
    constructor(path, i, j){
        this.path = path.slice();
        this.i = i;
        this.j = j;
    }
}

function printAllPaths(maze,start) {
	const n = maze.length;
	const m = maze[0].length;

	const q = [];
	const paths =[];
	q.push(new position([maze[start[0]][start[1]]], start[0], start[1]));

    let path=[];
	while (q.length != 0) {
		let p = q.shift();

		if (p.i == n - 1 && p.j == m - 1) {
			for (let x of p.path){
                path.push(x)
            }
				
			paths.push(path);
            path = [];
		}

		
		else if (p.i == n - 1) {
			let temp = p.path.slice();

			temp.push(maze[p.i][p.j + 1]);
			q.push(new position(temp, p.i, p.j + 1));
		}

		else if (p.j == m - 1) {
			let temp = p.path.slice();


			temp.push(maze[p.i + 1][p.j]);
			q.push(new position(temp, p.i + 1, p.j));
		}

		
		else { 
			let temp = p.path.slice();

		
			temp.push(maze[p.i][p.j + 1]);
			q.push(new position(temp, p.i, p.j + 1));

			
			temp.pop();
			temp.push(maze[p.i + 1][p.j]);

			q.push(new position(temp, p.i + 1, p.j));
		}
	}
    console.log(paths)
}


const maze = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];

printAllPaths(maze,[0,1]);


