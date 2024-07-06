import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.huawei.appmarket',
  name: '华为应用市场',
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
          activityIds: 'com.huawei.appmarket.MainActivity',
          matches: '[id="com.huawei.appmarket:id/clock_layout"] > [text*="跳过"]',
          snapshotUrls: 'https://i.gkd.li/i/16114723',
        },
      ],
    },
    {
      name: '通知提示',
      key: 1,
      quickFind: true,
      matchTime: 10000,
      rules: [
        {
          matches: 'Button[text="开启通知权限"] - Button[text="以后再说"]',
          snapshotUrls: 'https://i.gkd.li/import/13807002',
          activityIds:
            'com.huawei.appgallery.jointmessage.jointmessage.impl.activity.NotificationSwitchDialogActivity',
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '@[text="以后再说"] + [text="立即更新"]',
      snapshotUrls: 'https://i.gkd.li/import/13228520',
    },
  ],
});
