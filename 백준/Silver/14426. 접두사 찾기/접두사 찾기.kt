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
    class TrieNode {
        val children = HashMap<Char, TrieNode>()
        var isLeaf = false
    }

    class Trie {
        private val root = TrieNode()

        fun insert(word: String) {
            var node = root
            for (char in word) {
                if (!node.children.containsKey(char)) {
                    node.children[char] = TrieNode()
                }
                node = node.children[char]!!
            }
            node.isLeaf = true
        }

        fun search(word: String): Boolean {
            var node = root
            for (char in word) {
                if (!node.children.containsKey(char)) {
                    return false
                }
                node = node.children[char]!!
            }
            return node.isLeaf
        }

        fun startsWith(prefix: String): Boolean {
            var node = root
            for (char in prefix) {
                if (!node.children.containsKey(char)) {
                    return false
                }
                node = node.children[char]!!
            }
            return true
        }
    }

    val (n, m) = args[0].split(' ').map { it.toInt() }
    val words = args.subList(1, n + 1)
    val prefixes = args.subList(n + 1, n + m + 1)
    var cnt = 0
    val trie = Trie()

    for (word in words) {
        trie.insert(word)
    }

    for (prefix in prefixes) {
        if (trie.startsWith(prefix)) {
            cnt++
        }
    }
    print(cnt)

}
