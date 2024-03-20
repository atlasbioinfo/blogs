import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as r,c as p,a as o,f as t,b as e,e as i}from"./app-DA_i9hid.js";const s={},c=i('<p>实验笔记这个事情，导师天天跟你强调这个的重要性。记录好后至少自己的思路是清晰的，防止以后重复造轮子。好记性不如烂笔头嘛~那么问题来了，我要用啥记笔记呢？这篇博客我会把我用到的笔记类东西整理一下，谈谈优缺点，交流一下经验。</p><blockquote><ul><li>1.趁自己还能码！</li><li>2.多设备同步的笔记本软件搜罗</li><li>3.本地笔记软件</li></ul></blockquote><hr><p>20230309更新</p><p>Obsidian真香😃 现在我主要的笔记都用Obsidian管理。 包括个人日记，项目进度，代码管理，这些其实都是markdown格式的，说白了就是一大堆txt在一个文件夹里。 功能上社区支持很足，有很多好用的插件可以用，如果有空我给大家介绍一下。 备份上，用同步盘（我用Dropbox）把这个文件夹同步了就可以。就算以后Dropbox倒闭了，我换个同步盘就可以了。此外Zotero还是我的文献管理软件，很好用。 总的来说：</p><ol><li>知识类、工作类笔记软件：Obsidian</li><li>看文献：Zotero 其实Zotero的文献列表可以插入Obsidian，完美～</li></ol><p>20211227更新 发现了一个宝藏软件，Joplin，满足我全部需求 markdown，跨平台，webDAV支持网盘实时同步，检索，导出，加密，简直就是完美的个人笔记本 同时是开源的项目，赞👍 因此，我现在笔记本更新为：</p><ol><li>知识类笔记：Joplin</li><li>工作笔记：Joplin + Notion (老板买的团队版方便相互交流)</li><li>文献笔记：Zotero</li></ol><p>20210911更新 写在前面：我用的笔记软件</p><ol><li>知识类：markdown+同步盘+本地图床 or 云图床 (IDE用typora和vscode+插件)。 这样好处就是笔记纯文本，好搜索，同时迁移就是拷贝个文件夹，放在同步盘也不怕丢了，有能力的自己弄个NAS。</li><li>工作项目笔记：Notion，老板买的我们用，主要是多个项目组需要共享试验记录；大型数据用同步盘的共享文件夹。</li><li>文献笔记：Zotero，开源文献管理软件，同时可以管书、网页抓取、和ipad互传同步等等。</li></ol><p>update: 知识类笔记此前我推荐的是git版本管理，但是我发现太麻烦了=-=，最后还是换成了同步盘...</p><p>各种软件在不断的出，我还在不断的试，随时更新。我会把我用过的以及使用感受写在下面。</p><h2 id="_1-趁自己还能码-码" tabindex="-1"><a class="header-anchor" href="#_1-趁自己还能码-码"><span>1. 趁自己还能码，码！</span></a></h2><p>年纪大了，反应也慢了，码代码都码的慢了。</p><p>曾经在游戏世界中叱咤风云被人膜拜的大佬，现在变成只会卖萌扣1抱大腿的咸鱼。</p><figure><img src="https://pic.atlasbioinfo.com/xy_1630529664500.png" alt="图 1" tabindex="0" loading="lazy"><figcaption>图 1</figcaption></figure><p>所以，需要在自己还能码的时候，尽可能多的把经验和代码记下来。那么问题来了，我用啥记呢？</p><p>这里就需要贴出自己的需求了，其实作为生信专业，自己的需求和广大程序员的需求类似：</p><p><strong>1. 简单、美观得记录文字、图片、代码、公式</strong>（markdown说，干脆你报我身份证号算了） <strong>2. 多设备同步，多设备能码</strong>（各种笔记软件和同步盘站起来了） <strong>3. 版本管理、易于迁移、本地可用</strong>（同步盘和git？）</p><h3 id="我对于一个理想笔记的需求" tabindex="-1"><a class="header-anchor" href="#我对于一个理想笔记的需求"><span>我对于一个理想笔记的需求：</span></a></h3><h4 id="_1-1-纯文本格式的笔记" tabindex="-1"><a class="header-anchor" href="#_1-1-纯文本格式的笔记"><span>1.1 纯文本格式的笔记</span></a></h4><p>纯文本格式方便查找、管理、导入导出。</p><p>如果你笔记存的都是pdf或者word，你想从一大堆笔记中检索个东西得专业软件才行，并且应该还是挺困难的（硬盘搜索？）。但是纯文本的就是命令行<code>cat *txt | grep &quot;Your target&quot;</code>就很方便。</p><p>于是，选择余地就只有Latex和markdown了。前者专业，后者简单易用，所以还是markdown吧。</p><p>markdown支持多种语言高亮。平时，我会记录各种语言的代码，包括python, perl, R, js, html, shell, java等等。</p><h4 id="_1-2-可全局搜索" tabindex="-1"><a class="header-anchor" href="#_1-2-可全局搜索"><span>1.2 可全局搜索</span></a></h4><p>为什么不用word或者ppt记笔记，我隔壁研究生的经常用ppt记笔记我就很难理解。刚开始还好，现在一大堆PPTs，你只能搜索题目，经常需要试好多次才能找到，一毕业就可以全删了=-=。同样的问题也出现在word和pdf上。</p><p>markdown+可搜索=一大堆笔记类软件。在线备份到公司的服务器的笔记软件基本都支持全局搜索，本地的typora在19年也更新了全局搜索功能，不由得让我用了一年。</p><h4 id="_1-3-跨平台、全世界可用不容易倒闭" tabindex="-1"><a class="header-anchor" href="#_1-3-跨平台、全世界可用不容易倒闭"><span>1.3 跨平台、全世界可用不容易倒闭</span></a></h4><p>目前各个国家都发现了数据的重要性，目前欧洲已经出台多种政策限制数据的流通，所谓“数据主权”。所以，要全世界可用，靠某个公司感觉还是靠不住的，放本地还是靠谱，不放心还可以用私有云盘备份一份。就算网盘不靠谱，自己买个NAS不就行了。其实在硬盘从机械换成固态后，我感觉我硬盘坏的概率低了不少。目前我在国内就是重要文件坚果云备份一遍，大文件比如照片暂时放网盘，以后自己买个NAS再折腾。</p><h4 id="_1-4-最好开源" tabindex="-1"><a class="header-anchor" href="#_1-4-最好开源"><span>1.4 最好开源</span></a></h4><p>我自己本身是一个支持开源的人儿，之前也很热心公益。我觉得既然来到这个世界，就需要有一份社会责任感，如果自己的努力可以给别人带来一些方便和幸福，那我自己也会很有成就感的。我觉得封闭起来自己搞自己的没啥发展前途，全世界通力合作才是才是未来的大方向。</p><p>我觉得需要太多，如果有某一个东西能解决你全部的愿望有可能不太现实。因此我把笔记分为以下几类：</p><ol><li>知识类笔记（wiki） <ol><li>代码类</li><li>打字录入的经验和图片类</li><li>网页抓的信息</li></ol></li><li>工作项目笔记 <ol><li>构思类</li><li>合作类</li></ol></li><li>存储based笔记 <ol><li>文献类</li><li>项目文件类</li></ol></li></ol><p>我现在还在探索构思类笔记用哪个笔记好（用ipad画个图？感觉画完特爽，不过自己都不会再看的那种）。现在有时用xmind或者什么做思维导图。我有好的建议会及时更新</p><h2 id="_2-目前我在用的笔记软件-实时更新" tabindex="-1"><a class="header-anchor" href="#_2-目前我在用的笔记软件-实时更新"><span>2. 目前我在用的笔记软件（实时更新）</span></a></h2><p><code>20211227</code></p><p><strong>知识类和工作笔记我用Joplin，刚发现的宝藏软件。</strong></p><figure><img src="https://pic.atlasbioinfo.com/pic_1640602604401_joplin_1640602614111.png" alt="Joplin" tabindex="0" loading="lazy"><figcaption>Joplin</figcaption></figure><p>markdown，跨平台，webDAV支持网盘实时同步，检索，导出，加密，简直就是完美的个人笔记本，同时是开源的项目，赞👍</p><p>据说新mac m1也是支持的。</p><p>文献类依然是强大的Zotero</p>',42),d={href:"https://www.zotero.org/",target:"_blank",rel:"noopener noreferrer"},h=o("h2",{id:"_2-多设备同步的笔记本软件搜罗",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#_2-多设备同步的笔记本软件搜罗"},[o("span",null,"2. 多设备同步的笔记本软件搜罗")])],-1),g=o("p",null,"这类笔记本往往是把数据放在公司的服务器上，定期导出存在本地留个安心，防止公司突然倒闭。（以下排名不分先后）",-1),_={href:"https://www.yinxiang.com/",target:"_blank",rel:"noopener noreferrer"},m=o("figure",null,[o("img",{src:"https://pic.atlasbioinfo.com/youdaoyunLogo_1630539568982.png",alt:"图 5",tabindex:"0",loading:"lazy"}),o("figcaption",null,"图 5")],-1),f={start:"2"},u={href:"https://note.youdao.com/",target:"_blank",rel:"noopener noreferrer"},b=o("figure",null,[o("img",{src:"https://pic.atlasbioinfo.com/notionLogo_1630539535849.png",alt:"图 4",tabindex:"0",loading:"lazy"}),o("figcaption",null,"图 4")],-1),k={start:"3"},w={href:"https://www.notion.so/",target:"_blank",rel:"noopener noreferrer"},x=o("figure",null,[o("img",{src:"https://pic.atlasbioinfo.com/blog20210901_roam_1630539409250.png",alt:"图 3",tabindex:"0",loading:"lazy"}),o("figcaption",null,"图 3")],-1),y={href:"https://roamresearch.com/",target:"_blank",rel:"noopener noreferrer"},v=i('<p>插播一下什么是Zettelkasten:</p><p>德国人的笔记方法。就是把笔记当成一个一个的卡片，同时通过相互索引建立卡片间的链接。我的理解就是，“封装”。写代码的时候如果所有代码写到一个script里面就会非常冗长，不容易理清思路也容易出BUG。但是，通过封装成函数、类、包，把各个包调试好在主程序中调用，思路就会及其清晰，程序也会非常高效同时适合多人协作。对比了其他笔记软件后，我觉得这种方法很赞。</p><p><img src="https://pic.atlasbioinfo.com/blog20210902_zettel_1630539346514.png" alt="图 2" loading="lazy"><br><strong>Zettelkasten (Slip-box) 示意图</strong></p><p>目前Zettelkasten的软件有：<strong>The Archive</strong>, <strong>Roam Research</strong>, <strong>Obsidian</strong>, <strong>Zettlr</strong>. 前两个付费，后两个开源。</p><p>这些笔记各有各的用处和所长，唯一的问题在于，服务器的稳定性以及钱。</p><p>我感觉印象笔记和有道云是综合类的，都适合； Notion更适合合作类的，Roam更适合构思类，尤其是长时间的大项目；</p><h2 id="_3-开源类软件" tabindex="-1"><a class="header-anchor" href="#_3-开源类软件"><span>3.开源类软件</span></a></h2><h3 id="markdown编辑器" tabindex="-1"><a class="header-anchor" href="#markdown编辑器"><span>markdown编辑器</span></a></h3><figure><img src="https://pic.atlasbioinfo.com/typoraLogo_1630539685855.png" alt="图 7" tabindex="0" loading="lazy"><figcaption>图 7</figcaption></figure>',9),z={href:"https://typora.io/",target:"_blank",rel:"noopener noreferrer"},N=o("figure",null,[o("img",{src:"https://pic.atlasbioinfo.com/zettlrLogo_1630539725311.png",alt:"图 8",tabindex:"0",loading:"lazy"}),o("figcaption",null,"图 8")],-1),Z={start:"2"},L={href:"https://www.zettlr.com/",target:"_blank",rel:"noopener noreferrer"},S=o("figure",null,[o("img",{src:"https://pic.atlasbioinfo.com/vscodeLogo_1630539779990.png",alt:"图 9",tabindex:"0",loading:"lazy"}),o("figcaption",null,"图 9")],-1),A={start:"3"},T={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},D=o("p",null,[t("还有一个最给力的，就是vscode进入浏览器了！现在进入你的github仓库，按以下"),o("code",null,"."),t("，就会自动出现在线版本的vscode，可以在线编辑。或者在WSL终端输入"),o("code",null,"code ."),t("就可以直接进入编辑。")],-1),E=o("p",null,"总的来说，很无敌...我现在主要的md编辑器，除了和typora一样的功能外，支持正则表达式全局或者过滤搜索，找笔记相当轻松（人家本来是代码的IDE，这些对于代码来说是基本功能）。",-1),O=o("h3",{id:"文献和网页知识管理",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#文献和网页知识管理"},[o("span",null,"文献和网页知识管理")])],-1),R=o("figure",null,[o("img",{src:"https://pic.atlasbioinfo.com/zoteroLogo_1630539831691.png",alt:"图 10",tabindex:"0",loading:"lazy"}),o("figcaption",null,"图 10")],-1),V={href:"https://www.zotero.org/",target:"_blank",rel:"noopener noreferrer"},B=i('<h2 id="_4-综上所诉的解决方案" tabindex="-1"><a class="header-anchor" href="#_4-综上所诉的解决方案"><span>4.综上所诉的解决方案</span></a></h2><p>所以，在尝试过一大堆东西后，我得到以下几种解决方案：</p><ol><li>支持多设备同步的笔记本软件一步到位，包括支持富文本和markdown。之后定期导出存起来。</li><li>同步盘或者采用git的仓库存储+本地markdown编辑</li><li>（还未实现）本地类似gitbook部署，看起来就是一本书</li></ol><p>我发现最近出现了一种趋势，由于数据特别多，所以大家似乎更倾向不让自己的数据流通，或者说宣布自己的“数据主权”，再换句话说就是更加注重隐私。</p><p>比如现在家庭NAS已经越来越普遍（虽然我暂时还没有NAS），大家更倾向于把资料放在自己的NAS中，靠谱的NAS也支持多盘备份数据（似乎有一个更专业的名字），也就是一个硬盘坏了数据也丢不了的功能。于是，照片啊，电影啊，小姐姐啊什么的都可以放到NAS里面也不会怕被网盘和谐。</p><p>所以，笔记类软件我也想要一个本地的，也就是所有数据都在本地，如果需要备份防丢失可以放到NAS或者靠谱的云盘，随时出去带个笔记本就可以说我的所有资料都在这里。也就是，去中心化，我没必要依靠某个大公司的服务器，我的数据属于我自己。这样也不用担心网络问题或者小的笔记本软件公司突然倒闭。</p><h2 id="_5-我与笔记软件的历史" tabindex="-1"><a class="header-anchor" href="#_5-我与笔记软件的历史"><span>5. 我与笔记软件的历史=-=</span></a></h2><p>还是讲述历史……</p><p>首先是Evernote和印象笔记，我用超过3年，年年充会员，记了一大堆科研相关的笔记，最初对这个软件很满意。Evernote最初是不支持markdown的，最后它也推出了markdown，但是分屏预览感觉有点难用.…..</p><p>在我准备弃坑印象笔记的时候，看到了有道云笔记。国产云笔记、免费、空间足够大、云同步速度快、支持代码显示、数据可导出可分享，我有什么理由不用呢。Evernote的笔记也可以直接迁移到有道云，简直一条龙服务。于是我切换到有道云，不知不觉过了2年。这两年我很想冲VIP支持一下，但是VIP给的优势除了免广告这一条外，其他的我觉得都没啥用（免费的5G空间对主要记文字和部分图片的我太够用了；图片搜索并不需要，一般图片都有文字注释；其他功能灰常鸡肋...）。</p><p>上图是我用有道云笔记整理的代码。在富文本编辑中有一个“代码”，点击后出现一个框，就可以输入了。自带行号和部分语法的高亮。这个功能我很喜欢。</p><p>之后我接触到了markdown，开始在github上写博客，觉得纯文本的记录实在太美好，回不去了。写markdown最初用一些在线的markdown编辑器，之后用vscode的插件，再换成typora。其中最好的我认为是typora，完美的写作体验，本地的快速读取，尤其是19年更新的全局检索让我觉得typora肯定是我最后一个笔记软件了。</p><p>最近大火的notion在导师的推荐下我开始记录项目。最初只有fq才能上，不过改了DNS之后就好了（网上说是DNS污染？）。notion也算是云端储存，我觉得他的优势在于多人合作与多功能的整合，分享很方便，表格、数据库各种可视化很完善。唯一一点就是，不是本地化的……</p><p>之后我还试过github的gist，用于记录代码。本地，git版本管理，可分享可私有，但感觉最大的问题在于插图片不方便。</p><p>总的来说还在不断尝试，越折腾越快乐。</p><figure><img src="https://pic.atlasbioinfo.com/logo.png" alt="博主简介" tabindex="0" loading="lazy"><figcaption>博主简介</figcaption></figure>',16);function q(J,P){const n=l("ExternalLinkIcon");return r(),p("div",null,[c,o("p",null,[o("a",d,[t("Zotero"),e(n)]),t("：开源文献管理软件，很厉害！文献重命名归类，网页抓取文献信息和pdf，插入word，提取pdf注释等等。还有大量插件可以扩展各种功能。")]),h,g,o("ol",null,[o("li",null,[o("a",_,[t("印象笔记或者Evernote"),e(n)]),t(": 这是两家公司其实。老牌笔记软件，我最早的笔记软件。但感觉现在发展的太慢了，价格还不便宜。")])]),m,o("ol",f,[o("li",null,[o("a",u,[t("有道云笔记"),e(n)]),t("：国内知名笔记软件，在看到和印象笔记功能类似且免费的时候，我就换过一次。导出是个问题（当时弃坑的时候只能导出pdf和二进制，不能markdown，当时坑惨我了，只能被迫放弃所有笔记，不知道现在咋样），其他觉得还不错。免费的就很够用，付费的也不贵。")])]),b,o("ol",k,[o("li",null,[o("p",null,[o("a",w,[t("Notion"),e(n)]),t("：新兴笔记软件。特点是在线协同，适合多人一起合作做东西。现在我用这个和多个组合作做项目，大家实验笔记写一块。问题是费用有点高，尤其是团队版本。")]),x]),o("li",null,[o("p",null,[o("a",y,[t("Roam Research"),e(n)]),t("：当红的Zettelkasten笔记，也就是记跳来跳去的思路。最初的免费到最后的付费，生活所迫啊。")])])]),v,o("ol",null,[o("li",null,[o("a",z,[t("Typora"),e(n)]),t("：纯净是码字体验，写博客会用（尤其是在图书馆啊，咖啡厅这种地方，比开个word不知道炫酷多少倍）。深耕多年，功能越来越多。目前我看到的问题只是搜索只能全局搜索，不能按照文件夹搜索，不支持正则表达（哈哈，是不是我的要求太高了）。其他的很完美，无论是编辑，md语法，预览，本地图床和远程图床，推荐。(12/2021更新，Typora更新版本开始收费，买断式，不过官网还可以下载到免费版本)")])]),N,o("ol",Z,[o("li",null,[o("a",L,[t("Zettlr"),e(n)]),t("：开源的更偏学术的Roam，我的上一个笔记软件。ZettelKasten式记录。不断地更新，但是功能没有Roam完善。毕竟是开源，很不容易，我还捐助过。有点是文献插入很轻松（最早人家是想用这个直接生成一篇可发表的论文的），支持LaTEX。")])]),S,o("ol",A,[o("li",null,[o("a",T,[t("VScode"),e(n)]),t("：微软的开源编辑器。由于广大开发者开发的插件，于是这个轻量级编辑器变得无所不能。目前用这个主要觉得查找东西方便，支持正则表达式匹配和过滤。")])]),D,E,O,R,o("ol",null,[o("li",null,[o("a",V,[t("Zotero"),e(n)]),t("：开源文献管理软件，很厉害！文献重命名归类，网页抓取文献信息和pdf，插入word，提取pdf注释等等。还有大量插件可以扩展各种功能。")])]),B])}const C=a(s,[["render",q],["__file","20210901.html.vue"]]),Y=JSON.parse('{"path":"/posts/Bioinformatics/20210901.html","title":"寻找最适合生信专业的笔记软件","lang":"zh-CN","frontmatter":{"icon":"pen-nib","date":"2021-09-01T00:00:00.000Z","title":"寻找最适合生信专业的笔记软件","categories":["Bioinformatics"],"description":"实验笔记这个事情，导师天天跟你强调这个的重要性。记录好后至少自己的思路是清晰的，防止以后重复造轮子。好记性不如烂笔头嘛~那么问题来了，我要用啥记笔记呢？这篇博客我会把我用到的笔记类东西整理一下，谈谈优缺点，交流一下经验。 1.趁自己还能码！ 2.多设备同步的笔记本软件搜罗 3.本地笔记软件 20230309更新 Obsidian真香😃 现在我主要的笔...","head":[["meta",{"property":"og:url","content":"https://blog.atlasbioinfo.com/posts/Bioinformatics/20210901.html"}],["meta",{"property":"og:site_name","content":"ATLAS生物信息博客"}],["meta",{"property":"og:title","content":"寻找最适合生信专业的笔记软件"}],["meta",{"property":"og:description","content":"实验笔记这个事情，导师天天跟你强调这个的重要性。记录好后至少自己的思路是清晰的，防止以后重复造轮子。好记性不如烂笔头嘛~那么问题来了，我要用啥记笔记呢？这篇博客我会把我用到的笔记类东西整理一下，谈谈优缺点，交流一下经验。 1.趁自己还能码！ 2.多设备同步的笔记本软件搜罗 3.本地笔记软件 20230309更新 Obsidian真香😃 现在我主要的笔..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pic.atlasbioinfo.com/xy_1630529664500.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Haopeng Yu"}],["meta",{"property":"article:published_time","content":"2021-09-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"寻找最适合生信专业的笔记软件\\",\\"image\\":[\\"https://pic.atlasbioinfo.com/xy_1630529664500.png\\",\\"https://pic.atlasbioinfo.com/pic_1640602604401_joplin_1640602614111.png\\",\\"https://pic.atlasbioinfo.com/youdaoyunLogo_1630539568982.png\\",\\"https://pic.atlasbioinfo.com/notionLogo_1630539535849.png\\",\\"https://pic.atlasbioinfo.com/blog20210901_roam_1630539409250.png\\",\\"https://pic.atlasbioinfo.com/blog20210902_zettel_1630539346514.png\\",\\"https://pic.atlasbioinfo.com/typoraLogo_1630539685855.png\\",\\"https://pic.atlasbioinfo.com/zettlrLogo_1630539725311.png\\",\\"https://pic.atlasbioinfo.com/vscodeLogo_1630539779990.png\\",\\"https://pic.atlasbioinfo.com/zoteroLogo_1630539831691.png\\",\\"https://pic.atlasbioinfo.com/logo.png\\"],\\"datePublished\\":\\"2021-09-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Haopeng Yu\\",\\"url\\":\\"https://github.com/atlasbioinfo\\"}]}"]]},"headers":[{"level":2,"title":"1. 趁自己还能码，码！","slug":"_1-趁自己还能码-码","link":"#_1-趁自己还能码-码","children":[{"level":3,"title":"我对于一个理想笔记的需求：","slug":"我对于一个理想笔记的需求","link":"#我对于一个理想笔记的需求","children":[]}]},{"level":2,"title":"2. 目前我在用的笔记软件（实时更新）","slug":"_2-目前我在用的笔记软件-实时更新","link":"#_2-目前我在用的笔记软件-实时更新","children":[]},{"level":2,"title":"2. 多设备同步的笔记本软件搜罗","slug":"_2-多设备同步的笔记本软件搜罗","link":"#_2-多设备同步的笔记本软件搜罗","children":[]},{"level":2,"title":"3.开源类软件","slug":"_3-开源类软件","link":"#_3-开源类软件","children":[{"level":3,"title":"markdown编辑器","slug":"markdown编辑器","link":"#markdown编辑器","children":[]},{"level":3,"title":"文献和网页知识管理","slug":"文献和网页知识管理","link":"#文献和网页知识管理","children":[]}]},{"level":2,"title":"4.综上所诉的解决方案","slug":"_4-综上所诉的解决方案","link":"#_4-综上所诉的解决方案","children":[]},{"level":2,"title":"5. 我与笔记软件的历史=-=","slug":"_5-我与笔记软件的历史","link":"#_5-我与笔记软件的历史","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":13.34,"words":4003},"filePathRelative":"posts/Bioinformatics/20210901.md","localizedDate":"2021年9月1日","excerpt":"<p>实验笔记这个事情，导师天天跟你强调这个的重要性。记录好后至少自己的思路是清晰的，防止以后重复造轮子。好记性不如烂笔头嘛~那么问题来了，我要用啥记笔记呢？这篇博客我会把我用到的笔记类东西整理一下，谈谈优缺点，交流一下经验。</p>\\n<blockquote>\\n<ul>\\n<li>1.趁自己还能码！</li>\\n<li>2.多设备同步的笔记本软件搜罗</li>\\n<li>3.本地笔记软件</li>\\n</ul>\\n</blockquote>\\n<hr>\\n<p>20230309更新</p>\\n<p>Obsidian真香😃\\n现在我主要的笔记都用Obsidian管理。\\n包括个人日记，项目进度，代码管理，这些其实都是markdown格式的，说白了就是一大堆txt在一个文件夹里。\\n功能上社区支持很足，有很多好用的插件可以用，如果有空我给大家介绍一下。\\n备份上，用同步盘（我用Dropbox）把这个文件夹同步了就可以。就算以后Dropbox倒闭了，我换个同步盘就可以了。此外Zotero还是我的文献管理软件，很好用。\\n总的来说：</p>","autoDesc":true}');export{C as comp,Y as data};