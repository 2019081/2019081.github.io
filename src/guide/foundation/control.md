---
title: 控制结构
icon: circle-info
---

## 2023/12/23
- 求 1 ～ 9 中不是 3 的倍数的所有数字之和
```C++
#include <iostream>

int main() {
    int sum = 0;

    for (int i = 1; i < 10; i++) {
        if ((i % 3) != 0) {
            sum += i;
        }
    }

    std::cout << sum << std::endl;

    return 0;
}
```
![Execution](/assets/cplusplus/for-sum-3.jpg)

- 数字趋势
```C++
#include <iostream>

int main() {
    int n = 0;

    std::cin >> n;

    for (int i = 0; i < 10; i++) {
        if (n == 1) {
            break;
        }

        if ((n % 2) == 0) {
            n /= 2;
        } else {
            n += 1;
        }
    }

    std::cout << n << std::endl;

    return 0;
}
```
