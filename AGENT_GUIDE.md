# 🤖 AI Agent 操作规范（强制执行）

> **本文档是 AI 助手（豆包/ChatGPT/Cursor 等）操作本项目时必须遵循的强制规范。**
> 任何文件上传、重命名、data.js 修改、部署操作都必须严格遵守以下规则。
> 违反以下规则会导致 Cloudflare Pages 图片/视频加载失败（400错误）、页面加载缓慢、部署失败等问题。

---

## 🔴 一、文件命名强制规范（最高优先级）

### 1.1 绝对禁止中文文件名

**所有上传到 `assets/` 目录的文件，文件名必须使用纯英文小写字母、数字、连字符 `-` 或下划线 `_`，绝对禁止包含中文字符。**

| 正确 ✅ | 错误 ❌ |
|---------|---------|
| `xiaobei.jpg` | `小北.jpg` |
| `yeyu.mp4` | `夜羽.mp4` |
| `price-2024.jpg` | `价格表.jpg` |
| `board_01.jpg` | `板卡01.jpg` |
| `tuanzhang.jpg` | `团长.jpg` |

**原因**：Cloudflare Pages 对未进行 URL 编码的中文文件名请求返回 `400 Bad Request`，导致图片/视频完全无法加载。

### 1.2 陪玩文件命名规则

陪玩的自介卡和音介视频必须使用 `data.js` 中该陪玩的 `id` 字段作为文件名：

```
陪玩 id: xiaobei
→ 自介卡: assets/cards/xiaobei.jpg
→ 音介视频: assets/voices/xiaobei.mp4
```

- `id` 字段必须是唯一的英文/拼音字符串，禁止使用中文
- 新增陪玩时，先确定 id，再用 id 命名文件，最后在 data.js 中填写路径
- 文件扩展名：图片统一用 `.jpg`（或 `.jpeg`），视频统一用 `.mp4`

### 1.3 其他文件命名规则

| 文件类型 | 命名规则 | 示例 |
|---------|---------|------|
| 服务清单图片 | 英文描述，可用连字符 | `price.jpg`, `prepaid.jpg`, `settlement.jpg`, `gift.jpg`, `activity-summer.jpg` |
| 选图图片 | 分类前缀_序号 | `board_01.jpg`, `champion_02.jpg`, `guardian_01.jpg` |
| 管理层头像 | 职位拼音 | `tuanzhang.jpg`, `futuan.jpg`, `guanli.jpg` |
| 俱乐部标题图 | 固定名称 | `club-logo.jpg` |

---

## 🟠 二、文件体积与质量规范

### 2.1 图片压缩规范

| 参数 | 要求 | 说明 |
|------|------|------|
| 格式 | `.jpg` / `.jpeg` 优先 | 不推荐 png（体积大），除非需要透明背景 |
| 长边尺寸 | 1000px ~ 1600px | 超过 1600px 必须压缩，低于 1000px 会模糊 |
| 单张大小 | **不超过 300KB** | 自介卡、服务图、选图均适用 |
| 俱乐部 logo | 不超过 200KB | 宽度建议 1080px |
| 管理层头像 | 不超过 100KB | 正方形，建议 400x400px |

