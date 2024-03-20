import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,o as l,c as p,a,f as e,b as i,e as t}from"./app-DA_i9hid.js";const c={},r=t('<p>我目前的工作主要在Win平台工作（远程Linux跑程序），感觉在win如果需要高效的工作一些软件是必不可少的。这个博客主要想整理一下我目前用到的，我觉得可以明显提高在Win10平台工作效率的软件以及系统配置。我推荐为高质量的开源软件或免费软件，也希望大家有一定经济实力后可以多捐助支持一下这些优秀的软件。</p><blockquote><ul><li>WOX：用键盘敲开一切</li><li>Linux（WLS）</li><li>Jupyter-notebook 你的Python和R终端</li></ul></blockquote><hr><p>写在前面：</p><p>不要给自己设限，或者说，永远让自己处于可更新的状态。</p><p>如果一个人固执的认为：Mac平台是唯一适合科研的平台，C++是优秀的，Java就是个垃圾，PHP是全世界最好的语言......此时的这个人的内心就像一杯已经灌满水的杯子，无论有再多的水倒入都会立刻溢出。世界是在不断变化的，只有不断用新的信息更新自己，才可以让自己具有更多的可能性。</p><figure><img src="https://pic.atlasbioinfo.com//blog/20201211/image/image-20201228101524631.png" alt="image-20201228101524631" tabindex="0" loading="lazy"><figcaption>image-20201228101524631</figcaption></figure><p>同时这句话也送给我，如果以后我遇到更多好用的软件，我也会及时更新。</p><h2 id="_1-wox-用键盘敲开一切" tabindex="-1"><a class="header-anchor" href="#_1-wox-用键盘敲开一切"><span>1. WOX：用键盘敲开一切</span></a></h2><figure><img src="https://pic.atlasbioinfo.com//blog/20201211/image/image-20201228101632724.png" alt="image-20201228101632724" tabindex="0" loading="lazy"><figcaption>image-20201228101632724</figcaption></figure><p>感觉这个题目特别酷。</p><p>鼠标点的再快，也没有键盘快。尤其是没有鼠标的情况下，滑动触摸版简直低效到极致=-=。</p>',12),g={href:"http://www.alfredapp.com/",target:"_blank",rel:"noopener noreferrer"},d=t('<p><code>ALT</code>+<code>Space</code> ，之后：打开应用，搜索网页，搜索文件，甚至词典翻译，cmd命令行，均可以只用点击就完成。</p><figure><img src="https://pic.atlasbioinfo.com//blog/20201211/image/687474703a2f2f692e696d6775722e636f6d2f4474784e424a692e676966.gif" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="_1-安装" tabindex="-1"><a class="header-anchor" href="#_1-安装"><span>1. 安装</span></a></h3><p>WOX是开源的，可以在他的官方主页：<strong>http://www.wox.one/</strong> 或者 github主页的releases <strong>https://github.com/Wox-launcher/Wox/releases</strong> 中下载最新版本的WOX。</p><p>推荐直接下载：<strong>Wox-Full-Installer.1.4.1196.exe</strong></p><h3 id="_2-插件" tabindex="-1"><a class="header-anchor" href="#_2-插件"><span>2. 插件</span></a></h3><p>WOX的强大除了本身外，还有就是插件。官网版本如果你下载的是上面我提到的full-installer，必备的插件已经安装完毕了。</p><p>官方甚至还有一个插件仓库：<strong>http://www.wox.one/plugin</strong></p><p>推荐大家在这里搜到想要安装的名字，之后在你自己的WOX里面：</p><p><code>wpm install 插件包的名字</code></p><p>推荐几个好用的插件：</p>',11),m=t('<li><p>Everything（查找电脑上任何文件）</p><figure><img src="https://pic.atlasbioinfo.com//blog/20201211/image/bacd9100e745b6f17fa84bf98ab83ada.png" alt="bacd9100e745b6f17fa84bf98ab83ada.png" tabindex="0" loading="lazy"><figcaption>bacd9100e745b6f17fa84bf98ab83ada.png</figcaption></figure><p>如果你下载的是full_install的wox，就会自带Everything。也就是说，everything是一个单独的软件，可以和WOX结合后发挥强大的文件检索功能。</p><h3 id="功能示例-你需要打开你昨天没写完的word" tabindex="-1"><a class="header-anchor" href="#功能示例-你需要打开你昨天没写完的word"><span>功能示例：你需要打开你昨天没写完的word</span></a></h3><p>假设你的word在这个路径，E:\\Project\\RNAproject\\Data\\Manuscripts\\20201216Manuscripts.docx。</p><p>于是要怎么做呢？</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token number">1.</span> 最小化一大堆打开的页面在杂乱的桌面图标中找到“此电脑”（或者快一点的直接点“资源管理器”）\n<span class="token number">2.</span> 双击\n<span class="token number">3.</span> 找<span class="token constant">E</span>盘\n<span class="token number">4.</span> 双击\n<span class="token number">5.</span> 找每个自文件（<span class="token number">4</span>次），双击<span class="token number">4</span>次\n<span class="token number">6.</span> 找到目标文档，双击\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假设你是一个优秀的FPS游戏玩家，光速找文件且鼠标移动快速准确，你还需要双击7次…</p><p>WOX操作命令：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token number">1.</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token template-punctuation string">`</span></span><span class="token constant">ALT</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token template-punctuation string">`</span></span><span class="token operator">+</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token template-punctuation string">`</span></span>Space<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token template-punctuation string">`</span></span>：打开<span class="token constant">WOX</span>\n<span class="token number">2.</span> <span class="token function">输入：20201216Man</span><span class="token punctuation">(</span>甚至不需要输入这么多<span class="token punctuation">)</span>，<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token template-punctuation string">`</span></span>Enter<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token template-punctuation string">`</span></span>，完成\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>或者，你忘了具体的名字了，你只记得文件名中的一部分，也是可以的</p><figure><img src="https://pic.atlasbioinfo.com//blog/20201211/image/image-20201228115534829.png" alt="image-20201228115534829" tabindex="0" loading="lazy"><figcaption>image-20201228115534829</figcaption></figure><p>Everything有各种匹配语法，只要有相关信息，你就可以搜索到</p><figure><img src="https://pic.atlasbioinfo.com//blog/20201211/image/image-20201228120434908.png" alt="image-20201228120434908" tabindex="0" loading="lazy"><figcaption>image-20201228120434908</figcaption></figure></li>',1),u={href:"http://www.wox.one/#plugin/4/",target:"_blank",rel:"noopener noreferrer"},b=a("code",null,"cb 你想搜索的剪切板命令",-1),h=a("li",null,[a("p",null,[e("Dictionary (字典，配置后可以链接thesaurus查同义词。)"),a("img",{src:"https://pic.atlasbioinfo.com//blog/20201211/image/image-20201228104412067.png",alt:"image-20201228104412067",loading:"lazy"}),e(" 用法："),a("code",null,"d 单词")]),a("figure",null,[a("img",{src:"https://pic.atlasbioinfo.com//blog/20201211/image/image-20201228104320663.png",alt:"image-20201228104320663",tabindex:"0",loading:"lazy"}),a("figcaption",null,"image-20201228104320663")])],-1),f=a("li",null,[a("p",null,"网页搜索（自带插件）可以在setting里面具体配置你想要的搜索到网站和快捷键"),a("figure",null,[a("img",{src:"https://pic.atlasbioinfo.com//blog/20201211/image/image-20201228104852484.png",alt:"image-20201228104852484",tabindex:"0",loading:"lazy"}),a("figcaption",null,"image-20201228104852484")])],-1),_={href:"http://www.wox.one/#plugin/21/",target:"_blank",rel:"noopener noreferrer"},k=a("figure",null,[a("img",{src:"https://pic.atlasbioinfo.com//blog/20201211/image/image-20201228105229905.png",alt:"image-20201228105229905",tabindex:"0",loading:"lazy"}),a("figcaption",null,"image-20201228105229905")],-1),x=a("li",null,null,-1),w=t('<p>其他设置，可以从右下角的图标可以右键-&gt;setting。不过更快的方法是：</p><ol><li><code>ALT</code>+<code>Space</code>：打开WOX</li><li>输入：setting（可能输入set就可以）</li></ol><p>WOX有详细的中文文档：http://doc.wox.one/zh/basic/</p><h2 id="_2-linux-wls" tabindex="-1"><a class="header-anchor" href="#_2-linux-wls"><span>2. Linux（WLS）</span></a></h2><p>哈哈，写完这个题目我自己都觉得比较喜感。不是说好推荐Win的插件吗？</p>',5),y={href:"https://docs.microsoft.com/zh-cn/windows/wsl/install-win10",target:"_blank",rel:"noopener noreferrer"},v=t('<h3 id="_2-1-默认安装" tabindex="-1"><a class="header-anchor" href="#_2-1-默认安装"><span>2.1 默认安装</span></a></h3><p>安装很简单，打开一个命令行或者PowerShell，使用管理员权限</p><p><code>wsl.exe --install</code></p><p>默认会安装Ubuntu，之后重启就OK啦。</p><h3 id="_2-2-手动安装其他发行版" tabindex="-1"><a class="header-anchor" href="#_2-2-手动安装其他发行版"><span>2.2 手动安装其他发行版</span></a></h3><p>就从Win10的Store里面搜索Ubuntu，直接安装就行，我演示的是Ubuntu</p><figure><img src="https://pic.atlasbioinfo.com//blog/20201211/image/image-20210120101212353.png" alt="image-20210120101212353" tabindex="0" loading="lazy"><figcaption>image-20210120101212353</figcaption></figure><p>此外，还有多种发行版可以下载：</p><figure><img src="https://pic.atlasbioinfo.com//blog/20201211/image/image-20210120101340541.png" alt="image-20210120101340541" tabindex="0" loading="lazy"><figcaption>image-20210120101340541</figcaption></figure><p>如果采用这一步的朋友（没有用命令行），还需要自己配置一下：</p><figure><img src="https://pic.atlasbioinfo.com//blog/20201211/image/eb5e46f93fc9aa514835cf3f4b810cb6f7ddc99a.png@1320w_1082h.webp" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>之后就OK啦。在开始菜单就会出现Ubuntu的图标，打开之后可以通过设置调一下透明度，让自己的终端更炫酷。</p><figure><img src="https://pic.atlasbioinfo.com//blog/20201211/image/95847f1aa467ebd28ad41c1b84c5b2e63c374b6b.png@1320w_754h.webp" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>',13),W={href:"https://www.bilibili.com/read/cv5859575",target:"_blank",rel:"noopener noreferrer"},L={href:"https://docs.microsoft.com/zh-cn/windows/wsl/install-win10",target:"_blank",rel:"noopener noreferrer"},z=t('<p>我们实验室还有人装了Ubuntu桌面，对于我来说没必要，所以没有具体折腾。今年据说更新之后，WSL支持显卡了，越来越给力了。</p><h2 id="_3-jupyter-notebook-你的python和r终端-后面的内容待更新" tabindex="-1"><a class="header-anchor" href="#_3-jupyter-notebook-你的python和r终端-后面的内容待更新"><span>3. Jupyter-notebook 你的Python和R终端 （后面的内容待更新）</span></a></h2><h2 id="_4-geek-卸载得干干净净" tabindex="-1"><a class="header-anchor" href="#_4-geek-卸载得干干净净"><span>4. Geek 卸载得干干净净</span></a></h2><h2 id="_5-keepass2-你的密码管家" tabindex="-1"><a class="header-anchor" href="#_5-keepass2-你的密码管家"><span>5. KeePass2 你的密码管家</span></a></h2><h2 id="_6-typora-找回码字的纯粹感" tabindex="-1"><a class="header-anchor" href="#_6-typora-找回码字的纯粹感"><span>6. Typora 找回码字的纯粹感</span></a></h2><h2 id="_7-vs-code-好用的全能ide" tabindex="-1"><a class="header-anchor" href="#_7-vs-code-好用的全能ide"><span>7. VS code 好用的全能IDE</span></a></h2><figure><img src="https://pic.atlasbioinfo.com/logo.png" alt="博主简介" tabindex="0" loading="lazy"><figcaption>博主简介</figcaption></figure>',7);function O(S,P){const n=s("ExternalLinkIcon");return l(),p("div",null,[r,a("p",null,[e("WOX就是这样的存在，可以说是Win上苹果的"),a("a",g,[e("Alfred"),i(n)]),e("的替代品。")]),d,a("ol",null,[m,a("li",null,[a("p",null,[a("a",u,[e("Clipboard History"),i(n)]),e(" （查看剪切板历史。"),b,e("）")])]),h,f,a("li",null,[a("p",null,[a("a",_,[e("Wox.Plugin.ProcessKiller"),i(n)]),e(" (kill掉win下的进程)")]),k]),x]),w,a("p",null,[e("对于我来说，命令行类的程序都需要在Linux环境下运行，或者说，在Linux下运行会比较高效。Win10在20年更新后，推出了"),a("a",y,[e("Windows Subsystem for Linux"),i(n)]),e(" 。也就是不再需要虚拟机，不再需要装双系统就可以在Win10上打开Ubuntu，就像打开chrome浏览器一样方便。")]),v,a("p",null,[e("更详细的配置可以看我在B站写的教程："),a("a",W,[e("Win10+内置ubuntu让我再也不想买mac了"),i(n)])]),a("p",null,[e("以及官方的教程："),a("a",L,[e("适用于 Linux 的 Windows 子系统安装指南 (Windows 10)"),i(n)])]),z])}const T=o(c,[["render",O],["__file","20201211.html.vue"]]),E=JSON.parse('{"path":"/posts/Bioinformatics/20201211.html","title":"高效科研与工作的Win10定制攻略","lang":"zh-CN","frontmatter":{"icon":"windows","date":"2020-12-11T00:00:00.000Z","title":"高效科研与工作的Win10定制攻略","categories":["Bioinformatics"],"description":"我目前的工作主要在Win平台工作（远程Linux跑程序），感觉在win如果需要高效的工作一些软件是必不可少的。这个博客主要想整理一下我目前用到的，我觉得可以明显提高在Win10平台工作效率的软件以及系统配置。我推荐为高质量的开源软件或免费软件，也希望大家有一定经济实力后可以多捐助支持一下这些优秀的软件。 WOX：用键盘敲开一切 Linux（WLS） J...","head":[["meta",{"property":"og:url","content":"https://blog.atlasbioinfo.com/posts/Bioinformatics/20201211.html"}],["meta",{"property":"og:site_name","content":"ATLAS生物信息博客"}],["meta",{"property":"og:title","content":"高效科研与工作的Win10定制攻略"}],["meta",{"property":"og:description","content":"我目前的工作主要在Win平台工作（远程Linux跑程序），感觉在win如果需要高效的工作一些软件是必不可少的。这个博客主要想整理一下我目前用到的，我觉得可以明显提高在Win10平台工作效率的软件以及系统配置。我推荐为高质量的开源软件或免费软件，也希望大家有一定经济实力后可以多捐助支持一下这些优秀的软件。 WOX：用键盘敲开一切 Linux（WLS） J..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pic.atlasbioinfo.com//blog/20201211/image/image-20201228101524631.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Haopeng Yu"}],["meta",{"property":"article:published_time","content":"2020-12-11T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"高效科研与工作的Win10定制攻略\\",\\"image\\":[\\"https://pic.atlasbioinfo.com//blog/20201211/image/image-20201228101524631.png\\",\\"https://pic.atlasbioinfo.com//blog/20201211/image/image-20201228101632724.png\\",\\"https://pic.atlasbioinfo.com//blog/20201211/image/687474703a2f2f692e696d6775722e636f6d2f4474784e424a692e676966.gif\\",\\"https://pic.atlasbioinfo.com//blog/20201211/image/bacd9100e745b6f17fa84bf98ab83ada.png\\",\\"https://pic.atlasbioinfo.com//blog/20201211/image/image-20201228115534829.png\\",\\"https://pic.atlasbioinfo.com//blog/20201211/image/image-20201228120434908.png\\",\\"https://pic.atlasbioinfo.com//blog/20201211/image/image-20201228104412067.png\\",\\"https://pic.atlasbioinfo.com//blog/20201211/image/image-20201228104320663.png\\",\\"https://pic.atlasbioinfo.com//blog/20201211/image/image-20201228104852484.png\\",\\"https://pic.atlasbioinfo.com//blog/20201211/image/image-20201228105229905.png\\",\\"https://pic.atlasbioinfo.com//blog/20201211/image/image-20210120101212353.png\\",\\"https://pic.atlasbioinfo.com//blog/20201211/image/image-20210120101340541.png\\",\\"https://pic.atlasbioinfo.com//blog/20201211/image/eb5e46f93fc9aa514835cf3f4b810cb6f7ddc99a.png@1320w_1082h.webp\\",\\"https://pic.atlasbioinfo.com//blog/20201211/image/95847f1aa467ebd28ad41c1b84c5b2e63c374b6b.png@1320w_754h.webp\\",\\"https://pic.atlasbioinfo.com/logo.png\\"],\\"datePublished\\":\\"2020-12-11T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Haopeng Yu\\",\\"url\\":\\"https://github.com/atlasbioinfo\\"}]}"]]},"headers":[{"level":2,"title":"1. WOX：用键盘敲开一切","slug":"_1-wox-用键盘敲开一切","link":"#_1-wox-用键盘敲开一切","children":[{"level":3,"title":"1. 安装","slug":"_1-安装","link":"#_1-安装","children":[]},{"level":3,"title":"2. 插件","slug":"_2-插件","link":"#_2-插件","children":[]}]},{"level":2,"title":"2. Linux（WLS）","slug":"_2-linux-wls","link":"#_2-linux-wls","children":[{"level":3,"title":"2.1 默认安装","slug":"_2-1-默认安装","link":"#_2-1-默认安装","children":[]},{"level":3,"title":"2.2 手动安装其他发行版","slug":"_2-2-手动安装其他发行版","link":"#_2-2-手动安装其他发行版","children":[]}]},{"level":2,"title":"3. Jupyter-notebook 你的Python和R终端 （后面的内容待更新）","slug":"_3-jupyter-notebook-你的python和r终端-后面的内容待更新","link":"#_3-jupyter-notebook-你的python和r终端-后面的内容待更新","children":[]},{"level":2,"title":"4. Geek 卸载得干干净净","slug":"_4-geek-卸载得干干净净","link":"#_4-geek-卸载得干干净净","children":[]},{"level":2,"title":"5.  KeePass2 你的密码管家","slug":"_5-keepass2-你的密码管家","link":"#_5-keepass2-你的密码管家","children":[]},{"level":2,"title":"6. Typora 找回码字的纯粹感","slug":"_6-typora-找回码字的纯粹感","link":"#_6-typora-找回码字的纯粹感","children":[]},{"level":2,"title":"7. VS code 好用的全能IDE","slug":"_7-vs-code-好用的全能ide","link":"#_7-vs-code-好用的全能ide","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":5.17,"words":1551},"filePathRelative":"posts/Bioinformatics/20201211.md","localizedDate":"2020年12月11日","excerpt":"<p>我目前的工作主要在Win平台工作（远程Linux跑程序），感觉在win如果需要高效的工作一些软件是必不可少的。这个博客主要想整理一下我目前用到的，我觉得可以明显提高在Win10平台工作效率的软件以及系统配置。我推荐为高质量的开源软件或免费软件，也希望大家有一定经济实力后可以多捐助支持一下这些优秀的软件。</p>\\n<blockquote>\\n<ul>\\n<li>WOX：用键盘敲开一切</li>\\n<li>Linux（WLS）</li>\\n<li>Jupyter-notebook 你的Python和R终端</li>\\n</ul>\\n</blockquote>\\n<hr>\\n<p>写在前面：</p>\\n<p>不要给自己设限，或者说，永远让自己处于可更新的状态。</p>","autoDesc":true}');export{T as comp,E as data};