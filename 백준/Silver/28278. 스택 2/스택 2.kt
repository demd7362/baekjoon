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

    val stack = Stack<Int>()
    val answer = mutableListOf<Int>()
    for (i in 1 until args.size) {
        val arg = args[i]
        if (arg.length > 1) {
            val (_, value) = arg.split(" ").map { it.toInt() }
            stack.push(value)
            continue
        }
        when (arg) {
            "2" -> {
                if (stack.isEmpty()) {
                    answer.add(-1)
                } else {
                    answer.add(stack.pop())
                }

            }
            "3" -> answer.add(stack.size)
            "4" -> answer.add(if (stack.isEmpty()) 1 else 0)
            "5" -> {
                if(stack.isEmpty()){
                    answer.add(-1)
                } else {
                    answer.add(stack.peek())
                }
            }
        }
    }
    println(answer.joinToString("\n"))

}
