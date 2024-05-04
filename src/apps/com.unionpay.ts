import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.unionpay',
  name: '云闪付',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      activityIds: ['com.unionpay.base.UPDialog'],
      rules: [
        {
          matches: '@[text="稍候再说"] + [text="立即更新"]',
          snapshotUrls: 'https://i.gkd.li/import/12727278',
        },
      ],
    },
    {
      key: 2,
      name: '分段广告-支付完成界面',
      quickFind: true,
      activityIds: 'com.unionpay.activity.react.UPActivityReactNative',
      rules: [
        {
          key: 0,
          matches: '[id="bannerBox"] > @View[clickable=true] > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13070564',
        },
        {
          preKeys: 0,
          key: 1,
          matches: '[text="关闭广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13070974',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告',
      // matchTime: 10000, 部分广告不在10s内
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      activityIds: ['com.unionpay.activity.UPActivityMain'],
      rules: [
        {
          matches:
            '[id="com.unionpay:id/frog_float"] >2 [id="com.unionpay:id/close_view"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/12695699',
        },
      ],
    },
    {
      key: 4,
      name: '定位提示',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.unionpay.base.UPDialog',
          matches: '[text$="想访问您的位置信息"] < * +2 LinearLayout > [id="com.unionpay:id/btn_cancel"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/12695773',
        },
        {
          activityIds: 'com.unionpay.activity.UPActivityMain',
          matches: '[id="com.unionpay:id/locate_iv_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13634882',
        },
      ],
    },
    {
      key: 5,
      name: '通知提示',
      quickFind: true,
      activityIds: ['com.unionpay.base.UPDialog'],
      rules: [
        {
          matches:
            '[text="开启消息通知"] < * + [id="com.unionpay:id/view_alert_cancel"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/12695736',
        },
      ],
    },
    {
      key: 6,
      name: '功能类-天天签到-获得新勋章提示',
      desc: '点击左上角返回',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.unionpay.cordova.UPActivityCordovaWeb',
          matches:
            'WebView[text="天天签到"] TextView[text="炫耀一下"] + TextView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13440341',
        },
      ],
    },
    {
      key: 7,
      name: '全屏广告-我的页面',
      matchTime: 10000,
      actionMaximum: 1,
      activityIds: 'com.unionpay.activity.UPActivityMain',
      rules:
        '[id="com.unionpay:id/container"] + [id="com.unionpay:id/image"][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/13440341', //快照链接有误
    },
    {
      key: 8,
      quickFind: true,
      name: '全屏广告-领取优惠弹窗',
      desc: '点击X',
      rules: [
        {
          activityIds: 'com.unionpay.cordova.UPActivityCordovaWeb',
          matches:
            '[id="com.unionpay:id/view_content_container"] View[text="关闭按钮"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13848688',
        },
      ],
    },
  ],
});
