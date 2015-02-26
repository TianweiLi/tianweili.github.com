---
layout: post
title: "linux中的sort命令"
date: 2015-02-25 23:44:09 +0800
comments: true
categories: linux
keywords: linux, sort, 命令
description: linux中的sort命令介绍
---

<!--more-->

原文链接：<http://tianweili.github.io/blog/2015/02/25/linux-sort/>

##简介

sort命令死根据不同的数据类型以行为单位对数据进行排序。

sort的默认比较规则是从首字符向后，按照ASCII码值进行比较，将结果按照升序输出。

##用法

sort命令的基本格式如下：

```bash
sort [-bcfMnrtk] [source-file] [-o output-file]
```
sort命令可使用的参数有：

```
-b   忽略每行前面开始出的空格字符。
-c   检查文件是否已经按照顺序排序。
-f   排序时，忽略大小写字母。
-M   将前面3个字母依照月份的缩写进行排序。
-n   依照数值的大小排序。
-o   将排序后的结果存入指定的文件
-r   降序输出
-t   <分隔字符>   指定排序时所用的栏位分隔字符
-u   在输出行中去除重复行
-k   选择以哪个区间进行排序。
```

##示例



参考链接：http://www.cnblogs.com/dong008259/archive/2011/12/08/2281214.html












作者：[李天炜](http://tianweili.github.com/)

原文链接：<http://tianweili.github.io/blog/2015/02/25/linux-sort/>

转载请注明作者及出处，谢谢。