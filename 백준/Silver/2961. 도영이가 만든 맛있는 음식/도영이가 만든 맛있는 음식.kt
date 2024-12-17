import java.io.BufferedReader
import java.io.File
import java.io.InputStreamReader
import java.util.*
import kotlin.math.abs

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
    val tastes = rest.map { arg -> arg.split(' ').map { it.toInt() } }
    var min = Int.MAX_VALUE
    fun dfs(index: Int, a: Int, b: Int) {
        if (index != 0) {
            min = minOf(abs(a - b), min)
        }
        for(i in index until n){
            val (newA, newB) = tastes[i]
            dfs(i + 1, newA * a , newB + b)
        }
    }
    dfs(0, 1, 0)
    println(min)

}
