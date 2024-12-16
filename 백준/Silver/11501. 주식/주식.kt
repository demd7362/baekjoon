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

    fun solve(n: Int, stocks: List<Long>) {
        var sum: Long = 0
        var max: Long = 0
        for (i in n - 1 downTo 0) {
            max = maxOf(max, stocks[i])
            if (stocks[i] < max) {
                sum += max - stocks[i]
            }
        }
        println(sum)
    }
    for (i in 0 until n * 2 step 2) {
        solve(rest[i].toInt(), rest[i + 1].split(' ').map { it.toLong() })
    }

}
