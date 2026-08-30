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
  updateDate: '2026-08-30',

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
    { id: 'yuji', name: '雨季', lanes: ['打野', '中单'], price: 30, tags: ['顶技', '镜'], intro: '无忧无虑 · 主玩英雄：镜', image: 'assets/cards/yuji.jpeg', video: 'assets/voices/yuji.mp4' },
    { id: 'xiaobei', name: '小北', lanes: ['中单', '打野'], price: 35, tags: ['火舞', '猫咪', '弈星'], intro: '一个宝宝 · 主玩英雄：火舞', image: 'assets/cards/xiaobei.jpg', video: 'assets/voices/xiaobei.mp4' },
    { id: 'yeyu', name: '夜羽', lanes: ['中单', '辅助'], price: 35, tags: ['杨玉环', '嫦娥', '海月', '西施', '大乔'], intro: '温柔话多抽象有梗 · 主玩英雄：杨玉环', image: 'assets/cards/yeyu.jpg', video: 'assets/voices/yeyu.mp4' },
    { id: 'angel', name: 'Angel', lanes: ['中单'], price: 15, tags: ['少司缘瑶西施小乔'], intro: '我保证你是天使是这世界太坏', image: 'assets/cards/Angel.jpg', video: 'assets/voices/Angel.mp4' },
    { id: 'dk', name: 'DK', lanes: ['射手'], price: 30, tags: ['元射龙人阿离'], intro: '希望我们天天开心', image: 'assets/cards/DK.jpg', video: 'assets/voices/DK.mp4' },
    { id: 'emo', name: 'emo', lanes: ['打野'], price: 25, tags: ['橘右京影'], intro: '天天开心', image: 'assets/cards/emo.jpg', video: 'assets/voices/emo.mp4' },
    { id: 'fox', name: 'fox', lanes: ['打野'], price: 20, tags: ['曜公孙离'], intro: '心态稳脾气好想做姐姐的小宝', image: 'assets/cards/fox.jpg', video: 'assets/voices/fox.mp4' },
    { id: 'jiayi', name: '佳一', lanes: ['中单'], price: 30, tags: ['常娥沈梦溪女娲小乔甄姬奔星'], intro: '所愿必至所愿必成', image: 'assets/cards/jiayi.jpg', video: 'assets/voices/jiayi.mp4' },
    { id: 'jiaqi', name: '佳琪', lanes: ['辅助'], price: 15, tags: ['小乔 朵莉亚 孙尚香'], intro: '我们相依默据结心言距为零', image: 'assets/cards/jiaqi.jpg', video: 'assets/voices/jiaqi.mp4' },
    { id: 'doudou', name: '兜兜', lanes: ['射手'], price: 15, tags: ['虞姬狄仁杰元射阿古朵'], intro: '念旧的人终究被困在回忆里', image: 'assets/cards/doudou.jpg', video: 'assets/voices/doudou.mp4' },
    { id: 'chubai', name: '初白', lanes: ['打野'], price: 35, tags: ['公孙离元射孙权'], intro: '124段射精通全部射手', image: 'assets/cards/chubai.jpg', video: 'assets/voices/chubai.mp4' },
    { id: 'qianxun', name: '千寻', lanes: ['中单'], price: 35, tags: ['元射阿离火舞嫁娥'], intro: '等我刷把破晓带你同登彼岸', image: 'assets/cards/qianxun.jpg', video: 'assets/voices/qianxun.mp4' },
    { id: 'junwang', name: '君忘', lanes: ['打野'], price: 30, tags: ['裴擒虎橘子赵云宫本'], intro: '聪明的打野', image: 'assets/cards/junwang.jpg', video: 'assets/voices/junwang.mp4' },
    { id: 'tangsan', name: '唐三', lanes: ['边路'], price: 30, tags: ['夏洛特'], intro: '头很大头很大', image: 'assets/cards/tangsan.jpg', video: 'assets/voices/tangsan.mp4' },
    { id: 'mosheng', name: '墨笙', lanes: ['打野'], price: 20, tags: ['露娜云婆公孙离艾琳孙权'], intro: '水墨丹青画尽世间笙策', image: 'assets/cards/mosheng.jpg', video: 'assets/voices/mosheng.mp4' },
    { id: 'ningque', name: '宁缺', lanes: ['边路'], price: 30, tags: ['影曹操亚连狂铁虽婷夏洛特'], intro: '宁缺舟滥', image: 'assets/cards/ningque.jpg', video: 'assets/voices/ningque.mp4' },
    { id: 'shousi', name: '寿司', lanes: ['射手'], price: 25, tags: ['阿离元射龙人戈雅董孙权'], intro: '心无所依怎么不算流浪', image: 'assets/cards/shousi.jpg', video: 'assets/voices/shousi.mp4' },
    { id: 'xiao1', name: '小1', lanes: ['射手'], price: 15, tags: ['鲁班甄姬'], intro: '好事会发生', image: 'assets/cards/xiao1.jpg', video: 'assets/voices/xiao1.mp4' },
    { id: 'xiao7', name: '小7', lanes: ['边路'], price: 25, tags: ['蛋影小满元歌曹操亚连'], intro: '战坦双修边路独有的浪漫', image: 'assets/cards/xiao7.jpg', video: 'assets/voices/xiao7.mp4' },
    { id: 'xiaou', name: '小u', lanes: ['中单'], price: 30, tags: ['婉儿'], intro: '神秘尿分叉女子', image: 'assets/cards/xiaou.jpg', video: 'assets/voices/xiaou.mp4' },
    { id: 'xiaojue', name: '小决', lanes: ['打野'], price: 15, tags: ['兰陵王元刺阿古朵大禹'], intro: '等你多久我都愿意', image: 'assets/cards/xiaojue.jpg', video: 'assets/voices/xiaojue.mp4' },
    { id: 'xiaoyou', name: '小忧', lanes: ['打野'], price: 30, tags: ['马超靠老虎'], intro: '温柔话多脾气好', image: 'assets/cards/xiaoyou.jpg', video: 'assets/voices/xiaoyou.mp4' },
    { id: 'xiaonian', name: '小念', lanes: ['中单'], price: 15, tags: ['少司缘西施小乔'], intro: '比今天更萌的只有明天的我OvC', image: 'assets/cards/xiaonian.jpg', video: 'assets/voices/xiaonian.mp4' },
    { id: 'xiaoshu', name: '小暑', lanes: ['打野'], price: 25, tags: ['橘子玄策奕星'], intro: '我的存在对你产生意义了吗', image: 'assets/cards/xiaoshu.jpg', video: 'assets/voices/xiaoshu.mp4' },
    { id: 'xiaoyue', name: '小月', lanes: ['中单'], price: 35, tags: ['沈梦溪海月火舞女蜗公孙离'], intro: '中射英雄海会工具中抗压射', image: 'assets/cards/xiaoyue.jpg', video: 'assets/voices/xiaoyue.mp4' },
    { id: 'xiaonan', name: '小楠', lanes: ['射手'], price: 30, tags: ['公孙马龙人蛋蚝元射虞姬'], intro: '温柔的射手万花筒', image: 'assets/cards/xiaonan.jpg', video: 'assets/voices/xiaonan.mp4' },
    { id: 'xiaowen', name: '小温', lanes: ['打野'], price: 30, tags: ['马超老虎镜'], intro: '天天开心', image: 'assets/cards/xiaowen.jpg', video: 'assets/voices/xiaowen.mp4' },
    { id: 'xiaohao', name: '小皓', lanes: ['射手'], price: 30, tags: ['元射阿离守约孙权熬险'], intro: '发育路的一个嘉豪', image: 'assets/cards/xiaohao.jpg', video: 'assets/voices/xiaohao.mp4' },
    { id: 'xiaohui', name: '小辉', lanes: ['射手'], price: 35, tags: ['公孙离敷隐马可元射'], intro: '我有我不能输的理由', image: 'assets/cards/xiaohui.jpg', video: 'assets/voices/xiaohui.mp4' },
    { id: 'xiaoci', name: '小辞', lanes: ['打野'], price: 35, tags: ['韩信露露老虎露娜'], intro: '失误就不配赢', image: 'assets/cards/xiaoci.jpg', video: 'assets/voices/xiaoci.mp4' },
    { id: 'xiaochen', name: '小辰', lanes: ['打野'], price: 25, tags: ['老虎诸葛罪橘子'], intro: '野核蓝领全能', image: 'assets/cards/xiaochen.jpg', video: 'assets/voices/xiaochen.mp4' },
    { id: 'xiaoyi', name: '小逸', lanes: ['中单'], price: 30, tags: ['沈梦溪嫁娥甄姬少司缘'], intro: '知足更接近幸福', image: 'assets/cards/xiaoyi.jpg', video: 'assets/voices/xiaoyi.mp4' },
    { id: 'xiaoxue', name: '小雪', lanes: ['打野'], price: 35, tags: ['老虎靠马超橘子'], intro: '做好自己', image: 'assets/cards/xiaoxue.jpg', video: 'assets/voices/xiaoxue.mp4' },
    { id: 'xiaoyu', name: '小鱼', lanes: ['中单'], price: 15, tags: ['小乔元法少司缘'], intro: '想做块披萨和你心连心', image: 'assets/cards/xiaoyu.jpg', video: 'assets/voices/xiaoyu.mp4' },
    { id: 'dina', name: '帝纳', lanes: ['辅助'], price: 15, tags: ['瑶少司缘艾琳西施'], intro: '用心守护最好的宝宝', image: 'assets/cards/dina.jpg', video: 'assets/voices/dina.mp4' },
    { id: 'qieyi', name: '惬沂', lanes: ['打野'], price: 30, tags: ['老虎靠宫本'], intro: '无事伴心弦所念皆如愿', image: 'assets/cards/qieyi.jpg', video: 'assets/voices/qieyi.mp4' },
    { id: 'zaoshui', name: '早睡', lanes: ['射手'], price: 30, tags: ['阿离龙人元射戈雅香香'], intro: '游射万花筒温柔话多冷静兜底', image: 'assets/cards/zaoshui.jpg', video: 'assets/voices/zaoshui.mp4' },
    { id: 'xingfu', name: '星福', lanes: ['打野'], price: 30, tags: ['常娥影靠猫咪诸葛等'], intro: '嘎嘎话多单口战神有情绪价值', image: 'assets/cards/xingfu.jpg', video: 'assets/voices/xingfu.mp4' },
    { id: 'zhaozhao', name: '昭昭', lanes: ['打野'], price: 35, tags: ['老虎罪韩信大司命云樱元射'], intro: '总有人觉得你的开心比对错更重要', image: 'assets/cards/zhaozhao.jpg', video: 'assets/voices/zhaozhao.mp4' },
    { id: 'qiyi', name: '柒忆', lanes: ['边路'], price: 30, tags: ['夏洛特狂铁马超吃'], intro: '无敌自爆边', image: 'assets/cards/qiyi.jpg', video: 'assets/voices/qiyi.mp4' },
    { id: 'hanbao', name: '汉堡', lanes: ['射手'], price: 30, tags: ['元射老虎李白'], intro: '很高兴遇见你十四亿分之一', image: 'assets/cards/hanbao.jpg', video: 'assets/voices/hanbao.mp4' },
    { id: 'jiangchen', name: '江辰', lanes: ['打野'], price: 35, tags: ['镜老虎阿离戈娅'], intro: '绝对野区入侵射手抗压之神', image: 'assets/cards/jiangchen.jpg', video: 'assets/voices/jiangchen.mp4' },
    { id: 'jiangye', name: '江野', lanes: ['打野'], price: 30, tags: ['马超夏洛特元歌影白起'], intro: '如果是你的话晚一点也没关系', image: 'assets/cards/jiangye.jpg', video: 'assets/voices/jiangye.mp4' },
    { id: 'tiancai', name: '甜菜', lanes: ['中单'], price: 15, tags: ['大乔小乔王昭君阿离'], intro: '极品少女音单口大王', image: 'assets/cards/tiancai.jpg', video: 'assets/voices/tiancai.mp4' },
    { id: 'suisui', name: '碎碎', lanes: ['打野'], price: 25, tags: ['影马超靠'], intro: '温柔话多想陪你', image: 'assets/cards/suisui.jpg', video: 'assets/voices/suisui.mp4' },
    { id: 'qiuqiu', name: '秋秋', lanes: ['边路'], price: 30, tags: ['狂铁马超曹操蛋吨关羽'], intro: '战坦双修', image: 'assets/cards/qiuqiu.jpg', video: 'assets/voices/qiuqiu.mp4' },
    { id: 'luoyue', name: '落月', lanes: ['中单'], price: 35, tags: ['女蜗猫咪火舞西施'], intro: '纲默风趣会照顾姐姐游戏体验', image: 'assets/cards/luoyue.jpg', video: 'assets/voices/luoyue.mp4' },
    { id: 'yu', name: '语', lanes: ['打野'], price: 35, tags: ['老虎阿古朵马超靠'], intro: '2.1W老虎阿古朵嫁娥猫咪', image: 'assets/cards/yu.jpg', video: 'assets/voices/yu.mp4' },
    { id: 'ruantang', name: '软糖', lanes: ['中单'], price: 15, tags: ['公孙离狄仁杰小乔瑶'], intro: '阴雨绵绵你是我的晴天', image: 'assets/cards/ruantang.jpg', video: 'assets/voices/ruantang.mp4' },
    { id: 'shuangjin', name: '霜烬', lanes: ['中单'], price: 20, tags: ['沈梦溪娥奕星'], intro: '同途即心安', image: 'assets/cards/shuangjin.jpg', video: 'assets/voices/shuangjin.mp4' },
    { id: 'gege', name: '鸽鸽', lanes: ['中单'], price: 15, tags: ['阿离香香'], intro: '话多抽象只想做你的开心果', image: 'assets/cards/gege.jpg', video: 'assets/voices/gege.mp4' },
    { id: 'guitu', name: '归途', lanes: ['边路'], price: 35, tags: ['蒙恬','影','狂铁','蚩姹'], intro: '极致战坦 话多温柔有耐心', image: 'assets/cards/guitu.jpg', video: 'assets/voices/guitu.mp4' },
    { id: 'wuyou', name: '伍优', lanes: ['射手','边路'], price: 30, tags: ['李信','马超','元歌','影','元射'], intro: '可以为姐姐做任何事', image: 'assets/cards/wuyou.jpg', video: 'assets/voices/wuyou.mp4' },
    { id: 'xiaoru', name: '小如', lanes: ['中单','辅助'], price: 15, tags: ['西施','瑶','朵莉亚'], intro: '容易掉眼泪也是你的可爱之处', image: 'assets/cards/xiaoru.jpg', video: 'assets/voices/xiaoru.mp4' },
    { id: 'hexinyu', name: '何心渝', lanes: ['打野','中单'], price: 30, tags: ['老虎'], intro: '海盟山誓 只是一瞬间', image: 'assets/cards/hexinyu.jpg', video: 'assets/voices/hexinyu.mp4' },
    { id: 'riji', name: '日记', lanes: ['打野','边路'], price: 15, tags: ['橘右京','老虎','猪八戒'], intro: '希望你能够一直开心', image: 'assets/cards/riji.jpg', video: 'assets/voices/riji.mp4' },
    { id: 'youzhu', name: '幽竹', lanes: ['中单','辅助'], price: 30, tags: ['小乔','王昭君','甄姬','海月'], intro: '有礼貌,爱说话', image: 'assets/cards/youzhu.jpg', video: 'assets/voices/youzhu.mp4' },
    { id: 'posui', name: '破碎', lanes: ['打野'], price: 35, tags: ['镜','老虎'], intro: '温柔心态好 情绪稳定', image: 'assets/cards/posui.jpg', video: 'assets/voices/posui.mp4' },
    { id: 'xiaonian2', name: '小念', lanes: ['边路'], price: 35, tags: ['夏洛特','曹操','影'], intro: '小念念念神', image: 'assets/cards/xiaonian2.jpg', video: 'assets/voices/xiaonian2.mp4' }
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
    board:    { images: [
      { name: '萌萌档案', image: 'assets/gallery/3708.jpg', condition: '' },
      { name: '嘟嘟の水手观察志', image: 'assets/gallery/3709.jpg', condition: '' },
      { name: 'Angel lamb 专属板卡', image: 'assets/gallery/3729.jpg', condition: '' }
    ] },
    champion: { images: [] },
    gift:     { images: [] },
    squad:    { images: [] },
    growth:   { images: [] },
    guardian: { images: [] },
    adopt:    { images: [] },
    birthday: { images: [] },
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
