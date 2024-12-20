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
    val number = n.toString()
    val len = number.length
    val visited = BooleanArray(len) { false }
    val seq = IntArray(len)
    var min = Int.MAX_VALUE

    fun dfs(depth: Int) {
        if (depth == len) {
            val result = seq.joinToString("").toInt()
            if (result > n) {
                min = minOf(result, min)
            }
            return
        }
        for (i in 0 until len) {
            if (visited[i]) {
                continue
            }
            visited[i] = true
            seq[depth] = number[i].toString().toInt()
            dfs(depth + 1)
            visited[i] = false
        }
    }

    dfs(0)
    println(if (min == Int.MAX_VALUE) 0 else min)


}
