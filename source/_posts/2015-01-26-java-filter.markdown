---
layout: post
title: "Java中的Filter过滤器详解"
date: 2015-01-26 17:07:51 +0800
comments: true
categories: java
keywords: java, filter
description: Java中的Filter过滤器详解
---

Filter也称之为过滤器，它是Servlet技术中最实用的技术，WEB开发人员通过Filter技术，对web服务器管理的所有web资源：例如Jsp, Servlet, 静态图片文件或静态 html 文件等进行拦截，从而实现一些特殊的功能。例如实现URL级别的权限访问控制、过滤敏感词汇、压缩响应信息等一些高级功能。
<!--more-->
它主要用于对用户请求进行预处理，也可以对HttpServletResponse 进行后处理。使用Filter 的完整流程：Filter 对用户请求进行预处理，接着将请求交给Servlet 进行处理并生成响应，最后Filter 再对服务器响应进行后处理。