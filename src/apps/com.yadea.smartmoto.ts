import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.yadea.smartmoto',
  name: '雅迪智行',
  groups: [
    {
      key: 1,
      name: '通知提示',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.yadea.smartmoto.main.view.MainActivity',
          matches: '[text*="通知"] +3 * > [text="以后再说"]',
          exampleUrls: 'https://e.gkd.li/91b75717-c9b1-4437-86a8-9b410816619f',
          snapshotUrls: 'https://i.gkd.li/i/19647452',
        },
      ],
    },
  ],
});
