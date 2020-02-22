(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{454:function(_,v,t){"use strict";t.r(v);var e=t(0),a=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"操作系统的发展史"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作系统的发展史","aria-hidden":"true"}},[_._v("#")]),_._v(" 操作系统的发展史")]),_._v(" "),t("p",[_._v("参考：《操作系统－精髓与设计原理（第八版）》")]),_._v(" "),t("h2",{attrs:{id:"_1-串行处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-串行处理","aria-hidden":"true"}},[_._v("#")]),_._v(" 1. 串行处理")]),_._v(" "),t("p",[_._v("早起的计算机没有操作系统，程序员需要直接与计算机硬件打交道。用"),t("code",[_._v("机器代码")]),_._v("编写的程序通过输入设备（如卡片阅读机）载入计算机，一个错误使得程序停止时，错误原因由显示器显示。如果程序正常完成，输出结果将出现在打印机中。这种串行的处理反映了用户必须顺序访问计算机的事实。后来，为了使串行处理更加有效，人们开发了各种各样的系统软件工具，包括共用函数库，链接器、加载器等等。")]),_._v(" "),t("h2",{attrs:{id:"_2-简单的批处理系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-简单的批处理系统","aria-hidden":"true"}},[_._v("#")]),_._v(" 2. 简单的批处理系统")]),_._v(" "),t("p",[_._v("第一个批处理系统（同时也是第一个操作系统）是20世纪50年代中期由General Motors开发的。简单的批处理方案的中心思想是使用一个称为"),t("code",[_._v("监控程序")]),_._v("的软件。通过使用这类操作系统，用户不再直接访问机器，相反，用户把卡片或磁带中的作业交给计算机操作员，由操作员将这些作业顺序组织成批，并将整个批的作业放在输入设备上，供监控程序使用，每个程序完成处理后返回到监控程序，同时，监控程序自动加载下一个程序。")]),_._v(" "),t("p",[_._v("监控程序提供了：")]),_._v(" "),t("ul",[t("li",[_._v("内存保护（用户程序不能改变监控程序的内存区域）")]),_._v(" "),t("li",[_._v("定时器（用于防止一个作业独占系统）")]),_._v(" "),t("li",[_._v("特权指令")]),_._v(" "),t("li",[_._v("中断（早期的计算机模型没有中断能力，这个特征使得操作系统在让用户程序放弃控制权或从用户程序获得控制权具有更大的灵活性）。")])]),_._v(" "),t("p",[_._v("内存保护和特权指令引出了运行模式的概念。用户程序以"),t("code",[_._v("用户模式")]),_._v("执行，此时有些内存区域是受到保护的，特权指令也不允许执行。监控程序是以"),t("code",[_._v("系统态")]),_._v("或者"),t("code",[_._v("内核模式")]),_._v("执行，此时不仅可以执行特权指令，而且可以访问受到保护的内存区域。")]),_._v(" "),t("h2",{attrs:{id:"_3-多到批处理系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-多到批处理系统","aria-hidden":"true"}},[_._v("#")]),_._v(" 3. 多到批处理系统")]),_._v(" "),t("p",[_._v("即便是对简单的批处理系统提供的自动作业序列，处理器仍然经常处于空闲状态。问题在于"),t("code",[_._v("I/O设备")]),_._v("相对于处理器实在是太慢了。")]),_._v(" "),t("p",[_._v("假设内存空间容的下操作系统和多个用户程序，那么就可以在一个程序等待I/O的时候操作系统去执行下一个程序，在程序之间切换。这种处理称为"),t("code",[_._v("多道程序设计")]),_._v("或者"),t("code",[_._v("多任务处理")]),_._v("。")]),_._v(" "),t("p",[_._v("多道程序设计操作系统要比单个程序复杂的多，待运行的程序保存在内存中，因此还需要"),t("code",[_._v("内存管理")]),_._v("。")]),_._v(" "),t("h2",{attrs:{id:"_4-分时系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-分时系统","aria-hidden":"true"}},[_._v("#")]),_._v(" 4. 分时系统")]),_._v(" "),t("p",[_._v("对于许多作业来说，需要提供一种用户直接与计算机交互的模式。由于多个用户同时的分享处理器时间，操作系统控制没个用户程序在很短的时间内交替运行，该技术称为"),t("code",[_._v("分时")]),_._v("。")])])}],!1,null,null,null);a.options.__file="history.md";v.default=a.exports}}]);