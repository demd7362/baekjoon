import java.util.ArrayList;
import java.util.List;

class Solution {
    public int solution(int s) {
        int cnt = 0;
        List<Integer> list = new ArrayList<>();
		String convertToStr = String.valueOf(s);
		String[] arr = convertToStr.split("");
		for(String str : arr) {
			list.add(Integer.parseInt(str));
		}
	
		
		for(int i=list.size()-1; i>=0; i--) {
			int j=list.get(i);
			
			if((i != 0 && j == 5 && (list.get(i-1) >= 5)) || j > 5 ) {
				while(j%10 != 0) {
					j++;
					cnt++;
					
				}
				if(i != 0) {
					list.set(i-1, list.get(i-1)+1);
				} else {
					cnt++;
				}
			} else{
				while(j%10 != 0) {
					j--;
					cnt++;
				}
				
			}
			
		}
        return cnt;
    }
}