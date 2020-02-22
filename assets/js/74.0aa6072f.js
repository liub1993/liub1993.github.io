(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{441:function(s,a,t){"use strict";t.r(a);var n=t(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"composer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#composer","aria-hidden":"true"}},[s._v("#")]),s._v(" Composer")]),s._v(" "),t("h2",{attrs:{id:"_1-介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-介绍","aria-hidden":"true"}},[s._v("#")]),s._v(" 1. 介绍")]),s._v(" "),t("p",[s._v("Composer是一个PHP依赖管理工具。它允许你声明你的项目依赖的库，并且帮助你管理（安装/升级）它们。")]),s._v(" "),t("h2",{attrs:{id:"_2-依赖管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-依赖管理","aria-hidden":"true"}},[s._v("#")]),s._v(" 2. 依赖管理")]),s._v(" "),t("p",[s._v("Composer不是你所认为的"),t("code",[s._v("Yum")]),s._v("或者"),t("code",[s._v("Apt")]),s._v("那样的包管理器。它基于单个项目的基础处理“包”或者库，将依赖包安装在项目中的一个目录下（比如："),t("code",[s._v("vendor")]),s._v("）。默认它不会全局安装。所以，尽管它支持全局安装，它仍是一个依赖管理器。")]),s._v(" "),t("p",[s._v("Composer深受"),t("code",[s._v("node")]),s._v("的"),t("code",[s._v("npm")]),s._v("和"),t("code",[s._v("ruby")]),s._v("的"),t("code",[s._v("bundler")]),s._v("思想的启发。")]),s._v(" "),t("h2",{attrs:{id:"_3-composer要点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-composer要点","aria-hidden":"true"}},[s._v("#")]),s._v(" 3. Composer要点")]),s._v(" "),t("h3",{attrs:{id:"_3-1-composer-json-v-s-composer-lock"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-composer-json-v-s-composer-lock","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.1 "),t("code",[s._v("composer.json")]),s._v(" v.s. "),t("code",[s._v("composer.lock")])]),s._v(" "),t("p",[s._v("如果从来没有执行过"),t("code",[s._v("composer install")]),s._v("的话，是不会有 "),t("code",[s._v("composer.lock")]),s._v(" 文件存在的，"),t("code",[s._v("Composer")]),s._v(" 解决composer.json文件中所列的依赖后，下载它们的对应版本到项目的 "),t("code",[s._v("vendor")]),s._v(" 目录下。")]),s._v(" "),t("p",[s._v("当Composer完成了安装，它会将所有包的准确的版本记录到"),t("code",[s._v("composer.lock")]),s._v("文件中，将项目依赖锁定到切确的版本。我们应该将composer.lock文件commit到项目中。")]),s._v(" "),t("p",[t("code",[s._v("composer update")]),s._v("命令会根据composer.json来下载满足要求的最新版并且更新composer.lock。")]),s._v(" "),t("h3",{attrs:{id:"_3-2-autoloading"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-autoloading","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.2 Autoloading")]),s._v(" "),t("p",[s._v("Composer会生成"),t("code",[s._v("vendor/autoload.php")]),s._v("文件，你只需要简单的将这个文件"),t("code",[s._v("include")]),s._v("到你的项目中，你就可以使用这些库中的类了。")]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[s._v("require")]),s._v(" "),t("span",{attrs:{class:"token constant"}},[s._v("__DIR__")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),t("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'/vendor/autoload.php'")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{attrs:{class:"token variable"}},[s._v("$log")]),s._v(" "),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"token class-name"}},[s._v("Monolog"),t("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Logger")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'name'")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{attrs:{class:"token variable"}},[s._v("$log")]),t("span",{attrs:{class:"token operator"}},[s._v("-")]),t("span",{attrs:{class:"token operator"}},[s._v(">")]),t("span",{attrs:{class:"token function"}},[s._v("pushHandler")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"token class-name"}},[s._v("Monolog"),t("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Handler"),t("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("StreamHandler")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'app.log'")]),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Monolog\\"),t("span",{attrs:{class:"token package"}},[s._v("Logger")]),t("span",{attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{attrs:{class:"token constant"}},[s._v("WARNING")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{attrs:{class:"token variable"}},[s._v("$log")]),t("span",{attrs:{class:"token operator"}},[s._v("-")]),t("span",{attrs:{class:"token operator"}},[s._v(">")]),t("span",{attrs:{class:"token function"}},[s._v("addWarning")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'Foo'")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("你甚至可以在"),t("code",[s._v("composer.json")]),s._v("中的 "),t("code",[s._v("autoload")]),s._v("字段里加上你自己的代码使之能被自动加载。")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{attrs:{class:"token property"}},[s._v('"autoload"')]),t("span",{attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{attrs:{class:"token property"}},[s._v('"psr-4"')]),t("span",{attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{attrs:{class:"token property"}},[s._v('"Acme\\\\"')]),t("span",{attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{attrs:{class:"token string"}},[s._v('"src/"')]),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("Composer将会为"),t("code",[s._v("Acme")]),s._v("注册一个"),t("code",[s._v("PSR-4")]),s._v("的自动加载器。上面定义了一个命名空间到目录的"),t("code",[s._v("mapping")]),s._v("。"),t("code",[s._v("src")]),s._v("目录将会是你的项目的根目录，和"),t("code",[s._v("vendor")]),s._v("是一个等级。src目录下的"),t("code",[s._v("Foo.php")]),s._v("包含一个"),t("code",[s._v("Acme\\Foo")]),s._v("类。")]),s._v(" "),t("h3",{attrs:{id:"_3-3-json-schema"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-json-schema","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.3 JSON schema")]),s._v(" "),t("p",[t("code",[s._v("type")])]),s._v(" "),t("p",[s._v("默认是"),t("code",[s._v("library")]),s._v("。 包的类型指定了安装逻辑。Composer原生支持以下四种类型：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("library")]),s._v(": 默认值，简单的复制文件到"),t("code",[s._v("vendor")])]),s._v(" "),t("li",[t("code",[s._v("project")]),s._v(": 这意味着是一个项目而不是一个库。")]),s._v(" "),t("li",[t("code",[s._v("metapackage")]),s._v(":一个空的包，里面包含了依赖，会引发它们的安装，但是不包含任何文件，也不会写入任何文件。")]),s._v(" "),t("li",[t("code",[s._v("composer-plugin")]),s._v("：提供其他包的安装器")])])])}],!1,null,null,null);o.options.__file="composer.md";a.default=o.exports}}]);