(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{592:function(s,t,e){"use strict";e.r(t);var n=e(17),a=Object(n.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"管理多个ssh公钥密钥"}},[s._v("管理多个SSH公钥密钥")]),s._v(" "),e("h2",{attrs:{id:"前言"}},[s._v("前言")]),s._v(" "),e("blockquote",[e("p",[s._v("首先，为什么会出现这个SSH公钥密钥呢？\n这时因为"),e("a",{attrs:{href:"http://baike.baidu.com/link?url=e8X3c91lkFL1j8zVuByrOGyezRzalrnQ-_szYSeLtvnjPtBfEyvKvp7JZ-8dqK-K_rxFI7ei2s4pRvwNc1hPohxUVqGNnQ0YQ-Xn9QSrYSe",target:"_blank",rel:"noopener noreferrer"}},[s._v("RSA的算法"),e("OutboundLink")],1),s._v("的出现，使得人们可以利用RSA算法"),e("strong",[s._v("双密钥")]),s._v("的机制（基于非对称密码体制）进行广泛的加密和数字签名等")])]),s._v(" "),e("h2",{attrs:{id:"双密钥-单密钥机制"}},[s._v("双密钥/单密钥机制")]),s._v(" "),e("ul",[e("li",[s._v("单密钥(对称加密)")])]),s._v(" "),e("blockquote",[e("p",[s._v("所谓对称，就是采用这种加密方法的双方使用方式用"),e("ins",[s._v("同样的密钥")]),s._v("进行加密和解密。密钥是控制加密及解密过程的指令。算法是一组规则，规定如何进行加密和解密")])]),s._v(" "),e("ul",[e("li",[s._v("双密钥(非对称加密)")])]),s._v(" "),e("blockquote",[e("p",[s._v("与对称加密算法不同，非对称加密算法需要两个密钥："),e("ins",[s._v("公开密钥（publickey）")]),s._v("和"),e("ins",[s._v("私有密钥（privatekey）")]),s._v("。公开密钥与私有密钥是一对，如果用公开密钥对数据进行加密，只有用对应的私有密钥才能解密；如果用私有密钥对数据进行加密，那么只有用对应的公开密钥才能解密")])]),s._v(" "),e("p",[e("em",[e("em",[s._v("注："),e("strong",[s._v("更多内容可以自行了解信息加密的历史以及发展~下面才是我们的")])]),s._v("重点")]),s._v("**！！！！")]),s._v(" "),e("h2",{attrs:{id:"使用git-拥抱github"}},[s._v("使用git，拥抱github")]),s._v(" "),e("p",[e("strong",[s._v("Firstly")]),s._v("，git是常用的分布式版本控制系统，异常强大！其他的可以google/百度，github呢，则是全球最大的同性交友平台（手动微笑~），咳咳，应该最大的开源项目共享平台，干货很多！！！")]),s._v(" "),e("blockquote",[e("p",[s._v("通常使用git的人，都会建立自己的github账号和远程仓库。\n然而，国内的git云开源平台也不少，例如：码云、codeing.net...，\n当你想连接多个不同来源的git远程仓库的时候，需要用到"),e("code",[s._v("SSH KEY")]),s._v(",\nSo...问题就来了，github上使用的"),e("code",[s._v("SSH KEY")]),s._v("，码云和codeing.net上使用不了！！！\n估计是为了安全着想，如果有共用"),e("code",[s._v("SSH KEY")]),s._v("方案的请私我~")])]),s._v(" "),e("h2",{attrs:{id:"解决办法"}},[s._v("解决办法")]),s._v(" "),e("p",[e("strong",[s._v("如文章标题所示")]),s._v("，我们可以通过使用命令行工具进行多个SSH公钥密钥的生成和管理！")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("    // 为codeing.net生成专用SHH密钥\n    ssh-keygen -t rsa -f 路径/自定义文件名 -C "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Key for coding.net"')]),s._v("\n    // 为github生成专用SHH密钥\n    ssh-keygen -t rsa -f 路径/自定义文件名 -C "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Key for GitHub stuff"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("ul",[e("li",[s._v("举个栗子：")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("    ssh-keygen -t rsa -f f:/github_rsa -C "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Key for GitHub stuff"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("blockquote",[e("p",[s._v("运行该命令行后，会在F盘根目录生成私钥--\x3e"),e("code",[s._v("github_rsa")]),s._v("和公钥--\x3e"),e("code",[s._v("github_rsa.pub")]),s._v("，这是一对密钥\n私钥要妥善私人报管，公钥可以用于公开进行github的"),e("code",[s._v("SSH KEY")]),s._v("接入等用途")])]),s._v(" "),e("p",[e("code",[s._v(".pub")]),s._v("扩展名的文件打开即可以获得公开密钥~")]),s._v(" "),e("h2",{attrs:{id:"如何管理多个shh-key"}},[s._v("如何管理多个SHH KEY")]),s._v(" "),e("p",[e("strong",[s._v("Importantly")]),s._v(",关键的一步是把你创建的多个"),e("code",[s._v("SHH KEY")]),s._v("统一放到一个目录下进行管理（一般是C:\\Users\\你的用户名.ssh）,然后新建一个空白的"),e("code",[s._v("config")]),s._v("文件（无文件后缀名！！！），内容如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    Host github.com\n        IdentityFile ~/.ssh/github_rsa\n        User git\n    Host git.oschina.net\n        IdentityFile ~/.ssh/oschina_rsa\n        User git\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[e("strong",[s._v("解释：")])]),s._v(" "),e("blockquote",[e("p",[e("code",[s._v("Host")]),s._v("就是你的git仓库的域名或者IP，例如：github、码云的域名~\n"),e("code",[s._v("IdentityFile")]),s._v("指定你连接git仓库的私有密钥文件路径")])]),s._v(" "),e("p",[e("strong",[s._v("检验")]),s._v("配置是否成功")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("    // 例子\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -T git@github.com\n    // 结果类似下面，则表示成功！\n    Welcome to Github,your name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h2",{attrs:{id:"参考文献"}},[s._v("参考文献")]),s._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"http://rongmayisheng.com/post/linux%E7%AE%A1%E7%90%86%E5%A4%9A%E4%B8%AAssh%E5%85%AC%E9%92%A5%E5%AF%86%E9%92%A5",target:"_blank",rel:"noopener noreferrer"}},[s._v("linux管理多个ssh公钥密钥"),e("OutboundLink")],1),e("br"),s._v(" "),e("a",{attrs:{href:"http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000",target:"_blank",rel:"noopener noreferrer"}},[s._v("廖雪峰git教程"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);