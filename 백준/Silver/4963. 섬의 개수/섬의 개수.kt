import java.io.BufferedReader
import java.io.File
import java.io.InputStreamReader
import java.util.*

fun main() {
    val os = System.getProperty("os.name").lowercase(Locale.getDefault())
    val args: List<String> = if (os == "linux") {
        val br = BufferedReader(InputStreamReader(System.`in`))
        br.readLines()
    } else {
        val inputFile = File("src/main/kotlin/input.txt")
        inputFile.readLines()
    }
    val directions = listOf(listOf(0, 1), listOf(1, 0), listOf(-1, 0), listOf(0, -1),
        listOf(1, 1), listOf(1, -1), listOf(-1, 1), listOf(-1, -1)
        )
    fun bfs(board: List<List<Int>>, row: Int, col: Int, startX:Int, startY: Int, visited: Array<BooleanArray>): Boolean {
        val queue: Queue<IntArray> = LinkedList()
        queue.add(intArrayOf(startX, startY))
        var flag = false
        while (queue.isNotEmpty()) {
            val (x, y) = queue.poll()
            if (visited[x][y]) {
                continue
            }
            if(board[x][y] == 1){
                flag = true
            }
            visited[x][y] = true
            for ((dx, dy) in directions) {
                val nx = dx + x
                val ny = dy + y
                if (nx < 0 || ny < 0 || nx >= row || ny >= col || board[nx][ny] == 0 || visited[nx][ny]) {
                    continue
                }
                queue.add(intArrayOf(nx, ny))
            }
        }
        return flag


    }

    var i = 0
    while (i < args.size) {
        val current = args[i]
        if (current.length == 1) {
            println(0)
            i++
            continue
        }
        val (w, h) = current.split(' ').map { it.toInt() }
        if (w == 0 && h == 0) {
            break
        }
        val board = mutableListOf<List<Int>>()
        val visited = Array(h) { BooleanArray(w) { false } }
        for (j in i + 1 until i + 1 + h) {
            board.add(args[j].split(' ').map { it.toInt() })
        }
        var count = 0
        for(x in 0 until board.size){
            for(y in 0 until board[x].size){
                if(board[x][y] == 1){
                    val result = bfs(board, h, w, x,y, visited)
                    count += if (result) 1 else 0
                }

            }
        }
        println(count)

        i += h + 1
    }

}
