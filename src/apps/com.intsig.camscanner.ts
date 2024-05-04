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
  ],
});
