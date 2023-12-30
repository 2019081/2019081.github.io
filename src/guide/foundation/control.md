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

## 2023/12/30

```C++
#include <iostream>

bool findSumOfTwo(int* numbers, int const length, int const target) {
    for (int s = 0; s < length - 1; s++) {
        for (int e = s + 1; e < length; e++) {
            if (numbers[s] + numbers[e] == target) {
                std::cout << target << " = " << numbers[s] << " + " << numbers[e] << std::endl;
                return true;
            }
        }
    }

    std::cout << target << ": false" << std::endl;
    return false;
}

int main() {
    int numbers[10] = { 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 };

    findSumOfTwo(numbers, 10, 28);
    return 0;
}
```
![Execution](/assets/cplusplus/sum-of-two-loop.jpg)
当两数之和已经大于目标数时，没有必要再继续循环
```C
#include <iostream>

bool findSumOfTwo(int* numbers, int const length, int const target) {
    for (int s = 0; s < length - 1; s++) {
        for (int e = s + 1; e < length; e++) {
            if (numbers[s] + numbers[e] == target) {
                std::cout << target << " = " << numbers[s] << " + " << numbers[e] << std::endl;
                return true;
            }

            if (numbers[s] + numbers[e] > target) {
                break;
            }
        }
    }

    std::cout << target << ": false" << std::endl;
    return false;
}

int main() {
    int numbers[10] = { 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 };

    findSumOfTwo(numbers, 10, 28);
    return 0;
}
```
```C++
#include <iostream>

bool findSumOfTwo(int* numbers, int const length, int const target) {
    for (int s = 0, e = length - 1; s < e;) {
        int sum = numbers[s] + numbers[e];

        if (sum == target) {
            std::cout << target << " = " << numbers[s] << " + " << numbers[e] << std::endl;
            return true;
        }

        if (sum > target) {
            e -= 1;
        } else {
            s += 1;
        }
    }

    std::cout << target << ": false" << std::endl;
    return false;
}

int main() {
    int numbers[10] = { 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 };

    findSumOfTwo(numbers, 10, 28);
    return 0;
}
```
![Execution](/assets/cplusplus/sum-of-two.jpg)