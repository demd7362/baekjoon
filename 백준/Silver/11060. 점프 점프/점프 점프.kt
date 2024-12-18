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

    val dp = Array(1001) { Long.MAX_VALUE }
    dp[0] = 0

    for (i in 0 until n) {
        if (digits[i] == 0 || dp[i] == Long.MAX_VALUE) {
            continue
        }
        for (j in i + 1..i + digits[i]) {
            if (j < 1001) {
                dp[j] = minOf(dp[j], dp[i] + 1)
            }
        }
    }
    println(if (dp[n - 1] == Long.MAX_VALUE) -1 else dp[n - 1])
}
