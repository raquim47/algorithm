// https://school.programmers.co.kr/learn/courses/30/lessons/150368

function solution(users, emoticons) {
  const discounts = [10, 20, 30, 40];
  let maxSubscribers = 0;
  let maxSales = 0;

  // 사용자 반응 평가 및 결과 업데이트
  function evaluateCombination(discountCombination) {
    let subscribers = 0;
    let sales = 0;

    users.forEach((user) => {
      let totalCost = 0;
      emoticons.forEach((price, i) => {
        if (discountCombination[i] >= user[0]) {
          totalCost += price * (1 - discountCombination[i] / 100);
        }
      });

      if (totalCost >= user[1]) {
        subscribers += 1;
      } else {
        sales += totalCost;
      }
    });

    if (
      subscribers > maxSubscribers ||
      (subscribers === maxSubscribers && sales > maxSales)
    ) {
      maxSubscribers = subscribers;
      maxSales = sales;
    }
  }

  // 재귀적으로 할인 조합을 생성하고 평가
  function generateDiscounts(index = 0, currentCombination = []) {
    if (index === emoticons.length) {
      evaluateCombination(currentCombination);
      return;
    }

    discounts.forEach((discount) => {
      currentCombination.push(discount);
      generateDiscounts(index + 1, currentCombination);
      currentCombination.pop();
    });
  }

  generateDiscounts();

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
