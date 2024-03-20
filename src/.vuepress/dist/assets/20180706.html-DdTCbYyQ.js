import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as l,c as i,a,f as n,b as t,e as p}from"./app-B1UaDH9J.js";const c={},u=p('<p>咳咳，学做网站要学什么语言？HTML+CSS+JavaScript+BootStrap+jQuery+Aapache+MySQL+PHP，有没有被吓到。我最初就被这一大长串的名字吓到了，也是拖拖拉拉的学了好久，直到最近逼自己一口气看完之后才发现，其实没有这么可怕......</p><blockquote><ul><li>网站怎么做？</li><li>建站要学什么语言？</li><li>怎么样继续学习?</li></ul></blockquote><hr><p>我学建站学了好久，真的，基本都是学学就半途而废了。 也就这次趁着给实验室建站偶然间发现了技巧，终于把基础的看完了=-= 所以来和大家讲讲我是怎么从零基础开始学的，其实门槛没有那么高。</p><h2 id="网站怎么做" tabindex="-1"><a class="header-anchor" href="#网站怎么做"><span>网站怎么做？</span></a></h2><p>一般的教程直接就开始说你先去申请个域名，再租个服务器...</p><p>Buddy，这是一个不太费钱但是很费事的事情，很多人看到这个就放弃了</p><p><strong>哦，或者像我曾经......</strong></p><blockquote><ul><li>租了半年服务器;</li><li>2个月拍照备案填表等审核;</li><li>用WordPress无脑建了个博客好开心;</li><li>3天之后被攻击，插了一大堆广告只能恢复备份(当时不知道怎么查);</li><li>最后被攻击的无语了，就格式化全盘放弃了=-=;</li></ul></blockquote><figure><img src="https://pic.atlasbioinfo.com/chaoweiquxiangku.jpg" alt="xiangku" tabindex="0" loading="lazy"><figcaption>xiangku</figcaption></figure><p>其实初学者就想在本地建立一个网站，就这么简单，先试试 先弄了一大堆，结果没怎么学基础只能各种不会各种被虐</p><p>所以我推荐大家现在本地localhost建立一个测试网站 意思就是就算不联网你在浏览器输入localhost就能出现你做的网站......</p><h3 id="一键配置环境wamp" tabindex="-1"><a class="header-anchor" href="#一键配置环境wamp"><span>一键配置环境WAMP</span></a></h3><p>似乎windows可以直接配置网站环境，用IIS 10.0，详见:</p>',14),r={href:"http://www.yishimei.cn/website/701.html",target:"_blank",rel:"noopener noreferrer"},d=a("p",null,"我在这里说的是一个更简单的方法，就是WAMP Windows+Aapache+MySQL+PHP一键安完，傻瓜式操作，完美~",-1),g=a("figure",null,[a("img",{src:"https://pic.atlasbioinfo.com/wamp.PNG",alt:"WAMP",tabindex:"0",loading:"lazy"}),a("figcaption",null,"WAMP")],-1),m=a("strong",null,"百度云",-1),k={href:"https://pan.baidu.com/s/1z9IOhPTDXb21HmDd9cb3ZQ",target:"_blank",rel:"noopener noreferrer"},h=a("p",null,"安装方法就是一直next就好了，重启之后启动WAMP。 具体安装策略可以参考：",-1),v={href:"https://www.w3cschool.cn/phpwmpsql/",target:"_blank",rel:"noopener noreferrer"},b=p(`<p>右下角如果出现W的图标为绿色为正常，如果不是：</p><ol><li>右键那个标志，Tools，检测80端口，如果被占用，用任务管理器干掉占用的应用或者直接把那个应用卸载了。</li><li>重新再装一遍WAMP（亲测有效）</li></ol><p>安装过程可能会提示缺少某个DLL，那个是你需要安装Microsoft的编译环境就好了！某管家或者某卫士会自动修复这个。</p><p>所以现在，我们的服务器环境就搭建好啦，你可以在任意浏览器输入localhost，就可以看到WAMP的一个页面哦。</p><h3 id="你需要一个模板" tabindex="-1"><a class="header-anchor" href="#你需要一个模板"><span>你需要一个模板</span></a></h3><p>在WAMP安装结束后，在安装目录会有一个文件夹叫“www”，这个文件夹里面的内容就是你网站页面的内容。</p><p>也就是，你做好的网页全部复制到这个文件夹里，你就可以从浏览器访问啦。</p><p>所以现在的你只需要一个网页模板。</p><p>打开百度，搜索网站模板，或者搜H5网站模板，你就可以看到好多炫酷的免费的模板。</p><figure><img src="https://pic.atlasbioinfo.com/h5Exmple.PNG" alt="h5example" tabindex="0" loading="lazy"><figcaption>h5example</figcaption></figure><p>随便选一个好看的，下载下来，解压缩，把解压缩的所有文件放到刚才提到的www文件夹中</p><p>你再输入localhost试试？</p><p>有木有觉得很神奇，这个申请的网页是出现在你自己的电脑上的（很像离线网页是吧）</p><p><strong>现在，一个网站就建好了！</strong></p><h2 id="建站要学什么语言" tabindex="-1"><a class="header-anchor" href="#建站要学什么语言"><span>建站要学什么语言？</span></a></h2><p>记得我开头打的那一大串语言吗......</p><p>** HTML+CSS+PHP+JavaScript+BootStrap+jQuery **</p><p>首先先更正一下大家对于那一串编程语言的认识。</p><p>大家学过C语言，python，perl或者什么，知道都是从定义变量，条件语句和循环语句，定义数组哈希，写子函数，操作文件等等这样的学习路线进行的。</p><p>然而上面并不是每一种语言都是这样的，只有PHP和JavaScript是这样的。</p><p>那问题来了，其他都是些啥？</p><h3 id="html" tabindex="-1"><a class="header-anchor" href="#html"><span>HTML</span></a></h3><p>这里的HTML我更想叫它为HTML标签，也就是“超文本标记语言”。</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!--
  这里是文档的头部 ... ...
  ...
  --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!--
  -这里是文档的主体 ... ...
  ...
  --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>2级标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>3级标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>添加一个按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a.jpg<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>显示一个图片<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>是的，你不能只用HTML去做一个网页，它只是定义了网页的很多部分。</p><p>在HTML眼里，网页就是很多矩形的组合，你只需要写好哪些矩形在哪个位置，里面需要填什么东西就是了。</p><p>那火爆的HTML5是什么的？感觉写着好多比如HTML5游戏啊，H5炫酷网页什么的。</p><p>其实，它也是HTML语言的最新版本，多了很多很有用的标签就是了。</p><figure><img src="https://pic.atlasbioinfo.com/HTML5.jpg" alt="HTML5logo" tabindex="0" loading="lazy"><figcaption>HTML5logo</figcaption></figure><p>以下HTML5 中的一些有趣的新特性(引用自极客学院)：</p><blockquote><ul><li>用于绘画的 canvas 元素</li><li>用于媒介回放的 video 和 audio 元素</li><li>对本地离线存储的更好的支持</li><li>新的特殊内容元素，比如 article、footer、header、nav、section</li><li>新的表单控件，比如 calendar、date、time、email、url、search</li></ul></blockquote><p>那些你看的炫酷网页，炫酷游戏是HTML5的新特性结合CSS3或者JavaScript做成的。</p><p><strong>介绍完毕，问题来了，怎了来学这个呢？</strong></p><p>有各种免费教学视频，极客学院，MOOC，云课堂甚至B站=-=</p><p>我觉得最快的是W3Cschool的文字教程和实践，对我来说最快最有效。</p>`,35),f={href:"https://www.w3cschool.cn/html/",target:"_blank",rel:"noopener noreferrer"},y=p(`<p>主要是，现在大多视频废话太多，2倍速又把人听的心累；</p><p>这个文档还可以自己实践，直接在这里编写运行，调试代码，尝试。</p><p>P.S.，W3Cschool还有一个编程实践，闯关式的学语言，超级爽。</p><h3 id="css" tabindex="-1"><a class="header-anchor" href="#css"><span>CSS</span></a></h3><p>我觉得，嗯，CSS更像是一个HTML标签=-=</p><p>它更不是一个语言，叫做“层叠样式表”</p><p>大概就是能给html的元素加各种样式的，比如设置大小，增加边框，改变颜色=-=</p><figure><img src="https://pic.atlasbioinfo.com/CssDemo.jpg" alt="CSSDEMO" tabindex="0" loading="lazy"><figcaption>CSSDEMO</figcaption></figure><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span>
	<span class="token comment">&lt;!--改变颜色--&gt;</span>
	h1 {
		color: red; 

	}
	<span class="token comment">&lt;!--定义一个类,描述一组元素的样式--&gt;</span>
	. red-text{
		color: red;
		text-align:center;
	}
	<span class="token comment">&lt;!--定义一个id，和类差不多--&gt;</span>
	# blue-text{
		color: blue;
	}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>red-text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>我一个居中的红色H2标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>blue-text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>我是一个蓝色的段落，我是一个蓝色的段落，我是一个蓝色的段落，我是一个蓝色的段落。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有木有觉得简单了-0-。</p>`,10),S={href:"https://www.w3cschool.cn/css/",target:"_blank",rel:"noopener noreferrer"},x=p(`<h3 id="javascript和jquery" tabindex="-1"><a class="header-anchor" href="#javascript和jquery"><span>JavaScript和jQuery</span></a></h3><p>学过之后才知道，JavaScript和Java并没有什么关系=-=</p><figure><img src="https://pic.atlasbioinfo.com/JSDEmo.jpg" alt="JSDEMO" tabindex="0" loading="lazy"><figcaption>JSDEMO</figcaption></figure><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token generics"><span class="token punctuation">&lt;</span>script<span class="token punctuation">&gt;</span></span>
	<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>这里面写你的<span class="token constant">JS</span>脚本和jQuery脚本<span class="token operator">--</span><span class="token operator">&gt;</span>
	<span class="token keyword">var</span> t<span class="token operator">=</span><span class="token string">&quot;Hello world&quot;</span><span class="token punctuation">;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个和上面的标记语言和样式语言不同，这个就是大家传统认知的语言，有变量，有数组，有if和for语句等等。</p><p>那么jQuery呢？引用W3Cschool的几句话：</p><blockquote><ul><li>jQuery 是一个 JavaScript 库。</li><li>jQuery 极大地简化了 JavaScript 编程。</li><li>jQuery 很容易学习。</li></ul></blockquote><figure><img src="https://pic.atlasbioinfo.com/JQueryDemo.jpg" alt="JQuery" tabindex="0" loading="lazy"><figcaption>JQuery</figcaption></figure><p>我现在对于jQuery的理解是，用选择器选择网页中的元素，之后加入动画效果（淡入淡出摇摆等）。</p><h3 id="bootstrap" tabindex="-1"><a class="header-anchor" href="#bootstrap"><span>Bootstrap</span></a></h3><p>网上说这是一个前端框架，我觉得这是一个网页元素响应式排版工具=-=</p><p>因为用户的屏幕大小是不同的，或者要么用手机，用平板，用各种分辨率的电脑等等。</p><p>如果你的网页所有元素固定位置，难免会造成排版混乱。所以对于不同屏幕都能自动排版整齐（比如文字居中，按钮等距排列，图片自适应缩放等），这就叫响应式，这就需要用到BootStrap。</p><figure><img src="https://pic.atlasbioinfo.com/BootStapDemo.jpg" alt="bootstrap" tabindex="0" loading="lazy"><figcaption>bootstrap</figcaption></figure><p>比如一排有2个按钮，无论屏幕多长都让它们两个自适应长度，8：4的排列：</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>row<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col-xs-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn btn-block btn-primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Button1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col-xs-4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn btn-block btn-info<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Button2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>div是默认容器，就是把元素用容器包裹，之后就可以用bootstrap调整了</p><h2 id="怎么样继续学习" tabindex="-1"><a class="header-anchor" href="#怎么样继续学习"><span>怎么样继续学习?</span></a></h2><p>我这个写的太基础了，其实我上面说的每一种语言都之说的他们最基础的应用。</p><p>不过这是一个很不错的入门，至少之后大家就会觉得网页语言并不难，就是那一大串。</p><p>入门之后我建议根据需求。</p><ol><li>比如你下载一个模板，你想读懂它的代码，于是开始查其中的关键字，包括别人为什么这么写。</li><li>你要实现怎样的功能，之后去查什么函数或者怎样才能实现我想要的功能。</li></ol><p>主要是多做做，多查查，自然就都懂了。</p><p>我不建议把某本书从头读到尾，没效率，多动手做才是王道。</p><p>最后给大家推荐几个IDE</p><p>首先是万能的<em><strong>Sublime Text3</strong></em></p><p><strong>轻量级</strong>，各种插件都能支持，几乎只要是写程序都可以这个， 大佬专用。</p><figure><img src="https://pic.atlasbioinfo.com/subLimeDemo.PNG" alt="sublimeDemo" tabindex="0" loading="lazy"><figcaption>sublimeDemo</figcaption></figure><p>之后是非常熟悉的Adobe的DreamViewer</p><p>功能超全，建站基本都推荐，非轻量级但是功能多。</p><figure><img src="https://pic.atlasbioinfo.com/DreamViewerDemo.PNG" alt="DreamViewer" tabindex="0" loading="lazy"><figcaption>DreamViewer</figcaption></figure><p>我现在用第二个，感觉很方便，比如点着HTML里的CSS类就可以编辑它的属性。</p><figure><img src="https://pic.atlasbioinfo.com/logo.png" alt="博主简介" tabindex="0" loading="lazy"><figcaption>博主简介</figcaption></figure>`,33);function q(w,_){const s=o("ExternalLinkIcon");return l(),i("div",null,[u,a("p",null,[a("em",null,[a("strong",null,[a("a",r,[n("使用PHP Manager for IIS搭建win10系统 IIS 10.0+PHP+MySQL环境"),t(s)])])])]),d,g,a("p",null,[n("WAMP官方网站为：http://www.wampserver.com 但是国内下载的超级慢（科学上网的朋友忽略我这句话） 所以我上传到"),m,n("大家可以下载： "),a("strong",null,[a("a",k,[n("wampserver3.1.3_x64"),t(s)]),n(", 密码：8eax")])]),h,a("p",null,[a("em",null,[a("strong",null,[a("a",v,[n("PHP开发环境搭建与部署(wampserver+MySQL)"),t(s)])])])]),b,a("p",null,[a("em",null,[a("strong",null,[a("a",f,[n("W3C的HTML教学文档"),t(s)])])])]),y,a("p",null,[n("一样，具体教程看"),a("a",S,[n("W3Cschool的CSS教程"),t(s)])]),x])}const H=e(c,[["render",q],["__file","20180706.html.vue"]]),j=JSON.parse('{"path":"/posts/Website/20180706.html","title":"零基础如何学建站(基础篇)","lang":"zh-CN","frontmatter":{"icon":"chrome","date":"2018-07-06T00:00:00.000Z","title":"零基础如何学建站(基础篇)","categories":["Website"],"description":"咳咳，学做网站要学什么语言？HTML+CSS+JavaScript+BootStrap+jQuery+Aapache+MySQL+PHP，有没有被吓到。我最初就被这一大长串的名字吓到了，也是拖拖拉拉的学了好久，直到最近逼自己一口气看完之后才发现，其实没有这么可怕...... 网站怎么做？ 建站要学什么语言？ 怎么样继续学习? 我学建站学了好久，真的，基...","head":[["meta",{"property":"og:url","content":"https://blog.atlasbioinfo.com/posts/Website/20180706.html"}],["meta",{"property":"og:site_name","content":"ATLAS生物信息博客"}],["meta",{"property":"og:title","content":"零基础如何学建站(基础篇)"}],["meta",{"property":"og:description","content":"咳咳，学做网站要学什么语言？HTML+CSS+JavaScript+BootStrap+jQuery+Aapache+MySQL+PHP，有没有被吓到。我最初就被这一大长串的名字吓到了，也是拖拖拉拉的学了好久，直到最近逼自己一口气看完之后才发现，其实没有这么可怕...... 网站怎么做？ 建站要学什么语言？ 怎么样继续学习? 我学建站学了好久，真的，基..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pic.atlasbioinfo.com/chaoweiquxiangku.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-20T11:04:46.000Z"}],["meta",{"property":"article:author","content":"Haopeng Yu"}],["meta",{"property":"article:published_time","content":"2018-07-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-20T11:04:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"零基础如何学建站(基础篇)\\",\\"image\\":[\\"https://pic.atlasbioinfo.com/chaoweiquxiangku.jpg\\",\\"https://pic.atlasbioinfo.com/wamp.PNG\\",\\"https://pic.atlasbioinfo.com/h5Exmple.PNG\\",\\"https://pic.atlasbioinfo.com/HTML5.jpg\\",\\"https://pic.atlasbioinfo.com/CssDemo.jpg\\",\\"https://pic.atlasbioinfo.com/JSDEmo.jpg\\",\\"https://pic.atlasbioinfo.com/JQueryDemo.jpg\\",\\"https://pic.atlasbioinfo.com/BootStapDemo.jpg\\",\\"https://pic.atlasbioinfo.com/subLimeDemo.PNG\\",\\"https://pic.atlasbioinfo.com/DreamViewerDemo.PNG\\",\\"https://pic.atlasbioinfo.com/logo.png\\"],\\"datePublished\\":\\"2018-07-06T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-20T11:04:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Haopeng Yu\\",\\"url\\":\\"https://github.com/atlasbioinfo\\"}]}"]]},"headers":[{"level":2,"title":"网站怎么做？","slug":"网站怎么做","link":"#网站怎么做","children":[{"level":3,"title":"一键配置环境WAMP","slug":"一键配置环境wamp","link":"#一键配置环境wamp","children":[]},{"level":3,"title":"你需要一个模板","slug":"你需要一个模板","link":"#你需要一个模板","children":[]}]},{"level":2,"title":"建站要学什么语言？","slug":"建站要学什么语言","link":"#建站要学什么语言","children":[{"level":3,"title":"HTML","slug":"html","link":"#html","children":[]},{"level":3,"title":"CSS","slug":"css","link":"#css","children":[]},{"level":3,"title":"JavaScript和jQuery","slug":"javascript和jquery","link":"#javascript和jquery","children":[]},{"level":3,"title":"Bootstrap","slug":"bootstrap","link":"#bootstrap","children":[]}]},{"level":2,"title":"怎么样继续学习?","slug":"怎么样继续学习","link":"#怎么样继续学习","children":[]}],"git":{"createdTime":1710932686000,"updatedTime":1710932686000,"contributors":[{"name":"hyu","email":"hp.yu@outlook.com","commits":1}]},"readingTime":{"minutes":8.33,"words":2499},"filePathRelative":"posts/Website/20180706.md","localizedDate":"2018年7月6日","excerpt":"<p>咳咳，学做网站要学什么语言？HTML+CSS+JavaScript+BootStrap+jQuery+Aapache+MySQL+PHP，有没有被吓到。我最初就被这一大长串的名字吓到了，也是拖拖拉拉的学了好久，直到最近逼自己一口气看完之后才发现，其实没有这么可怕......</p>\\n<blockquote>\\n<ul>\\n<li>网站怎么做？</li>\\n<li>建站要学什么语言？</li>\\n<li>怎么样继续学习?</li>\\n</ul>\\n</blockquote>\\n<hr>\\n<p>我学建站学了好久，真的，基本都是学学就半途而废了。\\n也就这次趁着给实验室建站偶然间发现了技巧，终于把基础的看完了=-=\\n所以来和大家讲讲我是怎么从零基础开始学的，其实门槛没有那么高。</p>","autoDesc":true}');export{H as comp,j as data};
