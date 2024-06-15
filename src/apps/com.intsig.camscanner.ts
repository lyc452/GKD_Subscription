import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.intsig.camscanner',
  name: '扫描全能王',
  groups: [
    {
      key: 0,
      name: '开屏vip提示',
      desc: '缺少快照',
      activityIds: 'com.intsig.camscanner.guide.guidevideo.GuideVideoActivity',
      rules: '[id=`com.intsig.camscanner:id/tv_drop_cnl_close_new`]',
    },
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
      name: '全屏广告-扫描达人礼',
      matchTime: 10000,
      rules: [
        {
          quickFind: true,
          activityIds: 'com.intsig.camscanner.DocumentActivity',
          matches: '[text="扫描达人礼"] +n [id="com.intsig.camscanner:id/tv_cancel"][text="放弃优惠"]',
          snapshotUrls: 'https://i.gkd.li/i/15847787',
        },
      ],
    },
  ],
});
