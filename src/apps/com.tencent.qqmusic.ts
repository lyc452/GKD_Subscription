import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.qqmusic',
  name: 'QQ音乐',
  groups: [
    {
      key: 1,
      name: '局部广告',
      activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
      rules: [
        {
          key: 1,
          matches: '[text="广告"] +n [desc="关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13206534', //歌单页
            'https://i.gkd.li/import/13797001', //我的页
          ],
        },
        {
          key: 2,
          matches:
            '@ImageView - ImageView - RelativeLayout >n [text="听歌入会赢绿钻"||text="摇动点击广告跳转"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13206982',
            'https://i.gkd.li/import/13218134',
          ],
        },
        {
          key: 3,
          activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
          matches:
            '[id="com.tencent.qqmusic:id/hs"] > [id="com.tencent.qqmusic:id/bdc"] >6 ImageView[visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/04acb86a-b611-4bf6-a2fe-abc5e27b4156',
          snapshotUrls: 'https://i.gkd.li/i/18422785',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-臻品音质',
      quickFind: true,
      activityIds: 'com.tencent.qqmusic.activity.TranslucentWebViewActivity',
      rules: 'View[id="js_close_btn"][desc="关闭"]',
      snapshotUrls: 'https://i.gkd.li/import/13115121',
    },
    {
      key: 3,
      name: '功能类-内测体验弹窗',
      desc: '点击[不再提醒]',
      activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
      quickFind: true,
      rules: '[text="抢先体验"] -2 [text="不再提醒"]',
      snapshotUrls: 'https://i.gkd.li/import/13178485',
    },
    {
      key: 4,
      name: '功能类-免流弹窗',
      desc: '点击[流量够用]',
      activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
      quickFind: true,
      rules: '[text="流量够用"]',
      snapshotUrls: 'https://i.gkd.li/import/13197868',
    },
    {
      key: 5,
      name: '功能类-高品质音质',
      rules: [
        {
          key: 1,
          quickFind: true,
          activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
          matches:
            '[text*="高品质音质"] +2 FrameLayout > [id="com.tencent.qqmusic:id/h_6"]',
          snapshotUrls: 'https://i.gkd.li/i/17678044',
        },
        // {
        //   key: 2,
        //   activityIds:
        //     'com.tencent.qqmusic.business.playernew.view.NewPlayerActivity',
        //   matches:
        //     '[id="com.tencent.qqmusic:id/fet"] >4 ImageView[width=height][width<150]',
        //   未知的语法错误
        //   exampleUrls: 'https://e.gkd.li/a26966c1-da4c-4e31-a139-cb655c657072',
        //   snapshotUrls: 'https://i.gkd.li/i/20530589',
        // },
      ],
    },
    {
      key: 6,
      name: '通知提示',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
          matches:
            '[text*="推送通知" || text*="数字提醒"] +2 [id="com.tencent.qqmusic:id/dwa"]',
          snapshotUrls: [
            'https://i.gkd.li/i/17678045',
            'https://i.gkd.li/i/17678097',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '功能类-开启空间音频',
      rules: [
        {
          activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
          matches:
            '[id="com.tencent.qqmusic:id/f61"] >4 ImageView +2 ImageView',
          exampleUrls: 'https://e.gkd.li/7cdd60af-2a05-4f4b-bb44-16bd16854678',
          snapshotUrls: 'https://i.gkd.li/i/18422781',
        },
      ],
    },
    {
      key: 8,
      name: '功能类-首页VIP甄选馆横幅',
      rules: [
        {
          activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
          matches:
            'FrameLayout[desc="${insertPos}_${adList[0].getAdId()}"] >6 TextView[visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/629663b3-3ab3-48d6-8769-16d864dd7889',
          snapshotUrls: 'https://i.gkd.li/i/18422791',
        },
      ],
    },
    {
      key: 9,
      name: '局部广告-Dolby Atoms',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
          matches: '[text="切换音质"] + * > [id="com.tencent.qqmusic:id/hvm"]',
          exampleUrls: 'https://e.gkd.li/28be9fa3-d6bb-4622-8146-e64ddcc31ecc',
          snapshotUrls: 'https://i.gkd.li/i/20530574',
        },
      ],
    },
  ],
});
