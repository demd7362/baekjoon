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
    val digits = args[1].split(' ').map { it.toInt() }
    val m = args[2].toInt()
    val arg = args.slice(3 until args.size).map { it -> it.split(' ').map { it.toInt() } }
    val dp = mutableListOf(digits[0], digits[0] + digits[1])
    for (i in 2 until n) {
        dp.add(dp[i - 1] + digits[i])
    }
    val result = mutableListOf<Int>()
    for (i in 0 until m) {
        val (left, right) = arg[i]
        result.add(dp[right - 1] - dp.getOrElse(left - 2) { 0 })
    }
    println(result.joinToString("\n"))

}
