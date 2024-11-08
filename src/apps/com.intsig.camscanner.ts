import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.intsig.camscanner',
  name: '扫描全能王',
  groups: [
    {
      key: 1,
      name: '局部广告-主页',
      activityIds: 'com.intsig.camscanner.mainmenu.mainactivity.MainActivity',
      rules: [
        {
          key: 1,
          matches:
            '[id="com.intsig.camscanner:id/card_ad_tag"] + [id="com.intsig.camscanner:id/card_close"]',
          snapshotUrls: 'https://i.gkd.li/import/12668813',
        },
        {
          key: 2,
          quickFind: true,
          matches: '[id="com.intsig.camscanner:id/card_close"]',
          snapshotUrls: 'https://i.gkd.li/import/15210194',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-文档详情页',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.intsig.camscanner.DocumentActivity',
          matches:
            '[id="com.intsig.camscanner:id/tv_ad"] - [id="com.intsig.camscanner:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/15521471',
        },
      ],
    },
    {
      key: 3,
      name: '功能类-新功能提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          quickFind: true,
          activityIds:
            'com.intsig.camscanner.mainmenu.mainactivity.MainActivity',
          matches:
            '[text="新功能上线"] - [id="com.intsig.camscanner:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/15521511',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-文档详情页',
      matchTime: 10000,
      rules: [
        {
          key: 1,
          quickFind: true,
          activityIds: 'com.intsig.camscanner.DocumentActivity',
          matches:
            '[text="扫描达人礼"] +n [id="com.intsig.camscanner:id/tv_cancel"][text="放弃优惠"]',
          snapshotUrls: 'https://i.gkd.li/i/15847787',
        },
        {
          key: 2,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            'TextView[text="广告"][visibleToUser=true] < View - View <<2 View + View >3 Image[visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/15858222',
        },
      ],
    },
    {
      key: 5,
      enable: true,
      name: '功能类-开通会员',
      rules: [
        {
          key: 1,
          quickFind: true,
          activityIds: 'com.intsig.camscanner.mainmenu.mainactivity.MainActivity',
          matches: '[id="com.intsig.camscanner:id/aciv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/17677829',
        },
        {
          key: 2,
          quickFind: true,
          activityIds: 'com.intsig.camscanner.mainmenu.mainactivity.MainActivity',
          matches: '[id="com.intsig.camscanner:id/iv_unsubscribe_recall_close_icon"]',
          snapshotUrls: 'https://i.gkd.li/i/17677832',
        },
      ],
    },
  ],
});
