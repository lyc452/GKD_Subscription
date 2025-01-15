import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.greenpoint.android.mc10086.activity',
  name: '中国移动',
  groups: [
    {
      key: 1,
      name: '更新提示',
      activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
      snapshotUrls: 'https://i.gkd.li/import/12534264',
      rules:
        'Button[text="以后再说"][id^="com.greenpoint.android.mc10086.activity:id/dialog_btn"]',
    },
    {
      key: 2,
      name: '全屏广告',
      activityIds: ['com.mc10086.cmcc.view.tabs.AppTabFragment'],
      rules: [
        {
          key: 1,
          matches: '[id="com.greenpoint.android.mc10086.activity:id/ad_image"] < RelativeLayout + [id="com.greenpoint.android.mc10086.activity:id/close_btn"]',
          exampleUrls: 'https://e.gkd.li/6e3dcd63-43a8-4ae4-bbf6-72977c3d2f43',
          snapshotUrls: 'https://i.gkd.li/import/12662361',
        },
        {
          key: 2,
          matches: 'Image[text="图片跳转"] < View - View >2 Image',
          exampleUrls: 'https://e.gkd.li/dc39efa5-c28e-422e-b3e1-4decab6d0ba7',
          snapshotUrls: 'https://i.gkd.li/i/18422535',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告',
      activityIds: ['com.mc10086.cmcc.view.tabs.AppTabFragment'],
      rules: [
        {
          key: 1,
          matches: '[id="com.greenpoint.android.mc10086.activity:id/drag_img"] + [id="com.greenpoint.android.mc10086.activity:id/close_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/12662265',
        },
        {
          key: 2,
          fastQuery: true,
          matches: '[id="com.greenpoint.android.mc10086.activity:id/up_floor"] + [id="com.greenpoint.android.mc10086.activity:id/iv_close"]',
          exampleUrls: 'https://e.gkd.li/117b5b04-205a-4ef2-ba72-0a5efd45bb85',
          snapshotUrls: 'https://i.gkd.li/i/18422583',
        },
      ],
    },
    {
      key: 10,
      name: '通知提示',
      activityIds: 'com.mc10086.cmcc.base.StartPageActivity',
      rules: [
        {
          matches: '[text*="开启推送通知"] +(2) LinearLayout > [text="取消"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12662213',
            'https://i.gkd.li/import/13327880',
          ],
        },
        {
          quickFind: true,
          matches: '[text="授权提醒"] +3 [text="拒绝"]',
          snapshotUrls: ['https://i.gkd.li/import/13775652'],
        },
      ],
    },
    {
      key: 11,
      name: '权限提示-剪贴板',
      activityIds: ['com.mc10086.cmcc.view.tabs.AppTabFragment'],
      rules: [
        {
          matches:
            '[text*="获取您的"] < LinearLayout +(2) LinearLayout >(2) [text="不允许"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12662251',
            'https://i.gkd.li/import/13775651',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '评价提示',
      activityIds: ['com.mc10086.cmcc.view.tabs.AppTabFragment'],
      rules: [
        {
          matches:
            '@[id="com.greenpoint.android.mc10086.activity:id/close_img"][desc="关闭"] - RelativeLayout >(2) [text$="好评"]',
          snapshotUrls: ['https://i.gkd.li/import/12662345'],
        },
      ],
    },
  ],
});
