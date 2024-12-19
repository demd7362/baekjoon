import java.io.BufferedReader
import java.io.File
import java.io.InputStreamReader
import java.util.*

fun main() {
    val os = System.getProperty("os.name").lowercase(Locale.getDefault())
    val args: List<String> = if (os.contains("linux")) {
        val br = BufferedReader(InputStreamReader(System.`in`))
        br.readLines()
    } else {
        val inputFile = File("src/main/kotlin/input.txt")
        inputFile.readLines()
    }

    val n = args[0].toInt()
    val rest = args.slice(1 until args.size)
    fun solve(n: Int, board: Array<List<Int>>) {
        val dp = arrayOf(
            Array(n) { 0 },
            Array(n) { 0 },
            Array(n) { 0 }
        )
        dp[0][0] = board[0][0]
        dp[1][0] = board[1][0]
        for (i in 1 until n) {
            dp[0][i] = maxOf(dp[1][i - 1] + board[0][i], dp[2][i - 1] + board[0][i])
            dp[1][i] = maxOf(dp[0][i - 1] + board[1][i], dp[2][i - 1] + board[1][i])
            dp[2][i] = maxOf(dp[0][i - 1], dp[1][i - 1])
        }
        println(dp.flatten().max())
    }
    for (i in rest.indices step (3)) {
        solve(
            rest[i].toInt(),
            arrayOf(rest[i + 1].split(' ').map { it.toInt() }, rest[i + 2].split(' ').map { it.toInt() })
        )
    }
}
