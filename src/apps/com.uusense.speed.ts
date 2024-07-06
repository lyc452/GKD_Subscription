import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.uusense.speed',
  name: '测网速UUSpeed',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      actionMaximum: 1,
      matchTime: 5000,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.uusense.uuspeed.ui.activity.SplashActivity',
          matches: '[id="com.uusense.speed:id/splash_container"] >3 View',
          snapshotUrls: 'https://i.gkd.li/i/16114879',
        },
      ],
    },
  ],
});