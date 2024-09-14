import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ixyzh.question',
  name: '小包搜题',
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
          activityIds: 'com.ixyzh.question.ui.SplashActivity',
          matches: '[text="关闭广告"]',
          snapshotUrls: 'https://i.gkd.li/i/17000667',
        },
      ],
    },
    {
      key: 1,
      name: '局部广告',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.ixyzh.question.HomeActivity',
          matches: '[text="关闭广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/17000680',
            'https://i.gkd.li/i/17000681',
            'https://i.gkd.li/i/17000682',
          ],
        },
      ],
    },
  ],
});
