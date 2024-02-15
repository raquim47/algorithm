// https://school.programmers.co.kr/learn/courses/30/lessons/181927

function solution(num_list) {
  if(num_list[num_list.length - 1] > num_list[num_list.length - 2]){
    num_list.push(num_list[num_list.length - 1] - num_list[num_list.length - 2])
  } else {
    num_list.push(num_list[num_list.length - 1] * 2)
  }
  return num_list;
}

console.log(solution([5, 2, 1, 7, 5])); //[5, 2, 1, 7, 5, 10]