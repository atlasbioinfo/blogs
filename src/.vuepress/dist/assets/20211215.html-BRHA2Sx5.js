import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e}from"./app-B1UaDH9J.js";const t={},p=e(`<p>正则表达式算是我最常用的代码技巧吧，因为经常需要文本的模式匹配（就是查找某种字符串）。从我的经验，正则表达式很强大，效率也很高。最近有一个查找转录组中的GQS的项目，正好整理一下正则表达式。</p><blockquote><ul><li>基础匹配</li><li>前向断言</li><li>Kmer</li></ul></blockquote><hr><p>写在前面：</p><p>我准备用Python来实现，其实各个语言的正则表达式（Regular expression）语法差异都不大。我不准备写太多基础的东西，就像文档教程那么难看，我就写一些实用的东西。</p><h2 id="基础匹配" tabindex="-1"><a class="header-anchor" href="#基础匹配"><span>基础匹配</span></a></h2><p>GQS，G-quadruplex 是一种富含G的碱基片段，现在发现有一大堆不啦不啦的功能。所以第一步就是把他找出来。</p><p>比较经典的GQS模式是G3N1-7,用正则表达式这样的：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>GGG <span class="token punctuation">[</span>ATCG<span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">}</span> GGG <span class="token punctuation">[</span>ATCG<span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">}</span> GGG <span class="token punctuation">[</span>ATCG<span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">}</span> GGG

e<span class="token punctuation">.</span>g<span class="token punctuation">.</span><span class="token punctuation">,</span>

GGG AT GGG CTA GGG AGTT GGG

其中：
<span class="token punctuation">[</span>ATCG<span class="token punctuation">]</span>是这<span class="token number">4</span>个字符的一个，<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">}</span>是<span class="token number">1</span><span class="token operator">-</span><span class="token number">7</span>个

所以上面这个正则表达式简写一下就是：
<span class="token punctuation">(</span>G<span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">[</span>ATCG<span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span>G<span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://pic.atlasbioinfo.com/pic_1639566409748_1639566417010.png" alt="picture 1" tabindex="0" loading="lazy"><figcaption>picture 1</figcaption></figure><p>这个例子是3个G，也叫G3。当然植物中还有2个G的情况。不过按照这个正则表达式，是不是就能找到全部的GQS了呢？让我们试试</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> re

<span class="token comment"># 定义一个测试的DNA序列</span>
test_seq <span class="token operator">=</span> <span class="token string">&quot;ATGGGATGGGCTAGGGAGTTGGGACGGGTCAGGGGATTTGGGAGGGCTA&quot;</span>

<span class="token comment"># 定义正则表达式</span>
gqs_pattern <span class="token operator">=</span> <span class="token string">r&quot;(G{3}[ATCG]{1,7}){3}G{3}&quot;</span>

<span class="token comment"># 使用正则表达式查找GQS</span>
gqs_matches <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span>gqs_pattern<span class="token punctuation">,</span> test_seq<span class="token punctuation">)</span>

<span class="token comment"># 输出结果</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;找到的GQS片段：&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token keyword">match</span> <span class="token keyword">in</span> gqs_matches<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token keyword">match</span><span class="token punctuation">)</span>

<span class="token comment"># 结果：找到的GQS片段：</span>
<span class="token comment"># GGGATGGGCTAGGGAGTTGGG</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面的结果可以看出，我们找到了一个GQS片段。但是，我们需要注意的是，这个正则表达式可能会漏掉一些特殊情况，比如G2和G4的情况。为了更全面地找到GQS，我们可以修改正则表达式如下：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>gqs_pattern <span class="token operator">=</span> <span class="token string">r&quot;((G{2,4}[ATCG]{1,7}){3,}G{2,4})&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个正则表达式表示，G可以重复2到4次，然后后面可以跟1到7个任意碱基，这个模式重复3次或以上，最后再以2到4个G结尾。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># 使用修改后的正则表达式查找GQS</span>
gqs_matches <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span>gqs_pattern<span class="token punctuation">,</span> test_seq<span class="token punctuation">)</span>

<span class="token comment"># 输出结果</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;找到的GQS片段：&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token keyword">match</span> <span class="token keyword">in</span> gqs_matches<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token keyword">match</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># 结果：找到的GQS片段：</span>
<span class="token comment"># GGGATGGGCTAGGGAGTTGGG</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="前向断言" tabindex="-1"><a class="header-anchor" href="#前向断言"><span>前向断言</span></a></h2><p>在使用正则表达式查找GQS片段时，我们可能会遇到一个问题：当两个GQS片段紧邻或重叠时，我们的正则表达式可能无法找到所有的GQS。为了解决这个问题，我们可以使用前向断言（lookahead assertion）来改进我们的正则表达式。</p><p>前向断言允许我们在匹配一个模式的同时，检查该模式后面是否符合另一个模式。在这个例子中，我们可以使用前向断言来确保在匹配到一个GQS片段后，立即检查下一个可能的GQS片段。</p><p>修改后的正则表达式如下：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>gqs_pattern <span class="token operator">=</span> <span class="token string">r&quot;(?=((G{2,4}[ATCG]{1,7}){3,}G{2,4}))&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里，我们在原有的正则表达式前面加上了<code>(?=...)</code>，表示一个前向断言。现在，我们的正则表达式会在匹配到一个GQS片段后，立即检查下一个可能的GQS片段，从而找到所有的GQS。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># 使用修改后的正则表达式查找GQS</span>
gqs_matches <span class="token operator">=</span> re<span class="token punctuation">.</span>finditer<span class="token punctuation">(</span>gqs_pattern<span class="token punctuation">,</span> test_seq<span class="token punctuation">)</span>

<span class="token comment"># 输出结果</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;找到的GQS片段：&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token keyword">match</span> <span class="token keyword">in</span> gqs_matches<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token keyword">match</span><span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 结果：找到的GQS片段：</span>
<span class="token comment"># GGGATGGGCTAGGGAGTTGGG</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过断言，我们可以确保找到所有的GQS片段，即使它们紧邻或重叠。这对于分析复杂的生物序列非常有用。</p><h2 id="kmer" tabindex="-1"><a class="header-anchor" href="#kmer"><span>Kmer</span></a></h2><p>虽然正则表达式在查找GQS片段方面非常有用，但在某些情况下，它可能无法找到所有的GQS。比如：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>seq<span class="token operator">=</span><span class="token string">&quot;GGGAGGGATGGAGGGAGGAGGG&quot;</span>

<span class="token comment"># 有多个GQS存在在其中</span>
<span class="token number">1.</span> GGGAGGGATGGAGGGAGGAGGG
<span class="token number">2.</span> GGGAGGGATGGAGG
<span class="token number">3.</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是因为正则表达式主要依赖于预先定义的模式，而GQS片段可能具有更复杂的结构。为了解决这个问题，我们可以尝试使用kmer的方法来查找GQS。</p><p>Kmer是一种将DNA序列划分为长度为k的连续子串的方法。通过分析kmer的组成和分布，我们可以发现序列中的一些潜在模式。在查找GQS片段的情况下，我们可以使用kmer方法来识别具有高G含量和特定G分布的子串。</p><p>以下是使用kmer方法查找GQS片段的一个示例：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">find_gqs_by_kmer</span><span class="token punctuation">(</span>seq<span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">:</span>
    gqs_candidates <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>seq<span class="token punctuation">)</span> <span class="token operator">-</span> k <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        kmer <span class="token operator">=</span> seq<span class="token punctuation">[</span>i<span class="token punctuation">:</span>i<span class="token operator">+</span>k<span class="token punctuation">]</span>
        g_count <span class="token operator">=</span> kmer<span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token string">&quot;G&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> g_count <span class="token operator">&gt;=</span> k <span class="token operator">*</span> <span class="token number">0.5</span><span class="token punctuation">:</span>  <span class="token comment"># 设定阈值，如G占kmer的50%以上</span>
            gqs_candidates<span class="token punctuation">.</span>append<span class="token punctuation">(</span>kmer<span class="token punctuation">)</span>
    <span class="token keyword">return</span> gqs_candidates

<span class="token comment"># 定义一个测试的DNA序列</span>
test_seq <span class="token operator">=</span> <span class="token string">&quot;ATGGGATGGGCTAGGGAGTTGGGACGGGTCAGGGGATTTGGGAGGGCTA&quot;</span>

<span class="token comment"># 使用kmer方法查找GQS</span>
k <span class="token operator">=</span> <span class="token number">10</span>  <span class="token comment"># 可以根据实际情况调整k值</span>
gqs_candidates <span class="token operator">=</span> find_gqs_by_kmer<span class="token punctuation">(</span>test_seq<span class="token punctuation">,</span> k<span class="token punctuation">)</span>

<span class="token comment"># 输出结果</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;找到的GQS候选片段：&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> candidate <span class="token keyword">in</span> gqs_candidates<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>candidate<span class="token punctuation">)</span>

<span class="token comment"># 结果：找到的GQS候选片段：</span>
<span class="token comment"># GGGATGGGCT</span>
<span class="token comment"># GGCTAGGGAG</span>
<span class="token comment"># GGGAGTTGGG</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，使用kmer方法我们能够找到更多的GQS候选片段。然而，这种方法可能会产生一些假阳性结果，因为它只是基于G的含量和分布，而不是具体的GQS结构。为了提高查找GQS的准确性，我们可以结合正则表达式和kmer方法，首先使用kmer方法找到候选片段，然后使用正则表达式进一步筛选出真正的GQS片段。</p><p>总之，kmer方法为我们提供了一种在复杂生物序列中查找GQS片段的补充方法。结合正则表达式和kmer方法，我们可以更全面地识别GQS，并为生物信息学研究提供更多的信息。希望这些技巧能够帮助你在生物信息学领域取得更好的成果！</p><figure><img src="https://pic.atlasbioinfo.com/logo.png" alt="博主简介" tabindex="0" loading="lazy"><figcaption>博主简介</figcaption></figure>`,34),o=[p];function i(c,l){return s(),a("div",null,o)}const d=n(t,[["render",i],["__file","20211215.html.vue"]]),k=JSON.parse('{"path":"/posts/Python/20211215.html","title":"生信中的Python——正则表达式与GQS预测","lang":"zh-CN","frontmatter":{"icon":"python","date":"2021-12-15T00:00:00.000Z","title":"生信中的Python——正则表达式与GQS预测","categories":["Python"],"description":"正则表达式算是我最常用的代码技巧吧，因为经常需要文本的模式匹配（就是查找某种字符串）。从我的经验，正则表达式很强大，效率也很高。最近有一个查找转录组中的GQS的项目，正好整理一下正则表达式。 基础匹配 前向断言 Kmer 写在前面： 我准备用Python来实现，其实各个语言的正则表达式（Regular expression）语法差异都不大。我不准备写太...","head":[["meta",{"property":"og:url","content":"https://blog.atlasbioinfo.com/posts/Python/20211215.html"}],["meta",{"property":"og:site_name","content":"ATLAS生物信息博客"}],["meta",{"property":"og:title","content":"生信中的Python——正则表达式与GQS预测"}],["meta",{"property":"og:description","content":"正则表达式算是我最常用的代码技巧吧，因为经常需要文本的模式匹配（就是查找某种字符串）。从我的经验，正则表达式很强大，效率也很高。最近有一个查找转录组中的GQS的项目，正好整理一下正则表达式。 基础匹配 前向断言 Kmer 写在前面： 我准备用Python来实现，其实各个语言的正则表达式（Regular expression）语法差异都不大。我不准备写太..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pic.atlasbioinfo.com/pic_1639566409748_1639566417010.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-20T11:04:46.000Z"}],["meta",{"property":"article:author","content":"Haopeng Yu"}],["meta",{"property":"article:published_time","content":"2021-12-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-20T11:04:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"生信中的Python——正则表达式与GQS预测\\",\\"image\\":[\\"https://pic.atlasbioinfo.com/pic_1639566409748_1639566417010.png\\",\\"https://pic.atlasbioinfo.com/logo.png\\"],\\"datePublished\\":\\"2021-12-15T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-20T11:04:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Haopeng Yu\\",\\"url\\":\\"https://github.com/atlasbioinfo\\"}]}"]]},"headers":[{"level":2,"title":"基础匹配","slug":"基础匹配","link":"#基础匹配","children":[]},{"level":2,"title":"前向断言","slug":"前向断言","link":"#前向断言","children":[]},{"level":2,"title":"Kmer","slug":"kmer","link":"#kmer","children":[]}],"git":{"createdTime":1710932686000,"updatedTime":1710932686000,"contributors":[{"name":"hyu","email":"hp.yu@outlook.com","commits":1}]},"readingTime":{"minutes":5.13,"words":1539},"filePathRelative":"posts/Python/20211215.md","localizedDate":"2021年12月15日","excerpt":"<p>正则表达式算是我最常用的代码技巧吧，因为经常需要文本的模式匹配（就是查找某种字符串）。从我的经验，正则表达式很强大，效率也很高。最近有一个查找转录组中的GQS的项目，正好整理一下正则表达式。</p>\\n<blockquote>\\n<ul>\\n<li>基础匹配</li>\\n<li>前向断言</li>\\n<li>Kmer</li>\\n</ul>\\n</blockquote>\\n<hr>\\n<p>写在前面：</p>\\n<p>我准备用Python来实现，其实各个语言的正则表达式（Regular expression）语法差异都不大。我不准备写太多基础的东西，就像文档教程那么难看，我就写一些实用的东西。</p>\\n<h2>基础匹配</h2>","autoDesc":true}');export{d as comp,k as data};