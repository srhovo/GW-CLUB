# 📖 养成系club 网站更新指南（小白版）

> 本指南教你如何用 AI 助手（如豆包、ChatGPT 等）更新网站内容，全程不需要懂代码。
> 
> ⚠️ **最重要的一条规则**：所有上传的图片和视频文件名**必须使用英文或拼音**，绝对禁止中文文件名！否则 Cloudflare Pages 会返回 400 错误，图片/视频完全无法加载。详细规范见 `AGENT_GUIDE.md`。

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

| 内容类型 | 放哪个文件夹 | 图片命名规则（必须英文/拼音） |
|---------|------------|--------------------------|
| 陪玩自介卡 | `assets/cards/` | 陪玩英文id.jpg，如 `xiaoyu.jpg` |
| 陪玩音介视频 | `assets/voices/` | 陪玩英文id.mp4，如 `xiaoyu.mp4` |
| 价格表 | `assets/services/` | `price.jpg` |
| 预存活动表 | `assets/services/` | `prepaid.jpg` |
| 礼物价目表 | `assets/services/` | `gift.jpg` |
| 结算规则 | `assets/services/` | `settlement.jpg` |
| 活动宣传图 | `assets/services/` | `activity.jpg` |
| 管理层头像 | `assets/management/` | 职位拼音：`tuanzhang.jpg`、`futuan.jpg`、`guanli.jpg` |
| 俱乐部标题图 | `assets/` 根目录 | `club-logo.jpg`（也支持 png/webp） |
| 选图-板卡 | `assets/gallery/` | 英文命名，如 `board_01.jpg` |
| 选图-冠卡 | `assets/gallery/` | 英文命名，如 `champion_01.jpg` |

> ⚠️ **管理层头像是自动生效的**：只要把图片命名为 `tuanzhang.jpg`（团长）、`futuan.jpg`（副团）、`guanli.jpg`（管理）放到 `assets/management/` 文件夹，不需要改 data.js，刷新页面就会显示。

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
- 分路：【打野/中单/射手/边路/辅助，可写多个】
- 价格：【数字，如 25】
- 标签：【如 温柔,声甜,带飞】
- 简介：【一句话介绍】
- 自介卡图片路径：assets/cards/【英文id】.jpg（文件名必须是英文，如 xiaoyu.jpg）
- 音介视频路径：assets/voices/【英文id】.mp4（文件名必须是英文，没有就留空）

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
| 守护星 | `gallery.guardian.images` |
| 领养卡 | `gallery.adopt.images` |
| 生日卡 | `gallery.birthday.images` |
| 结单小票 | `gallery.receipt.images` |

---

## 👔 场景四：更新管理层信息

### 改头像
直接把新图片命名为 `tuanzhang.jpg`（团长）/ `futuan.jpg`（副团）/ `guanli.jpg`（管理），覆盖上传到 `assets/management/` 即可，**不用改代码**。

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
A：最常见的两个原因：
1. **文件名是中文**：Cloudflare Pages 对中文文件名返回 400 错误，必须重命名为英文/拼音。
2. **路径写错了**：检查 data.js 里的路径与实际文件名大小写、后缀名是否完全一致。

**Q：可以一次让 AI 改多个东西吗？**
A：可以！把多个需求一起说清楚就行，比如"帮我新增一个陪叫小羽，同时把价格表换成新的 price_v2.jpg，再把更新日期改成今天"。

**Q：音介视频太大加载慢？**
A：单个视频建议压缩到 15MB 以内（理想 5-10MB），用 HandBrake 或格式工厂转成 H.264 编码的 mp4，长边 1000px 左右，码率 1-2Mbps。超过 50MB 会导致 Cloudflare Pages 部署失败。

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
> 
> 🤖 **AI 操作规范**：项目根目录下的 `AGENT_GUIDE.md` 是给 AI 助手看的强制操作规范，包含文件命名、压缩标准、部署检查清单等。让 AI 操作时提醒它先阅读该文件。
