---
layout: post
title: "Java中的Listener 监听器"
date: 2015-01-27 15:36:14 +0800
comments: true
categories: java
keywords: java, listener
description: Java中的Listener监听器
---

本文介绍了Listener以下几个方面的内容：

* Listener的定义与作用
* Listener的分类与使用
	* ServletContext监听
	* Session监听
	* Request监听
* Listener的应用实例
	* 利用HttpSessionListener统计最多在线用户人数
	* Spring使用ContextLoaderListener加载ApplicationContext配置信息
	* Spring使用Log4jConfigListener配置Log4j日志
	* Spring使用IntrospectorCleanupListener清理缓存

<!--more-->

原文链接：<http://tianweili.github.com/blog/2015/01/27/java-listener/>

[之前写了一篇关于Filter的文章](http://tianweili.github.io/blog/2015/01/26/java-filter/)，现在再来一篇Listener的，Filter和Listener在项目中是经常用到的，巧妙的使用可以达到事半功倍的效果。故把两者的用法总结一下。

作者：[李天炜](http://tianweili.github.com/)

原文链接：<http://tianweili.github.com/blog/2015/01/27/java-listener/>
