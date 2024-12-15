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
    val (arg0, arg1, arg2) = args
    var n = arg0.toInt()
    var damages = arg1.split(' ').map { x -> x.toInt() }
    var delights = arg2.split(' ').map { x -> x.toInt() }
    val dp = Array(101) { 0 }
    for (i in 0 until n) {
        for (j in 100 downTo damages[i] + 1) {
            dp[j] = maxOf(dp[j], dp[j - damages[i]] + delights[i])
        }
    }
    print(dp.max())
}
