import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.BBKq6QKo.js";const c=JSON.parse('{"title":"JavaScript 模块化","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"selfstudyNotes/frontend/JsModule.md","filePath":"selfstudyNotes/frontend/JsModule.md"}'),t={name:"selfstudyNotes/frontend/JsModule.md"},l=n(`<h1 id="javascript-模块化" tabindex="-1">JavaScript 模块化 <a class="header-anchor" href="#javascript-模块化" aria-label="Permalink to &quot;JavaScript 模块化&quot;">​</a></h1><p>JavaScript 语言一开始并没有模块化的概念，js 文件直接通过 <code>script</code> 标签引入到页面中。但是学过 Java、Python 等服务端语言都能发现其中问题：</p><ul><li>无法实现封装，引入 js 文件会暴露整个文件内的数据</li><li>依赖管理混乱，必须按依赖次序引入 js 文件否则报错，一旦文件大了非常逆天</li><li>全局变量污染，全挂在 <code>Window</code> 对象上了说不定就重名被覆盖了</li></ul><h2 id="commonjs" tabindex="-1">CommonJS <a class="header-anchor" href="#commonjs" aria-label="Permalink to &quot;CommonJS&quot;">​</a></h2><h3 id="概览" tabindex="-1">概览 <a class="header-anchor" href="#概览" aria-label="Permalink to &quot;概览&quot;">​</a></h3><p>CommonJS 最初是给 2009 年出现的服务端环境 Node.js 引入模块化的概念，名为 ServerJS，显然一开始是为了给服务端管理文件模块使用的。</p><p>CommonJS 规范如下所示，在 Node.js 环境下外层的 define 是默认自动添加的，不需要自己写。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">define</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //使用event 模块</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ec </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;event&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p>CommonJS 模块导入是通过文件系统<strong>同步</strong>完成的，这在服务端是常见且合理的。</p><h3 id="规范语法" tabindex="-1">规范语法 <a class="header-anchor" href="#规范语法" aria-label="Permalink to &quot;规范语法&quot;">​</a></h3><p>导入导出语法中，<code>exports</code>是一个对象。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用 module.exports 导出</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">b</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {a, b}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用 exports 点语法导出</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;lucy&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 这样也行</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 18</span></span></code></pre></div><p>导入使用全局函数 <code>require</code></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 导入整个模块</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> myModule </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./myModule.js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 对象可以解构</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { myFunction, myVariable } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./myModule.js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用导入的模块</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">myModule.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">myFunction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(myModule.myVariable);</span></span></code></pre></div><p>值得注意的是 CommonJS 规范是<strong>同步</strong>的，这就是其只运用在服务端的原因：浏览器端的 js 模块是通过网络请求异步获得的，由此出现了异步的模块化标准 ACM 以及后来居上的 ES6 模块化标准。</p><h2 id="es6-module" tabindex="-1">ES6 Module <a class="header-anchor" href="#es6-module" aria-label="Permalink to &quot;ES6 Module&quot;">​</a></h2><h3 id="概览-1" tabindex="-1">概览 <a class="header-anchor" href="#概览-1" aria-label="Permalink to &quot;概览&quot;">​</a></h3><p>在 ES6 中，模块内是自动运行在严格模式（意味着顶级 <code>this</code> 是 <code>undefined</code>）下并且没有办法退出运行的 JavaScript 代码。</p><p>在一个模块中定义的变量不会自动被添加到全局共享的作用域之中，这个变量只能作用在这个作用域中。此外模块还必须导出一些外部文件可以访问的元素，以供其他模块或代码使用。</p><p>模块只会被加载一次，并且所有对模块的引用都将指向同一个实例。</p><h3 id="规范语法-1" tabindex="-1">规范语法 <a class="header-anchor" href="#规范语法-1" aria-label="Permalink to &quot;规范语法&quot;">​</a></h3><p>要导入一个模块，指定 <code>type = &quot;module&quot;</code></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;module&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;main.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>值得注意的是，加载一个模块脚本时不需要使用 <code>defer</code> 属性 (see <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/script#attributes" target="_blank" rel="noreferrer"><code>&lt;script&gt;</code> attributes</a>) 模块会<strong>自动延迟加载</strong>。(HTML 文档解析完成后，DOMContentLoaded 事件之前 )</p><p>下面这种写法效果也是一样的：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;module&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> utils </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./utils.js&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // other code</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>ESM 模块之间的导出语法有两种形式</p><ul><li><strong>具名导出</strong>，对应导入时必须用同名指示导入内容，可以通过 <code>as</code> 设置别名</li><li><strong>默认导出</strong>，对应导入时可以使用任意命名</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 具名导出</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;lucy&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 默认导出</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {name, a}</span></span></code></pre></div><p>导入语法中同样可以选择性设置别名</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 导入具名导出的变量，必须显式指出变量名</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {a, name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> outerName} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./outer.js&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 导入默认导出的变量，任意名字都可，这里用 obj</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./outer.js&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(outerName)    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// lucy</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj.name)    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// lucy</span></span></code></pre></div><h2 id="区别" tabindex="-1">区别 <a class="header-anchor" href="#区别" aria-label="Permalink to &quot;区别&quot;">​</a></h2><p>一些主要的区别可见下列表格</p><table tabindex="0"><thead><tr><th>特性</th><th>CommonJS</th><th>ESM</th></tr></thead><tbody><tr><td>加载方式</td><td><code>require()</code> 函数</td><td><code>import</code> 关键字</td></tr><tr><td>导出方式</td><td><code>export</code> 对象</td><td><code>export</code> 关键字</td></tr><tr><td>加载模式</td><td>同步</td><td>异步</td></tr><tr><td>执行模式</td><td>单例</td><td>单例</td></tr><tr><td>树形摇晃</td><td>不支持</td><td>支持</td></tr></tbody></table><p>以下是一些对树形摇晃的简单说明，有时间再写 Tree-shaking 的内容，感觉是编译那边的内容…</p><blockquote><p>Tree Shaking在去除代码冗余的过程中，程序会从入口文件出发扫描所有的模块依赖，以及模块的子依赖，然后将它们链接起来形成一个“抽象语法树”(AST)。</p><p>随后，运行所有代码，查看哪些代码是用到过的，做好标记。最后，再将“抽象语法树”中没有用到的代码“摇落”。经历这样一个过程后，就去除了没有用到的代码。</p></blockquote><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>🚧 <strong>其实就是编译里面的死代码消除（Dead Code Elimination），AST 类似 IR 的控制流图。还是得多看看华保健老师的程序设计语言原理…</strong></p></div><p>Webpack 中，Tree-shaking 的实现一是先「标记」出模块导出值中哪些没有被用过，二是使用 Terser 删掉这些没被用到的导出语句。标记过程大致可划分为三个步骤：</p><ul><li>Make 阶段，收集模块导出变量并记录到模块依赖关系图ModuleGraph 变量中</li><li>Seal 阶段，遍历 ModuleGraph 标记模块导出变量有没有被使用</li><li>生成产物时，若变量没有被其它模块使用则删除对应的导出语句</li></ul><h3 id="模块输出" tabindex="-1">模块输出 <a class="header-anchor" href="#模块输出" aria-label="Permalink to &quot;模块输出&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>😅 CommonJS 模块导出输出的是一个值的<strong>复制</strong>，ES6 模块导出输出的是值的<strong>引用</strong>。</p></div><p>CommonJS 模块导出输出的是值的<strong>复制</strong>，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。可以通过暴露一个修改模块内变量值的函数发现这一点：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// lib.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> counter </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> incCounter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  counter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  counter: counter,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  incCounter: incCounter,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// main.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> mod </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./lib&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(mod.counter);   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mod.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">incCounter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(mod.counter);   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 3</span></span></code></pre></div><p>ESM 模块导出输出的是<strong>引用</strong>，同样可以测试：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// lib.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> counter </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> incCounter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  counter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// main.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { counter, incCounter } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./lib&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(counter); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 3</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">incCounter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(counter); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 4</span></span></code></pre></div><h3 id="加载方式" tabindex="-1">加载方式 <a class="header-anchor" href="#加载方式" aria-label="Permalink to &quot;加载方式&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>😅 CommonJS 模块是<strong>运行时加载</strong>，ES6模块是<strong>编译时输出接口</strong>。</p></div><p>这是因为 CommonJS 加载的是一个对象（即<code>module.exports</code>属性），该对象只有在脚本运行结束时才会生成。</p><p>而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。参考以下说明：</p><blockquote><p><strong>模块解析和执行分离</strong>：在ES6模块系统中，模块的解析（加载和编译）与执行是分开的。模块在解析阶段被加载，并且在这个阶段，模块内部的代码不会被执行。只有在所有依赖的模块都解析完毕后，模块的代码才会按照依赖关系顺序执行。</p></blockquote><blockquote><p>ES6 模块的运行机制与 CommonJS 不一样。JS 引擎对脚本静态分析的时候，遇到模块加载命令<code>import</code> 就会生成一个只读引用。等到脚本真正执行时，再<strong>根据这个只读引用到被加载的模块中取值</strong>。换句话说，ES6 的 <code>import</code> 有点像 Unix 系统的“符号连接”，原始值变了，<code>import</code> 加载的值也会跟着变。因此，ES6 模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块。</p></blockquote>`,51),h=[l];function p(e,k,d,r,o,E){return a(),i("div",null,h)}const y=s(t,[["render",p]]);export{c as __pageData,y as default};
