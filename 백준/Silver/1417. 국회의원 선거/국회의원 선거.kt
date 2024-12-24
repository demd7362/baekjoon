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
    var dasom = args[1].toInt()
    val digits = args.slice(2 until args.size).map { it.toInt() }
    val pq = PriorityQueue<Int>(compareByDescending { it })
    pq.addAll(digits)
    var max = pq.poll()
    if(max == null || dasom > max){
        println(0)
        return
    }
    var count = 0
    while(dasom <= max){
        pq.offer(max - 1)
        dasom++
        count++
        max = pq.poll()
    }
    println(count)
}
