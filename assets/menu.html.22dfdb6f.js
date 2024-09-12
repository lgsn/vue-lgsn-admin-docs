import{r as e,o,c as r,a as s,b as p,F as c,e as n,d as t}from"./app.09d9145f.js";import{_ as l}from"./detail.b2fa6640.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";var u="/vue-lgsn-admin-docs/assets/menuDefault.bd1b9850.png",k="/vue-lgsn-admin-docs/assets/menuShowRoot.4751161c.png";const d={},m=s("h1",{id:"\u8DEF\u7531\u548C\u83DC\u5355",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u8DEF\u7531\u548C\u83DC\u5355","aria-hidden":"true"},"#"),n(" \u8DEF\u7531\u548C\u83DC\u5355")],-1),h=s("p",null,[n("\u8DEF\u7531\u548C\u83DC\u5355\u662F\u7EC4\u7EC7\u8D77\u4E00\u4E2A\u540E\u53F0\u5E94\u7528\u7684\u5173\u952E\u9AA8\u67B6\u3002\u5728"),s("code",null,"vue-lgsn-admin"),n("\u4E2D\u83DC\u5355\u662F\u6839\u636E\u8DEF\u7531\u751F\u6210\u3002\u8DEF\u7531\u6570\u636E\u53EF\u4EE5\u662F\u9759\u6001\u5199\u5165\u4E5F\u53EF\u4EE5\u662F\u540E\u7AEF\u63A5\u53E3\u8FD4\u56DE\uFF0C\u6216\u8005\u4E24\u8005\u5408\u5E76\u4F7F\u7528\u3002")],-1),y=s("h2",{id:"\u914D\u7F6E\u9879",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u914D\u7F6E\u9879","aria-hidden":"true"},"#"),n(" \u914D\u7F6E\u9879")],-1),g=n("\u914D\u7F6E\u9879\u5C31\u662F\u8DEF\u7531\u7684\u5C5E\u6027\uFF0C\u5728 "),_={href:"https://v3.router.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},v=n("vue-router"),f=n(" \u7684\u57FA\u7840\u4E0A\u589E\u52A0\u989D\u5916\u7684\u5C5E\u6027\u4EE5\u53CA\u7EA6\u5B9A\u4E00\u4E9B\u89C4\u5219\u3002"),j=t(`<div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u5F53\u8BBE\u7F6E true \u7684\u65F6\u5019\u8BE5\u8DEF\u7531\u4E0D\u4F1A\u5728\u4FA7\u8FB9\u680F\u51FA\u73B0 \u5982\u8BE6\u60C5\u3001\u7F16\u8F91\u7B49\u9875\u9762</span>
<span class="token literal-property property">hideMenu</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// (\u9ED8\u8BA4 false)</span>

<span class="token comment">// component \u7EC4\u4EF6\u5730\u5740 \u6CE8\u610F\u5B83\u662F\u5B57\u7B26\u4E32\u800C\u4E0D\u662F\u51FD\u6570</span>
<span class="token comment">// vue-router \u7684 component\u4E0D\u4F1A\u751F\u6548\u3002</span>
<span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token comment">// \u9ED8\u8BA4\u4E3Alayout</span>

<span class="token comment">// \u662F\u5426\u5C55\u793A\u4E00\u7EA7\u83DC\u5355</span>
<span class="token literal-property property">showRoot</span><span class="token operator">:</span> <span class="token boolean">true</span>

<span class="token comment">// \u7981\u6B62\u8BBF\u95EE \u5982\u679C\u4E3Atrue \u9875\u9762\u5C06\u4F1A\u8DF3\u8F6C\u5230401</span>
<span class="token literal-property property">noAccess</span><span class="token operator">:</span> <span class="token boolean">true</span>

<span class="token comment">// \u8DEF\u7531\u5143\u4FE1\u606F</span>
<span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token comment">// \u8DEF\u7531\u6807\u9898 \u5FC5\u586B \u7528\u505A\u83DC\u5355\u3001\u6807\u7B7E\u9875\u7B49\u5C55\u793A\u540D\u79F0</span>
  <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token comment">// \u8DEF\u7531\u56FE\u6807</span>

  <span class="token comment">// \u9009\u4E2D\u83DC\u5355 \u503C\u4E3A\u9009\u4E2D\u83DC\u5355\u7684 name</span>
  <span class="token comment">// \u4F8B\u5982\uFF1A\u4F60\u6709\u4E00\u4E2A\u7528\u6237\u8BE6\u60C5\u9875\uFF0C\u8FD9\u4E2A\u83DC\u5355\u8BBE\u7F6E\u4E86 hideMenu\uFF0C\u5DE6\u4FA7\u83DC\u5355\u680F\u4E2D\u4E0D\u5C55\u793A\u8BE5\u83DC\u5355</span>
  <span class="token comment">// \u4F46\u5F53\u8BBF\u95EE\u7528\u6237\u8BE6\u60C5\u4E5F\u65F6\uFF0C\u4F60\u5E0C\u671B\u9009\u4E2D\u83DC\u5355\u680F\u76EE\u4E2D\u7684\u7528\u6237\u4E00\u680F\u76EE\uFF0C\u5C31\u53EF\u4EE5\u8FDB\u884C\u8BBE\u7F6E</span>
  <span class="token literal-property property">activeMenu</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token comment">// </span>
<span class="token punctuation">}</span>
</code></pre></div><br><p>\u793A\u4F8B\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/menu&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;menu&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;layout&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u83DC\u5355&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;icon-menu&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;list&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;menu/list&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;menuList&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u83DC\u5355&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;icon-menu&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> name</h3>`,5),b=n("name \u4E3A\u5FC5\u586B\u4E14\u5FC5\u987B\u4FDD\u8BC1\u5168\u5C40\u552F\u4E00\u3002"),x=s("code",null,"vue-lgsn-admin",-1),w=n(" \u4E2D\u662F\u6839\u636E "),R={href:"/guide/menu.html#name",target:"_blank",rel:"noopener noreferrer"},M=n("name"),S=n(" \u8FDB\u884C\u8DEF\u7531\u8DF3\u8F6C\u800C\u4E0D\u662F "),I={href:"/guide/menu.html#name",target:"_blank",rel:"noopener noreferrer"},L=n("path"),B=n(" \u3002\u5728\u9879\u76EE\u4E2D\u4F60\u4E5F\u5E94\u8BE5\u9075\u5B88\u8FD9\u4E00\u7EA6\u5B9A\u3002"),D=s("h3",{id:"component",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#component","aria-hidden":"true"},"#"),n(" component")],-1),N=n("\u4E3A\u4E86\u517C\u5BB9\u52A8\u6001\u83DC\u5355\u7684\u5B9E\u73B0\uFF0C\u5728\u6CE8\u518C\u8DEF\u7531\u4E4B\u524D\uFF0C"),V=s("code",null,"vue-lgsn-admin",-1),E=n(" \u5185\u90E8\u4F1A\u7528 "),J={href:"https://webpack.js.org/configuration/resolve/#resolve-alias",target:"_blank",rel:"noopener noreferrer"},z=n("alias"),A=n(" \u5C06 "),C=s("code",null,"component",-1),F=n(" \u7684\u8DEF\u5F84\u8FDB\u884C\u7279\u6B8A\u5904\u7406\u3002\u56E0\u6B64\u914D\u7F6E\u9879\u7684 component \u4E0D\u518D\u662F\u4E00\u4E2A\u51FD\u6570\u4E5F\u5C31\u662F\u4E0D\u652F\u6301 "),P=s("code",null,"vue-router",-1),U=n("\u4E2D\u7684 component \u5199\u6CD5\u3002 \u989D\u5916\u7684\u4F60\u9700\u8981\u4FDD\u8BC1\u6240\u6709\u7684\u9875\u9762\u6587\u4EF6\u90FD\u653E\u5728 "),G=s("code",null,"project-name/src/views/",-1),T=n(" \u6587\u4EF6\u4E0B\u3002\u5E76\u4E14 "),q=s("code",null,"component",-1),H=n(" \u53EA\u586B\u5199\u76F8\u5BF9\u4E8E "),K=s("code",null,"views",-1),O=n(" \u7684\u8DEF\u5F84\uFF0C\u4EE5\u9632\u6B62\u6CE8\u518C\u51FA\u73B0\u95EE\u9898\u3002"),Q=t(`<p>\u793A\u4F8B:</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/menu&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;menu&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;layout&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u83DC\u5355&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;icon-menu&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;list&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;menu/list&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;menuList&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u83DC\u5355&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;icon-menu&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>component: &#39;layout&#39;\uFF0C\u8FD9\u91CC\u7684 layout \u4E3A\u9879\u76EE\u81EA\u5E26\u7684\u9875\u9762\u5E03\u5C40\uFF0C\u5982\u679C\u4F7F\u7528\u5176\u4ED6\u9875\u9762\u5E03\u5C40\uFF0C\u8FD9\u91CC\u586B\u5199\u7684\u662F\u7EC4\u4EF6\u5730\u5740\u800C\u4E0D\u662F\u7EC4\u4EF6\u540D\u79F0\u3002</p></div><h2 id="\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531" aria-hidden="true">#</a> \u8DEF\u7531</h2>`,4),W=s("code",null,"vue-lgsn-admin",-1),X=n(" \u7684\u8DEF\u7531\u5C31\u662F"),Y={href:"https://v3.router.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},Z=n("vue-router"),$=n("\uFF0C\u53EA\u662F\u5BF9\u5176\u8FDB\u884C\u4E86\u4E00\u4E9B\u5C01\u88C5\u3002\u56E0\u6B64\u4F60\u53EF\u4EE5\u4F7F\u7528"),nn=s("code",null,"vue-router",-1),sn=n(" \u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u3002"),an=t(`<h3 id="\u9759\u6001\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u8DEF\u7531" aria-hidden="true">#</a> \u9759\u6001\u8DEF\u7531</h3><p>\u9759\u6001\u8DEF\u7531\u662F\u6307\u50CFlogin\u3001404\u3001500\u7B49\u8FD9\u79CD\u65E0\u9700\u6743\u9650\u7BA1\u7406\u3002 <code>@/config/router.config.js</code> \u4E2D\u8FDB\u884C\u914D\u7F6E\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u9192</p><p>\u8003\u8651\u9759\u6001\u8DEF\u7531\u53EF\u80FD\u4E5F\u9700\u8981\u5728\u83DC\u5355\u4E2D\u5C55\u793A\uFF0C\u56E0\u6B64\u9759\u6001\u8DEF\u7531\u4F1A\u548C\u52A8\u6001\u8DEF\u7531\u5408\u5E76\u4E4B\u540E\u5728\u6CE8\u518C\u3002\u5982\u6709\u989D\u5916\u7684\u4E1A\u52A1\u9700\u6C42\uFF0C\u8BF7\u627E\u5230 <code>@/store/module/permission</code> \u67E5\u770B\u5E76\u4FEE\u6539\u903B\u8F91\u3002</p></div><h3 id="\u52A8\u6001\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u8DEF\u7531" aria-hidden="true">#</a> \u52A8\u6001\u8DEF\u7531</h3><p><code>vue-lgsn-admin</code> \u5728 <code>@/permission</code> \u4E2D\u4EE5 <code>userInfo</code> \u6A21\u62DF\u63A5\u53E3\u7684\u65B9\u5F0F\u83B7\u53D6\u8DEF\u7531\u6570\u636E\uFF0C\u901A\u8FC7 <code>addRoute</code> \u65B9\u5F0F\u5B9E\u73B0\u52A8\u6001\u52A0\u8F7D\u8DEF\u7531\u3002</p><p>\u4F60\u53EA\u9700\u8981\u66FF\u6362 <code>permission/generateRoutes</code> \u4E2D\u4F20\u5165\u7684\u6570\u636E\u5373\u53EF\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u6A21\u62DF\u63A5\u53E3\u65B9\u5F0F \u8DEF\u7531\u6570\u636E</span>
<span class="token comment">// vue-lgsn-admin \u662F\u901A\u8FC7 getUserInfo \u65B9\u6CD5\u83B7\u53D6\u6570\u636E</span>
<span class="token comment">// \u4F60\u4E5F\u53EF\u4EE5\u4FEE\u6539\u8FD9\u91CC\u7684\u903B\u8F91</span>
<span class="token keyword">const</span> responseRouters <span class="token operator">=</span> <span class="token keyword">await</span> store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;getUserInfo&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u66FF\u6362 responseRouters \u6570\u636E\u5373\u53EF</span>
<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token keyword">await</span> store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;permission/generateRoutes&#39;</span><span class="token punctuation">,</span> responseRouters<span class="token punctuation">)</span>
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u9192</p><p>\u6240\u6709\u7684\u8DEF\u7531\u903B\u8F91\u90FD\u653E\u5728 @/permission</p></div><h2 id="\u83DC\u5355" tabindex="-1"><a class="header-anchor" href="#\u83DC\u5355" aria-hidden="true">#</a> \u83DC\u5355</h2><p>\u5728 <code>vue-lgsn-admin</code>\u4E2D\uFF0C\u4F1A\u6839\u636E\u4F60\u7684\u8DEF\u7531\u914D\u7F6E\u81EA\u52A8\u751F\u6210\u3002\u503C\u5F97\u6CE8\u610F\u7684\u662F\uFF0C\u7B80\u6D01\u7684\u8DEF\u7531\u5E94\u8BE5\u4FDD\u6301\u5728\u4E24\u7EA7\u5D4C\u5957\uFF0C\u5982\u679C\u8FD8\u6709\u4E0B\u7EA7\uFF0C\u4F60\u5E94\u8BE5\u901A\u8FC7\u8BE6\u60C5\u9875\u7B49\u5176\u4ED6\u9014\u5F84\u6765\u89E3\u51B3\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u9192</p><p><code>@/layouts/MenuModal/BasicMenu</code> \u5BF9\u5E94\u83DC\u5355\u529F\u80FD\u5B9E\u73B0\u3002</p></div><h3 id="\u4E00\u7EA7\u83DC\u5355" tabindex="-1"><a class="header-anchor" href="#\u4E00\u7EA7\u83DC\u5355" aria-hidden="true">#</a> \u4E00\u7EA7\u83DC\u5355</h3><p>\u53D7 <code>layout</code> \u5E03\u5C40\u5F71\u54CD\uFF0Clayout\u83DC\u5355\u914D\u7F6E\u90FD\u662F\u7531\u4E24\u7EA7\u5D4C\u5957\u7EC4\u6210\u3002\u56E0\u6B64 <code>vue-elment-pro</code> \u4F1A\u628A\u90A3\u4E9B\u53EA\u6709\u4E00\u4E2A\u5B50\u7EA7\u7684\u8DEF\u7531\u8BC6\u522B\u4E3A\u4E00\u7EA7\u83DC\u5355\u3002\u8FD9\u610F\u5473\u7740\u5728\u83DC\u5355\u680F\u4E2D\u53EA\u4F1A\u5C55\u793A\u5B50\u83DC\u5355\uFF0C\u7236\u83DC\u5355\u5C06\u4F1A\u88AB\u9690\u85CF\u3002\u5982\u679C\u4F60\u9700\u8981\u5C55\u793A\u4E00\u7EA7\u83DC\u5355\uFF0C\u8BF7\u5728\u4E00\u7EA7\u83DC\u5355\u4E0B\u6DFB\u52A0 <code>showRoot</code>\u3002</p><p>\u9ED8\u8BA4\uFF1A</p><img src="`+u+`" width="140"><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u83DC\u5355\u680F\u53EA\u4F1A\u5C55\u793A \u83DC\u5355\u5217\u8868</span>
<span class="token comment">// \u83DC\u5355\u7BA1\u7406\u4F1A\u88AB\u5FFD\u7565</span>
<span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/menu&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;menu&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u7CFB\u7EDF\u8BBE\u7F6E&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
   <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;setting&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;menu/index&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;setting&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u83DC\u5355\u7BA1\u7406&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;icon-menu&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// \u4F60\u53EF\u4EE5\u5728\u8FD9\u91CC\u7EE7\u7EED\u914D\u7F6E\u4E0B\u7EA7\u83DC\u5355</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5C55\u793A\u4E00\u7EA7\u83DC\u5355\uFF1A</p><img src="`+k+`" width="140"><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/menu&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;menu&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u7CFB\u7EDF\u8BBE\u7F6E&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
   <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;list&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;menu/index&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;menuSetting&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u83DC\u5355\u7BA1\u7406&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;icon-menu&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// \u4F60\u53EF\u4EE5\u5728\u8FD9\u91CC\u7EE7\u7EED\u914D\u7F6E\u4E0B\u7EA7\u83DC\u5355</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u9192</p><p>\u5982\u679C\u4F60\u7684\u4E00\u7EA7\u83DC\u5355component \u4E3A layout, \u53EF\u4EE5\u5FFD\u7565\u8BE5\u5C5E\u6027\u3002\u4F46\u6CE8\u610F\u5B50\u7EA7\u83DC\u5355\u7684 component \u4E0D\u80FD\u5FFD\u7565\u3002</p></div><h3 id="\u591A\u7EA7\u83DC\u5355" tabindex="-1"><a class="header-anchor" href="#\u591A\u7EA7\u83DC\u5355" aria-hidden="true">#</a> \u591A\u7EA7\u83DC\u5355</h3><p>\u591A\u7EA7\u83DC\u5355\u7684\u5C42\u7EA7\u6839\u636E <code>children</code> \u5C5E\u6027\u751F\u6210\u3002\u7406\u8BBA\u4E0A\u53EF\u4EE5\u65E0\u9650\u5D4C\u5957\u3002</p><p>\u793A\u4F8B\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/menu&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;menu&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
   <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;setting&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;menu/index&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;menuSetting&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u83DC\u5355&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;icon-menu&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// \u4F60\u53EF\u4EE5\u5728\u8FD9\u91CC\u7EE7\u7EED\u914D\u7F6E\u4E0B\u7EA7\u83DC\u5355</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u56FE\u6807" tabindex="-1"><a class="header-anchor" href="#\u56FE\u6807" aria-hidden="true">#</a> \u56FE\u6807</h3>`,25),pn=s("code",null,"vue-lgsn-admin",-1),tn=n(" \u4E2D\u56FE\u6807\u4F7F\u7528\u7684\u662F "),en={href:"https://www.iconfont.cn/",target:"_blank",rel:"noopener noreferrer"},on=n("iconfont"),rn=n(" \u7684 "),cn={href:"https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8cf4382a&helptype=code",target:"_blank",rel:"noopener noreferrer"},ln=n("symbol \u5F15\u7528"),un=n("\uFF0C\u9879\u76EE\u5728 "),kn=s("code",null,"@/styles/global.css",-1),dn=n("\u4E2D\u5DF2\u52A0\u5165\u901A\u7528CSS\u4EE3\u7801\uFF0CJS\u6587\u4EF6\u5728 "),mn=s("code",null,"@/utils/proicon",-1),hn=n("\u3002\u5E76\u5BF9\u56FE\u6807\u5BF9\u4F7F\u7528\u8FDB\u884C\u4E86\u5C01\u88C5 "),yn=s("a",{href:""},"\u7EC4\u4EF6 - \u56FE\u6807",-1),gn=n("\u3002"),_n=t(`<p>\u4F60\u53EA\u9700\u5728 <code>main.js</code>\u4E2D\u5F15\u5165\u4F60\u7684\u56FE\u6807JS\u6587\u4EF6\uFF0C\u5728 <code>meta.icon</code>\u4E2D\u586B\u5199\u5BF9\u5E94\u7C7B\u540D\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>
<span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/menu&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;menu&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;icon-menu&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// \u56FE\u6807</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
   <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;list&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;/menu/index&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;menuList&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u83DC\u5355&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u56FE\u6807</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// \u4F60\u53EF\u4EE5\u5728\u8FD9\u91CC\u7EE7\u7EED\u914D\u7F6E\u4E0B\u7EA7\u83DC\u5355</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u9192</p><p>\u4E00\u7EA7\u83DC\u5355\u7684 <code>icon</code> \u901A\u5E38\u4E0D\u4F1A\u51FA\u73B0\u5728\u83DC\u5355\u4E2D\uFF0C\u66F4\u591A\u7684\u662F\u7528\u6765\u4F5C\u4E3A\u5BB9\u5668\u4F7F\u7528\u3002\u56E0\u6B64\u4F60\u53EF\u4EE5\u7701\u7565\u3002</p></div><p>\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u9879\u76EE\u56FE\u6807\u4F60\u5E94\u8BE5\u65B0\u5EFA\u4E00\u4E2AJS\u6587\u4EF6\uFF0C\u5E76\u5728 <code>main.js</code>\u4E2D\u5F15\u5165\u5355\u72EC\u7BA1\u7406\u3002\u5982\u679C\u4F60\u548C\u6846\u67B6\u81EA\u5E26\u56FE\u6807\u7EDF\u4E00\u7BA1\u7406\uFF0C\u8BF7\u67E5\u9605 <a href="">\u7EC4\u4EF6 - \u56FE\u6807</a>\u3002</p><h3 id="\u5916\u94FE" tabindex="-1"><a class="header-anchor" href="#\u5916\u94FE" aria-hidden="true">#</a> \u5916\u94FE</h3><p>\u4F60\u4E5F\u53EF\u4EE5\u5728\u83DC\u5355\u4E2D\u914D\u7F6E\u4E00\u4E2A\u5916\u94FE\uFF0C\u53EA\u8981\u4F60\u5728 path \u4E2D\u586B\u5199\u4E86\u5408\u6CD5\u7684 url \u8DEF\u5F84\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;https://element.eleme.cn/&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;/element&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u9ED8\u8BA4\u83DC\u5355" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4\u83DC\u5355" aria-hidden="true">#</a> \u9ED8\u8BA4\u83DC\u5355</h3><p><code>vue-lgsn-admin</code> \u5728\u6CE8\u518C\u8DEF\u7531\u4E4B\u524D\uFF0C\u4F1A\u83B7\u53D6\u7B2C\u4E00\u4E2A\u53EF\u8BBF\u83DC\u5355\u4F5C\u4E3A\u9879\u76EE\u7684\u9ED8\u8BA4\u8BBF\u95EE\u5730\u5740\u3002\u5982\u679C\u4F60\u60F3\u6307\u5B9A\u8FD9\u4E2A\u5730\u5740\uFF0C\u627E\u5230 <code>@/store/modules/permission</code> \u4E0B\u7684 <code>generateRoutes</code></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">//  @/store/modules/permission</span>

<span class="token comment">// \u4FEE\u6539 defaultPath</span>
<span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;setIsGetMenu&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> routes<span class="token punctuation">,</span> defaultPath<span class="token punctuation">,</span> <span class="token literal-property property">flag</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre></div><h3 id="\u83DC\u5355\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u83DC\u5355\u6743\u9650" aria-hidden="true">#</a> \u83DC\u5355\u6743\u9650</h3>`,11),vn=n("\u5982\u679C\u4F60\u7ED9\u83DC\u5355\u6DFB\u52A0\u4E86 noAccess \u5C5E\u6027\uFF0C\u83DC\u5355\u680F\u4E2D\u5C06\u4F1A\u8FC7\u6EE4\u6389\u8BE5\u83DC\u5355\u9879\u76EE\u3002\u5373\u4FBF\u901A\u8FC7url\u8BBF\u95EE\uFF0C\u540C\u6837\u4F1A\u88AB\u62E6\u622A\u5230 "),fn={href:"/guide/permission.html#_401",target:"_blank",rel:"noopener noreferrer"},jn=n("401"),bn=n("\u3002"),xn=t(`<h3 id="\u9690\u85CF\u83DC\u5355" tabindex="-1"><a class="header-anchor" href="#\u9690\u85CF\u83DC\u5355" aria-hidden="true">#</a> \u9690\u85CF\u83DC\u5355</h3><p>\u5F53\u83DC\u5355\u4E0D\u9700\u8981\u5728\u83DC\u5355\u680F\u4E2D\u5C55\u793A\uFF0C\u540C\u65F6\u9700\u8981\u53EF\u4EE5\u6B63\u5E38\u8BBF\u95EE\uFF0C\u53EF\u4EE5\u53C2\u8003\u6B64\u793A\u4F8B\u3002\u901A\u5E38\u7528\u6765\u521B\u5EFA\u7C7B\u578B\u8BE6\u60C5\u9875\u3002 \u4F8B\u5982\uFF1A\u6DFB\u52A0\u4E00\u4E2A\u83DC\u5355\u8BE6\u60C5\u9875\u9762\uFF0C\u8BBF\u95EE\u8FD9\u4E2A\u9875\u9762\u540C\u65F6\u9009\u62E9\u5DE6\u4FA7\u83DC\u5355\u680F\u4E2D\u7684\u83DC\u5355\u7BA1\u7406\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u8BE6\u60C5\u9875\u540C\u6837\u9700\u8981\u653E\u5230 layout \u5E03\u5C40\u4E0B\u3002</span>
<span class="token comment">// \u4E3A\u4E86\u65B9\u4FBF\u7BA1\u7406\uFF0C\u4F60\u53EF\u4EE5\u628A\u591A\u4E2A\u8BE6\u60C5\u653E\u5230\u4E00\u4E2A\u8DEF\u7531\u4E0B\u3002</span>
<span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;details&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/details&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hideMenu</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u83DC\u5355\u4E2D\u9690\u85CF</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;businessDetail&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/businessDetail&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;business/businessDetail&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">activeMenu</span><span class="token operator">:</span> <span class="token string">&#39;business&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u8BBF\u95EE\u8BE5\u8DEF\u5F84\u65F6 \u83DC\u5355\u680F\u9009\u4E2D\u67D0\u4E00\u9879 \u503C\u4E3A name</span>
            <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u8BE6\u60C5\u9875&#39;</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;icon&#39;</span><span class="token operator">:</span> <span class="token string">&#39;icon-tongjifenxi&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p><img src="`+l+'" alt="Image"></p>',4);function wn(Rn,Mn){const a=e("ExternalLinkIcon");return o(),r(c,null,[m,h,y,s("p",null,[g,s("a",_,[v,p(a)]),f]),j,s("p",null,[b,x,w,s("a",R,[M,p(a)]),S,s("a",I,[L,p(a)]),B]),D,s("p",null,[N,V,E,s("a",J,[z,p(a)]),A,C,F,P,U,G,T,q,H,K,O]),Q,s("p",null,[W,X,s("a",Y,[Z,p(a)]),$,nn,sn]),an,s("p",null,[pn,tn,s("a",en,[on,p(a)]),rn,s("a",cn,[ln,p(a)]),un,kn,dn,mn,hn,yn,gn]),_n,s("p",null,[vn,s("a",fn,[jn,p(a)]),bn]),xn],64)}var Bn=i(d,[["render",wn]]);export{Bn as default};
