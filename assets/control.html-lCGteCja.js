import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as e,f as l}from"./app-I0fPSVVc.js";const s="/assets/cplusplus/for-sum-3.jpg",d={},a=l(`<h2 id="_2023-12-23" tabindex="-1"><a class="header-anchor" href="#_2023-12-23" aria-hidden="true">#</a> 2023/12/23</h2><ul><li>求 1 ～ 9 中不是 3 的倍数的所有数字之和</li></ul><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>#include &lt;iostream&gt;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),v=[a];function r(c,u){return n(),e("div",null,v)}const b=i(d,[["render",r],["__file","control.html.vue"]]);export{b as default};
