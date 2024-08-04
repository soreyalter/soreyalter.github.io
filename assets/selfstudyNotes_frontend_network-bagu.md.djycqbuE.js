import{_ as i,c as l,o as s,a4 as a}from"./chunks/framework.BGthqKqN.js";const t="/selfstudy/frontend/network-bagu/chrome-processes-kind.png",e="/selfstudy/frontend/network-bagu/page-finish-loading-1bee6888e9e56_1440.png",n="/selfstudy/frontend/network-bagu/paint-records-151165f18a91e_1440.png",p="/selfstudy/frontend/network-bagu/render-pipeline.png",o="/assets/jage-jank-javascript-b19c0193934a3_1440.d3fFL0Bi.png",r="/selfstudy/frontend/network-bagu/9e6965ed453829afaf222421a4ad7702.png",h="/selfstudy/frontend/network-bagu/278feb9351e303c09dd542d613b326de.png",c="/selfstudy/frontend/network-bagu/49cc1ac2a6267f54cd6a79cb7190d45b.png",d="/selfstudy/frontend/network-bagu/7c56dee7de611ae08f773ca4ae44b214.png",k="/selfstudy/frontend/network-bagu/763c261774e70b70735234144d6a4f58.png",g="/selfstudy/frontend/network-bagu/7f1b3ac8f1ec644d2c0c6e520716bc34.png",u="/selfstudy/frontend/network-bagu/5f8190064ea7fb92e2f1702c931fa026.png",E="/selfstudy/frontend/network-bagu/fa2a1162e4dc4d774e24fe896ce502a4.png",_=JSON.parse('{"title":"计算机网络和浏览器","description":"","frontmatter":{"title":"计算机网络和浏览器","outline":[2,4]},"headers":[],"relativePath":"selfstudyNotes/frontend/network-bagu.md","filePath":"selfstudyNotes/frontend/network-bagu.md"}'),b={name:"selfstudyNotes/frontend/network-bagu.md"},m=a('<h1 id="计算机网络和浏览器" tabindex="-1">计算机网络和浏览器 <a class="header-anchor" href="#计算机网络和浏览器" aria-label="Permalink to &quot;计算机网络和浏览器&quot;">​</a></h1><h2 id="浏览器原理" tabindex="-1">浏览器原理 <a class="header-anchor" href="#浏览器原理" aria-label="Permalink to &quot;浏览器原理&quot;">​</a></h2><h3 id="浏览器进程" tabindex="-1">浏览器进程 <a class="header-anchor" href="#浏览器进程" aria-label="Permalink to &quot;浏览器进程&quot;">​</a></h3><p><strong>浏览器主进程（Browser Process）</strong>：负责界面显示，用户交互，子进程管理，提供存储功能</p><blockquote><p>控制“Chrome”包括地址栏、书签、返回 前进按钮。</p><p>还可以处理网络浏览器中不可见的特权部分，例如 网络请求和文件访问</p></blockquote><p><strong><a href="#浏览器渲染进程">渲染进程（Renderer Process）</a></strong>：将html、css、js转换为用户可以看到和交互的网页</p><blockquote><p>控制标签页内显示网站的一切内容。</p></blockquote><ul><li>主线程(main thread)</li><li>合成器线程(compositor thread)</li><li>栅格化线程(raster thread)</li><li>worker thread</li></ul><p>网络进程：负责页面网络资源加载</p><p>GPU 进程（GPU Process）：绘制图像和视频，或是3d的css效果</p><blockquote><p>与其他进程分开处理 GPU 任务。 它分为不同的进程 因为 GPU 会处理来自多个应用的请求，并在同一 Surface 上绘制它们。</p></blockquote><p><strong>插件进程（Plugin Process）</strong>：控制网站使用的所有插件，比如Flash</p><p><img src="'+t+`" alt="chromeProcess"></p><h3 id="跨域" tabindex="-1">跨域 <a class="header-anchor" href="#跨域" aria-label="Permalink to &quot;跨域&quot;">​</a></h3><h4 id="浏览器同源策略" tabindex="-1">浏览器同源策略 <a class="header-anchor" href="#浏览器同源策略" aria-label="Permalink to &quot;浏览器同源策略&quot;">​</a></h4><ul><li>同源：协议、域名和端口号全部一致</li><li>限制从一个源加载的文档或（js）脚本与另一个源的资源进行交互 <ul><li>js 脚本不能访问其他域的 cookie、localStorage 和 indexDB</li><li>js 脚本不能访问其他域的 DOM</li><li>ajax 请求不能跨域</li></ul></li></ul><h4 id="跨域请求方案" tabindex="-1">跨域请求方案 <a class="header-anchor" href="#跨域请求方案" aria-label="Permalink to &quot;跨域请求方案&quot;">​</a></h4><h5 id="cors" tabindex="-1">CORS <a class="header-anchor" href="#cors" aria-label="Permalink to &quot;CORS&quot;">​</a></h5><p>主要是依赖后端解决</p><p>一般地，浏览器在发起跨域请求时会携带 origin 请求头，值为当前源。服务器根据该字段判断是否同意访问服务器资源。</p><p>浏览器将CORS跨域请求分为简单请求和非简单请求。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><strong>简单请求和预检请求</strong></p><p>只要同时满足以下两个条件，就属于简单请求</p><p>(1) 使用下列方法之一：</p><blockquote><ul><li>head</li><li>get</li><li>post</li></ul></blockquote><p>(2) 请求的Heder是</p><blockquote><ul><li>Accept</li><li>Accept-Language</li><li>Content-Language</li><li>Content-Type: 只限于三个值：application/x-www-form-urlencoded、multipart/form-data、text/plain</li></ul></blockquote></div><p>不同时满足上面的两个条件，就属于非简单请求。浏览器对这两种的处理，是不一样的。</p><p><strong>主要流程</strong></p><ol><li>对于简单请求，浏览器直接发出 CORS 请求。</li><li>服务器返回CORS响应头字段，都以 Access-Control- 开头:</li></ol><blockquote><p><code>Access-Control-Allow-Origin</code>（必选）</p><p>它的值要么是请求时Origin字段的值，要么是一个*，表示接受任意域名的请求。</p></blockquote><ol><li><p>浏览器发现用户请求不是简单请求，就会先发送一个“预检请求”（options请求方法），确认这样的请求服务器是否允许，然后再发送正式的请求</p></li><li><p>服务器收到&quot;预检&quot;请求:</p><p>a. 检查了 <code>Origin</code>、<code>Access-Control-Request-Method</code>和<code>Access-Control-Request-Headers</code>字段以后，确认允许跨源请求，就可以做出回应。</p><p>b. HTTP回应中，除了关键的 <code>Access-Control-Allow-Origin</code> 字段，其他CORS相关字段如下：</p></li></ol><blockquote><p><code>Access-Control-Allow-Methods</code>（必选）</p><p>它的值是逗号分隔的一个字符串，表明服务器支持的所有跨域请求的方法。注意，返回的是所有支持的方法，而不单是浏览器请求的那个方法。这是为了避免多次&quot;预检&quot;请求。</p></blockquote><h5 id="jsonp" tabindex="-1">JSONP <a class="header-anchor" href="#jsonp" aria-label="Permalink to &quot;JSONP&quot;">​</a></h5><p>jsonp 的原理就是利用<code>&lt;script&gt;</code>标签没有跨域限制，通过<code>&lt;script&gt;</code>标签src属性，发送带有 callback 参数的 GET 请求，服务端将接口返回数据拼凑到 callback 函数中，返回给浏览器，浏览器解析执行，从而前端拿到 callback 函数返回的数据。</p><p>因为这里 type 是 <code>text/javascript</code>，所以返回的内容会被立刻当作 js 代码执行。</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://localhost:1111?callback=bb&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text/javascript&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bb</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>后端获取 url 中的 query 参数后，返回一个调用 bb 函数的 json 数据</p><p>比如这里返回 json 格式的 bb(&#39;hello world&#39;)。</p><p>缺点：只能使用 GET 请求</p><h5 id="代理" tabindex="-1">代理 <a class="header-anchor" href="#代理" aria-label="Permalink to &quot;代理&quot;">​</a></h5><p>利用服务器和服务器之间没有同源策略可以直接交流的特性，先将数据发给同源的代理服务器，由服务器转发请求</p><p>可以直接在 vue 项目的配置文件中设置</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// vue.config.js 文件中设置</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    devServer:{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        proxy:{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &#39;/api01&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:{ </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                target:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;http://localhost:5000&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                // 重写请求</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                pathRewrite:{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                    &#39;^/api01&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &#39;/api02&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                target:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;http://localhost:5001&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                // 重写请求</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                pathRewrite:{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                    &#39;^/api02&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="浏览器渲染" tabindex="-1">浏览器渲染 <a class="header-anchor" href="#浏览器渲染" aria-label="Permalink to &quot;浏览器渲染&quot;">​</a></h3><h4 id="浏览器导航" tabindex="-1">浏览器导航 <a class="header-anchor" href="#浏览器导航" aria-label="Permalink to &quot;浏览器导航&quot;">​</a></h4><p>浏览器主线程中有多个线程，在 chrome 浏览器中，标签页以外的所有内容都由浏览器进程处理。</p><h5 id="浏览器进程中有多个不同的线程" tabindex="-1">浏览器进程中有多个不同的线程 <a class="header-anchor" href="#浏览器进程中有多个不同的线程" aria-label="Permalink to &quot;浏览器进程中有多个不同的线程&quot;">​</a></h5><ul><li>UI thread: 界面线程，当您在地址中输入网址时 则表示您的输入由浏览器进程的界面线程处理。</li><li>Network thread: 处理网络堆栈以从互联网接收数据的网络线程</li><li>Storage thread: 控制文件访问等的存储线程</li></ul><h5 id="流程" tabindex="-1">流程 <a class="header-anchor" href="#流程" aria-label="Permalink to &quot;流程&quot;">​</a></h5><ol><li>UI 线程请求网络线程导航到某个网站</li><li>网络线程阅读回复内容，是什么类型的文件（html，zip或其他）、是否安全</li><li>网络线程向 UI 线程确认（confirm）已经导航到对应网站，UI线程找到或者创建（maybe proactive）一个<strong>渲染进程</strong></li><li>浏览器主进程向渲染进程发起 IPC 通信以提交导航（commit navigation），并将网络线程得到的数据传递给渲染进程 <ul><li>浏览器线程监听到渲染进程对提交导航的确认，则导航完成，页面加载阶段开始</li><li>地址栏、安全指示和站点设置 UI 都会更新并反映当前网站的信息</li><li>每个标签页的会话历史会更新，以便前进后退按钮能实现对应功能</li><li>会话历史会被保存到硬盘中，以帮助恢复</li></ul></li><li>当渲染进程“完成”页面加载（load），他将向浏览器主进程发起一个 IPC 通信告知页面加载完毕 <ul><li>整个页面加载完成发生在页面所有帧（frames）的 <code>onload</code> 事件都已触发并执行完成</li><li>“完成”之后，客户端js脚本仍然能加载额外的资源并渲染新的视图</li></ul></li></ol><p><img src="`+e+'" alt="page finished"></p><h4 id="浏览器渲染进程" tabindex="-1">浏览器渲染进程 <a class="header-anchor" href="#浏览器渲染进程" aria-label="Permalink to &quot;浏览器渲染进程&quot;">​</a></h4><p>渲染进程获取html文件后，需要将其渲染为用户实际看到的像素。</p><ol><li>主线程 解析 HTML 文件 <ul><li>构造 DOM</li><li>计算样式 CSSDOM</li></ul></li></ol><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>解析 HTML 时如果遇到 <code>&lt;script&gt;</code> 标签，会阻塞解析 HTML 并转去执行 js 代码。 这是因为 js 脚本可能会改变 DOM 的形态，比如通过 <code>document.write()</code> 方法。</p></div><ol start="2"><li>主线程 根据 DOM 和 CSSDOM 计算布局 (Layout Tree)，这是和最后显示在页面上的元素一一对应的</li><li>主线程 根据 layout tree 生成绘制记录表 (Paint Record) 以告诉浏览器该以什么顺序绘制元素，这个阶段被称为绘制阶段（Paint）</li></ol><p><img src="'+n+'" alt="alt text"></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Layout Tree 和 DOM 以及 CSSDOM 并不是一一对应的，比如 <code>display: none</code> 并不会出现在 Layout Tree 中，而伪类中<code>content</code> 的内容会出现在布局中</p></div><ol start="4"><li>主线程 遍历 layout tree 计算 layer tree ，将 layer tree 和 paint record 交给 合成器线程（compositor thread）</li><li>合成器 线程合成 / 栅格化（Compositing / Rasterizing） <ul><li>合成器线程 将每个 layer 切成图块 tiles 分发给多个栅格化 Raster 线程，Raster 线程将栅格化完毕的 tiles 存储在 GPU memory 中</li><li>合成器线程 收集图块的信息称为 draw quads，据此就可以创造出一个合成器帧（compositor frame）</li><li>渲染进程 通过 IPC 将一个合成器帧提交给浏览器主线程，然后连带着 UI 线程或者其他渲染进程提交过来的合成器帧，交给 GPU 显示到屏幕上</li></ul></li></ol><blockquote><p><strong>Draw quads</strong></p><p>Contains information such as the tile&#39;s location in memory and where in the page to draw the tile taking in consideration of the page compositing.</p><p><strong>Compositor frame</strong></p><p>A collection of draw quads that represents a frame of a page.</p></blockquote><p>以下是渲染管线的示意图。 <img src="'+p+'" alt="alt text"></p><p><strong>渲染优化</strong></p><p>通过以上的渲染流程分析，可以得出一些前端性能优化思路。</p><p>渲染进程的主线程负责如此之多的任务：包括上面提到的解析 HTML 文件，计算布局，绘制和计算图层信息，除此以外，还要执行 js 脚本和与其他进程通信。</p><p>浏览器会在执行完style-layout-paint 生成一帧后执行js脚本，但 js 脚本可能会占用主线程过长时间导致后续的帧没有按时生成，导致用户感到卡顿。</p><p><img src="'+o+'" alt="page jank"></p><p>我们可以将 js 脚本分成多个小块并在每一帧生成后执行，这可以通过<code>requestAnimationFrame()</code>实现。或者使用 js 的 WebWorker 将 js 运行在后台，防止阻塞主线程。</p><blockquote><p><strong>重排</strong>是指浏览器重新计算元素的位置和几何信息的过程。具体来说，即<strong>需要 Style, Layout, Paint, Composite 4个过程</strong>。</p><p>当DOM的变化影响了元素的<u>布局 (layout)</u>时，浏览器需要重新计算元素的尺寸和位置。以下是一些可能导致重排的操作：</p><ul><li>改变元素的宽度、高度、边距、填充或边框</li><li>添加或删除DOM元素</li><li>通过display: none隐藏元素或使其可见</li><li>激活伪类（如:hover）</li><li>改变窗口大小或字体大小</li><li>获取某些属性，如offsetWidth、offsetHeight、clientWidth、clientHeight等</li></ul><p><strong>重绘</strong>是指浏览器更新元素的外观的过程。也就是说<strong>只进行了 Paint 和 Composite 两个过程</strong>。</p><p>当元素的样式发生变化，但并未影响布局（如颜色、背景色、阴影等）时，浏览器会执行重绘操作。以下是一些可能导致重绘的操作：</p><ul><li>改变元素的背景颜色或文本颜色，边框颜色等</li><li>添加或者删除元素的伪类如:hover</li><li>操作 canvas，svg 等图形元素</li></ul></blockquote><p>所以如果能够尽量减少重排甚至重绘，就可以在一定程度上提高页面性能。这可以通过避免频繁 DOM 操作、使用 css3 动画等方式解决。</p><p>对于动画，可以使用 compositing only animations, 即只需要 Composite 过程的动画。</p><p>目前只有两个 css 属性可以实现这一点：</p><ul><li>transform</li><li>opacity</li></ul><p>还可以通过分层来实现优化，即将多变的元素放在单独一层，以防止其经常变化导致整个 layer 的其他不变元素也被重新计算。但这不应该成为主要的手段，因为分层信息的开销同样不小。</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p><strong>will-change</strong>：通常大多数元素例如<code>&lt;div&gt;</code>不会单独分为一层，但是如果它的内容经常需要更新、需要重新渲染，可以添加一个属性：<code>will-change</code>。</p><p>如果这个元素的transform属性需要经常发生变化，那么可以声明<code>will-change: transform;</code>，告知浏览器其需要经常更新，但是最后是否决定分层依然是浏览器的具体实现决定的。</p></div><h2 id="计算机网络" tabindex="-1">计算机网络 <a class="header-anchor" href="#计算机网络" aria-label="Permalink to &quot;计算机网络&quot;">​</a></h2><h3 id="http-和-https" tabindex="-1">http 和 https <a class="header-anchor" href="#http-和-https" aria-label="Permalink to &quot;http 和 https&quot;">​</a></h3><h4 id="get-和-post-请求有什么区别" tabindex="-1">get 和 post 请求有什么区别 <a class="header-anchor" href="#get-和-post-请求有什么区别" aria-label="Permalink to &quot;get 和 post 请求有什么区别&quot;">​</a></h4><p><strong>Notes</strong>：破坏资源、幂等、安全性（url）、语义、缓存</p><div class="info custom-block"><p class="custom-block-title">概念</p><p>在 HTTP 协议里，所谓的「安全」是指请求方法不会「破坏」服务器上的资源。</p><p>所谓的「幂等」，意思是多次执行相同的操作，结果都是「相同」的。</p><p>如果「安全」放入概念是指信息是否会被泄漏的话，虽然 POST 用 body 传输数据，而 GET 用 URL 传输，这样数据会在浏览器地址拦容易看到，但是并不能说 GET 不如 POST 安全的。</p></div><p>因为 HTTP 传输的内容都是明文的，虽然在浏览器地址拦看不到 POST 提交的 body 数据，但是只要抓个包就都能看到了。</p><p>所以，要避免传输过程中数据被窃取，就要使用 HTTPS 协议，这样所有 HTTP 的数据都会被加密传输。</p><ol><li>get 一般用于请求资源，读取数据（比如搜索、筛选之类的），不会对服务器产生修改动作，是“幂等且安全”的；post 请求一般用于写入数据，新增内容，会对服务器资源进行修改；</li><li>get 通过 url 附上请求参数，post 则放在请求体中，这使得 get 请求相对不安全，因为会被 url 会被记录到浏览器历史中，而 post 请求一般是写到服务器端的日志中；</li><li>get 请求静态资源一般会被浏览器缓存，再次请求相同的内容耗时很短，但这同样导致相对不安全</li><li>post 请求能携带更多数据，即请求体能携带更多数据，而 get 请求携带的数据只能放在 url 中，而浏览器对 url 的长度是有限制的；当然这也让 post 请求比 get更慢一些</li></ol><blockquote><p>根据 RFC 规范，get 的语义是从服务器获取指定的资源，一般是静态的文本页面图片视频等。get 的请求参数放在 url 中，只支持 ASCII ,并且浏览器会对 url 的长度进行限制。</p><p>根据 RFC 规范，post 的语义是根据负荷对指定的资源进行处理，一般是提交数据，新增内容。请求参数和数据都放在 body 中，可以是任意格式，浏览器也不会对 body 的大小进行限制。</p></blockquote><h4 id="http-常见字段" tabindex="-1">http 常见字段 <a class="header-anchor" href="#http-常见字段" aria-label="Permalink to &quot;http 常见字段&quot;">​</a></h4><h5 id="请求头" tabindex="-1">请求头 <a class="header-anchor" href="#请求头" aria-label="Permalink to &quot;请求头&quot;">​</a></h5><ul><li>Accept：浏览器可以处理的内容类型</li><li>Accept-Encoding：gzip, deflate 压缩编码</li><li>Accept-Language</li><li>Accept-Charset</li><li>Connection: close / Keep-Alive</li><li>Cookie</li><li>Host：目的主机和端口号</li><li>Referer：请求源页面的域</li><li>User-Agent：客户端使用的操作系统和浏览器及其版本</li></ul><h5 id="响应头" tabindex="-1">响应头 <a class="header-anchor" href="#响应头" aria-label="Permalink to &quot;响应头&quot;">​</a></h5><ul><li>Date：消息发送的日期和时间</li><li>Server：服务器信息</li><li>Connection：连接特性</li><li>Content-Length：数据长度</li><li>Cache-Control：控制 http 缓存 <ul><li>private：默认，响应内容只能作为私有缓存不能在用户间共享</li><li>public：内容被缓存并在多用户间共享</li><li>must-revalidate：内容在特定情况下被重用，但它必须到服务器端验证是不是最新的版本</li><li>no-cache：不缓存，使强制缓存失效</li><li>max-age：设置缓存最大的有效时间，这个参数定义的是时间大小，而不是确定的时间点。单位是秒（实现强制缓存）</li><li>no-store：使强制缓存和协商缓存全部失效</li></ul></li><li>content-type</li></ul><p><img src="'+r+'" alt="image.png"></p><ul><li>Content-Length：响应内容的长度（字节），是 http body 的边界，解决了 tcp 面向字节流的“粘包”问题</li></ul><h4 id="http-keep-alive" tabindex="-1">Http Keep-alive <a class="header-anchor" href="#http-keep-alive" aria-label="Permalink to &quot;Http Keep-alive&quot;">​</a></h4><p>注意，这是 Http 的长连接机制，而不是 tcp。</p><ul><li>http 1.0 需要设置请求头 connection: Keep-Alive</li><li>http 1.1 默认开启长连接，需要关闭的话设置请求头为 connection: close</li></ul><p>为了避免浪费资源维持 tcp 连接，web 服务软件会启动一个定时器，客户端在完成某个请求后长时间不再发起新的请求，就触发定时器的回调函数释放 tcp 连接。</p><p><img src="'+h+'" alt="image.png"></p><h4 id="tcp-keepalive" tabindex="-1">TCP Keepalive <a class="header-anchor" href="#tcp-keepalive" aria-label="Permalink to &quot;TCP Keepalive&quot;">​</a></h4><p>注意，这是 tcp 的保活机制：确认连接的另一头是否还活着。</p><p>如果 tcp 两端一直没有数据交互，达到了触发保活机制的条件，内核的 tcp 协议栈就会发送探测报文看对方是不是死了。</p><ul><li>对方正常响应探测报文：重置 tcp 保活时间</li><li>对方主机宕机或者由于未知原因导致报文不可达，没有相应：tcp 协议栈报告该 tcp 连接已死亡</li></ul><p><img src="'+c+'" alt="image.png"></p><h4 id="http-状态码" tabindex="-1">http 状态码 <a class="header-anchor" href="#http-状态码" aria-label="Permalink to &quot;http 状态码&quot;">​</a></h4><ul><li>1xx：提示，表示现在是协议处理的中间阶段，还需继续</li><li>2xx：成功 <ul><li>200 ok</li><li>204 No Content，响应没有 body</li><li>206 Partial Content，http 断点续传机制，本报文只是一部分</li></ul></li><li>3xx: 重定向 <ul><li>301 Redirect Permanently 永久重定向</li><li>302 Found 临时重定向</li><li>304 Not Modified 资源未修改，缓存重定向，客户端可以继续使用缓存资源</li></ul></li><li>4xx: 客户端错误 <ul><li>400 Bad Request 客户端请求有误</li><li>403 Forbidden 禁止访问</li><li>404 Not Found 找不到这个资源</li></ul></li><li>5xx：服务端错误 <ul><li>500 Internal Server Error 服务端错误</li><li>501 Not Implemented 未实现，即将开业敬请期待</li><li>502 Bad Gateway 通常是作为网关或者代理时返回的错误，服务器自身正常但是访问后端发生错误</li><li>503 Service Unavailable 服务器忙</li></ul></li></ul><h4 id="http-缓存机制" tabindex="-1">http 缓存机制 <a class="header-anchor" href="#http-缓存机制" aria-label="Permalink to &quot;http 缓存机制&quot;">​</a></h4><p>对于一些具有重复性的 HTTP 请求，比如每次请求得到的数据都一样的，我们可以把这对「请求-响应」的数据都<strong>缓存在本地</strong>，那么下次就直接读取本地的数据，不必在通过网络获取服务器的响应了，这样的话 HTTP/1.1 的性能肯定肉眼可见的提升。</p><p>所以，避免发送 HTTP 请求的方法就是通过<strong>缓存技术</strong>，HTTP 设计者早在之前就考虑到了这点，因此 HTTP 协议的头部有不少是针对缓存的字段。</p><p>HTTP 缓存有两种实现方式，分别是<strong>强制缓存和协商缓存</strong></p><h5 id="强制缓存" tabindex="-1">强制缓存 <a class="header-anchor" href="#强制缓存" aria-label="Permalink to &quot;强制缓存&quot;">​</a></h5><p>强缓存是利用下面这两个 HTTP 响应头部（Response Header）字段实现的，它们都用来表示资源在客户端缓存的有效期：</p><ul><li>Cache-Control， 是一个相对时间（优先于 expires）</li><li>Expires，是一个绝对时间</li></ul><p><strong>流程</strong>：</p><ul><li>当浏览器第一次请求访问服务器资源时，服务器会在返回这个资源的同时，在 Response 头部加上 Cache-Control，Cache-Control 中设置了过期时间大小；</li><li>浏览器再次请求访问服务器中的该资源时，会先<strong>通过请求资源的时间与 Cache-Control 中设置的过期时间大小，来计算出该资源是否过期</strong>，如果没有，则使用该缓存，否则重新请求服务器；</li><li>服务器再次收到请求后，会再次更新 Response 头部的 Cache-Control。</li></ul><h5 id="协商缓存" tabindex="-1">协商缓存 <a class="header-anchor" href="#协商缓存" aria-label="Permalink to &quot;协商缓存&quot;">​</a></h5><p>两种实现方法</p><p>通过比较最近修改时间比较</p><ul><li>响应头部中的 Last-Modified：标示这个响应资源的最后修改时间；</li><li>请求头部中的 If-Modified-Since：当资源过期了，发现响应头中具有 Last-Modified 声明，则再次发起请求的时候带上 Last-Modified 的时间</li></ul><p>基于资源唯一标识符（优先于上面那种）</p><ul><li>响应头部中 Etag：唯一标识响应资源；</li><li>请求头部中的 If-None-Match：当资源过期时，浏览器发现响应头里有 Etag，则再次向服务器发起请求时，会将请求头 If-None-Match 值设置为 Etag 的值（If-None-Match: Etag）</li></ul><p>为什么 ETag 的优先级更高？这是因为 ETag 主要能解决 Last-Modified 几个比较难以解决的问题：</p><p>在没有修改文件内容情况下文件的最后修改时间可能也会改变，这会导致客户端认为这文件被改动了，从而重新请求；</p><p>可能有些文件是在秒级以内修改的，If-Modified-Since 能检查到的粒度是秒级的，使用 Etag就能够保证这种需求下客户端在 1 秒内能刷新多次；</p><p>有些服务器不能精确获取文件的最后修改时间。</p><p>注意，<strong>协商缓存这两个字段都需要配合强制缓存中 Cache-Control 字段来使用，只有在未能命中强制缓存的时候，才能发起带有协商缓存字段的请求</strong>。</p><h5 id="一图流" tabindex="-1">一图流 <a class="header-anchor" href="#一图流" aria-label="Permalink to &quot;一图流&quot;">​</a></h5><p><img src="'+d+'" alt="image.png"></p><h4 id="http-1-1-特性" tabindex="-1">http 1.1 特性 <a class="header-anchor" href="#http-1-1-特性" aria-label="Permalink to &quot;http 1.1 特性&quot;">​</a></h4><p>正面特性：</p><ol><li>简单易理解：报文格式是简单的 key-value 对</li><li>灵活易于扩展：url、状态码、头字段都允许开发人员自定义和扩充；工作在应用层，下层随意变化 <ul><li>https 就是在 tcp 和 http 之间增加了 ssl/tls 安全传输层</li></ul></li><li>跨平台应用广泛</li></ol><p>负面特性：</p><ol><li>无状态：减少维持连接状态的开销、但是要完成关联性操作非常麻烦（增加 cookie 或者 session）</li><li>明文传输：抓包可看，但是信息裸奔</li><li>不安全：明文传输泄露信息、不验证双方身份（假网站）、不验证报文完整性会被篡改</li></ol><p>传输特性：</p><ol><li>长连接</li><li>管道网络传输（pipeline），也就是流水线式的发起和回应请求</li></ol><div class="warning custom-block"><p class="custom-block-title">notice</p><p>这个功能不是默认开启，浏览器基本都不支持，所以这里其他的讨论都当作没有开启这个特性。</p></div><ol start="3"><li>队头阻塞：顺序发出的请求被阻塞时（比如服务器一直不回应），后续的请求无法发送</li></ol><h4 id="https" tabindex="-1">https <a class="header-anchor" href="#https" aria-label="Permalink to &quot;https&quot;">​</a></h4><h5 id="http-与-https-有哪些区别" tabindex="-1">HTTP 与 HTTPS 有哪些区别？ <a class="header-anchor" href="#http-与-https-有哪些区别" aria-label="Permalink to &quot;HTTP 与 HTTPS 有哪些区别？&quot;">​</a></h5><ul><li>HTTP 是超文本传输协议，信息是明文传输，存在安全风险的问题。HTTPS 则解决 HTTP 不安全的缺陷，在 TCP 和 HTTP 网络层之间加入了 SSL/TLS 安全协议，使得报文能够加密传输。</li><li>HTTP 连接建立相对简单， TCP 三次握手之后便可进行 HTTP 的报文传输。而 HTTPS 在 TCP 三次握手之后，还需进行 SSL/TLS 的握手过程，才可进入加密报文传输。</li><li>两者的默认端口不一样，HTTP 默认端口号是 80，HTTPS 默认端口号是 443。</li><li>HTTPS 协议需要向 CA（证书权威机构）申请数字证书，来保证服务器的身份是可信的。</li></ul><h5 id="混合加密" tabindex="-1">混合加密 <a class="header-anchor" href="#混合加密" aria-label="Permalink to &quot;混合加密&quot;">​</a></h5><ul><li>通信建立前通过<strong>非对称加密</strong>交换会话密钥</li><li>通信过程使用<strong>对称加密</strong>的会话密钥加密数据</li><li>非对称加密使用两个密钥，速度慢但是能解决密钥交换问题；对称加密只用一个密钥，运算速度快但是无法做到安全交换密钥</li></ul><h5 id="摘要算法-数字签名" tabindex="-1">摘要算法 &amp; 数字签名 <a class="header-anchor" href="#摘要算法-数字签名" aria-label="Permalink to &quot;摘要算法 &amp; 数字签名&quot;">​</a></h5><p><strong>摘要算法</strong>：目的是防止数据被篡改（而不是为了保密）</p><ul><li>这里哈希算法也是公开的，但是如果内容被篡改后再用哈希算法生成哈希值必然是与 A 不同的值。</li><li>所以如果要不被发现，需要把 A 也替换成篡改后内容对应的哈希值</li></ul><p><img src="'+k+'" alt="image.png"></p><p><strong>数字签名</strong>：建立在收发双方已经分别持有公私钥的前提下，目的是确保消息来源不会被冒充</p><ul><li>内容会被私钥加密，只有对应的公钥能解密，也就是说这个内容<strong>一定是来自私钥持有者</strong></li><li>如果内容和哈希值被整体替换，中间人没有私钥无法加密，那接收方用公钥发现解密出来是乱七八糟的内容就知道有人在中间冒充发送方</li><li>但是实际上接收方也就是客户端的公钥是由网站发送过来的（如果浏览器预存了所有网站的公钥开销也太大了），这一步骤如果被黑客劫持，把网站发来的公钥替换成自己的公钥，那黑客就可以用自己私钥加密的内容与客户端通信不被发现</li><li>解决上述问题就需要 CA 颁发证书</li></ul><p><img src="'+g+'" alt="image.png"></p><p>证书：目的是解决传递公钥过程中会被替换的问题，防止客户端拿到假的网站公钥</p><ul><li>网站发送的是网站证书：网站信息+网站公钥+CA私钥签名（对应数字签名hash） ，如果黑客在中间劫持并用浏览器自带的 CA 公钥对这个网站证书解密，然后将其中的网站公钥替换为自己的公钥，但签名无法修改，因为黑客没有 CA 的私钥。此时客户端验证时就会发现自己计算得到的 hash 和 CA 公钥解密出来的 hash 不相等</li></ul><h4 id="xss-跨站脚本攻击" tabindex="-1">xss - 跨站脚本攻击 <a class="header-anchor" href="#xss-跨站脚本攻击" aria-label="Permalink to &quot;xss - 跨站脚本攻击&quot;">​</a></h4><p>跨站脚本攻击（也常被称为XSS）是一种漏洞/缺陷：</p><p>网页允许将HTML/脚本标签作为输入（比如在评论输入框中），并在渲染到浏览器时没有进行编码或过滤。而后端接收请求后将评论内容返回给前端，直接用 innerHTML 插入到 dom 中。</p><p>比如评论中写 &lt;script&gt; 标签，如果没有过滤，直接渲染到前端页面，那么其他访问该网站的人会直接访问 src 属性中的恶意链接。</p><h4 id="http-1-1-轮询、长轮询和-websocket" tabindex="-1">http 1.1 轮询、长轮询和 WebSocket <a class="header-anchor" href="#http-1-1-轮询、长轮询和-websocket" aria-label="Permalink to &quot;http 1.1 轮询、长轮询和 WebSocket&quot;">​</a></h4><p><strong>Motivation</strong>：服务器需要主动发送信息通知前端，也就是说，在用户没有进行动作的情况下，服务器主动推送信息。</p><p><strong>轮询</strong>：间隔两三秒客户端发送一次请求给后端</p><ul><li>比如扫二维码登录，前端不知道到底扫没扫，只是固定间隔时间发送请求询问服务器有没有人扫这个码（微信扫码就这样干）</li></ul><p><strong>长轮询</strong>：客户端的请求将过期时间设置得很长（比如30s），服务器一旦需要推送信息就回应这次请求</p><ul><li>百度云的扫码登录就这么干的</li></ul><div class="tip custom-block"><p class="custom-block-title">注意</p><p>以上的这两种方式，其实只是【伪】服务器推送，而造成服务器不能主动推送的根本原因在于 http 协议的自有特点。</p><p>http 是一个半双工协议，客户端和服务器不能同时发送信息。只能客户端先发送请求，服务器才能响应。</p></div><p><strong>WebSocket</strong>：是一个全新的基于 <strong>TCP 的全双工协议</strong>，同一时间双方都可以主动向对方发送数据</p><p><strong>连接过程</strong>：</p><ul><li>先进行 http 三次握手</li><li>再进行一次通信，如果是普通的 http 请求，那后续就老样子还是 http 通信</li><li>如果需要建立 websocket 连接，请求头需要特殊设置 <ul><li>Connection: Upgrade</li><li>Upgrade: websocket</li><li>Sec-WebSocket-Key: 随机生成的 base64 码</li></ul></li><li>服务端响应头也需要特殊设置 <ul><li>101 Switch Protocol</li><li>Upgrade: websocket + Connnection: Upgrade</li><li>Sec-WebSocket-Accept: 根据客户端的 key 生成，简单验证身份</li></ul></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Websocket 连接建立后这个连接就跟 http 没有关系了，http 只是个工具人</p></div><p><strong>websocket 数据帧格式</strong>：</p><ul><li>消息头 <ul><li>opcode: 数据帧类型，1=text（string）数据包，2=二进制数据（bytes)类型，8=关闭连接的信号</li><li>payload 长度：传输数据的长度，单位字节。占7 / 7+16 / 7+64 bit，前 7bit 的126、127是标志位</li></ul></li><li>消息体</li></ul><div class="info custom-block"><p class="custom-block-title">INFO</p><p>TCP 本身就是全双工，但如果直接使用纯 TCP 传输数据，会有粘包的问题。所以上层协议一般都会用消息头（含有数据长度信息） + 消息体的格式包装要发送的数据</p></div><p><strong>应用场景</strong>：服务器和客户端频繁交互的大部分场景，比如网页聊天室，类似飞书的网页协同办公软件，还有小程序游戏，网页游戏等</p><h4 id="粘包、半包问题" tabindex="-1">粘包、半包问题 <a class="header-anchor" href="#粘包、半包问题" aria-label="Permalink to &quot;粘包、半包问题&quot;">​</a></h4><p>TCP 协议中的问题，因为 TCP 是一个面向字节流的协议，难以确定消息边界。</p><p><img src="'+u+'" alt="image.png"></p><p>主要解决方法有三个</p><ul><li><strong>固定长度的消息</strong><ul><li>约定用户消息都是固定的长度，比如都是64个字节，那么 tcp 接收64字节就认为这个内容是完整的信息</li><li>不够灵活，实际很少使用</li></ul></li><li><strong>特殊字符作为边界（HTTP</strong>） <ul><li>两个信息之间插入一个特殊的字符串，接收方读到这个特殊字符就认为读完了一个完整的消息</li><li>HTTP 通过设置回车符、换行符作为 HTTP 报文协议的边界，头字段 Content-Length 指出消息的长度</li><li>如果消息中有这个特殊字符，需要转义处理</li></ul></li></ul><p><img src="'+E+`" alt="image.png"></p><ul><li><strong>自定义消息结构</strong></li></ul><p>我们可以自定义一个消息结构，由包头和数据组成，其中包头包是固定大小的，而且包头里有一个字段来说明紧随其后的数据有多大。</p><p>比如这个消息结构体，首先 4 个字节大小的变量来表示数据长度，真正的数据则在后面。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">struct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    u_int32_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> message_length;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    char</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> message_data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">[]</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} message;</span></span></code></pre></div><p>当接收方接收到包头的大小（比如 4 个字节）后，就解析包头的内容，于是就可以知道数据的长度，然后接下来就继续读取数据，直到读满数据的长度，就可以组装成一个完整到用户消息来处理了。</p>`,173),y=[m];function f(P,q,C,T,v,x){return s(),l("div",null,y)}const S=i(b,[["render",f]]);export{_ as __pageData,S as default};
