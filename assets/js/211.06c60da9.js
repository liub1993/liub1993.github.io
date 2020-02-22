(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{248:function(a,t,e){"use strict";e.r(t);var r=e(0),s=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"dockerfile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile","aria-hidden":"true"}},[a._v("#")]),a._v(" Dockerfile")]),a._v(" "),e("h3",{attrs:{id:"from"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#from","aria-hidden":"true"}},[a._v("#")]),a._v(" FROM")]),a._v(" "),e("p",[a._v("传递基础镜像\n"),e("code",[a._v("FROM ubuntu:14.04")])]),a._v(" "),e("h3",{attrs:{id:"maintainer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maintainer","aria-hidden":"true"}},[a._v("#")]),a._v(" MAINTAINER")]),a._v(" "),e("p",[a._v("维护者信息\n"),e("code",[a._v('MAINTAINER James Turnbull "james@docker.com"')])]),a._v(" "),e("h3",{attrs:{id:"run"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#run","aria-hidden":"true"}},[a._v("#")]),a._v(" RUN")]),a._v(" "),e("p",[a._v("默认使用 "),e("code",[a._v("/bin/sh -c")]),a._v(" 来执行，镜像被构建时运行的命令")]),a._v(" "),e("p",[e("code",[a._v("RUN apt-get install -y nginx")])]),a._v(" "),e("p",[a._v("如果不支持在shell平台上运行或者不希望在shell中运行（如避免shell字符串篡改），可以使用exec格式的RUN指令")]),a._v(" "),e("p",[e("code",[a._v('RUN\t["apt-get", "install", "-y", "nginx"]')])]),a._v(" "),e("h3",{attrs:{id:"expose"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#expose","aria-hidden":"true"}},[a._v("#")]),a._v(" EXPOSE")]),a._v(" "),e("p",[a._v("向外部公开端口\n"),e("code",[a._v("EXPOSE 80")])]),a._v(" "),e("h3",{attrs:{id:"cmd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cmd","aria-hidden":"true"}},[a._v("#")]),a._v(" CMD")]),a._v(" "),e("p",[a._v("用于指定一个容器启动时要运行的命令，类似于"),e("code",[a._v("docker run")]),a._v(" 后面指定运行的命令\n"),e("code",[a._v('CMD\t["bin/true"]')])]),a._v(" "),e("p",[e("code",[a._v('CMD\t["bin/bash", "-l"]')])]),a._v(" "),e("h3",{attrs:{id:"entrypoint"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#entrypoint","aria-hidden":"true"}},[a._v("#")]),a._v(" ENTRYPOINT")]),a._v(" "),e("p",[e("code",[a._v("docker run")]),a._v(" 命令行中指定的任何参数都会被当作参数再次传递给ENTRYPOINT指定的命令")]),a._v(" "),e("p",[e("code",[a._v('ENTRYPOINT\t["/usr/sbin/nginx", "-g", "daemon off;"]')])]),a._v(" "),e("h3",{attrs:{id:"workdir"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#workdir","aria-hidden":"true"}},[a._v("#")]),a._v(" WORKDIR")]),a._v(" "),e("p",[a._v("用来从镜像创建一个新容器时，在容器内部设置一个工作目录，"),e("code",[a._v("ENTRYPOINT")]),a._v(" 和 "),e("code",[a._v("/")]),a._v(" 或 "),e("code",[a._v("CMD")]),a._v(" 指定的程序会在这个目录下执行\nWORKDIR\t/opt/webapp/db")]),a._v(" "),e("h3",{attrs:{id:"env"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#env","aria-hidden":"true"}},[a._v("#")]),a._v(" ENV")]),a._v(" "),e("p",[a._v("用于在镜像构建过程中设置环境变量\n"),e("code",[a._v("ENV\t\tRVM_PATH\t/home/rvm")])]),a._v(" "),e("h3",{attrs:{id:"user"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#user","aria-hidden":"true"}},[a._v("#")]),a._v(" USER")]),a._v(" "),e("p",[a._v("指定镜像以什么用户去运行\n"),e("code",[a._v("USER\tnginx")])]),a._v(" "),e("h3",{attrs:{id:"volume"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#volume","aria-hidden":"true"}},[a._v("#")]),a._v(" VOLUME")]),a._v(" "),e("p",[a._v("用来向基于镜像创建的容器添加卷，一个卷是可以存在于一个或者多个容器内的特定的目录，这个目录可以绕过联合文件系统。\n"),e("code",[a._v('VOLUME\t\t["/opt/project", "/data"]')])]),a._v(" "),e("h3",{attrs:{id:"add"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#add","aria-hidden":"true"}},[a._v("#")]),a._v(" ADD")]),a._v(" "),e("p",[a._v("用来将构建环境下的文件盒目录复制到镜像中。源文件可以是URL，压缩包会被自动解压。")]),a._v(" "),e("p",[e("code",[a._v("ADD\tsoftware.lic\t/opt/application/software.lic")])]),a._v(" "),e("p",[a._v("ADD指令会使得构建缓存变得无效。如果通过ADD指令向镜像添加一个文件或者目录，那么这将是的Dockerfile中的后续指令都不能继续使用之前的构建缓存。")]),a._v(" "),e("h3",{attrs:{id:"copy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#copy","aria-hidden":"true"}},[a._v("#")]),a._v(" COPY")]),a._v(" "),e("p",[a._v("只负责复制")]),a._v(" "),e("h3",{attrs:{id:"onbuild"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#onbuild","aria-hidden":"true"}},[a._v("#")]),a._v(" ONBUILD")]),a._v(" "),e("p",[a._v("能为镜像添加触发器。当一个镜像被用作其他镜像的基础镜像时（比如你的镜像需要从某未准备好的位置添加源代码，或者你需要执行特定于构建镜像的环境的脚本），该镜像中的触发器将会被执行。可以通过 "),e("code",[a._v("docker inspect")]),a._v(" 查看镜像中的ONBUILD指令。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ONBUILD\tADD \t.\t/app/src\nONBUILD \tRUN\tcd /app/src && make\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])])])}],!1,null,null,null);s.options.__file="dockerfile.md";t.default=s.exports}}]);