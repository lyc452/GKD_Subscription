import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.facebook.katana',
  name: 'Facebook',
  groups: [
    {
      key: 1,
      name: '通知提示',
      rules: [
        {
          key: 1,
          activityIds: 'com.facebook.katana.activity.FbMainTabActivity',
          matches: '[text="打开通知"] +3 [desc="以后再说"]',
          exampleUrls: 'https://e.gkd.li/c2eab217-8690-4437-b009-5bafca668c03',
          snapshotUrls: 'https://i.gkd.li/i/17878479',
        },
        {
          key: 2,
          activityIds: 'com.facebook.katana.activity.FbMainTabActivity',
          matches:
            '[text*="你的推送通知已关闭"] - ViewGroup[visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/354c4f7b-cc20-4079-ac8b-b18a477dae60',
          snapshotUrls: 'https://i.gkd.li/i/17878489',
        },
      ],
    },
    {
      key: 2,
      name: '分段广告',
      desc: '步骤较多',
      enable: false,
      rules: [
        {
          key: 1,
          activityIds: 'com.facebook.katana.activity.FbMainTabActivity',
          matches: '[text*="赞助内容"] + [desc="更多"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/a9fdb2b1-7e2c-41b1-9917-d3fc71663549',
          snapshotUrls: 'https://i.gkd.li/i/17878497',
        },
        {
          key: 2,
          preKeys: 1,
          activityIds: 'com.facebook.katana.activity.FbMainTabActivity',
          matches: '[text="隐藏广告"]',
          exampleUrls: 'https://e.gkd.li/92c34a0f-a977-47f2-a61a-5e69db5227c0',
          snapshotUrls: 'https://i.gkd.li/i/17878499',
        },
        {
          key: 3,
          preKeys: 2,
          activityIds: 'com.facebook.katana.activity.FbMainTabActivity',
          matches: '[text="反复出现"]',
          exampleUrls: 'https://e.gkd.li/b5d5038e-d0a2-4ef8-b61c-dda73790774e',
          snapshotUrls: 'https://i.gkd.li/i/17878501',
        },
        {
          key: 4,
          preKeys: 3,
          activityIds: 'com.facebook.katana.activity.FbMainTabActivity',
          matches: '[text="完成"]',
          exampleUrls: 'https://e.gkd.li/91977c44-4980-467b-ad9b-867788e1e30d',
          snapshotUrls: 'https://i.gkd.li/i/17878502',
        },
      ],
    },
  ],
});
