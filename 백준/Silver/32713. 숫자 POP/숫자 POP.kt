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

    val (n, k) = args[0].split(' ').map { it.toInt() }
    val digits = args[1].split(' ').map { it.toInt() }
    var max = 0
    for(i in 0 until n){
        val current = digits[i]
        var count = 1
        var use = k
        for(j in i + 1 until n){
            if(current != digits[j]){
                if(use > 0){
                    use--
                } else break
            } else count++
        }
        max = maxOf(max, count)
    }
    print(max)

}
