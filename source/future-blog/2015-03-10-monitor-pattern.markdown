---
layout: post
title: "monitor pattern"
date: 2015-03-10 17:39:56 +0800
comments: true
categories: design-pattern
keywords: 监视器模式, 设计模式, java
description: 监视器模式
---


监视器模式又叫做观察者模式，

Java多线程中的线程同步就使用到了监视器模式，进入和退出同步代码块的字节指令也称为monitor enter和monitor exit，Java的内置锁也称为监视器锁或监视器。

Vector和Hashtable这两种线程安全的容器类也都使用了监视器模式。