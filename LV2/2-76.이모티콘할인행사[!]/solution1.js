// https://school.programmers.co.kr/learn/courses/30/lessons/150368

function solution(users, emoticons) {
  const discounts = [10, 20, 30, 40];
  const combinations = [];
  let maxSubscribers = 0;
  let maxSales = 0;

  function recurse(index, currentCombination) {
    if (index === emoticons.length) {
      // 모든 이모티콘에 대해 할인율을 설정했을 때
      combinations.push([...currentCombination]); // 현재 조합을 배열에 저장
      return;
    }

    // 가능한 모든 할인율을 이모티콘에 적용
    for (let discount of discounts) {
      currentCombination[index] = discount;
      recurse(index + 1, currentCombination);
      currentCombination[index] = null; // 선택 취소 (백트래킹)
    }
  }
  recurse(0, Array(emoticons.length).fill(null)); // 재귀 함수 시작

  combinations.forEach((combination) => {
    let subscribers = 0;
    let sales = 0;

    // 사용자별로 반응을 계산합니다
    users.forEach((user) => {
      let userCost = 0;
      emoticons.forEach((price, index) => {
        let discountRate = combination[index];
        let discountedPrice = price * (1 - discountRate / 100);

        if (discountRate >= user[0]) {
          userCost += discountedPrice;
        }
      });

      if (userCost >= user[1]) {
        subscribers += 1; // 사용자가 서비스 가입
      } else {
        sales += userCost; // 이모티콘 판매액 누적
      }
    });

    // 최대 가입자 수와 최대 판매액을 업데이트합니다
    if (
      subscribers > maxSubscribers ||
      (subscribers === maxSubscribers && sales > maxSales)
    ) {
      maxSubscribers = subscribers;
      maxSales = sales;
    }
  });

  return [maxSubscribers, maxSales];
}

console.log(
  solution(
    [
      [40, 10000],
      [25, 10000],
    ],
    [7000, 9000]
  )
); // [1, 5400]

// 10% 7000 -> 6300
// 20% 7000 -> 5600
// 30% 7000 -> 4900
// 40% 7000 -> 4200

// 10% 9000 -> 8100
// 20% 9000 -> 7200
// 30% 9000 -> 6300
// 40% 9000 -> 5400
