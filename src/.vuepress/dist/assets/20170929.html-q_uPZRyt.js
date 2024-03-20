import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as l,e as n}from"./app-DA_i9hid.js";const t={},a=n(`<p>本文为个人经验所写，希望对初进实验室的新手有所帮助。</p><blockquote><ul><li>生物信息都要学习Perl语言吗？</li><li>为什么要学习Perl语言？</li><li>如何运行Perl？</li><li>有什么教程或者资料可以看？</li></ul></blockquote><hr><h2 id="生物信息都要学习perl语言吗" tabindex="-1"><a class="header-anchor" href="#生物信息都要学习perl语言吗"><span>生物信息都要学习Perl语言吗？##</span></a></h2><figure><img src="https://pic.atlasbioinfo.com/u=1476464461,742736999&amp;fm=27&amp;gp=0.jpg" alt="骆驼" tabindex="0" loading="lazy"><figcaption>骆驼</figcaption></figure><p>首先你要明确一个问题：是不是所有做生物信息的都必须学perl语言?</p><p>答案必须是否定的。很多生信学者，通过用别人的软件照样可以做出优秀的文章。那为什么要学perl?</p><p>其实建议你不要盲目的去学，先和师兄们交流一下这个科研方向需要用到的编程语言，因为除了perl还有很多优秀的编程语言，如C，Java，Python，MatLab，R等等，不同的科研方向需要的语言也不同。因为初学者嘛，不太了解自己的方向，最好问问师兄。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>比如：

如果你做生物软件就需要Java，C，.net
如果你做生物数据库网站就要php，html，Mysql，css，JS等
如果你做想做机器学习且不太追求效率只求简单，学Python，不过说实话现在实验室都不缺钱，各种高配电脑，所以学Python的人多
之后如果你处理文本类数据比较多，那推荐Perl语言

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="为什么要学习perl语言" tabindex="-1"><a class="header-anchor" href="#为什么要学习perl语言"><span>为什么要学习Perl语言？##</span></a></h2><figure><img src="https://pic.atlasbioinfo.com/PerlLogo.jpg" alt="PerlLogo" tabindex="0" loading="lazy"><figcaption>PerlLogo</figcaption></figure><p>为什么要学Perl而不是Python？</p><p>那就谈到了Perl的优点了~大家可以在小骆驼书的简介里面看到更详细的描述，我就说说我自己的感触好了，最大的感触就是Perl在处理文本的时候相当快！！</p><p>Perl最早被创立就是为了处理文本，我刚开始学Bioinfo的时候用VB写了一个处理基因组的程序，结果估计了一下要跑1个月，之后我学perl，相同的思路perl跑了1小时左右搞定。因为基因信息啊，SNP信息啊，蛋白信息啊什么基本都是纯文本本格式的，所以用perl处理会相当的快。并且现在Perl是做生物信息的通用的语言，各大数据库很多都有Perl的API接口，很方便。接下来我觉得Perl第二个特点就是灵活，在各大平台上都可以跑，因为Perl的程序就是TXT，直接解析就可以执行了，不像C需要编译。最后一个特点就是Perl很简单，我学perl也就是1天半，就写出我们组的主程序。</p><h2 id="如何运行perl" tabindex="-1"><a class="header-anchor" href="#如何运行perl"><span>如何运行Perl？##</span></a></h2><p>那接下来我说一下运行平台，理论上大家对于Windows很熟悉，所以就在Win下学perl吧。</p><p>如果你本身就接触过Linux那么我建议你在Linux下学习，因为Perl生而为Linux或Unix，几乎所有版本的linux都自带perl，并且重点是perl在linux下运行比Win快，在Linux下perl+shell可以完美的实现你各种文本数据处理的心愿，速度堪比C。</p><p>不过，记住，如果你从没有接触过linux，就从windows开始学，不要放下perl去学linux，这样两个都弄不好，从别人身上吸取的经验教训。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>首先是需要的软件：

Windows下：
1、	Active Perl
因为windows无法解析perl程序，所以你需要安装这个。这个你在你的XX卫士里面就可以搜索到。

2、	Notepad++（或者其他的文本编辑软件）
这个是一个文本编辑软件，可以用来写程序。别告诉我你想用Word来写perl程序…….我比较喜欢这个，因为轻量，速度快，功能多。
对了,sublim text 3也很不错，程序员都爱用

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行很简单，你右键新建一个叫first.pl的文件，first是文件名你可以随意。</p><p>比如写：print &quot;Hello World&quot;;</p><p>之后打开cmd，cd切换到你文件的目录，之后直接first.pl就可以运行了</p><p>注意：双击不行的，因为会瞬间运行结束，cmd框关闭，啥都看不到</p><figure><img src="https://pic.atlasbioinfo.com/Perl示范2.JPG" alt="Perl语言运行示范" tabindex="0" loading="lazy"><figcaption>Perl语言运行示范</figcaption></figure><p>其他的看下文的资料吧~</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>## 有什么教程或者资料可以看？##

### 1、 看小骆驼 ###

![小骆驼](https://pic.atlasbioinfo.com/10dfa9ec8a1363276eb7eb74928fa0ec08fac71a.jpg)
小骆驼书（Perl语言入门）是perl语言初学者必备的书，他语言幽默，让很很容易接受。想想大物吧，想想你们的教科书吧，你就会突然发现这本小骆驼是多么经典。这个如果你觉得太有必要了你就买吧，不过真心不便宜。建议你可以借，实验室很多人都有，电子，版可以问我要。

小骆驼这本书也很厚，怎么看呢？前言啊简介什么，大概看看，比较有意思。重点看第2、3、5、6章，7、8、9的正则表达也很重要，其他章节如果你有兴趣就看吧，主要看看讲什么，用的时候查。
如果你在windows，稍稍注意一下，书上的什么#!/usr/bin/perl这一行你可以忽略了，只用写除这个以外的其他的。写程序最好在根目录下的一个文件夹，比如c:/。文件名命名为.pl，运行的时候打开命令提示符（运行-&gt;cmd），之后用cd这个命令切换到程序所在目录，之后直接输入程序名称就可以了。Linux下用perl xx.pl就好了。

这本书看不是最重要的，最最重要的是把他给的例题和习题练习做完，看看他给的答案和脚注，对于程序提高很有帮助。OK，就这样了，岗巴地!

### 2、看大骆驼作为参考###

![大骆驼](https://pic.atlasbioinfo.com/20130710164703-1174615865.jpg)
小骆驼语言很幽默，但是缺点在于程序很简化，也就是小骆驼追求的是简洁方便但是往往讲不清楚原理性问题。所以，遇到问题看看大骆驼，把这个当成字典去看而不是教科书。遍历看完即花费时间又记不住，没用。

### 3、	其他的就直接搜索吧###

常识问题百度一下，学术问题谷歌一下，两个都查不到师兄一下，就OK了。

好了，祝大家学习愉快。


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://pic.atlasbioinfo.com/logo.png" alt="博主简介" tabindex="0" loading="lazy"><figcaption>博主简介</figcaption></figure>`,27),r=[a];function s(p,o){return i(),l("div",null,r)}const m=e(t,[["render",s],["__file","20170929.html.vue"]]),u=JSON.parse('{"path":"/posts/Perl/20170929.html","title":"生物信息专业如何自学Perl语言","lang":"zh-CN","frontmatter":{"icon":"code","date":"2017-09-20T00:00:00.000Z","title":"生物信息专业如何自学Perl语言","categories":["Perl"],"description":"本文为个人经验所写，希望对初进实验室的新手有所帮助。 生物信息都要学习Perl语言吗？ 为什么要学习Perl语言？ 如何运行Perl？ 有什么教程或者资料可以看？ 生物信息都要学习Perl语言吗？## 骆驼骆驼 首先你要明确一个问题：是不是所有做生物信息的都必须学perl语言? 答案必须是否定的。很多生信学者，通过用别人的软件照样可以做出优秀的文章。那...","head":[["meta",{"property":"og:url","content":"https://blog.atlasbioinfo.com/posts/Perl/20170929.html"}],["meta",{"property":"og:site_name","content":"ATLAS生物信息博客"}],["meta",{"property":"og:title","content":"生物信息专业如何自学Perl语言"}],["meta",{"property":"og:description","content":"本文为个人经验所写，希望对初进实验室的新手有所帮助。 生物信息都要学习Perl语言吗？ 为什么要学习Perl语言？ 如何运行Perl？ 有什么教程或者资料可以看？ 生物信息都要学习Perl语言吗？## 骆驼骆驼 首先你要明确一个问题：是不是所有做生物信息的都必须学perl语言? 答案必须是否定的。很多生信学者，通过用别人的软件照样可以做出优秀的文章。那..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pic.atlasbioinfo.com/u=1476464461,742736999&fm=27&gp=0.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Haopeng Yu"}],["meta",{"property":"article:published_time","content":"2017-09-20T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"生物信息专业如何自学Perl语言\\",\\"image\\":[\\"https://pic.atlasbioinfo.com/u=1476464461,742736999&fm=27&gp=0.jpg\\",\\"https://pic.atlasbioinfo.com/PerlLogo.jpg\\",\\"https://pic.atlasbioinfo.com/Perl%E7%A4%BA%E8%8C%832.JPG\\",\\"https://pic.atlasbioinfo.com/10dfa9ec8a1363276eb7eb74928fa0ec08fac71a.jpg\\",\\"https://pic.atlasbioinfo.com/20130710164703-1174615865.jpg\\",\\"https://pic.atlasbioinfo.com/logo.png\\"],\\"datePublished\\":\\"2017-09-20T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Haopeng Yu\\",\\"url\\":\\"https://github.com/atlasbioinfo\\"}]}"]]},"headers":[{"level":2,"title":"生物信息都要学习Perl语言吗？##","slug":"生物信息都要学习perl语言吗","link":"#生物信息都要学习perl语言吗","children":[]},{"level":2,"title":"为什么要学习Perl语言？##","slug":"为什么要学习perl语言","link":"#为什么要学习perl语言","children":[]},{"level":2,"title":"如何运行Perl？##","slug":"如何运行perl","link":"#如何运行perl","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":5.43,"words":1629},"filePathRelative":"posts/Perl/20170929.md","localizedDate":"2017年9月20日","excerpt":"<p>本文为个人经验所写，希望对初进实验室的新手有所帮助。</p>\\n<blockquote>\\n<ul>\\n<li>生物信息都要学习Perl语言吗？</li>\\n<li>为什么要学习Perl语言？</li>\\n<li>如何运行Perl？</li>\\n<li>有什么教程或者资料可以看？</li>\\n</ul>\\n</blockquote>\\n<hr>\\n<h2>生物信息都要学习Perl语言吗？##</h2>\\n<figure><img src=\\"https://pic.atlasbioinfo.com/u=1476464461,742736999&amp;fm=27&amp;gp=0.jpg\\" alt=\\"骆驼\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>骆驼</figcaption></figure>","autoDesc":true}');export{m as comp,u as data};
