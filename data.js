/* ============================================================
   养成系club · 内容数据文件
   ------------------------------------------------------------
   【更新指南】
   1. 自介卡图片（2096:1279 ≈ 5:3）→ assets/cards/
   2. 音介视频（建议转成 .mp4，比例 5:3）→ assets/voices/
   3. 在 companions 添加/修改条目，保存后 git push 即可
   4. 管理层头像 → assets/management/（按职位命名，见下方 management 注释）
   5. 服务清单图片（价格表/预存表/结算规则/礼物单/活动图）→ assets/services/
      每栏可放多张图，每张图都有自己的自定义名字，见下方 services 注释
   6. 选图（板卡/冠卡/礼物单/开黑卡/成长录/结单小票）→ assets/gallery/
      每张图除了名字，还能填一句「获取条件」，见下方 gallery 注释
   ⚠️ 图片建议先压缩到合理尺寸再上传（长边 1000~1600px 足够清晰），
      原图直出（几千像素、好几 MB）会让页面加载变慢，比例不受限制。
   ============================================================ */

window.APP_DATA = {

  /* 更新日期（页面会展示） */
  updateDate: '2026-08-27',

  /* 俱乐部标题图（图片形式展示）
     直接把图片命名为 assets/club-logo.png 上传即可自动生效（也支持 club-title.png / club.png，
     .jpg/.jpeg/.webp 均可）；或在此手动填路径。未上传时页面以「养成系club」文字兜底展示 */
  club: {
    logo: ''
  },

  /* 分路分类（可按需增删） */
  lanes: ['打野', '中单', '射手', '边路', '辅助'],

  /* 价位筛选（可按需增删） */
  prices: [15, 20, 25, 30, 35],

  /* ================= 陪玩列表 =================
     字段：id / name / lane(单分路) 或 lanes(多分路数组) / price / tags / intro / image / video */
  companions: [
    { id: 'yuji', name: '雨季', lanes: ['打野', '中单'], price: 30, tags: ['顶技', '镜'], intro: '无忧无虑 · 主玩英雄：镜', image: 'assets/cards/yuji.jpeg', video: 'assets/voices/yuji.mp4' }
  ],

  /* ================= 服务清单 =================
     价格表/预存表/结算规则/礼物单/活动图 —— 每一栏都支持「多张图片」，不限数量：
     · images 是数组，每张图片一个 { name, image }：
         name  —— 自定义标题（显示在图片上方，也用于搜索）
         image —— 图片路径（assets/services/xxx.jpg）或外链
     · 新增一张图片：直接在对应 images 数组里加一行 { name:'新的名字', image:'assets/services/新文件名.jpg' }，
       图片放进 assets/services/ 文件夹，保存后 git push 即可（因为是纯静态站点，没法自动扫描文件夹，
       所以每张图都要在这里写一行，但只是复制粘贴一行的工作量）
     · images 留空数组 [] 时页面显示「待上传」
     · items 为文字版数据（仅价格表/预存表/礼物单有），不在页面直接展示，只用于搜索匹配 */
  services: {
    price: {
      images: [
        { name: '常驻价格表', image: 'assets/services/price.jpg' }
      ],
      items: [
        { name: '娱乐陪玩',   meta: '随便玩玩 · 开心最重要', price: '15r/局' },
        { name: '五排车队',   meta: '满编车队 · 氛围拉满',   price: '18r/局' },
        { name: '排位上分',   meta: '星耀→王者 · 全程稳车', price: '20r/局' },
        { name: '教学陪玩',   meta: '包教包会 · 语音指导',   price: '25r/局' },
        { name: '巅峰赛陪玩', meta: '2000分以下 · 稳带',     price: '30r/局' },
        { name: '通宵包段',   meta: '专业高效 · 通宵在线',   price: '40r/局' }
      ]
    },
    prepaid: {
      images: [
        { name: '预存表', image: 'assets/services/prepaid.jpg' }
      ],
      items: [
        { name: '充 100',  amount: '到账 120',  bonus: '+20',  note: '新人尝鲜' },
        { name: '充 200',  amount: '到账 260',  bonus: '+60',  note: '人气之选' },
        { name: '充 500',  amount: '到账 680',  bonus: '+180', note: '畅玩推荐' },
        { name: '充 1000', amount: '到账 1500', bonus: '+500', note: '老板专属' }
      ]
    },
    activity: {
      images: [
        { name: '新人首单8折', image: 'https://aka.doubaocdn.com/s/doUBGAHta4' }
      ]
    },
    gift: {
      images: [
        { name: '常规礼物单', image: 'assets/services/gift.jpg' }
      ],
      items: [
        { name: '小心心',   price: '1r',   color: '#E98A8A', ch: '心' },
        { name: '荧光棒',   price: '5r',   color: '#E0A24C', ch: '荧' },
        { name: '玫瑰',     price: '9r',   color: '#D97A9A', ch: '玫' },
        { name: '豪华跑车', price: '50r',  color: '#5B8BD9', ch: '跑' },
        { name: '热气球',   price: '66r',  color: '#9A7BD9', ch: '球' },
        { name: '浪漫火箭', price: '100r', color: '#E08A4C', ch: '火' },
        { name: '梦幻城堡', price: '520r', color: '#4C9AD9', ch: '堡' }
      ]
    },
    settlement: {
      images: [
        { name: '结算规则', image: 'assets/services/settlement.jpg' }
      ]
    }
  },

  /* ================= 选图（收藏卡） =================
     板卡/冠卡/礼物单/开黑卡/成长录/结单小票 —— 用法与服务清单的多图片系统完全一致：
     images 数组，每张图 { name, image, condition }
       name      —— 自定义标题（显示在缩略图上方，也用于搜索）
       image     —— 图片路径（assets/gallery/xxx.jpg）或外链
       condition —— 获取方式，显示在点开大图后的下方，例如「连续预约满5次即可获得」；
                    每张图的获取方式都不同，留空则不显示这一行
     新增一张图：图片放进 assets/gallery/，再在对应分类的 images 数组里加一行即可
     （这里的"礼物单"跟服务清单里的"礼物单"是两个独立的东西，互不影响） */
  gallery: {
    board:    { images: [] },
    champion: { images: [] },
    gift:     { images: [] },
    squad:    { images: [] },
    growth:   { images: [] },
    receipt:  { images: [] }
  },

  /* ================= 管理层信息 =================
     role 职位 / name 昵称 / v 微信号（点击卡片即可复制） / avatar 头像（可选）
     头像两种方式二选一：
     · 按职位命名自动生效：把头像放进 assets/management/ 并按职位命名，如
       assets/management/团长.jpg、副团.jpg、管理.jpg（.png/.jpeg/.webp 均可），无需改代码
     · 或在下面 avatar 字段直接手动填路径（会优先用职位命名自动检测到的图，其次才用这里填的路径）
     未提供头像时，页面用昵称首字显示占位圆形头像 */
  management: [
    { role: '团长', name: '嘟嘟', v: 'keke-aoo', avatar: 'assets/management/tuanzhang.jpg' },
    { role: '副团', name: '小翎', v: '_Elysia0304', avatar: 'assets/management/futuan.jpg' },
    { role: '管理', name: '小忆', v: 'YIk-xjw-fno4u', avatar: 'assets/management/guanli.jpg' }
  ],
  managementNote: '☁️有任何问题都可以向管理层询问，我们会竭力保证宝宝们的游戏体验',

  /* ================= 注意事项（左上角问好弹窗） ================= */
  notes: {
    title: '🎀注意事项𝜗𝜚˚⋆𓈈 𐙚 ̊˚⋆𓈈',
    items: [
      '双轨结算取低 小时单全段位无溢价',
      '最后结算以同车最高🌟板宝为准',
      '养成系支持混团组车，但需他团陪玩至少为技术级别以上o！',
      '游戏中宝宝若出现挂机、中途退出，输赢全结',
      '若强制陪玩选择非主玩分路及不常用英雄，输赢全结'
    ]
  }
};
