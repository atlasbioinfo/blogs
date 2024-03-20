import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o,c,a,f as n,b as l,e as s}from"./app-DA_i9hid.js";const i={},u=s(`<p>在R语言中进行数据导入，如果用到类似data.frame()这种从R语言1.90版本之前就有的函数，就会发现列名如果是数字会增加一个X。这个很烦，于是今天深入研究了一下这是为什么。夫人说我这是浪费时间，我跟她说，我这是在登陆火星。</p><blockquote><ul><li>导入数据名字前居然加了个X？</li><li>R语言什么函数决定了这个X？</li><li>初探R内核函数</li></ul></blockquote><hr><h2 id="导入数据名字前居然加了个x" tabindex="-1"><a class="header-anchor" href="#导入数据名字前居然加了个x"><span>导入数据名字前居然加了个X？</span></a></h2><p>数据导入，如果用data.frame()会发现列名如果是数字会增加一个X在前面，比如：</p><div class="language-r line-numbers-mode" data-ext="r" data-title="r"><pre class="language-r"><code>a<span class="token operator">&lt;-</span>data.frame<span class="token punctuation">(</span>country<span class="token operator">=</span>c<span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&quot;1999&quot;</span><span class="token operator">=</span>paste<span class="token punctuation">(</span>c<span class="token punctuation">(</span><span class="token number">0.7</span><span class="token punctuation">,</span><span class="token number">37</span><span class="token punctuation">,</span><span class="token number">212</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&quot;K&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&quot;2000&quot;</span><span class="token operator">=</span>paste<span class="token punctuation">(</span>c<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">80</span><span class="token punctuation">,</span><span class="token number">213</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&quot;K&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
这样计算出来是这样的
  country X1999 X2000
<span class="token number">1</span>       A <span class="token number">0.7</span> K   <span class="token number">2</span> K
<span class="token number">2</span>       B  <span class="token number">37</span> K  <span class="token number">80</span> K
<span class="token number">3</span>       C <span class="token number">212</span> K <span class="token number">213</span> K
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://pic.atlasbioinfo.com/KD.jpg" alt="kd" tabindex="0" loading="lazy"><figcaption>kd</figcaption></figure><p>看着就觉得烦，所以我觉得搞清这个问题比较有意思。</p><h2 id="r语言什么函数决定了这个x" tabindex="-1"><a class="header-anchor" href="#r语言什么函数决定了这个x"><span>R语言什么函数决定了这个X？</span></a></h2><p>查了一下data.frame()的R代码，发现：</p><div class="language-r line-numbers-mode" data-ext="r" data-title="r"><pre class="language-r"><code><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token ellipsis">...</span><span class="token punctuation">,</span> row.names <span class="token operator">=</span> <span class="token keyword">NULL</span><span class="token punctuation">,</span> check.rows <span class="token operator">=</span> <span class="token boolean">FALSE</span><span class="token punctuation">,</span> check.names <span class="token operator">=</span> <span class="token boolean">TRUE</span><span class="token punctuation">,</span> 
    fix.empty.names <span class="token operator">=</span> <span class="token boolean">TRUE</span><span class="token punctuation">,</span> stringsAsFactors <span class="token operator">=</span> default.stringsAsFactors<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
首先，默认有一个叫做，check.names的东西，默认为<span class="token boolean">TRUE</span>
接下来，它的函数中有这么一段
    <span class="token keyword">if</span> <span class="token punctuation">(</span>check.names<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>fix.empty.names<span class="token punctuation">)</span> <span class="token comment">#在这里判断是否为空</span>
            vnames <span class="token operator">&lt;-</span> make.names<span class="token punctuation">(</span>vnames<span class="token punctuation">,</span> unique <span class="token operator">=</span> <span class="token boolean">TRUE</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
            nz <span class="token operator">&lt;-</span> nzchar<span class="token punctuation">(</span>vnames<span class="token punctuation">)</span> <span class="token comment">#看vname是否都为字符串</span>
            vnames<span class="token punctuation">[</span>nz<span class="token punctuation">]</span> <span class="token operator">&lt;-</span> make.names<span class="token punctuation">(</span>vnames<span class="token punctuation">[</span>nz<span class="token punctuation">]</span><span class="token punctuation">,</span> unique <span class="token operator">=</span> <span class="token boolean">TRUE</span><span class="token punctuation">)</span>  <span class="token comment">#重点在这里</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么make.names何许人也？ 这是一个把字符串改编成所谓语法上有效的字符，让我们看看什么叫有效：</p><div class="language-r line-numbers-mode" data-ext="r" data-title="r"><pre class="language-r"><code><span class="token keyword">function</span> <span class="token punctuation">(</span>names<span class="token punctuation">,</span> unique <span class="token operator">=</span> <span class="token boolean">FALSE</span><span class="token punctuation">,</span> allow_ <span class="token operator">=</span> <span class="token boolean">TRUE</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    names <span class="token operator">&lt;-</span> as.character<span class="token punctuation">(</span>names<span class="token punctuation">)</span>
    names2 <span class="token operator">&lt;-</span> .Internal<span class="token punctuation">(</span>make.names<span class="token punctuation">(</span>names<span class="token punctuation">,</span> allow_<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>unique<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        o <span class="token operator">&lt;-</span> order<span class="token punctuation">(</span>names <span class="token operator">!=</span> names2<span class="token punctuation">)</span>
        names2<span class="token punctuation">[</span>o<span class="token punctuation">]</span> <span class="token operator">&lt;-</span> make.unique<span class="token punctuation">(</span>names2<span class="token punctuation">[</span>o<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    names2
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看到这个我就惊了，内置代码.....也就是R语言的内核!!!</p><h2 id="初探r内核函数" tabindex="-1"><a class="header-anchor" href="#初探r内核函数"><span>初探R内核函数</span></a></h2>`,15),r={href:"https://cran.r-project.org/doc/manuals/r-release/R-ints.html",target:"_blank",rel:"noopener noreferrer"},k=s(`<div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token punctuation">{</span><span class="token string">&quot;make.names&quot;</span><span class="token punctuation">,</span>	do_makenames<span class="token punctuation">,</span>	<span class="token number">0</span><span class="token punctuation">,</span>	<span class="token number">11</span><span class="token punctuation">,</span>	<span class="token number">2</span><span class="token punctuation">,</span>	<span class="token punctuation">{</span>PP_FUNCALL<span class="token punctuation">,</span> PREC_FN<span class="token punctuation">,</span>	<span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最后在character.c的文件中找到了这个do_makenames函数 这个作为一个内核函数，定义了怎么把传入的值变得合理，比如数字开头的加X，无效字符变成.，缺失字符显示NA等一系列判断。 看这一句</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code> <span class="token comment">/* need to prefix names not beginning with alpha or ., as
	   well as . followed by a number */</span>
	need_prefix <span class="token operator">=</span> FALSE<span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isalpha</span><span class="token punctuation">(</span><span class="token number">0xff</span> <span class="token operator">&amp;</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> This<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> need_prefix <span class="token operator">=</span> TRUE<span class="token punctuation">;</span>
可以自行百度二进制补码的只是，这句意思大概就是第一位如果是不是字母就需要修饰
怎么修饰呢？
<span class="token keyword">if</span> <span class="token punctuation">(</span>need_prefix<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	    tmp <span class="token operator">=</span> <span class="token function">Calloc</span><span class="token punctuation">(</span>l<span class="token operator">+</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token keyword">char</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	    <span class="token function">strcpy</span><span class="token punctuation">(</span>tmp<span class="token punctuation">,</span> <span class="token string">&quot;X&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	    <span class="token function">strcat</span><span class="token punctuation">(</span>tmp<span class="token punctuation">,</span> <span class="token function">translateChar</span><span class="token punctuation">(</span><span class="token function">STRING_ELT</span><span class="token punctuation">(</span>arg<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> 
什么内存占位什么的，自行百度上面几个函数，大概意思就是，在前面加个X
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以尝试，如果你把题目名字变成了“..1”出来就不会加X，而如果变成&quot;.1&quot;前面就会有X、</p><h2 id="如何去掉x" tabindex="-1"><a class="header-anchor" href="#如何去掉x"><span>如何去掉X</span></a></h2><p>所以，重点来了！！！</p><p>**R1.90版本之前，很奇怪，很多命名都不允许，而在目前R的版本，下划线，数字开头这些命名都是允许的。</p><p>data.frame这个函数自R初始就有，所以就保留了这些习惯，如果不想要X，直接把check.names = F就行了**</p><h2 id="后记" tabindex="-1"><a class="header-anchor" href="#后记"><span>后记</span></a></h2><p>刚才跟我夫人说，我在登陆火星，我夫人也一头雾水，她就是觉得我大半夜不睡觉还登陆火星=-=。</p><p>其实是这样。有一个问题，人类为什么要探索宇宙？曾经NASA提出探索宇宙等计划时，很多人站出来反对，因为登月看起来没啥用，还要花费相当巨额的财富，也牺牲了一大批宇航员，这些钱如果用在救济贫困，这些优秀的人去当民航飞行员，岂不美哉？所以，为什么人类要探索宇宙。</p><p>我的看法，探索未知是人类的本性，而在探索中你会收获到意想不到的财富。（有木有觉得像海贼王，哈哈）。</p><p>大家可以随意百度，在探索宇宙过程中，诞生了哪些科技？不光是航天科技，甚至我们生活中用到，比如条形码就是航天科技的产物。</p><p>我为什么说本性呢？如果相信人类是从猩猩的祖先进化来的，那么在那时，一大堆猩猩在大草原上晒太阳，动物们都满足于眼前的吃喝，吃饱喝足就开始休息。没动物想去做多点什么。而就是那么几只进化了一点的猩猩，决定探索草原，于是踏过山和大海，走过平原草地，在这个过程中出现了交流的语言，出现了烹饪，出现了工具。这才成为了我们人类。</p><p>我在做这个看起来没意义的问题的过程中，你估计也看到了我发现了什么宝藏吧~</p><figure><img src="https://pic.atlasbioinfo.com/logo.png" alt="博主简介" tabindex="0" loading="lazy"><figcaption>博主简介</figcaption></figure>`,16);function d(m,v){const t=p("ExternalLinkIcon");return o(),c("div",null,[u,a("p",null,[n("既然涉及到内核，那么久看看R的内核吧，在R官网 "),a("a",r,[n("r语言内核CRAN官网"),l(t)]),n(" 内核其实是c语言编译的，查找之后这个内核的make.names在一个叫name.c的文件中")]),k])}const g=e(i,[["render",d],["__file","20181013.html.vue"]]),f=JSON.parse('{"path":"/posts/R/20181013.html","title":"R语言为什么总会给一些名字前加X","lang":"zh-CN","frontmatter":{"icon":"r","date":"2018-10-13T00:00:00.000Z","title":"R语言为什么总会给一些名字前加X","categories":["R"],"description":"在R语言中进行数据导入，如果用到类似data.frame()这种从R语言1.90版本之前就有的函数，就会发现列名如果是数字会增加一个X。这个很烦，于是今天深入研究了一下这是为什么。夫人说我这是浪费时间，我跟她说，我这是在登陆火星。 导入数据名字前居然加了个X？ R语言什么函数决定了这个X？ 初探R内核函数 导入数据名字前居然加了个X？ 数据导入，如果用...","head":[["meta",{"property":"og:url","content":"https://blog.atlasbioinfo.com/posts/R/20181013.html"}],["meta",{"property":"og:site_name","content":"ATLAS生物信息博客"}],["meta",{"property":"og:title","content":"R语言为什么总会给一些名字前加X"}],["meta",{"property":"og:description","content":"在R语言中进行数据导入，如果用到类似data.frame()这种从R语言1.90版本之前就有的函数，就会发现列名如果是数字会增加一个X。这个很烦，于是今天深入研究了一下这是为什么。夫人说我这是浪费时间，我跟她说，我这是在登陆火星。 导入数据名字前居然加了个X？ R语言什么函数决定了这个X？ 初探R内核函数 导入数据名字前居然加了个X？ 数据导入，如果用..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pic.atlasbioinfo.com/KD.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Haopeng Yu"}],["meta",{"property":"article:published_time","content":"2018-10-13T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"R语言为什么总会给一些名字前加X\\",\\"image\\":[\\"https://pic.atlasbioinfo.com/KD.jpg\\",\\"https://pic.atlasbioinfo.com/logo.png\\"],\\"datePublished\\":\\"2018-10-13T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Haopeng Yu\\",\\"url\\":\\"https://github.com/atlasbioinfo\\"}]}"]]},"headers":[{"level":2,"title":"导入数据名字前居然加了个X？","slug":"导入数据名字前居然加了个x","link":"#导入数据名字前居然加了个x","children":[]},{"level":2,"title":"R语言什么函数决定了这个X？","slug":"r语言什么函数决定了这个x","link":"#r语言什么函数决定了这个x","children":[]},{"level":2,"title":"初探R内核函数","slug":"初探r内核函数","link":"#初探r内核函数","children":[]},{"level":2,"title":"如何去掉X","slug":"如何去掉x","link":"#如何去掉x","children":[]},{"level":2,"title":"后记","slug":"后记","link":"#后记","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":4.3,"words":1291},"filePathRelative":"posts/R/20181013.md","localizedDate":"2018年10月13日","excerpt":"<p>在R语言中进行数据导入，如果用到类似data.frame()这种从R语言1.90版本之前就有的函数，就会发现列名如果是数字会增加一个X。这个很烦，于是今天深入研究了一下这是为什么。夫人说我这是浪费时间，我跟她说，我这是在登陆火星。</p>\\n<blockquote>\\n<ul>\\n<li>导入数据名字前居然加了个X？</li>\\n<li>R语言什么函数决定了这个X？</li>\\n<li>初探R内核函数</li>\\n</ul>\\n</blockquote>\\n<hr>\\n<h2>导入数据名字前居然加了个X？</h2>\\n<p>数据导入，如果用data.frame()会发现列名如果是数字会增加一个X在前面，比如：</p>","autoDesc":true}');export{g as comp,f as data};
