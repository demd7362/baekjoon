import java.io.BufferedReader
import java.io.File
import java.io.InputStreamReader
import java.util.*
import kotlin.math.log

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
    val m = args[1].toInt()
    val digits = args[2].split(' ').map { it.toInt() }.sorted()
    var left = 0
    var right = n - 1
    var count = 0
    while (left < right){
        if(digits[left] + digits[right] < m){
            left++
        } else if(digits[left] + digits[right] > m){
            right--
        } else {
            left++
            right--
            count++
        }
    }
    println(count)


}
