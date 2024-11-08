import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.maplesoft.companion',
  name: 'Maple计算器',
  groups: [
    {
      key: 1,
      name: '全屏广告-购买会员',
      desc: '自动点击“不用了，谢谢”',
      rules: [
        {
          activityIds: 'io.flutter.embedding.android.FlutterActivity',
          matches: '[desc="不用了，谢谢"]',
          snapshotUrls: [
            'https://i.gkd.li/i/17677788',
            'https://i.gkd.li/i/17677786',
          ],
        },
      ],
    },
  ],
});
