import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as e,f as l}from"./app-Y6NADlBJ.js";const s={},d=l(`<ul><li>求 1 ～ 9 中不是 3 的倍数的所有数字之和</li></ul><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>#include &lt;iostream&gt;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[d];function r(t,a){return n(),e("div",null,c)}const m=i(s,[["render",r],["__file","control.html.vue"]]);export{m as default};
