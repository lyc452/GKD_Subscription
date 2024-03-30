import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zzw.october',
  name: '志愿汇',
  groups: [
    {
      key: 1,
      quickFind: true,
      name: '开屏广告-补充',
      desc: '右上角圆形跳过按钮',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.zzw.october.LaunchActivity',
      rules: [
        {
          matches:
            'FrameLayout[id="com.zzw.october:id/out_ad"] > FrameLayout > FrameLayout > @View',
          snapshotUrls: 'https://i.gkd.li/import/14810136',
        },
      ],
    },
    {
      key: 2,
      name: '主页广告',
      activityIds: ['com.zzw.october.MainActivity'],
      rules: [
        {
          key: 1,
          quickFind: true,
          matches:
            '[id="com.zzw.october:id/interact_ad_root"] >n ImageView[id="com.zzw.october:id/iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12842675',
            'https://i.gkd.li/import/12869369',
          ],
        },
        {
          key: 2,
          quickFind: true,
          activityIds: 'com.zzw.october.MainActivity',
          matches:
            'FrameLayout[id="android:id/content"] > FrameLayout > FrameLayout > FrameLayout > FrameLayout > FrameLayout > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/14810149',
        },
      ],
    },
  ],
});
