# 선형 검색
한쪽 끝에서 반대 끝으로 이동하면서 한 번에 하나의 항목을 확인
<!-- [블로그 정리: https://velog.io/@raquim47/resursion] -->

## 선형 검색 메소드
indexOf, includes, find, findIndex

function linearSearch(arr, val){
  for(let i = 0; i < arr.length; i++){
    if(arr[i]  === val) return i;
  }
  return -1;
}