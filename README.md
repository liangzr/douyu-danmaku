DouYu Danmaku
===
Personal DouYu danmaku manager

![Work In Progress](https://img.shields.io/badge/WIP-5%25-blue.svg?style=flat-square)


Feature
---

- [ ] Add custom room
- [ ] Filter high frequency words
- [ ] Inspect room information

Install
---

```shell
npm i -g douyu-danmaku
```

Usage
---

### Start

```shell
dmk // equal to dmk start
```
Choose added room by interactive command line.

```shell
dmk start <roomid|room-url>
```
Start danmaku from room id of room url temporarily.

### Filter Keywords

```shell
dmk exclude [keyword1] [keyword2] ...
```

Filter some high frequency word temporarily.

### Manage Room

#### Add Room

```shell
dmk room add <roomid|room-url>
```
Add new room to user configuration

#### Inspect Room

```shell
dmk room inspect [roomid|room-url]
```

Inspect room information, `roomid` or `room-url` is optional, if the roomid is not specificied, you can inspect added room in intereactive command line.

#### Remove Room

```shell
dmk room rm
```

Remove added room in intereactive command line
