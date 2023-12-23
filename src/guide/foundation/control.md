---
title: 控制结构
icon: circle-info
---

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
