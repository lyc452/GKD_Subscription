import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.huawei.hwid',
  name: 'HMS Core',
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
          matches: '[id="com.huawei.hwid:id/hiad_skip_text"]',
          snapshotUrls: 'https://i.gkd.li/i/16114493',
        },
      ],
    },
    {
      // 我不知道这个广告从哪里来的，它出乎意料地跳出并覆盖在Gspace上面
      key: 1,
      name: '全屏广告',
      activityIds: [
        'com.huawei.openalliance.ad.ppskit.activity.InnerPPSInterstitialAdActivity',
      ],
      rules: [
        {
          matches: '[id="com.huawei.hwid:id/interstitial_close"]',
          snapshotUrls: ['https://i.gkd.li/import/12709068'],
        },
      ],
    },
  ],
});
