import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hxak.liangongbao',
  name: '链工宝',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id=`com.hxak.liangongbao:id/time_down`]',
    },
    {
      key: 1,
      name: '全屏广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.hxak.liangongbao.login.ui.HomeActivity',
          matches: '[id="com.hxak.liangongbao:id/iv_close"]',
          exampleUrls: 'https://e.gkd.li/5755f383-7dc2-40bc-a747-49e324ef7af9',
          snapshotUrls: 'https://i.gkd.li/i/17770893',
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.hxak.liangongbao.login.ui.HomeActivity',
          matches: '[text="暂不更新"]',
          exampleUrls: 'https://e.gkd.li/60d0bef4-987e-4d6a-90c5-3024a43ca81d',
          snapshotUrls: 'https://i.gkd.li/i/18140953',
        },
      ],
    },
  ],
});
