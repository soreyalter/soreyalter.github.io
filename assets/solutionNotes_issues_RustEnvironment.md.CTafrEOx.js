import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.BBKq6QKo.js";const e="/issue/image.png",F=JSON.parse('{"title":"Rust 环境配置","description":"","frontmatter":{"title":"Rust 环境配置","outline":"outline"},"headers":[],"relativePath":"solutionNotes/issues/RustEnvironment.md","filePath":"solutionNotes/issues/RustEnvironment.md"}'),n={name:"solutionNotes/issues/RustEnvironment.md"},l=t(`<h1 id="rust-环境配置" tabindex="-1">Rust 环境配置 <a class="header-anchor" href="#rust-环境配置" aria-label="Permalink to &quot;Rust 环境配置&quot;">​</a></h1><hr><p>Windows环境下 Rust 提供两套工具链:</p><ul><li>微软的 MSVC 工具链体积较大，兼容性较好。</li><li>GNU 工具链，体积小更轻便。</li></ul><h2 id="msys2-和-gnu-环境" tabindex="-1">MSYS2 和 GNU 环境 <a class="header-anchor" href="#msys2-和-gnu-环境" aria-label="Permalink to &quot;MSYS2 和 GNU 环境&quot;">​</a></h2><ol><li>MSYS2 下载和引导：<a href="https://www.msys2.org/" target="_blank" rel="noreferrer">MSYS2</a> ，照常安装即可</li><li>在完成 MSYS2 的安装以后，会打开 MSYS2 的 shell 窗口，在窗口中输入</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Sy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Syu</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mingw-w64-x86_64-toolchain</span></span></code></pre></div><p>安装过程全部选 y 回车就可以，完成后会在 MSYS2 目录中产生 mingw64 文件夹，<code>bin</code>目录中有<code>gcc.exe</code> 和 <code>ar.exe</code></p><h2 id="通过-rust-init-安装-rust" tabindex="-1">通过 rust-init 安装 rust <a class="header-anchor" href="#通过-rust-init-安装-rust" aria-label="Permalink to &quot;通过 rust-init 安装 rust&quot;">​</a></h2><ol><li>先配置环境变量，运行安装程序的时候会检测到这个路径，把 rust 和 cargo 安装到这里</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>CARGO_HOME=D:\\Rust\\cargo</span></span>
<span class="line"><span>RUSTUP_HOME=D:\\Rust\\rustup</span></span></code></pre></div><ol><li>运行安装程序，这是一个命令行交互形式的安装程序，注意修改工具链为 gnu 版本</li></ol><p><img src="`+e+`" alt="alt text"></p><ol><li>下载 stable 工具链，在命令行中输入</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rustup</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> default</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stable-gnu</span></span></code></pre></div><ol><li>配置 cargo 链接器，在 <code>C:\\Users\\&lt;yourusername&gt;\\.cargo\\config</code> 文件中配置 linker 的相关信息，也可以在项目中的 <code>cargo.toml</code> 配置</li></ol><div class="language-toml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">target</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">x86_64-pc-windows-gnu</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">linker = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;D:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">msys目录</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mingw64</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bin</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">gcc.exe&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ar = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;D:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">msys目录</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mingw64</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bin</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ar.exe&quot;</span></span></code></pre></div><h2 id="下载-rust-src" tabindex="-1">下载 rust-src <a class="header-anchor" href="#下载-rust-src" aria-label="Permalink to &quot;下载 rust-src&quot;">​</a></h2><p>vscode 插件 Rust Analyzer 需要用到 rust-src，否则是会报错的。</p><p>通过 Standalone installers 安装的 rust 是没有 rust-src 的，需要手动进行下载配置。</p><p>下载链接：<a href="https://forge.rust-lang.org/infra/other-installation-methods.html#source-code" target="_blank" rel="noreferrer">Other Installation Methods - Rust Forge (rust-lang.org)</a></p><p>之后需要在<code>Rust安装位置/lib/rustlib/</code>下创建一个<code>src</code>文件夹，然后将压缩包里的<code>rust-版本号-src</code>文件夹解压到<code>src</code>目录下，并将<code>rust-版本号-src</code>重命名为<code>rust</code> .</p>`,22),h=[l];function r(p,o,k,d,c,u){return a(),i("div",null,h)}const y=s(n,[["render",r]]);export{F as __pageData,y as default};
