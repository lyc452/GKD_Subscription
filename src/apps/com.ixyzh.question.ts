import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ixyzh.question',
  name: '小包搜题',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      actionMaximum: 1,
      matchTime: 5000,
      resetMatch: 'app',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.ixyzh.question.ui.SplashActivity',
          matches: '[text="关闭广告"]',
          snapshotUrls: 'https://i.gkd.li/i/17000667',
        },
        {
          activityIds: 'com.ixyzh.question.ui.SplashActivity',
          matches:
            '[id="com.ixyzh.question:id/action_bar_root"] > [id="android:id/content"] >2 [id="com.ixyzh.question:id/splash_container"] >3 View[id=null]',
        },
      ],
    },
    {
      key: 1,
      name: '局部广告',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.ixyzh.question.HomeActivity',
          matches: '[text="关闭广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/17000680',
            'https://i.gkd.li/i/17000681',
            'https://i.gkd.li/i/17000682',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '分段广告-首页',
      rules: [
        {
          key: 1,
          activityIds: 'com.ixyzh.question.HomeActivity',
          matches: 'ImageView[desc="ad_logo"] - ImageView[desc="close"]',
        },
        {
          key: 2,
          preKeys: 1,
          fastQuery: true,
          activityIds: 'com.ixyzh.question.HomeActivity',
          matches: '[text="不感兴趣"]',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '[id="com.ixyzh.question:id/ll_ad_close"] > [text="关闭广告"]',
        },
      ],
    },
  ],
});
