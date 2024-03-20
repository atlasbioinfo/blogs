import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as h,o as i,c as l,a as t,f as n,b as p,e}from"./app-DA_i9hid.js";const r={},s=e('<p>那么，接下来，我就从我个人的经验为大家说一下怎么学习Python：</p><blockquote><ul><li>做生信为什么要学Python？</li><li>学Python从哪入手？</li><li>学Python的工具推荐（python安装、IDE等）</li><li>最后几个小问题</li></ul></blockquote><hr><p>时间过的好快，上一篇博客还是17年9月写的，现在已经到了18年4月。 这段时间，我已经全面的把机器学习和深度学习融入到我的研究中了，因为我发现这东西实在太神奇了。 做这两个“学习”，我都是用python写的，因为现在各大深度学习平台对Python支持略高，毕竟好学。</p><h2 id="做生信为什么要学python" tabindex="-1"><a class="header-anchor" href="#做生信为什么要学python"><span>做生信为什么要学Python？##</span></a></h2><figure><img src="https://pic.atlasbioinfo.com/pythonLogo.jpg" alt="Python" tabindex="0" loading="lazy"><figcaption>Python</figcaption></figure><p>Python，我的感觉，效率并不是很高，至少处理文本没有我们perl语言强大（运行效率+代码编写），所以还是那句话，要不要学python，最好先问一下你们实验室的师兄看看你以后的方向是什么，如果基因组map这种，学shell或者perl更合理。</p><p>Python最大的优势在于，有很多深度学习、机器学习的包，错了，有各种软件包支持，学起来很容易。</p><p>比如谷歌的深度学习框架，tensorflow，支持什么？支持JAVA,C和Python。前两种语言略懂，大概就是要完成一个功能，JAVA和C要比perl，python多写4倍的代码左右=-=！，并且学起来略难（我自学perl只用3天，自学JAVA用了一个月=-=）。所以相比这两种难度系数较高的，python又容易学，又能实现相应的功能，计算效率差一点怎么了，让老板掏钱买个好服务器就行了嘛→_→ 。</p><p>所以，学Python是因为，这是实现机器学习（Sklearn包）、深度学习（Tensorflow等）等最容易的方案，如果真·效率至上，建议大家还是去学JAVA或者C吧（一般没必要）。</p><h2 id="学python从哪入手" tabindex="-1"><a class="header-anchor" href="#学python从哪入手"><span>学Python从哪入手？##</span></a></h2><p>第一反应，先买书=_=!</p><p>然而，并没有看到写的和小骆驼一样好的学Python的书，现在我那本《Python基础教程》还在吃灰。</p><p>Python我记得是京东还是当当统计的最受大家欢迎的书，一搜各种畅销书，然而我给大家推荐的是MOOC中国大学慕课网的python语言程序设计：</p><figure><img src="https://pic.atlasbioinfo.com/python程序设计.PNG" alt="Python语言程序设计" tabindex="0" loading="lazy"><figcaption>Python语言程序设计</figcaption></figure>',15),c={href:"https://www.icourse163.org/course/BIT-268001",target:"_blank",rel:"noopener noreferrer"},y=t("p",null,"刚才登陆发现多了个标签，国家精品，好炸天。不过确实讲的好，还免费，我看完了嵩天老师的各种关于python的视频，感觉对于入门太有帮助了。所以真的强烈推荐大家学习这个就行了，至于书买不买无所谓，记好笔记就行了。",-1),d=t("p",null,"不喜欢看视频的童鞋可以看廖雪峰的python教程，写的超级好，也很有意思：",-1),g={href:"https://www.liaoxuefeng.com/wiki/0014316089557264a6b348958f449949df42a6d3a2e542c000/",target:"_blank",rel:"noopener noreferrer"},m=e('<p>给出的宣传是：中文，免费，零起点，完整示例，基于最新的Python 3版本。是不是很心动呢？</p><p><strong>同时跟大家说几个坑啊</strong>，有很多网站推出了，python进行深度学习的课程，大概400-5000价格不等，里面比较吸引人的就是可以让你实现，预测房价（根据面积，人口什么的做fit），预测股市（成功率50%左右），猫狗大战（用的是机器学习的方法进行图片识别），真的只是噱头，超级简单（如果涉及深度学习CNN就当我没说，一般来说就只是机器学习的简单应用），价格还超级高，土豪无视我说的这句话。</p><h2 id="学python的工具推荐-python安装、ide等" tabindex="-1"><a class="header-anchor" href="#学python的工具推荐-python安装、ide等"><span>学Python的工具推荐（python安装、IDE等）##</span></a></h2><h3 id="python的安装" tabindex="-1"><a class="header-anchor" href="#python的安装"><span>Python的安装</span></a></h3><p>其实第一个问题就是，怎么安装python =_=</p><p>当然你可以直接百度Python，之后下载</p><p>但是我更推荐你用包管理器Anaconda，界面如下：</p><figure><img src="https://pic.atlasbioinfo.com/anaconda.jpg" alt="anaconda" tabindex="0" loading="lazy"><figcaption>anaconda</figcaption></figure><p>因为后续你要装的包多了，就会越来越乱，自己也会很纠结，尤其是面对多个python版本切换的时候。 所以anaconda就很友好啦，自带jupyter notebook和很多数据分析的包。</p><p>友情提示，把anaconda的源换成清华大学的源，安装各种包速度超级快哦~</p><p>https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/</p><h3 id="python的ide-就是写程序的界面" tabindex="-1"><a class="header-anchor" href="#python的ide-就是写程序的界面"><span>Python的IDE（就是写程序的界面）###</span></a></h3><p>Python自带的写代码的东西略丑→_→，给大家看几个界面：</p><p>一般linux我们直接在Terminal里面用超级强大的vim，效果如下： <img src="https://pic.atlasbioinfo.com/vim.png" alt="vim" loading="lazy"></p><p>各个平台，功能多一些的，好看一点的推荐PyCharm和Sublime Text，下图是pyCharm： <img src="https://pic.atlasbioinfo.com/pycharm.png" alt="pyCharm" loading="lazy"></p><p>友情提示，pyCharm用大家在学校的教育网邮箱注册可以获得全免费哦~ 没有教育网邮箱的可以用pyCharm的免费版，社区版本也是OK的。</p><p>再推荐python的一个超级适合学习和演示的东西，jupyter notebook，界面如下： <img src="https://pic.atlasbioinfo.com/notebook.png" alt="noteBook" loading="lazy"></p><h2 id="最后的几个小问题" tabindex="-1"><a class="header-anchor" href="#最后的几个小问题"><span>最后的几个小问题</span></a></h2><h3 id="_1-python的版本选择" tabindex="-1"><a class="header-anchor" href="#_1-python的版本选择"><span>1. python的版本选择</span></a></h3><p>其实并不是什么问题</p><p>python有Python 2.X 和Python 3.X 也就是第二版和第三版</p><p>因为这次变动改的很多，所以很多老用户不适应，因此目前两个版本都在更新。</p><p>不过，刚开始学的朋友们直接选择py3就行了，因为比如tensorflow支持的就是Python 3.X</p><p>如果你的专业的某些工具包专属于py2，你可以用anaconda切换python的版本就行了。</p><h3 id="_2-学完python怎么学机器学习或者深度学习" tabindex="-1"><a class="header-anchor" href="#_2-学完python怎么学机器学习或者深度学习"><span>2. 学完python怎么学机器学习或者深度学习</span></a></h3><p>机器学习的话，我继续推荐嵩天老师的课程，会教你sklearn的很多功能。</p><p>机器学习书的话，推荐周志华的西瓜书，《机器学习》，就是封面印着个西瓜的那个，畅销书。</p><p>深度学习，或者叫人工智能神经网络，推荐吴恩达的课程，现在在网易云课堂可以免费听，我就是听完那个入门的。</p><p>深度学习的书，好多，都不知道怎么推荐了</p><p>吴恩达刚写的一本还没出版，是全英文挺好的，</p><p>中文的有一本花书，《深度学习》，三个老中青大牛写的，张志华团队翻译的，网上褒贬不一，大概集中于CNN那一块，我觉得写的还不错</p><p>其实这两点可说的太多了，以后我再写个微博说好了=-=。</p><figure><img src="https://pic.atlasbioinfo.com/logo.png" alt="博主简介" tabindex="0" loading="lazy"><figcaption>博主简介</figcaption></figure>',33);function f(P,u){const o=h("ExternalLinkIcon");return i(),l("div",null,[s,t("p",null,[t("a",c,[n("Python语言程序设计，主讲人：北京理工大学，嵩天、黄天羽、礼欣"),p(o)])]),y,d,t("p",null,[t("a",g,[n("廖雪峰的python"),p(o)])]),m])}const k=a(r,[["render",f],["__file","20180413.html.vue"]]),x=JSON.parse('{"path":"/posts/Python/20180413.html","title":"生物信息专业如何自学Python语言","lang":"zh-CN","frontmatter":{"icon":"python","date":"2018-04-13T00:00:00.000Z","title":"生物信息专业如何自学Python语言","categories":["Python"],"description":"那么，接下来，我就从我个人的经验为大家说一下怎么学习Python： 做生信为什么要学Python？ 学Python从哪入手？ 学Python的工具推荐（python安装、IDE等） 最后几个小问题 时间过的好快，上一篇博客还是17年9月写的，现在已经到了18年4月。 这段时间，我已经全面的把机器学习和深度学习融入到我的研究中了，因为我发现这东西实在太神...","head":[["meta",{"property":"og:url","content":"https://blog.atlasbioinfo.com/posts/Python/20180413.html"}],["meta",{"property":"og:site_name","content":"ATLAS生物信息博客"}],["meta",{"property":"og:title","content":"生物信息专业如何自学Python语言"}],["meta",{"property":"og:description","content":"那么，接下来，我就从我个人的经验为大家说一下怎么学习Python： 做生信为什么要学Python？ 学Python从哪入手？ 学Python的工具推荐（python安装、IDE等） 最后几个小问题 时间过的好快，上一篇博客还是17年9月写的，现在已经到了18年4月。 这段时间，我已经全面的把机器学习和深度学习融入到我的研究中了，因为我发现这东西实在太神..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pic.atlasbioinfo.com/pythonLogo.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Haopeng Yu"}],["meta",{"property":"article:published_time","content":"2018-04-13T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"生物信息专业如何自学Python语言\\",\\"image\\":[\\"https://pic.atlasbioinfo.com/pythonLogo.jpg\\",\\"https://pic.atlasbioinfo.com/python%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1.PNG\\",\\"https://pic.atlasbioinfo.com/anaconda.jpg\\",\\"https://pic.atlasbioinfo.com/vim.png\\",\\"https://pic.atlasbioinfo.com/pycharm.png\\",\\"https://pic.atlasbioinfo.com/notebook.png\\",\\"https://pic.atlasbioinfo.com/logo.png\\"],\\"datePublished\\":\\"2018-04-13T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Haopeng Yu\\",\\"url\\":\\"https://github.com/atlasbioinfo\\"}]}"]]},"headers":[{"level":2,"title":"做生信为什么要学Python？##","slug":"做生信为什么要学python","link":"#做生信为什么要学python","children":[]},{"level":2,"title":"学Python从哪入手？##","slug":"学python从哪入手","link":"#学python从哪入手","children":[]},{"level":2,"title":"学Python的工具推荐（python安装、IDE等）##","slug":"学python的工具推荐-python安装、ide等","link":"#学python的工具推荐-python安装、ide等","children":[{"level":3,"title":"Python的安装","slug":"python的安装","link":"#python的安装","children":[]},{"level":3,"title":"Python的IDE（就是写程序的界面）###","slug":"python的ide-就是写程序的界面","link":"#python的ide-就是写程序的界面","children":[]}]},{"level":2,"title":"最后的几个小问题","slug":"最后的几个小问题","link":"#最后的几个小问题","children":[{"level":3,"title":"1. python的版本选择","slug":"_1-python的版本选择","link":"#_1-python的版本选择","children":[]},{"level":3,"title":"2. 学完python怎么学机器学习或者深度学习","slug":"_2-学完python怎么学机器学习或者深度学习","link":"#_2-学完python怎么学机器学习或者深度学习","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":5.56,"words":1667},"filePathRelative":"posts/Python/20180413.md","localizedDate":"2018年4月13日","excerpt":"<p>那么，接下来，我就从我个人的经验为大家说一下怎么学习Python：</p>\\n<blockquote>\\n<ul>\\n<li>做生信为什么要学Python？</li>\\n<li>学Python从哪入手？</li>\\n<li>学Python的工具推荐（python安装、IDE等）</li>\\n<li>最后几个小问题</li>\\n</ul>\\n</blockquote>\\n<hr>\\n<p>时间过的好快，上一篇博客还是17年9月写的，现在已经到了18年4月。\\n这段时间，我已经全面的把机器学习和深度学习融入到我的研究中了，因为我发现这东西实在太神奇了。\\n做这两个“学习”，我都是用python写的，因为现在各大深度学习平台对Python支持略高，毕竟好学。</p>","autoDesc":true}');export{k as comp,x as data};