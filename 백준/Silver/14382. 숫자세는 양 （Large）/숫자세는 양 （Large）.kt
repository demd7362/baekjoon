import java.io.BufferedReader
import java.io.File
import java.io.InputStreamReader
import java.util.*

fun main() {
    val os = System.getProperty("os.name").lowercase(Locale.getDefault())
    val args:List<String> = if (os == "linux") {
        val br = BufferedReader(InputStreamReader(System.`in`))
        br.readLines()
    } else {
        val inputFile = File("src/main/kotlin/input.txt")
        inputFile.readLines()
    }
    val numbers = args.slice(1 until args.size).map{ it.toLong()}
    val answer = mutableListOf<String>()

    for (number in numbers) {
        if (number == 0L) {
            answer.add("INSOMNIA")
            continue
        }

        val set = mutableSetOf<Char>()
        for (j in 1..1000000L) {
            (number * j).toString().forEach { set.add(it) }
            if (set.size == 10) {
                answer.add((number * j).toString())
                break
            }
        }
    }

    answer.forEachIndexed { idx, el ->
        println("Case #${idx + 1}: $el")
    }
}
