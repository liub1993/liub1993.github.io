(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{319:function(s,n,a){"use strict";a.r(n);var t=a(0),e=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"安装-augustus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-augustus","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装 augustus")]),s._v(" "),a("blockquote",[a("p",[s._v("下载：http://bioinf.uni-greifswald.de/augustus/binaries/augustus-3.3.tar.gz")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("tar")]),s._v(" vzvf augustus-3.3.tar.gz\n"),a("span",{attrs:{class:"token function"}},[s._v("cd")]),s._v(" augustus\nvim common.mk\n// 去掉COMPGENEPRED "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" true和SQLITE "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" true的注释，是之能够比较基因查找\n\n//  查看安装，主要是看依赖\n"),a("span",{attrs:{class:"token function"}},[s._v("less")]),s._v(" -S README.TXT\n\n// 发现依赖很多\n"),a("span",{attrs:{class:"token function"}},[s._v("export")]),s._v(" PATH"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token variable"}},[s._v("$PATH")]),s._v(":/panfs/sugon/pub/software/bamtools-2.4.1/bin\n"),a("span",{attrs:{class:"token function"}},[s._v("export")]),s._v(" LIBRARY_PATH"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token variable"}},[s._v("$LIBRARY_PATH")]),s._v(":/panfs/sugon/pub/software/boost_1_60_0/lib\n"),a("span",{attrs:{class:"token function"}},[s._v("export")]),s._v(" PATH"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token variable"}},[s._v("$PATH")]),s._v(":/panfs/sugon/pub/software/boost_1_60_0/include\n"),a("span",{attrs:{class:"token function"}},[s._v("export")]),s._v(" CPLUS_INCLUDE_PATH"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token variable"}},[s._v("$CPLUS_INCLUDE_PATH")]),s._v(":/panfs/sugon/pub/software/boost_1_60_0/include\n"),a("span",{attrs:{class:"token function"}},[s._v("export")]),s._v(" LD_LIBRARY_PATH"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token variable"}},[s._v("$LD_LIBRARY_PATH")]),s._v(":/panfs/sugon/pub/software/boost_1_60_0/lib\n\n// 如何查看依赖包是否安装？不同的系统包的名字不一样，最好查找一下centos下相应的包叫什么名字\n// 以lpsolve为例\nrpm -qa lpsolve\n// 打印\n// lpsolve-5.5.0.15-2.el6.x86_64\n// 说明已经安装成功。但是呢\n"),a("span",{attrs:{class:"token function"}},[s._v("make")]),s._v("\nalignment.cc:23:20: error: lp_lib.h: No such "),a("span",{attrs:{class:"token function"}},[s._v("file")]),s._v(" or directory\n\n// 还是报错了。说明要求里面的integer linear program solver lpsolve的头文件还是不可用\n// 最简单的办法是让管理员安装lpsolve-devel.x86_64\n\nyum "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v(" lpsolve-devel.x86_64\n\n// 返回普通用户\n"),a("span",{attrs:{class:"token function"}},[s._v("make")]),s._v(" clean\n"),a("span",{attrs:{class:"token function"}},[s._v("make")]),s._v("\n\n// 发现还是报错，\n/usr/bin/ld: cannot "),a("span",{attrs:{class:"token function"}},[s._v("find")]),s._v(" -lcolamd\n// 缺少libcolamd.so\n\n// 再次管理员安装\nyum search libcolamd\nyum "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v(" suitesparse suitesparse-devel\n// suitesparse-devel 在ubuntu下libsuitesparse-dev\n// 返回普通用户make\n\n"),a("span",{attrs:{class:"token function"}},[s._v("make")]),s._v("\ng++ -Wall -O2    -c bam2hints.cc -o bam2hints.o -I/usr/include/bamtools \nbam2hints.cc:16:27: error: api/BamReader.h: No such "),a("span",{attrs:{class:"token function"}},[s._v("file")]),s._v(" or directory\nbam2hints.cc:17:27: error: api/BamWriter.h: No such "),a("span",{attrs:{class:"token function"}},[s._v("file")]),s._v(" or directory\nbam2hints.cc:18:30: error: api/BamAlignment.h: No such "),a("span",{attrs:{class:"token function"}},[s._v("file")]),s._v(" or directory\nbam2hints.cc:19:24: error: api/BamAux.h: No such "),a("span",{attrs:{class:"token function"}},[s._v("file")]),s._v(" or directory\nbam2hints.cc:23: error: ‘BamTools’ is not a namespace-name\n\n// -I/usr/include/bamtools ？？？为何从/usr/include/bamtools，\n"),a("span",{attrs:{class:"token function"}},[s._v("make")]),s._v(" -h\n// 没有看到指定路径的参数，可能此处hard code了。需要将bamtools的头文件复制到/usr/include中。\n// 管理员\n"),a("span",{attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /panfs/sugon/pub/software/bamtools-2.4.1/include bamtools\n\n// 再次make\n"),a("span",{attrs:{class:"token function"}},[s._v("make")]),s._v("\n/usr/bin/ld: cannot "),a("span",{attrs:{class:"token function"}},[s._v("find")]),s._v(" -lbamtools\n\n// 这次找不到bamtools.so，需要管理员\n"),a("span",{attrs:{class:"token function"}},[s._v("cp")]),s._v(" /panfs/sugon/pub/software/bamtools-2.4.1/lib/* /usr/lib64\n\n// \n"),a("span",{attrs:{class:"token function"}},[s._v("make")]),s._v("\n\n// ok\n// 其他节点的机器也需要将头文件和lib文件复制到相应的位置\n"),a("span",{attrs:{class:"token function"}},[s._v("cp")]),s._v(" /panfs/sugon/pub/software/bamtools-2.4.1/lib/* /usr/lib64\n"),a("span",{attrs:{class:"token function"}},[s._v("cd")]),s._v(" /usr/include\n"),a("span",{attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /panfs/sugon/pub/software/bamtools-2.4.1/include bamtools\n\nyum "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v(" -y lpsolve-devel.x86_64 suitesparse suitesparse-devel\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br")])])])}],!1,null,null,null);e.options.__file="augustus.md";n.default=e.exports}}]);