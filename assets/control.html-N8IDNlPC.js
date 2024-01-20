import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as e,e as l}from"./app-fy9gyfR3.js";const s="/assets/cplusplus/for-sum-3.jpg",d="/assets/cplusplus/sum-of-two-loop.jpg",t="/assets/cplusplus/sum-of-two.jpg",r={},v=l(`<h2 id="_2023-12-23" tabindex="-1"><a class="header-anchor" href="#_2023-12-23" aria-hidden="true">#</a> 2023/12/23</h2><ul><li>求 1 ～ 9 中不是 3 的倍数的所有数字之和</li></ul><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>#include &lt;iostream&gt;

int main() {
    int sum = 0;

    for (int i = 1; i &lt; 10; i++) {
        if ((i % 3) != 0) {
            sum += i;
        }
    }

    std::cout &lt;&lt; sum &lt;&lt; std::endl;

    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+s+`" alt="Execution" tabindex="0" loading="lazy"><figcaption>Execution</figcaption></figure><ul><li>数字趋势</li></ul><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>#include &lt;iostream&gt;

int main() {
    int n = 0;

    std::cin &gt;&gt; n;

    for (int i = 0; i &lt; 10; i++) {
        if (n == 1) {
            break;
        }

        if ((n % 2) == 0) {
            n /= 2;
        } else {
            n += 1;
        }
    }

    std::cout &lt;&lt; n &lt;&lt; std::endl;

    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2023-12-30" tabindex="-1"><a class="header-anchor" href="#_2023-12-30" aria-hidden="true">#</a> 2023/12/30</h2><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>#include &lt;iostream&gt;

bool findSumOfTwo(int* numbers, int const length, int const target) {
    for (int s = 0; s &lt; length - 1; s++) {
        for (int e = s + 1; e &lt; length; e++) {
            if (numbers[s] + numbers[e] == target) {
                std::cout &lt;&lt; target &lt;&lt; &quot; = &quot; &lt;&lt; numbers[s] &lt;&lt; &quot; + &quot; &lt;&lt; numbers[e] &lt;&lt; std::endl;
                return true;
            }
        }
    }

    std::cout &lt;&lt; target &lt;&lt; &quot;: false&quot; &lt;&lt; std::endl;
    return false;
}

int main() {
    int numbers[10] = { 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 };

    findSumOfTwo(numbers, 10, 28);
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+d+`" alt="Execution" loading="lazy"> 当两数之和已经大于目标数时，没有必要再继续循环</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>#include &lt;iostream&gt;

bool findSumOfTwo(int* numbers, int const length, int const target) {
    for (int s = 0; s &lt; length - 1; s++) {
        for (int e = s + 1; e &lt; length; e++) {
            if (numbers[s] + numbers[e] == target) {
                std::cout &lt;&lt; target &lt;&lt; &quot; = &quot; &lt;&lt; numbers[s] &lt;&lt; &quot; + &quot; &lt;&lt; numbers[e] &lt;&lt; std::endl;
                return true;
            }

            if (numbers[s] + numbers[e] &gt; target) {
                break;
            }
        }
    }

    std::cout &lt;&lt; target &lt;&lt; &quot;: false&quot; &lt;&lt; std::endl;
    return false;
}

int main() {
    int numbers[10] = { 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 };

    findSumOfTwo(numbers, 10, 28);
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>#include &lt;iostream&gt;

bool findSumOfTwo(int* numbers, int const length, int const target) {
    for (int s = 0, e = length - 1; s &lt; e;) {
        int sum = numbers[s] + numbers[e];

        if (sum == target) {
            std::cout &lt;&lt; target &lt;&lt; &quot; = &quot; &lt;&lt; numbers[s] &lt;&lt; &quot; + &quot; &lt;&lt; numbers[e] &lt;&lt; std::endl;
            return true;
        }

        if (sum &gt; target) {
            e -= 1;
        } else {
            s += 1;
        }
    }

    std::cout &lt;&lt; target &lt;&lt; &quot;: false&quot; &lt;&lt; std::endl;
    return false;
}

int main() {
    int numbers[10] = { 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 };

    findSumOfTwo(numbers, 10, 28);
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+t+'" alt="Execution" tabindex="0" loading="lazy"><figcaption>Execution</figcaption></figure>',12),u=[v];function a(c,m){return i(),e("div",null,u)}const g=n(r,[["render",a],["__file","control.html.vue"]]);export{g as default};
