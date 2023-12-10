import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        int M = Integer.parseInt(br.readLine());
        BitSet bitSet = new BitSet();
        StringTokenizer st;

        for (int i = 0; i < M; i++) {
            st = new StringTokenizer(br.readLine(), " ");
            String operation = st.nextToken();
            int x = 0;
            if (st.hasMoreTokens()) {
                x = Integer.parseInt(st.nextToken());
            }

            switch (operation) {
                case "add":
                    bitSet.add(x);
                    break;
                case "remove":
                    bitSet.remove(x);
                    break;
                case "check":
                    sb.append(bitSet.check(x) ? 1 : 0).append('\n');
                    break;
                case "toggle":
                    bitSet.toggle(x);
                    break;
                case "all":
                    bitSet.all();
                    break;
                case "empty":
                    bitSet.empty();
                    break;
            }
        }
        System.out.print(sb.toString());
    }

    static class BitSet {
        private int set;

        public BitSet() {
            set = 0;
        }

        public void add(int x) {
            set |= (1 << (x - 1));
        }

        public void remove(int x) {
            set &= ~(1 << (x - 1));
        }

        public boolean check(int x) {
            return (set & (1 << (x - 1))) != 0;
        }

        public void toggle(int x) {
            set ^= (1 << (x - 1));
        }

        public void all() {
            set = (1 << 20) - 1;
        }

        public void empty() {
            set = 0;
        }
    }
}
