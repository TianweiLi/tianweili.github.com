---
layout: post
title: "一步一步打造趁手的IDEA"
date: 2015-05-28 22:36:56 +0800
comments: true
categories: [java]
keywords: [idea, 设置, 配置, 快捷键, IntelliJ]
description: 一步一步打造趁手的IDEA
---

工作几年，所经历的公司使用的Java IDE都是[Eclipse](https://eclipse.org/)，也对Eclipse开发方式和风格比较熟悉了（比如我的博客Java代码着色就是自己调成的Eclipse style）。像其他一些Java IDE比如[IntelliJ IDEA](https://www.jetbrains.com/)、[NetBeans](https://netbeans.org/)在学校时候也体验过，但是都没有正式地长时间使用它们来开发过正儿八经的项目。

加入了[陆金所](http://www.lufax.com/)之后，发现我们开发团队大部分都用的IDEA，所以为了和同事同步，减少交流成本，我也开始使用IDEA作为Java　IDE了（这是我一般的习惯，使用的工具等尽量和团队同步）。

本文主要编写了以下一些方面的内容和所遵循的原则：

* 主要集中在IDEA的一些配置和快捷键；
* 只会讲常用的功能和快捷键，很少使用的功能一般不会提及；
* 尽量遵循IDEA的默认风格，比如我本来想一下子把IDEA的快捷键都设置得跟Eclipse一样，反复斟酌后决定还是享受原汁原味的IDEA（要不然干嘛不直接用Eclipse）；
* 自定义的配置在IDEA默认配置的基础上不会大改，除非真的有必要；
* IDEA基于14.1.3版本；
* 本文的内容会不断更新。

<!--more-->

## IDEA介绍

IDEA是JetBrains公司的产品，这家公司总部位于捷克共和国的首都布拉格，开发人员以严谨著称的东欧程序员为主。

我在做Python开发时，使用过JetBrains公司的[PyCharm](https://www.jetbrains.com/pycharm/)，感觉不错。而且我发现这家公司生产的IDE风格都差不多的。

> IDEA被号称为最好的Java集成开发工具，尤其在智能代码助手、代码自动提示、重构、J2EE支持、Ant、JUnit、CVS整合、代码审查、 创新的GUI设计等方面的功能可以说是超常的。

[IDEA的下载地址在这里](https://www.jetbrains.com/idea/download/)，分为Ultimate Edition和Community Edition两种，前者是收费的，有30天试用，后者是免费的，但是支持的功能也偏少。目前的最新版本是14.1.3，本文也是基于这个版本来的。

{% img /idea-settings/idea.jpg %}

##常用快捷键

###代码编写

Ctrl+D : 复制整行或块

Ctrl+X : 剪切整行或块

Shift+Delete : 删除整行或块

Ctrl+W : 选择字，多次按W会有更多选中

Ctrl+/ : 注释代码

Ctrl+Shift+/ ：　取消注释代码

Ctrl+Alt+L : 自动格式化代码

Ctrl+Alt+O : 自动格式化import，清除无用的import

Ctrl+J ： 提示你记不住的Live Templates

Alt+↑/↓ ： 在编辑器中不同方法移动

F2/Shift+F2 : 在高亮的语法错误间跳转


###查找

Ctrl+N : 快速查找打开一个类

Ctrl+Shift+N : 快速打开工程中的非Java类文件

Alt+F3 : 在当前文本中查找，按上下键是向前向后搜索，按Esc退出

###设计

Ctrl+O : 很容易的重载基类方法

Ctrl+I : 完成当前接口或抽象基类的方法




##配置

###更换UI主题

File -> Settings -> Appearance -> UI Options -> Theme

我选择的是Darcula主题，比大白板背景显得逼格略高一点，O(∩_∩)O哈哈~

{% img /idea-settings/idea-theme.jpg %}

###代码显示字体

File -> Settings -> Editor -> Colors&Fonts -> Font

IDEA默认的字体看起来让人真是不舒服斯基啊，能忍得了的筒子我也是膜拜。设置来设置去也没找到喜欢的字体，后来网上找了一个字体安装，如下图所示，叫Yahei Consolas Hybrid，个人觉得不错。

挖个坑，以后附上下载地址。。。

{% img /idea-settings/font-set.jpg %}

###显示行号

File -> Settings -> Editor -> General -> Appearance -> 勾选上Show line numbers

###修改自动完成main和print方法

用惯Eclipse的童鞋想快速打出一个main方法就是直接输入main然后回车，而IDEA中则输入的是几个单词的首字母——psvm，我感觉还是直接输入main比较顺手，那么怎么改过来呢？

main方法：

File -> Settings -> Editor -> Live Templates -> other -> psvm改成main

System.out.println()生成方法：

File -> Settings -> Editor -> Live Templates -> output -> sout改成sys

###控制台输出中文乱码

File -> Settings -> Editor -> Colors&Fonts -> Console Font -> 字体设置为上面安装的Yahei Consolas Hybrid。

###设置项目文件编码

File -> Settings -> Editor -> File Encodings -> 把IDE和Project的编码都设置为UTF-8

###去除自动补全时的大小写敏感

IDEA默认在代码自动提示补全时候是大小写敏感的。

比如你输入list并不会提示java.util.List，只有输入List才会自动提示补全你想要的内容。那么我们可以做如下设置，使其对大小写不敏感以提高效率。

File -> Settings -> Editor -> General -> Code Completion -> Case sensitive completion 下拉选择None



















###备份自定义的设置

File -> Export Settings