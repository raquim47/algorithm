// https://school.programmers.co.kr/learn/courses/30/lessons/181885

function solution(todo_list, finished) {
  return todo_list.filter((v, i) => !finished[i])
}

console.log(
  solution(
    ['problemsolving', 'practiceguitar', 'swim', 'studygraph'],
    [true, false, true, false]
  )
); // ["practiceguitar", "studygraph"]
