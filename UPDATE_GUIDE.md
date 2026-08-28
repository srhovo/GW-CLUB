# 📖 养成系club 网站更新指南（小白版）

> 本指南教你如何用 AI 助手（如豆包、ChatGPT 等）更新网站内容，全程不需要懂代码。

---

## 🧠 先搞懂原理（30秒看懂）

这个网站是**纯静态网页**，所有内容都由两个东西控制：

| 东西 | 作用 | 你需要改吗 |
|------|------|-----------|
| `data.js` | 网站的"内容数据库"，所有文字、图片路径都写在这里 | ✅ 经常改 |
| `assets/` 文件夹 | 放所有图片和视频的地方 | ✅ 上传新图时用 |
| `index.html` | 网页骨架和样式 | ❌ 一般不用动 |

**更新流程就三步：**
1. 把图片/视频传到对应文件夹
2. 告诉 AI 帮你改 `data.js`
3. 推送（push）到 GitHub，网站自动更新

---

## 📁 文件夹对应关系（必看）

把图片放到**正确的文件夹**，AI 才能帮你配好：

| 内容类型 | 放哪个文件夹 | 图片命名建议 |
|---------|------------|------------|
| 陪玩自介卡 | `assets/cards/` | 陪玩名字.jpeg，如 `小羽.jpeg` |
| 陪玩音介视频 | `assets/voices/` | 陪玩名字.mp4，如 `小羽.mp4` |
| 价格表 | `assets/services/` | `price.jpg` |
| 预存活动表 | `assets/services/` | `prepaid.jpg` |
| 礼物价目表 | `assets/services/` | `gift.jpg` |
| 结算规则 | `assets/services/` | `settlement.jpg` |
| 活动宣传图 | `assets/services/` | `activity.jpg` |
| 管理层头像 | `assets/management/` | 按职位命名：`团长.jpg`、`副团.jpg`、`管理.jpg` |
| 俱乐部标题图 | `assets/` 根目录 | `club-logo.jpg`（也支持 png/webp） |
| 选图-板卡 | `assets/gallery/` | 随意命名，如 `板卡01.jpg` |
| 选图-冠卡 | `assets/gallery/` | 随意命名，如 `冠卡01.jpg` |

> ⚠️ **管理层头像是自动生效的**：只要把图片命名为 `团长.jpg`、`副团.jpg`、`管理.jpg` 放到 `assets/management/` 文件夹，不需要改 data.js，刷新页面就会显示。

---

## 🎮 场景一：新增/修改一个陪玩

### 步骤 1：准备素材
- 自介卡图片（建议比例 5:3，长边 1000~1600px）
- 音介视频（可选，mp4 格式，建议比例 5:3）

### 步骤 2：上传素材到 GitHub
把图片传到 `assets/cards/`，视频传到 `assets/voices/`。

### 步骤 3：用 AI 改 data.js

**复制下面这段指令，把括号里的内容换成你自己的，发给 AI：**

```
请帮我修改这个项目里的 data.js 文件，在 companions 数组里新增一个陪玩：
- 名字：【陪玩名字】
- 分路：【打野/中路/射手/辅助/上单/全能，可写多个】
- 价格：【数字，如 25】
- 标签：【如 温柔,声甜,带飞】
- 简介：【一句话介绍】
- 自介卡图片路径：assets/cards/【文件名】.jpeg
- 音介视频路径：assets/voices/【文件名】.mp4（没有就留空）

改完后告诉我改了什么。
```

**如果是修改已有陪玩的信息：**

```
请帮我修改 data.js 里名为【雨季】的陪玩信息，把：
- 价格改成 35
- 标签改成 【顶技,镜,带飞】
- 简介改成 【新的一句话介绍】

其他信息保持不变。
```

**如果是删除一个陪玩：**

```
请帮我从 data.js 的 companions 数组中删除名为【顾北北】的陪玩。
```

---

