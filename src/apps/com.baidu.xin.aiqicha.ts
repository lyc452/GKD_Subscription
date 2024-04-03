import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.baidu.xin.aiqicha',
  name: '爱企查',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '更新提示',
      activityIds: [
        'com.baidu.newbridge.fast.MainFastActivity',
        'com.miui.home.launcher.Launcher',
      ],
      rules: '[id="com.baidu.xin.aiqicha:id/update_cancel"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12755738',
        'https://i.gkd.li/import/12755762', // activityId: 'com.miui.home.launcher.Launcher'
      ],
    },
    {
      key: 2,
      name: '通知提示',
      activityIds: 'com.baidu.newbridge.fast.MainFastActivity',
      rules: [
        {
          key: 0,
          matches: '[id="com.baidu.xin.aiqicha:id/notice_dialog_cancel_iv"]',
          snapshotUrls: 'https://i.gkd.li/import/12755733',
        },
        {
          key: 1,
          matches: '@[id="com.baidu.xin.aiqicha:id/close"] +2 [text="打开消息通知"]',
          snapshotUrls: 'https://i.gkd.li/import/12755756',
        },
      ],
    },
  ],
});
