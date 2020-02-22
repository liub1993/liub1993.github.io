(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{361:function(e,s,t){"use strict";t.r(s);var a=t(0),n=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"redis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis","aria-hidden":"true"}},[e._v("#")]),e._v(" Redis")]),e._v(" "),t("p",[e._v("参考：《Redis实战》 Josiah L. Carlson著")]),e._v(" "),t("h2",{attrs:{id:"_1-初试redis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-初试redis","aria-hidden":"true"}},[e._v("#")]),e._v(" 1. 初试Redis")]),e._v(" "),t("p",[t("code",[e._v("Redis")]),e._v("是一个远程内存数据库，性能强劲，具有复制特性以及未解决问题而生的独一无二的数据类型。Redis属于人们常说的"),t("code",[e._v("NoSQL数据库")]),e._v("或者"),t("code",[e._v("非关系型数据库")]),e._v("。和"),t("code",[e._v("memcached")]),e._v("相比，Redis能够自动以两种不同的方式将数据写入硬盘，并且Redis除了能存储普通的字符串键以外，还可以存储其他4种数据结构，而memcached只能存储字符串键。")]),e._v(" "),t("h3",{attrs:{id:"_1-1-特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-特性","aria-hidden":"true"}},[e._v("#")]),e._v(" 1.1 特性")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Redis拥有两种不同的形式的持久化方式：")]),e._v(" "),t("ul",[t("li",[e._v("时间点转储（"),t("code",[e._v("Point-in-time dump")]),e._v("）\n"),t("ul",[t("li",[e._v("“在指定时间段内有指定数量的写操作执行“，条件满足时执行")]),e._v(" "),t("li",[e._v("执行转出到硬盘命令(dump-to-disk)")])])]),e._v(" "),t("li",[e._v("更改只追加写入设置")])])]),e._v(" "),t("li",[t("p",[e._v("故障转移（failover）")])]),e._v(" "),t("li",[t("p",[e._v("主从复制特性")])])]),e._v(" "),t("h3",{attrs:{id:"_1-2-数据结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-数据结构","aria-hidden":"true"}},[e._v("#")]),e._v(" 1.2 数据结构")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("结构存储的值")]),e._v(" "),t("th",[e._v("结构类型")]),e._v(" "),t("th",[e._v("结构的读写能力")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("可以是字符串、整数或者浮点数")]),e._v(" "),t("td",[e._v("STRING")]),e._v(" "),t("td",[e._v("对整个字符串或者字符串的一部分操作；对整数或者浮点数自增或者自减操作")])]),e._v(" "),t("tr",[t("td",[e._v("链表")]),e._v(" "),t("td",[e._v("LIST")]),e._v(" "),t("td",[e._v("从链表的两端推入或者弹出元素；根据偏移量对链表进行修剪；读取单个或者多个元素；根据值查找或者获取元素")])]),e._v(" "),t("tr",[t("td",[e._v("无序收集器，每个字符串都是独一无二无序的")]),e._v(" "),t("td",[e._v("SET")]),e._v(" "),t("td",[e._v("添加、获取、移除单个元素；检查元素是否存在；计算交集、并集、差集；从集合只随机获取元素")])]),e._v(" "),t("tr",[t("td",[e._v("包含键值对的无序散列表")]),e._v(" "),t("td",[e._v("HASH")]),e._v(" "),t("td",[e._v("添加、获取、移除单个键值对；获取所有的键值对")])]),e._v(" "),t("tr",[t("td",[e._v("字符串成员（member）和浮点数分值（score）的集合")]),e._v(" "),t("td",[e._v("ZSET（有序结合）")]),e._v(" "),t("td",[e._v("添加、获取、删除单个元素；根据分值的范围或者成员来获取元素")])])])]),e._v(" "),t("h4",{attrs:{id:"_1-2-1-字符串"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-字符串","aria-hidden":"true"}},[e._v("#")]),e._v(" 1.2.1 字符串")]),e._v(" "),t("p",[e._v("GET\t获取给定键中的值")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('127.0.0.1:6379> GET a\n"1"\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("SET 设置存储在给定键中的值")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("127.0.0.1:6379> SET A 1\nOK\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("DEL 删除存储在给定键中的值")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("127.0.0.1:6379> DEL A\n(integer) 1\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("h4",{attrs:{id:"_1-2-2-列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-列表","aria-hidden":"true"}},[e._v("#")]),e._v(" 1.2.2 列表")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('127.0.0.1:6379> rpush listkey item\t\t\t# 向链表后推入一个值\n(integer) 1\n127.0.0.1:6379> rpush listkey item2\n(integer) 2\n127.0.0.1:6379> rpush listkey item\n(integer) 3\n127.0.0.1:6379> lrange listkey 0 -1   # lrange list_name start_index end_index\n1) "item"\n2) "item2"\n3) "item"\n127.0.0.1:6379> lindex listkey 1 # lindex list_name  index\n"item2"\n127.0.0.1:6379> lpop listkey #从链表弹出一个元素\n"item"\n127.0.0.1:6379> lrange listkey 0 -1 \n1) "item2"\n2) "item"\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br")])]),t("h4",{attrs:{id:"_1-2-3-集合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-集合","aria-hidden":"true"}},[e._v("#")]),e._v(" 1.2.3 集合")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('127.0.0.1:6379> sadd setkey item  # 增加一个元素\n(integer) 1\n127.0.0.1:6379> sadd setkey item2\n(integer) 1\n127.0.0.1:6379> sadd setkey item3\n(integer) 1\n127.0.0.1:6379> sadd setkey item4\n(integer) 1\n127.0.0.1:6379> smembers setkey  # 查看所有的元素\n1) "item4"\n2) "item3"\n3) "item2"\n4) "item"\n127.0.0.1:6379> sismember setkey item4 # 判断是否是其中的元素\n(integer) 1\n127.0.0.1:6379> sismember setkey item5\n(integer) 0\n127.0.0.1:6379> srem setkey item2 # 删除一个元素\n(integer) 1\n127.0.0.1:6379> smembers setkey\n1) "item4"\n2) "item3"\n3) "item"\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br"),t("span",{staticClass:"line-number"},[e._v("22")]),t("br"),t("span",{staticClass:"line-number"},[e._v("23")]),t("br")])]),t("h4",{attrs:{id:"_1-2-4-散列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-4-散列","aria-hidden":"true"}},[e._v("#")]),e._v(" 1.2.4 散列")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('127.0.0.1:6379> HSET hashkey field1 value1\n(integer) 1\n127.0.0.1:6379> HSET hashkey field2 value2\n(integer) 1\n127.0.0.1:6379> HSET hashkey field1 value3\n(integer) 0\n127.0.0.1:6379> hgetall hashkey\n1) "field1"\n2) "value3"\n3) "field2"\n4) "value2"\n127.0.0.1:6379> hdel hashkey field1\n(integer) 1\n127.0.0.1:6379> hgetall hashkey\n1) "field2"\n2) "value2"\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br")])]),t("h4",{attrs:{id:"_1-2-5-有序集合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-5-有序集合","aria-hidden":"true"}},[e._v("#")]),e._v(" 1.2.5 有序集合")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('127.0.0.1:6379> zadd zsetkey 777 member1\n(integer) 1\n127.0.0.1:6379> zadd zsetkey 789 member2\n(integer) 1\n127.0.0.1:6379> zadd zsetkey 889 member3\n(integer) 1\n127.0.0.1:6379> zrange zsetkey 0 -1 withscores\n1) "member1"\n2) "777"\n3) "member2"\n4) "789"\n5) "member3"\n6) "889"\n127.0.0.1:6379> zrangebyscore zsetkey 0 800 withscores\n1) "member1"\n2) "777"\n3) "member2"\n4) "789"\n127.0.0.1:6379> \n127.0.0.1:6379> zrem zsetkey memeber1\n(integer) 0\n127.0.0.1:6379> zrange zsetkey 0 -1 withscores\n1) "member1"\n2) "777"\n3) "member2"\n4) "789"\n5) "member3"\n6) "889"\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br"),t("span",{staticClass:"line-number"},[e._v("22")]),t("br"),t("span",{staticClass:"line-number"},[e._v("23")]),t("br"),t("span",{staticClass:"line-number"},[e._v("24")]),t("br"),t("span",{staticClass:"line-number"},[e._v("25")]),t("br"),t("span",{staticClass:"line-number"},[e._v("26")]),t("br"),t("span",{staticClass:"line-number"},[e._v("27")]),t("br"),t("span",{staticClass:"line-number"},[e._v("28")]),t("br")])]),t("h4",{attrs:{id:"_1-3-实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-实例","aria-hidden":"true"}},[e._v("#")]),e._v(" 1.3 实例")]),e._v(" "),t("h5",{attrs:{id:"_1-3-1-对文章进行投票"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-对文章进行投票","aria-hidden":"true"}},[e._v("#")]),e._v(" 1.3.1 对文章进行投票")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("article:92858")]),e._v(" "),t("th",[e._v("hash")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("titile")]),e._v(" "),t("td",[e._v("Go to statement considered harmful")])]),e._v(" "),t("tr",[t("td",[e._v("link")]),e._v(" "),t("td",[e._v("http://www.example.com")])]),e._v(" "),t("tr",[t("td",[e._v("poster")]),e._v(" "),t("td",[e._v("user:98765")])]),e._v(" "),t("tr",[t("td",[e._v("time")]),e._v(" "),t("td",[e._v("12345678987654.33")])]),e._v(" "),t("tr",[t("td",[e._v("votes")]),e._v(" "),t("td",[e._v("532")])])])]),e._v(" "),t("p",[e._v("可以使用冒号"),t("code",[e._v(":")]),e._v("、斜线"),t("code",[e._v("/")]),e._v("、甚至管道符"),t("code",[e._v("|")]),e._v("作为名字的分隔符，保证统一即可。")]),e._v(" "),t("h3",{attrs:{id:"_1-3-redis命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-redis命令","aria-hidden":"true"}},[e._v("#")]),e._v(" 1.3 Redis命令")]),e._v(" "),t("p",[e._v("Redis的所有命令都可以在这里找到： https://redis.io/commands。")]),e._v(" "),t("p",[e._v("除了上面提到的对各种数据操作的命令以外，Redis还有其他许多非常丰富的命令工具。")]),e._v(" "),t("h4",{attrs:{id:"_1-3-1-发布与订阅"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-发布与订阅","aria-hidden":"true"}},[e._v("#")]),e._v(" 1.3.1 发布与订阅")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("命令")]),e._v(" "),t("th",[e._v("描述")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("SUBSCRIBE")]),e._v(" "),t("td",[t("code",[e._v("SUBSCRIBE channel [channel…]")]),e._v("  订阅给定的一个或者多个频道")])]),e._v(" "),t("tr",[t("td",[e._v("PSUBSCRIBE")]),e._v(" "),t("td",[t("code",[e._v("PSUBSCRIBE pattern [pattern…]")]),e._v(" 订阅给定模式相匹配的所有频道")])]),e._v(" "),t("tr",[t("td",[e._v("UNSUBSCRIBE")]),e._v(" "),t("td",[t("code",[e._v("UNSUBSCRIBE channel [channel...]")]),e._v(" 取消订阅")])]),e._v(" "),t("tr",[t("td",[e._v("PUNSUBSCRIBE")]),e._v(" "),t("td",[t("code",[e._v("PUNSUBSCRIBE channel [channel]")]),e._v("  取消订阅给定模式相匹配的所有频道")])]),e._v(" "),t("tr",[t("td",[e._v("PUBLISH")]),e._v(" "),t("td",[t("code",[e._v("PUBLISH channel message")]),e._v(" 向给定的频道发送消息")])])])]),e._v(" "),t("h4",{attrs:{id:"_1-3-2-排序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-2-排序","aria-hidden":"true"}},[e._v("#")]),e._v(" 1.3.2 排序")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("命令")]),e._v(" "),t("th",[e._v("描述")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("SORT")]),e._v(" "),t("td",[t("code",[e._v("SORT source-key [BY pattern] [LIMIT offset count] [GET pattern [GET pattern ...]] [ASC|DESC] [ALPHA] [STORE dest-key]")])])])])]),e._v(" "),t("h3",{attrs:{id:"事务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事务","aria-hidden":"true"}},[e._v("#")]),e._v(" 事务")]),e._v(" "),t("p",[t("code",[e._v("WATCH")]),e._v("，"),t("code",[e._v("MULTI")]),e._v("， "),t("code",[e._v("EXEC")]),e._v("，"),t("code",[e._v("UNWATCH")]),e._v("和"),t("code",[e._v("DISCARD")])]),e._v(" "),t("h3",{attrs:{id:"_1-3-3-键的过期时间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-3-键的过期时间","aria-hidden":"true"}},[e._v("#")]),e._v(" 1.3.3 键的过期时间")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("命令")]),e._v(" "),t("th",[e._v("描述")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("PERSIST")]),e._v(" "),t("td",[t("code",[e._v("PERSIST keyname")]),e._v(" 移除键的过期时间")])]),e._v(" "),t("tr",[t("td",[e._v("TTL")]),e._v(" "),t("td",[t("code",[e._v("TTL keyname")]),e._v(" 查看给定键的距离过期还有多少秒")])]),e._v(" "),t("tr",[t("td",[e._v("EXPIRE")]),e._v(" "),t("td",[t("code",[e._v("EXPIRE keyname seconds")]),e._v(" 让给定的过期的秒数之后过期")])]),e._v(" "),t("tr",[t("td",[e._v("PTTL")]),e._v(" "),t("td",[t("code",[e._v("PTTL kename")]),e._v(" 查看给定键的距离过期还有多少毫秒")])]),e._v(" "),t("tr",[t("td",[e._v("PEXPIRE")]),e._v(" "),t("td",[t("code",[e._v("PEXPIRE keyname milliseconds")]),e._v(" 给指定的过期的秒数之后过期")])]),e._v(" "),t("tr",[t("td",[e._v("PEXPIREAT")]),e._v(" "),t("td",[t("code",[e._v("PEXPIREAT keyname timestamp_milliseconds")]),e._v(" 将一个毫秒级精度的UNIX时间戳设置为给定键的过期时间")])])])]),e._v(" "),t("h2",{attrs:{id:"_2-数据安全与性能保障"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-数据安全与性能保障","aria-hidden":"true"}},[e._v("#")]),e._v(" 2. 数据安全与性能保障")]),e._v(" "),t("h3",{attrs:{id:"_2-1-持久化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-持久化","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.1 持久化")]),e._v(" "),t("h4",{attrs:{id:"_2-1-1-快照持久化（snapshotting）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-快照持久化（snapshotting）","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.1.1 快照持久化（Snapshotting）")]),e._v(" "),t("p",[e._v("Redis可以通过创建快找来获得存储在内存中的数据在某个时间节点上的副本。根据配置，快照将被写入"),t("code",[e._v("dbfilename")]),e._v(" 配置选项指定的文件里面。")]),e._v(" "),t("p",[e._v("创建快照的办法有以下几种：")]),e._v(" "),t("ol",[t("li",[e._v("客户端发送"),t("code",[e._v("BGSAVE")]),e._v("命令。Redis会fork一个子进程来保存快照。子进程和父进程共享内存。")]),e._v(" "),t("li",[e._v("客户端发送"),t("code",[e._v("SAVE")]),e._v("命令。接到命令的Redis服务器在快照创建完毕之前将不再响应任何其他命令。此命令并不常用，通常只会在没有足够的内存去执行"),t("code",[e._v("BGSAVE")]),e._v("的时候才会使用这个命令。")]),e._v(" "),t("li",[e._v("设置配置"),t("code",[e._v("save")]),e._v("，比如"),t("code",[e._v("save 60 10000")]),e._v("，即“60秒之内有10 000次写入”这个条件被满足时Redis自动触发BGSAVE命令。可以设置多个命令，当任意一个满足时执行GBSAVE")]),e._v(" "),t("li",[e._v("Redis通过"),t("code",[e._v("SHUTDOWN")]),e._v("命令接收到命令关闭服务器的请求时，或者接受到标准TERM信号时，会一行一个SAVE命令，阻塞所有的客户端。")]),e._v(" "),t("li",[e._v("当一个Redis服务器连接另一个Redis服务器，并向对方发送"),t("code",[e._v("SYNC")]),e._v("命令来开始一次复制操作时，如果主服务没有在执行BGSAVE或者主服务器并非刚刚执行完BGSAVE操作时。")])]),e._v(" "),t("p",[e._v("优点：自动化、可以按时间点多重备份")]),e._v(" "),t("p",[e._v("缺点：造成系统卡顿，消耗内存；没有保存到快照的最新数据可能会丢失")]),e._v(" "),t("h4",{attrs:{id:"_2-1-2-aof持久化（append-only-file）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2-aof持久化（append-only-file）","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.1.2 AOF持久化（Append Only File）")]),e._v(" "),t("p",[e._v("AOF持久化会将被执行的命令写到AOF文件的末尾，以此来记录数据发生的变化。数据恢复时需要Redis重新执行一边所有的命令。通过设置"),t("code",[e._v("appendonly yes")]),e._v(" 来打开，"),t("code",[e._v("appendfsync")]),e._v("选项对系统的影响如下：")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("选项")]),e._v(" "),t("th",[e._v("同步频率")]),e._v(" "),t("th",{staticStyle:{"text-align":"center"}},[e._v("备注")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("always")]),e._v(" "),t("td",[e._v("每个Redis写命令都要同步写入硬盘，这样做会严重降低Redis的速度")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("严重影响速度")])]),e._v(" "),t("tr",[t("td",[e._v("everysec")]),e._v(" "),t("td",[e._v("美妙执行一次同步，显示的将多个写命令同步到硬盘")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("最多造成1s数据的丢失")])]),e._v(" "),t("tr",[t("td",[e._v("no")]),e._v(" "),t("td",[e._v("让操作系统来决定应该何时进行同步")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("不定时长的丢失")])])])]),e._v(" "),t("p",[e._v("缺点：随着Redis的运行，AOF文件的体积会不断的增加，甚至超过数据本身。可以通过向Redis发送"),t("code",[e._v("BGREWRITEAOF")]),e._v("命令来重写AOF文件，移除AOF中冗余的命令，原理和BGSAVE类似都会fork一个子进程来完成。可以通过配置设置AOF持久化的规则。")]),e._v(" "),t("h3",{attrs:{id:"_2-2-复制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-复制","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.2 复制")]),e._v(" "),t("p",[e._v("Redis采用了和关系型数据库同样的方法来向多个从服务器发送更新，并使用从服务器来处理所有读请求。")]),e._v(" "),t("p",[e._v("==从服务器在进行同步时会清空自身的所有的数据==")]),e._v(" "),t("p",[e._v("Redis不支持主主复制。")]),e._v(" "),t("h4",{attrs:{id:"_2-2-1-主从链"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-主从链","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.2.1 主从链")]),e._v(" "),t("p",[e._v("Redis服务器的主服务器和从服务器并没有特别的地方，因此从服务器也可以是主服务器。")]),e._v(" "),t("h2",{attrs:{id:"_3-使用redis构建应用程序组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-使用redis构建应用程序组件","aria-hidden":"true"}},[e._v("#")]),e._v(" 3. 使用Redis构建应用程序组件")]),e._v(" "),t("h3",{attrs:{id:"_3-1-分布式锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-分布式锁","aria-hidden":"true"}},[e._v("#")]),e._v(" 3.1 分布式锁")]),e._v(" "),t("p",[e._v("Redis使用"),t("code",[e._v("WATCH")]),e._v("命令来代替对数据进行加锁，因为WATCH只会在数据被其他客户端抢先修改了的情况下通知执行了这个命令的客户端，而不会阻止其他客户端对数据进行修改，所以这个命令被称为乐观锁（Optimistic locking）。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("悲观锁(Pessimistic Lock), 顾名思义，就是很悲观，每次去拿数据的时候都认为别人会修改，所以每次在拿数据的时候都会上锁，这样别人想拿这个数据就会block直到它拿到锁。传统的关系型数据库里边就用到了很多这种锁机制，比如行锁，表锁等，读锁，写锁等，都是在做操作之前先上锁。\n\n乐观锁(Optimistic Lock), 顾名思义，就是很乐观，每次去拿数据的时候都认为别人不会修改，所以不会上锁，但是在更新的时候会判断一下在此期间别人有没有去更新这个数据，可以使用版本号等机制。乐观锁适用于多读的应用类型，这样可以提高吞吐量，像数据库如果提供类似于write_condition机制的其实都是提供的乐观锁。\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("h3",{attrs:{id:"_3-2-技术信号量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-技术信号量","aria-hidden":"true"}},[e._v("#")]),e._v(" 3.2 技术信号量")]),e._v(" "),t("h4",{attrs:{id:"_3-2-1-公平信号量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-公平信号量","aria-hidden":"true"}},[e._v("#")]),e._v(" 3.2.1 公平信号量")]),e._v(" "),t("h4",{attrs:{id:"_3-2-2-刷新信号量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-刷新信号量","aria-hidden":"true"}},[e._v("#")]),e._v(" 3.2.2 刷新信号量")]),e._v(" "),t("h3",{attrs:{id:"_3-3-任务队列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-任务队列","aria-hidden":"true"}},[e._v("#")]),e._v(" 3.3 任务队列")])])}],!1,null,null,null);n.options.__file="Redis.md";s.default=n.exports}}]);