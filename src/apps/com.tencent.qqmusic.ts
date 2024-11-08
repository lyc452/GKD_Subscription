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
          key: 2,
          matches: '[text="广告"] +n [desc="关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13206534', //歌单页
            'https://i.gkd.li/import/13797001', //我的页
          ],
        },
        {
          key: 3,
          matches:
            '@ImageView - ImageView - RelativeLayout >n [text="听歌入会赢绿钻"||text="摇动点击广告跳转"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13206982',
            'https://i.gkd.li/import/13218134',
          ],
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
      name: '功能类-您未开启高品质音质播放',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
          matches: '[text*="高品质音质"] +2 FrameLayout > [id="com.tencent.qqmusic:id/h_6"]',
          snapshotUrls: 'https://i.gkd.li/i/17678044',
        },
      ],
    },
    {
      key: 1,
      name: '通知提示',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
          matches: '[text*="推送通知" || text*="数字提醒"] +2 [id="com.tencent.qqmusic:id/dwa"]',
          snapshotUrls: [
            'https://i.gkd.li/i/17678045',
            'https://i.gkd.li/i/17678097',
          ],
        },
      ],
    },
  ],
});
