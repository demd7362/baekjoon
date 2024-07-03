import java.io.BufferedReader
import java.io.File
import java.io.InputStreamReader
import java.util.*

data class Position(val x: Int, val y: Int, val count: Int)

fun main() {
    val os = System.getProperty("os.name").lowercase(Locale.getDefault())
    val args: List<String> = if (os.contains("linux")) {
        val br = BufferedReader(InputStreamReader(System.`in`))
        br.readLines()
    } else {
        val inputFile = File("src/main/kotlin/input.txt")
        inputFile.readLines()
    }
    val (n, arg) = args
    val N = n.toInt()
    val current = arg.split(' ').map { x -> x.toInt() }.slice(0 until 2)
    val target = arg.split(' ').map { x -> x.toInt() }.slice(2 until 4)
    var answer = -1
    fun bfs() {
        val directions = arrayOf(
            intArrayOf(-2, -1),
            intArrayOf(-2, 1),
            intArrayOf(0, -2),
            intArrayOf(0, 2),
            intArrayOf(2, -1),
            intArrayOf(2, 1)
        )
        val visited = Array(N) { Array(N) { false } }
        val queue: Queue<Position> = LinkedList()
        queue.add(Position(current[0], current[1], 0))
        while (!queue.isEmpty()) {
            val (x, y, count) = queue.poll();
            if (visited[x][y]) {
                continue
            }
            if(x == target[0] && y == target[1]){
                answer = count
                break
            }
            visited[x][y] = true
            for ((dx, dy) in directions) {
                val nx = dx + x
                val ny = dy + y
                if (nx < 0 || ny < 0 || nx >= N || ny >= N) {
                    continue
                }
                queue.add(Position(nx,ny, count + 1))
            }
        }
    }
    bfs()
    println(answer)

}
