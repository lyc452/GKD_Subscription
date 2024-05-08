import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.huawei.appmarket',
  name: '华为应用市场',
  groups: [
    {
      name: '通知提示',
      key: 0,
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
      key: 1,
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
