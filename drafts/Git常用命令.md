




##回退
`git reset –mixed <SHA值>`:此为默认方式，不带任何参数的git reset，即时这种方式，它回退到某个版本，只保留源码，回退commit和index信息。
`git reset –soft <SHA值>`：回退到某个版本，只回退了commit的信息，不会恢复到index file一级。如果还要提交，直接commit即可。
`git reset --hard <SHA值>`：彻底回退到某个版本，本地源码都变成所回退的版本。

SHA值可以去GitHub的commits历史记录了查看。

SHA可以使用:

	HEAD 最近一个提交
	HEAD^ 上一次