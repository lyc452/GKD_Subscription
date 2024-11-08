import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.dlxx.mam.Internal',
  name: 'i国网',
  groups: [
    {
      key: 1,
      name: '开屏广告-国网学堂',
      matchTime: 5000,
      actionMaximum: 1,
      rules: [
        {
          activityIds: 'com.tencent.wework.common.web.JsWebActivity',
          matches: '[text="国网学堂"] >2 [text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/i/17677891',
        },
      ],
    },
  ],
});
