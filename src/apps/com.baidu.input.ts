import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.baidu.input',
  name: '百度输入法',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.baidu.input.ImeAppMainActivity',
          matches: 'FrameLayout[id="com.baidu.input:id/sdk_splash_ad"] >3 View',
          snapshotUrls: 'https://i.gkd.li/i/15858223',
        },
      ],
    },
  ],
});