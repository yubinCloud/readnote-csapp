---
title: Chapter 7 链接 II：目标文件格式
---

# 二、目标文件格式

[[toc]]

## 2.1 三类目标文件

1. **可重定位目标文件**（.o）
   + 其代码和数据可和其他可重定位文件合并为可执行文件；
   + 每个 .o 文件由对应的 .c 文件生成；
   + 每个 .o 文件代码和数据<u>地址都是从 0 开始</u>。
2. **可执行目标文件**（default：a.out）
   + 包含的代码和数据可以被直接复制到内存并被执行；
   + 代码和数据<u>地址为虚拟地址</u>空间中的地址
3. **共享的目标文件**（.so）
   + 特殊的可重定位目标文件，能在装入或运行时被装入到内存并自动被链接，称为**共享库文件**
   + Windows 中称其为 Dynamic Link Libraries (DLLs)

## 2.2 目标文件的格式

**目标代码**（Object Code）指编译器和汇编器处理源代码后所生成的机器语言目标代码。

**目标文件**（Object File）指包含目标代码的文件。

目标文件的标准二进制格式：
+ DOS 操作系统：COM 格式
+ System V UNIX 早期版本：COFF 格式
+ Windows：PE 格式
+ Linux 等类 UNIX：ELF 格式

## 2.3 ELF 目标文件格式

目标文件既可用于程序的链接，也可用于程序的执行。

有两种视图：
+ **链接视图**，被链接，可重定位目标文件；
  + 主要由不同的*节*组成，不同的节描述了目标文件中不同类型的信息及特征。
+ **执行视图**，被执行，可执行目标文件。
  + 主要由不同的*段*组成，描述了目标文件中的节如何映射到存储空间的段。