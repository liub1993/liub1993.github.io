(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{324:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("对于PHP这种需要同时处理多个请求的程序来说，申请和释放内存的时候应该慎之又慎，一不小心便会酿成大错。另一方面，除了要安全的申请和释放内存外，还应该做到内存的最小化使用，因为它可能要处理每秒钟数以千计的请求，为了提高系统整体的性能，每一次操作都应该只使用最少的内存，对于不必要的相同数据的复制则应该能免则免。我们来看下面这段PHP代码：")]),t._v(" "),t._m(1),a("p",[t._v('第一条语句执行后，PHP创建了$a这个变量，并为它申请了12B的内存来存放"hello world"这个字符串（最后加个NULL字符，你懂的）。紧接着把$a赋给了$b，并释放掉$a;\n对于PHP来说，如果每一次变量赋值都执行一次内存复制的话，那需要额外申请12B的内存来存放这个重复的数据,当然为了复制内存，还需要cpu执行某些计算，这当然会加重cpu的负载。当第三句执行后，$a被释放了，我们刚才的设想突然变的这么滑稽，这次赋值显得好多余哦。如果早就知道$a不用了，那我们直接让$b用$a的内存不就行了，还赋值干嘛？如果你觉得12B没什么，那设想下如果$a是个10M的文件内容，或者20M，是不是我们的计算机资源消耗的有点冤枉呢？\n别担心，PHP很聪明！')]),t._v(" "),a("p",[t._v("前面章节说过，PHP变量的名称和值在内核中是保存在两个不同的地方的，值是通过一个与名字毫无关系的zval结构来保存，而这个变量的名字a则保存在符号表里，两者之间通过指针联系着。在我们上面的例子里，$a是一个字符串，我们通过zend_hash_add把它添加到符号表里，然后又把它赋值给$b,两者拥有相同的内容！如果两者指向完全相同的内容，我们有什么优化措施吗？")]),t._v(" "),t._m(2),a("p",[t._v('现在我们检查$a和$b两个变量，他们的值指向了"hello world"这个字符串在内存中的位置。但是在第三行：unset($a);这条语句释放了$a。在这种情况下，unset函数并不知道$a的值同时被$b用着，所以如果它直接释放内存，则会导致$b的值也被清空了，从而导致逻辑错误，甚至可能会导致系统崩溃。')]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("以上描述转为内核中的代码大体如下：")]),t._v(" "),t._m(4),a("p",[t._v("这个时候当我们再用unset删除$a的时候，它删除符号表里的$a的信息，然后清理它的值部分，这时它发现$a的值对应的zval结构的refcount值是2，也就是有另外一个变量在一起用着这个zval，所以unset只需把这个zval的refcount减去1就行了！")]),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("引用计数绝对是节省内存的一个超棒的模式！但是当我们修改$b的值，而且还需要继续使用$a时，该怎么办呢？")]),t._v(" "),t._m(6),a("p",[t._v("从代码逻辑来看，我们希望语句执行后$a仍然是1，而$b则需要变成6。我们知道在第二句完成后内核通过让$a和$b共享一个zval结构来达到节省内存的目的，但是现在第三句来了，这时$b的改变应该怎样在内核中实现呢？\n答案非常简单，内核首先查看refcount__gc属性，如果它大于1则为这个变化的变量从原zval结构中复制出一份新的专属与$b的zval来，并改变其值。")]),t._v(" "),t._m(7),a("p",[t._v("现在$b变量拥有了自己的zval，并且可以自由的修改它的值了。")]),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("如果用户在PHP脚本中显式的让一个变量引用另一个变量时，我们的内核是如何处理的呢？")]),t._v(" "),t._m(9),a("p",[t._v("作为一个标准的PHP程序猿，我们都知道$a的值也变成6了。当我们更改$b的值时，内核发现$b是$a的一个用户端引用，也就是所它可以直接改变$b对应的zval的值，而无需再为它生成一个新的不同与$a的zval。因为他知道$a和$b都想得到这次变化！")]),t._v(" "),t._m(10),t._v(" "),t._m(11),a("p",[t._v("这一次，尽管它的refcount等于2，但是因为它的is_ref等于1，所以也不会被复制。内核会直接的修改这个zval的值。")]),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("我们已经了解了php语言中变量的复制和引用的一些事，但是如果复制和引用这两个事件被组合起来使用了该怎么办呢？看下面这段代码：")]),t._v(" "),t._m(13),a("p",[t._v("这里我们可以看到,$a,$b,$c这三个变量现在共用一个zval结构，有两个属于change-on-write组合($a,$c),有两个属于copy-on-write组合($a,$b),我们的is_ref__gc和refcount__gc该怎样工作，才能正确的处理好这段复杂的关系呢？\nThe answer is: 不可能！在这种情况下，变量的值必须分离成两份完全独立的存在！$a与$c共用一个zval,$b自己用一个zval，尽管他们拥有同样的值，但是必须至少通过两个zval来实现。见图3.2【在引用时强制复制！】\n")]),t._m(14),t._v("\n同样，下面的这段代码同样会在内核中产生歧义，所以需要强制复制！"),a("p"),t._v(" "),t._m(15),a("p",[t._v("图3.3：\n")]),t._m(16),t._v("\n需要注意的是，在这两种情况下，$b都与原初的zval相关联，因为当复制发生时，内核还不知道第三个变量的名字。"),a("p"),t._v(" "),t._m(17),t._v(" "),a("ul",[a("li",[t._v("3.1 "),a("router-link",{attrs:{to:"./3.1.html"}},[t._v("内存管理")])],1),t._v(" "),a("li",[t._v("3.3 "),a("router-link",{attrs:{to:"./3.3.html"}},[t._v("3.3 第三章总结")])],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"_3-2-引用计数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-引用计数","aria-hidden":"true"}},[this._v("#")]),this._v(" 3.2 引用计数")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token php language-php"}},[a("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),a("span",{attrs:{class:"token variable"}},[t._v("$a")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Hello World'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token variable"}},[t._v("$b")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$a")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("unset")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token variable"}},[t._v("$a")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t\n\t\t\n")])])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("\tzval "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("helloval"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{attrs:{class:"token function"}},[t._v("MAKE_STD_ZVAL")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("helloval"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{attrs:{class:"token function"}},[t._v("ZVAL_STRING")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("helloval"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Hello World"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{attrs:{class:"token function"}},[t._v("zend_hash_add")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token function"}},[t._v("EG")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("active_symbol_table"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"a"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("sizeof")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"a"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("helloval"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("sizeof")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zval"),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("NULL")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{attrs:{class:"token function"}},[t._v("zend_hash_add")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token function"}},[t._v("EG")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("active_symbol_table"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"b"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("sizeof")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"b"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("helloval"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("sizeof")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zval"),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("NULL")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{attrs:{class:"token comment"}},[t._v("//通过这个例子我们看出了，我们可以把$a和$b都指向helloval~!\t")]),t._v("\n\t\t\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("呵呵，其实你心里明白，PHP不会让上述问题发生的！回顾一下zval的四个成员"),a("code",[t._v("value")]),t._v("、"),a("code",[t._v("type")]),t._v("、"),a("code",[t._v("is_ref__gc")]),t._v("、"),a("code",[t._v("refcount__gc")]),t._v("，我们对value和type已经很熟了，现在则是后两个成员发挥威力的时候了，这里我们主要讲解refcount__gc这个成员。当一个变量被第一次创建的时候，它对应的zval结构体的refcount__gc成员的值会被初始化为1，理由很简单，因为只有这个变量自己在用它。但是当你把这个变量赋值给别的变量时，refcount__gc属性便会加1变成2，因为现在有两个变量在用这个zval结构了！")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("\tzval "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("helloval"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{attrs:{class:"token function"}},[t._v("MAKE_STD_ZVAL")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("helloval"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{attrs:{class:"token function"}},[t._v("ZVAL_STRING")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("helloval"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Hello World"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{attrs:{class:"token function"}},[t._v("zend_hash_add")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token function"}},[t._v("EG")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("active_symbol_table"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"a"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("sizeof")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"a"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("helloval"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("sizeof")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zval"),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("NULL")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{attrs:{class:"token function"}},[t._v("ZVAL_ADDREF")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("helloval"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//这句很特殊，我们显式的增加了helloval结构体的refcount")]),t._v("\n\t"),a("span",{attrs:{class:"token function"}},[t._v("zend_hash_add")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token function"}},[t._v("EG")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("active_symbol_table"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"b"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("sizeof")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"b"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("helloval"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("sizeof")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zval"),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("NULL")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\n\t\t\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"写时复制机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写时复制机制","aria-hidden":"true"}},[this._v("#")]),this._v(" 写时复制机制")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("\t$a "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t$b "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" $a"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t$b "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("5")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \t\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("zval "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token function"}},[t._v("get_var_and_separate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("varname"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" varname_len TSRMLS_DC"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tzval "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("varval"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("varcopy"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token function"}},[t._v("zend_hash_find")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token function"}},[t._v("EG")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("active_symbol_table"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("varname"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" varname_len "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("varval"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" FAILURE"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{attrs:{class:"token comment"}},[t._v("/* 如果在符号表里找不到这个变量则直接return */")]),t._v("\n\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("NULL")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("varval"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v("->")]),t._v("refcount "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\t\n\t\t"),a("span",{attrs:{class:"token comment"}},[t._v("//如果这个变量的zval部分的refcount小于2，代表没有别的变量在用，return")]),t._v("\n\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("varval"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\n\t"),a("span",{attrs:{class:"token comment"}},[t._v("/* 否则，复制一份zval*的值 */")]),t._v("\n\t"),a("span",{attrs:{class:"token function"}},[t._v("MAKE_STD_ZVAL")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("varcopy"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tvarcopy "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("varval"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\n\t"),a("span",{attrs:{class:"token comment"}},[t._v("/* 复制任何在zval*内已分配的结构*/")]),t._v("\n\t"),a("span",{attrs:{class:"token function"}},[t._v("zval_copy_ctor")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("varcopy"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),a("span",{attrs:{class:"token comment"}},[t._v("/* 从符号表中删除原来的变量\n\t * 这将减少该过程中varval的refcount的值\n\t */")]),t._v("\n\t"),a("span",{attrs:{class:"token function"}},[t._v("zend_hash_del")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token function"}},[t._v("EG")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("active_symbol_table"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" varname"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" varname_len "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),a("span",{attrs:{class:"token comment"}},[t._v("/* 初始化新的zval的refcount，并在符号表中重新添加此变量信息，并将其值与我们的新zval相关联。*/")]),t._v("\n\tvarcopy"),a("span",{attrs:{class:"token operator"}},[t._v("->")]),t._v("refcount "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tvarcopy"),a("span",{attrs:{class:"token operator"}},[t._v("->")]),t._v("is_ref "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{attrs:{class:"token function"}},[t._v("zend_hash_add")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token function"}},[t._v("EG")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("active_symbol_table"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" varname"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" varname_len "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("varcopy"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("sizeof")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zval"),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("NULL")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\n\t"),a("span",{attrs:{class:"token comment"}},[t._v("/* 返回新zval的地址 */")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" varcopy"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("    \t\n    \t\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"change-on-write"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#change-on-write","aria-hidden":"true"}},[this._v("#")]),this._v(" Change on Write")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("\t"),a("span",{attrs:{class:"token variable"}},[t._v("$a")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{attrs:{class:"token variable"}},[t._v("$b")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("&")]),a("span",{attrs:{class:"token variable"}},[t._v("$a")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{attrs:{class:"token variable"}},[t._v("$b")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("5")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    \t\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("但是内核是怎么知道这一切的呢？简单的讲，它是通过zval的"),a("code",[t._v("is_ref__gc")]),t._v("成员来获取这些信息的。这个成员只有两个值，就像开关的开与关一样。它的这两个状态代表着它是否是一个用户在PHP语言中定义的引用。在第一条语句("),a("code",[t._v("$a = 1;")]),t._v(")执行完毕后,$a对应的zval的"),a("code",[t._v("refcount__gc")]),t._v("等于1，"),a("code",[t._v("is_ref__gc")]),t._v("等于0;。 当第二条语句执行后("),a("code",[t._v("$b = &$a;")]),t._v(")，"),a("code",[t._v("refcount__gc")]),t._v("属性向往常一样增长为2，而且"),a("code",[t._v("is_ref__gc")]),t._v("属性也同时变为了1！\n最后，在执行第三条语句的时候，内核再次检查$b的zval以确定是否需要复制出一份新的zval结构来，这次不需要复制，因为我们刚才上面的"),a("code",[t._v("get_var_and_separate")]),t._v("函数其实是个简化版，并且少写了一个条件：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("/* 如果这个zval在php语言中是通过引用的形式存在的，或者它的refcount小于2，则不需要复制。*/")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("varval"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v("->")]),t._v("is_ref "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("varval"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v("->")]),t._v("refcount "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("varval"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("    \t\n    \t\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"separation-anxiety"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#separation-anxiety","aria-hidden":"true"}},[this._v("#")]),this._v(" Separation Anxiety")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("\t"),a("span",{attrs:{class:"token variable"}},[t._v("$a")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{attrs:{class:"token variable"}},[t._v("$b")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$a")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{attrs:{class:"token variable"}},[t._v("$c")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("&")]),a("span",{attrs:{class:"token variable"}},[t._v("$a")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \t\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticStyle:{"text-align":"center"}},[s("img",{attrs:{src:"http://www.walu.cc/phpbook/image/03fig02.jpg"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("    "),a("span",{attrs:{class:"token comment"}},[t._v("//上图对应的代码")]),t._v("\n\t"),a("span",{attrs:{class:"token variable"}},[t._v("$a")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{attrs:{class:"token variable"}},[t._v("$b")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("&")]),a("span",{attrs:{class:"token variable"}},[t._v("$a")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{attrs:{class:"token variable"}},[t._v("$c")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$a")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    \t\n    \t\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticStyle:{"text-align":"center"}},[s("img",{attrs:{src:"http://www.walu.cc/phpbook/image/03fig03.jpg"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"links"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#links","aria-hidden":"true"}},[this._v("#")]),this._v(" links")])}],!1,null,null,null);e.options.__file="3.2.md";s.default=e.exports}}]);