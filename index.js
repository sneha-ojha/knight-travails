function knightMoves(start, end) {
    // All possible moves for a knight
    const moves = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];

    // Helper function to check if a position is valid on the board
    const isValid = ([x, y]) => x >= 0 && x < 8 && y >= 0 && y < 8;

    // BFS implementation
    const bfs = (start, end) => {
        let queue = [[start]]; // Queue initialized with the starting position as a path
        const visited = new Set(); // Set to track visited positions

        // Mark the starting position as visited
        visited.add(start.toString());

        while (queue.length > 0) {
            const path = queue.shift(); // Dequeue the current path
            const [x, y] = path[path.length - 1]; // Get the current position

            // If we reach the end position, return the path
            if (x === end[0] && y === end[1]) {
                return path;
            }

            // Explore all valid moves
            for (let [dx, dy] of moves) {
                const next = [x + dx, y + dy];
                if (isValid(next) && !visited.has(next.toString())) {
                    visited.add(next.toString()); // Mark position as visited
                    queue.push([...path, next]); // Enqueue the new path
                }
            }
        }
    };

    // Get the shortest path using BFS
    const shortestPath = bfs(start, end);

    // Output the result
    console.log(`You made it in ${shortestPath.length - 1} moves! Here's your path:`);
    shortestPath.forEach(pos => console.log(pos));
    return shortestPath;
}

// Example usage
knightMoves([0, 0], [7, 7]);
