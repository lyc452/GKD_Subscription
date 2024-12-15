import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cmri.universalapp',
  name: '移动爱家',
  groups: [
    {
      key: 1,
      name: '局部广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: 'com.cmri.universalapp.SmartMainProxyActivity',
          matches: '[id="com.cmri.universalapp:id/index_drag_ad_iv_close"]',
          exampleUrls: 'https://e.gkd.li/8091d12a-5c37-46e9-b744-4227f162ac5c',
          snapshotUrls: 'https://i.gkd.li/i/18140961',
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: 'com.cmri.universalapp.SmartMainProxyActivity',
          matches: '[id="com.cmri.universalapp:id/close_banner"]',
          exampleUrls: 'https://e.gkd.li/4005f704-60f3-474e-9beb-3110b10642d4',
          snapshotUrls: 'https://i.gkd.li/i/18140963',
        },
      ],
    },
  ],
});