**压缩工具推荐**：
- 在线：TinyPNG (https://tinypng.com)、Squoosh (https://squoosh.app)
- 本地：ImageMagick、格式工厂
- AI 操作时：如检测到图片超过 300KB，必须先压缩再上传

### 2.2 视频压缩规范（音介视频）

| 参数 | 要求 | 说明 |
|------|------|------|
| 格式 | `.mp4` (H.264 编码) | 必须是 H.264，兼容性最好 |
| 分辨率 | 长边 1000px ~ 1280px | 建议 1080x640（约5:3比例） |
| 码率 | 1Mbps ~ 2Mbps | 保证清晰度的同时控制体积 |
| 帧率 | 24fps ~ 30fps | 不需要 60fps |
| 音频 | AAC 编码，128kbps | 音介需要保留声音 |
| 单个视频大小 | **不超过 15MB** | 超过 15MB 必须压缩，理想控制在 5-10MB |

**压缩工具推荐**：
- 在线：Clipchamp、FreeConvert
- 本地：HandBrake（推荐，预设 Fast 1080p30，调整码率）、格式工厂、FFmpeg

**FFmpeg 压缩命令参考**（AI 可直接使用）：
```bash
ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -preset medium -acodec aac -b:a 128k -vf "scale=1080:-2" -r 24 output.mp4
```

### 2.3 总体积控制

- 整个 `assets/` 目录总体积建议不超过 **200MB**
- 单个文件超过 50MB 会导致 Cloudflare Pages 部署缓慢甚至失败
- 新增大量文件前，先检查总体积，超限时优先压缩视频

---

## 🟡 三、目录结构规范

```
项目根目录/
├── index.html              # 网页主体（一般不修改）
├── data.js                 # 所有内容数据（陪玩/服务/选图/管理层）
├── README.md               # 项目说明
├── UPDATE_GUIDE.md         # 小白更新指南
├── AGENT_GUIDE.md          # 本文件，AI操作规范
└── assets/
    ├── club-logo.jpg       # 俱乐部标题图（固定名称）
    ├── cards/              # 陪玩自介卡（英文id命名）
    │   ├── xiaobei.jpg
    │   ├── yeyu.jpg
    │   └── ...
    ├── voices/             # 陪玩音介视频（英文id命名）
    │   ├── xiaobei.mp4
    │   ├── yeyu.mp4
    │   └── ...
    ├── services/           # 服务清单图片
    │   ├── price.jpg
    │   ├── prepaid.jpg
    │   ├── gift.jpg
    │   ├── settlement.jpg
    │   └── activity.jpg
    ├── gallery/            # 选图图片
    │   ├── board_01.jpg
    │   ├── champion_01.jpg
    │   └── ...
    └── management/         # 管理层头像（职位拼音命名）
        ├── tuanzhang.jpg
        ├── futuan.jpg
        └── guanli.jpg
```

**禁止在 assets/ 下创建未定义的新目录**，如需新增分类，先在 data.js 中定义，再创建对应目录。

---

## 🟢 四、data.js 更新规范

### 4.1 陪玩条目规范

每个陪玩必须包含以下字段，且 `id` 全局唯一：

```javascript
{
  id: 'xiaobei',                                    // 唯一英文id，与文件名一致
  name: '小北',                                      // 显示名称（可以是中文）
  lanes: ['中单', '打野'],                           // 分路（从预设中选择）
  price: 35,                                         // 价格（数字，从预设中选择）
  tags: ['火舞', '猫咪', '弈星'],                    // 标签
  intro: '一个宝宝 · 主玩英雄：火舞',                 // 简介
  image: 'assets/cards/xiaobei.jpg',                 // 自介卡路径（必须与实际文件一致）
  video: 'assets/voices/xiaobei.mp4'                 // 音介视频路径（没有则留空字符串 ''）
}
```

### 4.2 路径一致性检查（强制）

**修改 data.js 后，必须执行以下检查：**
1. 每个 `image` 路径对应的文件必须真实存在于 `assets/cards/` 目录
2. 每个非空 `video` 路径对应的文件必须真实存在于 `assets/voices/` 目录
3. 服务清单、选图的图片路径同样必须与实际文件一致
4. 路径大小写必须与实际文件名完全一致（Linux 环境严格区分大小写）

### 4.3 分路和价格预设

当前分路预设（修改时需同步更新）：
```javascript
lanes: ['打野', '中单', '射手', '边路', '辅助']
```

当前价格预设：
```javascript
prices: [15, 20, 25, 30, 35]
```

陪玩的 `lanes` 和 `price` 必须从上述预设中选择，否则筛选功能无法匹配。

---

## 🔵 五、部署前检查清单（强制执行）

每次提交推送前，AI 必须逐项检查：

- [ ] **1. 文件名检查**：`assets/` 目录下所有文件名不含中文字符
- [ ] **2. 路径一致性检查**：data.js 中所有图片/视频路径对应的文件真实存在
- [ ] **3. 图片体积检查**：所有图片单张不超过 300KB
- [ ] **4. 视频体积检查**：所有视频单个不超过 15MB
- [ ] **5. 总体积检查**：`assets/` 目录总体积不超过 200MB
- [ ] **6. id 唯一性检查**：所有陪玩的 `id` 字段全局唯一
- [ ] **7. 大小写检查**：data.js 中的路径与实际文件名大小写完全一致
- [ ] **8. 空路径检查**：没有视频的陪玩，`video` 字段为空字符串 `''`，不是 `null` 或 `undefined`

**任何一项不通过，必须先修复再提交推送。**

---

## 🟣 六、Cloudflare Pages 注意事项

### 6.1 部署缓慢或卡住

- 大量大文件（尤其是视频）会导致部署缓慢
- 如部署超过 10 分钟未完成，在 Cloudflare Dashboard → Pages → 项目 → Deployments 中点击 Retry
- 频繁部署失败时，检查是否有超过 50MB 的文件

### 6.2 缓存问题

- Cloudflare Pages 默认对 HTML/JS 设置 `cache-control: public, max-age=0, must-revalidate`
- 图片会被 CDN 缓存，更新图片后如未生效，可在 Cloudflare Dashboard 中 Purge Cache
- 测试时可在 URL 后加 `?v=时间戳` 强制回源

### 6.3 SPA 回退问题

- Cloudflare Pages 默认开启 SPA 回退：不存在的路径返回 index.html（200状态，text/html）
- 自动探测图片时必须检查 `content-type` 是否为 `image/*`，不能只看状态码
- 本项目 index.html 已包含 content-type 校验逻辑，不要删除

### 6.4 部署验证与故障排查（强制执行）

**每次提交推送后，AI 必须等待 2-3 分钟后执行部署验证，确认线上已更新。**

#### 验证步骤

1. **对比版本号**：
   ```bash
   # GitHub 最新版陪玩数量
   curl -s "https://raw.githubusercontent.com/srhovo/GW-CLUB/main/data.js" | grep -c "id:"
   # CF 线上版陪玩数量
   curl -s "https://gw-club.pages.dev/data.js" | grep -c "id:"
   ```
   两者必须一致。如不一致，说明部署未完成或卡住。

2. **验证关键内容**：
   - 检查 data.js 中 gallery 的 board 分类图片数量是否与本地一致
   - 检查新增的分类（如 guardian/adopt/birthday）是否存在
   - 检查 index.html 中新增的功能代码是否存在

3. **验证资源可访问**：
   ```bash
   # 抽查几张图片的 HTTP 状态
   curl -s -o /dev/null -w "%{http_code}" "https://gw-club.pages.dev/assets/gallery/3708.jpg"
   ```

#### 部署卡住的常见原因与解决

| 现象 | 原因 | 解决方法 |
|------|------|---------|
| 推送后 5 分钟线上仍未更新 | 部署队列拥堵 | 等待 10 分钟后再次验证 |
| 推送后 15 分钟线上仍未更新 | 部署卡住或失败 | 用户在 CF 控制台手动 Retry deployment |
| 部分文件更新了，部分没更新 | 部署异常中断 | 手动 Retry deployment |
| 大文件（>50MB）导致部署失败 | CF 构建超时 | 压缩大文件到 15MB 以内后重新推送 |
| 线上内容是更旧的版本 | CDN 边缘节点缓存 | CF 控制台 Caching → Purge Everything |

#### 用户手动触发重新部署的步骤

如 AI 验证发现部署卡住，必须告知用户按以下步骤操作：

1. 登录 Cloudflare Dashboard (https://dash.cloudflare.com)
2. 进入 Workers & Pages → 选择你的项目（gw-club）
3. 点击 **Deployments** 标签
4. 找到最新的部署记录，点击右侧 **...** 菜单
5. 选择 **Retry deployment**（重试部署）
6. 等待 2-3 分钟后，AI 再次执行部署验证

#### 预防措施

- 控制单个视频文件 < 15MB，总体积 < 200MB
- 避免一次性提交超过 50 个文件，分批提交
- 每次推送后必须执行部署验证（本规范强制要求）
- 如频繁出现部署卡住，考虑使用 GitHub Actions 直接部署到 CF（绕过 CF 自动同步）

---

## ⚫ 七、AI 操作流程标准

当用户要求新增/修改陪玩、服务图片、选图等内容时，AI 必须按以下流程操作：

### 流程1：新增陪玩
1. 确定陪玩的英文 `id`（拼音或英文名，全局唯一）
2. 检查自介卡图片：如超过 300KB 先压缩，重命名为 `{id}.jpg`，放入 `assets/cards/`
3. 检查音介视频：如超过 15MB 先压缩，重命名为 `{id}.mp4`，放入 `assets/voices/`
4. 在 data.js 的 `companions` 数组中添加条目，路径与文件名一致
5. 执行部署前检查清单
6. 提交推送
7. 等待 2-3 分钟后执行部署验证（见 6.4 节），确认线上已更新

### 流程2：更新服务清单图片
1. 压缩图片到 300KB 以内，英文命名，放入 `assets/services/`
2. 在 data.js 对应分类的 `images` 数组中添加/修改路径
3. 执行检查清单，提交推送
4. 等待 2-3 分钟后执行部署验证（见 6.4 节）

### 流程3：新增选图分类
1. 在 data.js 的 `gallery` 对象中添加新分类（key为英文，images为空数组）
2. 在 index.html 的 `GALLERY_TABS` 数组中添加对应标签（按指定顺序）
3. 如分类超过6个，确保选图分类栏有 `seg-scrollable` 样式可横向滚动
4. 执行检查清单，提交推送
5. 等待 2-3 分钟后执行部署验证（见 6.4 节）

### 流程4：批量重命名（中文改英文）
1. 从 data.js 提取所有陪玩的 id 和当前文件路径
2. 用 `git mv` 重命名文件（保留 git 历史）
3. 批量替换 data.js 中的路径
4. 执行检查清单，确认无中文文件名残留
5. 提交推送
6. 等待 2-3 分钟后执行部署验证（见 6.4 节）

---

## 📌 附录：常见错误与修复

| 错误现象 | 原因 | 修复方法 |
|---------|------|---------|
| 图片显示空白/裂图 | 中文文件名导致 CF 返回 400 | 重命名为英文 id，更新 data.js 路径 |
| 视频半天加载不出来 | 视频文件过大（>15MB） | 压缩视频到 10MB 以内 |
| 页面整体加载慢 | 大量文件同时请求 + 总体积大 | 压缩所有图片视频，控制总体积 <200MB |
| 部署后内容没更新 | CF 部署卡住或 CDN 缓存 | Retry deployment 或 Purge Cache |
| 筛选后陪玩消失 | 分路/价格不在预设列表中 | 确保 lanes/price 从预设中选择 |
| 自动探测到错误图片 | SPA 回退导致不存在路径返回200 | 确保 content-type 校验逻辑存在（已内置） |
| 选图区图片不显示 | CF 部署卡住，data.js 仍是旧版本 | 执行部署验证，如卡住则手动 Retry deployment |
| 新增分类不显示 | 同上，部署未完成 | 等待部署完成或手动重试 |
| 线上陪玩数量少于本地 | 部署卡住或失败 | 对比版本号，手动 Retry deployment |
| 推送后长时间无变化 | CF 构建队列拥堵或大文件超时 | 检查文件大小，手动 Retry，必要时 Purge Cache |

---

**本规范自创建之日起生效，AI 助手操作本项目时必须严格遵守。如有疑问，以本文档为准。**
