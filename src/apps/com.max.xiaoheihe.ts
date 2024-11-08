import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.max.xiaoheihe',
  name: '小黑盒',
  groups: [
    // { key: 0 }, 开屏广告 占位
    {
      key: 1,
      name: '功能类-签到成功',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: [
            '[text="签到成功!"]',
            '[id="com.max.xiaoheihe:id/tv_confirm"]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13421535',
        },
      ],
    },
    {
      key: 2,
      name: '通知提示',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.max.xiaoheihe.MainActivity',
          matches:
            '[text*="通知"][id="com.max.xiaoheihe:id/tv_title"] <<2 ViewGroup +2 [id="com.max.xiaoheihe:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/17000645',
        },
      ],
    },
  ],
});
