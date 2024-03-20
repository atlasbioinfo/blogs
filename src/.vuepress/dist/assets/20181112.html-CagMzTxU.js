import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as a,e as s}from"./app-DA_i9hid.js";const p={},e=s(`<p>在线网站已经正常运行了好几天，这时候有一个问题突然出现了，就是我这么纯前端的做是不是代码就等于完全公开了？能不能把用户输入的序列发送到服务器，经过计算，再返回结果呢？于是，我开始接触后端，一个“弱鸡前端工程师”正逐渐转变为“弱鸡全栈工程师”......</p><blockquote><ul><li>来自大佬羞辱</li><li>PHP，全世界最好的编程语言</li><li>Hello world, 阿贾克斯</li><li>感想</li></ul></blockquote><hr><h2 id="来自大佬鄙视" tabindex="-1"><a class="header-anchor" href="#来自大佬鄙视"><span>来自大佬鄙视</span></a></h2><p>前一段时间，纯前端的编程让我各种膨胀，甚至我可以一下午做好实验室的一个资源索引站点，就是把各种写好的生物信息学教程和实习资料放到上面。因为我有域名，再加上七牛云10G的免费空间，于是外链就很容易解决了，因为也不占用服务器内存，也没什么损耗，完美。</p><p>不过一直在前端，我就很好奇，到底所说的后端是什么意思呢？最近想把那个网站往深做做，收集上几百个物种的基因组进行预测，最后做成一个数据库，虽然麻烦了许多，不过也能做成一篇文章。既然开了序列预测的头，就把这个点做完呗。</p><p>既然提到了数据库，那么第一反应就算MySQL，开始从0学。首先我知道，这个MySQL肯定不是前端的，要不，你支付宝的账户和密码就能直接保存在你的电脑上，甚至可以随意修改金额......于是开始接触后端。</p><p>MySQL和哪种后端语言最搭，也就是相互最容易调用。随便一搜就知道，PHP，全世界最好的编程语言=-=。不过同时，也有另一个语言，node.js被搜出来，谷歌开发的，逐渐火起来的后端语言，甚至可以直接当服务器解析工具。于是咨询大佬学哪个好，或者更容易，大佬撇给我了一张图。</p><figure><img src="https://pic.atlasbioinfo.com/phpbest" alt="phpbest" tabindex="0" loading="lazy"><figcaption>phpbest</figcaption></figure><p>同时，各种嘲笑我不懂后端，这样网页另存为就直接约等于网站克隆23333。不过我确实不懂=-=，不过为了以后好做数据库，我觉得开始学PHP......</p><h2 id="php-全世界最好的编程语言" tabindex="-1"><a class="header-anchor" href="#php-全世界最好的编程语言"><span>PHP，全世界最好的编程语言</span></a></h2><p>之前在W3C学编程实战给我留下了很好的印象，于是先买了39的PHP编程实战......然鹅，感觉好基础，作完一遍感觉没啥用。那咋办？这时候又想到了我曾经的经验了，首先我想了一下我想实现的功能：</p><ol><li>用户把序列发送到服务器</li><li>服务器用某种语言，比如PHP计算，把数据进行处理</li><li>把处理的结果返回JS，JS排版后放在HTML上</li></ol><p>好的，所以就按照这几个需求开始查。</p><p>发送到服务器，PHP可以用表单的形式接收。我先做了加法计算器，用户输入两个数到输入框，from发送到服务器，PHP接收，计算完成返回，看起来和我需要的功能一致。</p><p>然鹅，几乎所有的教程都只将怎么把数据POST到服务器，然而怎么弄回来啊。</p><p>查来查去，得到了一个答案，阿贾克斯，ajax。</p><h2 id="hello-world-阿贾克斯" tabindex="-1"><a class="header-anchor" href="#hello-world-阿贾克斯"><span>Hello world，阿贾克斯</span></a></h2><p>开始百度，开始菜鸟教程，开始W3school。。。。。。</p><p>这个网页开发技术可以快速创建动态网页，并且属于异步处理技术。</p><p>算了，说中文，ajax可以实现我说的刚才那个计算器的需求，并且返回无需重新加载全部网页。</p><p>如果直接用JS写AJAX，可能还会比较复杂，然额，如果用jQuery写就超级简单了.....</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
		<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;post&quot;</span><span class="token punctuation">,</span> <span class="token comment">//这里还可以是get，具体什么意思百度</span>
		<span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;test.php&quot;</span><span class="token punctuation">,</span> <span class="token comment">//写上你想调用的程序名，似乎perl也可以，但是php是直接可以运行的，perl似乎需要配置。</span>
		<span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>  <span class="token comment">//传入数据，也就是传给服务器什么数据，需要以这种键值冒号的形式弄</span>
			<span class="token string-property property">&#39;cds&#39;</span><span class="token operator">:</span>cds<span class="token punctuation">,</span>
			<span class="token string-property property">&#39;infoDraw&#39;</span><span class="token operator">:</span>infoDraw
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">d</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  <span class="token comment">//这个就是，如果计算成功，返回值存入 d，这个变量名自己定</span>
			result<span class="token operator">=</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>突然好简单......</p><h2 id="感想" tabindex="-1"><a class="header-anchor" href="#感想"><span>感想</span></a></h2><p>前端不安全......</p><p>怎么说呢？首先代码，你一个网站的代码全部发给用户的浏览器，首先就没有安全性了。</p><p>其次，如果你稍微有点不想公开的东西，比如用户保存的数据库或者什么，这东西你肯定不能存到前端啊，这样任何人都能随意获取了。</p><p>其实后端，我的理解就是，运行在服务器上的一系列程序。PHP因为有PHP-fpm管理进程，并且语言也好写，用的人很多。 也就是，用户前端点击一次提交，发送到服务器，PHP-fpm打开一个进程开始运行。如果很多人用，这个过程就比较复杂，还会造成负载过载等各种问题。所以，这些活都是需要后端要做的。</p><p>其实我之前一直在服务器写脚本，现在看起来如果加上通信，我之前就算在做后端的部分工作啊。这次反正让我从纯前端编程改成前端加后端，“弱鸡全栈工程师”出炉。</p><p>最后说一句，挺佩服我自己的......我本来做perl语言生物组学数据分析，之后为了更准确的解析，硬是逼着我学大数据和深度学习，现在为了建网站和数据库，又逼着自己学前端和后端.....</p><p>给自己一个666.</p><p><img src="https://pic.atlasbioinfo.com/logo.png" alt="博主简介" loading="lazy"><img src="https://atlasbioinfo.github.io/images/logo.png" alt="博主简介" loading="lazy"></p>`,33),o=[e];function l(i,c){return t(),a("div",null,o)}const d=n(p,[["render",l],["__file","20181112.html.vue"]]),h=JSON.parse('{"path":"/posts/Website/20181112.html","title":"初识后端","lang":"zh-CN","frontmatter":{"icon":"chrome","date":"2018-11-12T00:00:00.000Z","title":"初识后端","categories":["Website"],"description":"在线网站已经正常运行了好几天，这时候有一个问题突然出现了，就是我这么纯前端的做是不是代码就等于完全公开了？能不能把用户输入的序列发送到服务器，经过计算，再返回结果呢？于是，我开始接触后端，一个“弱鸡前端工程师”正逐渐转变为“弱鸡全栈工程师”...... 来自大佬羞辱 PHP，全世界最好的编程语言 Hello world, 阿贾克斯 感想 来自大佬鄙视 ...","head":[["meta",{"property":"og:url","content":"https://blog.atlasbioinfo.com/posts/Website/20181112.html"}],["meta",{"property":"og:site_name","content":"ATLAS生物信息博客"}],["meta",{"property":"og:title","content":"初识后端"}],["meta",{"property":"og:description","content":"在线网站已经正常运行了好几天，这时候有一个问题突然出现了，就是我这么纯前端的做是不是代码就等于完全公开了？能不能把用户输入的序列发送到服务器，经过计算，再返回结果呢？于是，我开始接触后端，一个“弱鸡前端工程师”正逐渐转变为“弱鸡全栈工程师”...... 来自大佬羞辱 PHP，全世界最好的编程语言 Hello world, 阿贾克斯 感想 来自大佬鄙视 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pic.atlasbioinfo.com/phpbest"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Haopeng Yu"}],["meta",{"property":"article:published_time","content":"2018-11-12T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"初识后端\\",\\"image\\":[\\"https://pic.atlasbioinfo.com/phpbest\\",\\"https://pic.atlasbioinfo.com/logo.png\\",\\"https://atlasbioinfo.github.io/images/logo.png\\"],\\"datePublished\\":\\"2018-11-12T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Haopeng Yu\\",\\"url\\":\\"https://github.com/atlasbioinfo\\"}]}"]]},"headers":[{"level":2,"title":"来自大佬鄙视","slug":"来自大佬鄙视","link":"#来自大佬鄙视","children":[]},{"level":2,"title":"PHP，全世界最好的编程语言","slug":"php-全世界最好的编程语言","link":"#php-全世界最好的编程语言","children":[]},{"level":2,"title":"Hello world，阿贾克斯","slug":"hello-world-阿贾克斯","link":"#hello-world-阿贾克斯","children":[]},{"level":2,"title":"感想","slug":"感想","link":"#感想","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":4.97,"words":1492},"filePathRelative":"posts/Website/20181112.md","localizedDate":"2018年11月12日","excerpt":"<p>在线网站已经正常运行了好几天，这时候有一个问题突然出现了，就是我这么纯前端的做是不是代码就等于完全公开了？能不能把用户输入的序列发送到服务器，经过计算，再返回结果呢？于是，我开始接触后端，一个“弱鸡前端工程师”正逐渐转变为“弱鸡全栈工程师”......</p>\\n<blockquote>\\n<ul>\\n<li>来自大佬羞辱</li>\\n<li>PHP，全世界最好的编程语言</li>\\n<li>Hello world, 阿贾克斯</li>\\n<li>感想</li>\\n</ul>\\n</blockquote>\\n<hr>\\n<h2>来自大佬鄙视</h2>\\n<p>前一段时间，纯前端的编程让我各种膨胀，甚至我可以一下午做好实验室的一个资源索引站点，就是把各种写好的生物信息学教程和实习资料放到上面。因为我有域名，再加上七牛云10G的免费空间，于是外链就很容易解决了，因为也不占用服务器内存，也没什么损耗，完美。</p>","autoDesc":true}');export{d as comp,h as data};
