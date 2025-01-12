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

    val (a, b) = args[0].split(' ')

    val diff = b.length - a.length
    var min = Integer.MAX_VALUE
    for(i in 0 .. diff){
        var count = 0
        for(j in a.indices){
            if(a[j] != b[j + i]){
                count++
            }
        }
        min = minOf(min, count)
    }
    println(min)


}
