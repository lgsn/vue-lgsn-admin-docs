import{r as e,o as t,c as p,a,b as o,F as c,e as n,d as r}from"./app.09d9145f.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=a("h1",{id:"\u6743\u9650\u6821\u9A8C",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u6743\u9650\u6821\u9A8C","aria-hidden":"true"},"#"),n(" \u6743\u9650\u6821\u9A8C")],-1),d=a("p",null,[a("code",null,"vue-lgsn-admin"),n("\u4E2D\u5206\u4E3A\u8DEF\u7531\u6743\u9650\u3001\u6307\u4EE4\u6743\u9650\u3002")],-1),k=a("h2",{id:"\u8DEF\u7531\u6743\u9650",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u8DEF\u7531\u6743\u9650","aria-hidden":"true"},"#"),n(" \u8DEF\u7531\u6743\u9650")],-1),h=n("\u8DEF\u7531\u6743\u9650\u662F\u5BF9\u7528\u6237\u8BBF\u95EE\u7684\u5730\u5740\u8FDB\u884C\u6821\u9A8C\uFF0C\u5176\u539F\u7406\u4E3B\u8981\u662F\u901A\u8FC7 "),g={href:"https://v3.router.vuejs.org/zh/guide/advanced/navigation-guards.html",target:"_blank",rel:"noopener noreferrer"},m=n("\u5BFC\u822A\u5B88\u536B"),_=n("\u5B9E\u73B0\u3002"),v=r(`<h3 id="_401" tabindex="-1"><a class="header-anchor" href="#_401" aria-hidden="true">#</a> 401</h3><p>\u901A\u5E38\u5B9E\u73B0\u8FD9\u4E00\u529F\u80FD\u9700\u8981\u4F60\u5BF9\u540E\u7AEF\u7684\u6570\u636E\u8FDB\u884C\u5904\u7406\uFF0C\u5BF9\u5F53\u524D\u7528\u6237\u65E0\u6CD5\u8BBF\u95EE\u7684\u8DEF\u7531\u8FDB\u884C\u6807\u8BB0\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code> <span class="token punctuation">{</span>
   <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;menu&#39;</span><span class="token punctuation">,</span>
   <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/menu&#39;</span><span class="token punctuation">,</span>
   <span class="token literal-property property">onAccess</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// \u5F53onAccess\u4E3Atrue\u65F6 \u5C31\u4F1A\u8DF3\u8F6C\u5230401</span>
   <span class="token literal-property property">comonents</span><span class="token operator">:</span> <span class="token string">&#39;/view/menu/&#39;</span>
 <span class="token punctuation">}</span>
</code></pre></div><h3 id="_404" tabindex="-1"><a class="header-anchor" href="#_404" aria-hidden="true">#</a> 404</h3><p><code>vue-lgsn-admin</code> \u662F\u901A\u8FC7 <code>vue-router</code>\u8FDB\u884C\u914D\u7F6E\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">&#39;/404&#39;</span> <span class="token punctuation">}</span>
</code></pre></div><h3 id="_500" tabindex="-1"><a class="header-anchor" href="#_500" aria-hidden="true">#</a> 500</h3><p>\u4E00\u822C\u662F\u540E\u7AEF\u670D\u52A1\u8FD4\u56DE\u5BF9\u72B6\u6001\u5728 200\u3001304\u3001400\u4EE5\u5916\u7684\u72B6\u6001\u7801\u3002\u5982\u679C\u4F60\u4E0D\u9700\u8981\u6B64\u529F\u80FD\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// @/utils/axios</span>

<span class="token comment">// \u4FEE\u6539\u4EE5\u4E0B\u903B\u8F91</span>
<span class="token keyword">function</span> <span class="token function">checkResponse</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token comment">// \u4FEE\u6539\u5224\u65AD\u903B\u8F91</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>response <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">304</span><span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u6307\u4EE4\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u6307\u4EE4\u6743\u9650" aria-hidden="true">#</a> \u6307\u4EE4\u6743\u9650</h2><p>\u5728\u540E\u53F0\u7CFB\u7EDF\u4E2D\uFF0C\u64CD\u4F5C\u6309\u94AE\u901A\u5E38\u662F\u5E26\u6709\u6743\u9650\u3002<code>vue-lgsn-admin</code> \u5C01\u88C5\u4E86 <a href="">v-rights</a> \u5FEB\u901F\u5B9E\u73B0\u5BF9\u6309\u94AE\u5BF9\u6743\u9650\u63A7\u5236\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>el<span class="token operator">-</span>button v<span class="token operator">-</span>right<span class="token operator">=</span><span class="token string">&#39;edit&#39;</span><span class="token operator">&gt;</span>\u7F16\u8F91<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>
</code></pre></div>`,12);function f(x,b){const s=e("ExternalLinkIcon");return t(),p(c,null,[u,d,k,a("p",null,[h,a("a",g,[m,o(s)]),_]),v],64)}var N=l(i,[["render",f]]);export{N as default};
