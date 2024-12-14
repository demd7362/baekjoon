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
    val (n, arg1, arg2) = args
    var len = n.toInt()
    var distances = arg1.split(' ').map { x -> x.toInt() }
    var costs = arg2.split(' ').map { x -> x.toInt() }
    var lowCost = costs[0]
    var sum = 0
    for (i in 0 until len - 1) {
        sum += lowCost * distances[i]
        lowCost = lowCost.coerceAtMost(costs[i + 1])
    }
    print(sum)
}