## 💰 场景二：更新服务清单图片（价格表/预存/礼物/结算/活动）

### 步骤 1：上传新图片
把新图片传到 `assets/services/` 文件夹，记住文件名。

### 步骤 2：用 AI 改 data.js

**替换已有图片（如换了新的价格表）：**

```
请帮我修改 data.js 里 services.price.images 数组，
把图片路径改成 assets/services/price_new.jpg，
名字改成 【2026秋季价格表】。
```

**新增一张图片（如价格表有两张图）：**

```
请帮我在 data.js 的 services.price.images 数组里新增一张图片：
- 名字：【VIP专属价格】
- 路径：assets/services/price_vip.jpg
```

**各栏目对应关系：**
| 栏目 | data.js 里的位置 |
|------|-----------------|
| 价格表 | `services.price.images` |
| 预存活动 | `services.prepaid.images` |
| 礼物价目 | `services.gift.images` |
| 结算规则 | `services.settlement.images` |
| 活动图 | `services.activity.images` |

---

## 🖼️ 场景三：更新选图（板卡/冠卡/礼物单/开黑卡/成长录/结单小票）

### 步骤 1：上传图片
把图片传到 `assets/gallery/` 文件夹。

### 步骤 2：用 AI 改 data.js

```
请帮我在 data.js 的 gallery.board.images 数组里新增一张选图：
- 名字：【王者板卡】
- 图片路径：assets/gallery/board01.jpg
- 获取条件：【连续预约满5次即可获得】（没有就留空）
```

**各分类对应：**
| 分类 | data.js 里的位置 |
|------|-----------------|
| 板卡 | `gallery.board.images` |
| 冠卡 | `gallery.champion.images` |
| 礼物单 | `gallery.gift.images` |
| 开黑卡 | `gallery.squad.images` |
| 成长录 | `gallery.growth.images` |
| 结单小票 | `gallery.receipt.images` |

---

## 👔 场景四：更新管理层信息

### 改头像
直接把新图片命名为 `团长.jpg` / `副团.jpg` / `管理.jpg`，覆盖上传到 `assets/management/` 即可，**不用改代码**。

### 改名字/微信号
```
请帮我修改 data.js 里 management 数组，把团长的：
- 名字改成【新名字】
- 微信号改成【新微信号】
```

---

## 🚀 场景五：更新俱乐部标题图

把图片命名为 `club-logo.jpg`（也支持 png/webp），放到 `assets/` 根目录覆盖旧图即可，**不用改代码**。

---

## 📅 小技巧：更新页面上的"更新日期"

```
请帮我把 data.js 里的 updateDate 改成 2026-08-28。
```

---

## ⚠️ 常见问题

**Q：改完 data.js 后页面没变化？**
A：检查是否推送到了 GitHub；如果已推送，试试强制刷新页面（Ctrl+Shift+R 或 清缓存）。

**Q：图片上传了但显示不出来？**
A：99% 是 data.js 里的图片路径写错了。检查文件名大小写、后缀名（.jpg 和 .jpeg 不一样）、文件夹路径是否正确。

**Q：可以一次让 AI 改多个东西吗？**
A：可以！把多个需求一起说清楚就行，比如"帮我新增一个陪叫小羽，同时把价格表换成新的 price_v2.jpg，再把更新日期改成今天"。

**Q：音介视频太大上传不了？**
A：GitHub 单文件建议不超过 50MB，视频可以用压缩工具转成小尺寸 mp4（长边 1000px 左右足够）。

---

## 📝 万能指令模板（直接复制用）

```
我在维护一个静态网页，数据都在 data.js 里。
请帮我做以下修改：
1. 【你要做的第一件事】
2. 【你要做的第二件事】
...

改完后列出所有修改点，不要改其他没提到的内容。
```

> 💡 **提示**：把 data.js 文件内容直接发给 AI，或者让 AI 读取项目里的 data.js，它就能精准修改。
