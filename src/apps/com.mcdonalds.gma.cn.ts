import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mcdonalds.gma.cn',
  name: '麦当劳',
  groups: [
    {
      key: 1,
      name: '通知提示',
      desc: '选择[取消]',
      quickFind: true,
      activityIds: 'com.mcdonalds.gma.cn.activity.MainActivity',
      rules: '[id="com.mcdonalds.gma.cn:id/tv_cancel"][text="取消"]',
      snapshotUrls: 'https://i.gkd.li/import/13259242',
    },
    {
      key: 2,
      name: '功能类-优惠券弹窗',
      desc: '自动关闭',
      quickFind: true,
      rules: [
        {
          activityIds: 'com.mcdonalds.gma.cn.activity.MainActivity',
          matches: '[id="com.mcdonalds.gma.cn:id/iv_ad_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13465873',
        },
      ],
    },
    {
      name: '权限提示-获取您的设备信息',
      desc: '拒绝此权限不影响APP使用',
      key: 3,
      quickFind: true,
      rules: [
        {
          matches: 'TextView[text*="设备信息"] + TextView + LinearLayout > TextView[id="com.mcdonalds.gma.cn:id/tv_cancel"]',
          snapshotUrls: 'https://i.gkd.li/import/13465868',
          activityIds: 'com.mcdonalds.gma.cn.activity.MainActivity',
        },
      ],
    },
  ],
});
