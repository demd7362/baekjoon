import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // 입력 받기
        int n = scanner.nextInt(); // 동전 종류의 수
        int money = scanner.nextInt(); // 만들어야 할 금액
        int[] coinTypes = new int[n];

        for (int i = 0; i < n; i++) {
            coinTypes[i] = scanner.nextInt();
        }

        int count = 0;

        // 동전 개수 계산
        for (int i = n - 1; i >= 0; i--) {
            if (money >= coinTypes[i]) {
                count += money / coinTypes[i];
                money %= coinTypes[i];
            }
        }

        System.out.println(count);

        scanner.close();
    }
}