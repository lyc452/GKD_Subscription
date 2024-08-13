import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.kaoshibaodian.app',
  name: '考试宝',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      resetMatch: 'app',
      matchTime: 5000,
      actionMaximum: 1,
      rules: [
        {
          activityIds: 'ksbd.app.category.SplashActivity',
          matches:
            '[id="com.kaoshibaodian.app:id/splashImageBackgroundView"] >3 View',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-首页',
      rules: [
        {
          activityIds: 'ksbd.app.home.HomeActivity',
          matches:
            '[text="查看详情"] - View < FrameLayout - FrameLayout >2 ImageView',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-题库详情页',
      rules: [
        {
          activityIds: 'ksbd.app.exercise.ExerciseAct',
          matches:
            '[id="com.kaoshibaodian.app:id/ad_layout"] >6 ImageView[visibleToUser=true]',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-答题页',
      rules: [
        {
          activityIds: 'ksbd.quiz.QuizActivity',
          matches: '[id="com.kaoshibaodian.app:id/ad_layout"] >12 Image',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-开通会员提示',
      desc: '自动关闭答题页下方的开通会员提示',
      rules: [
        {
          quickFind: true,
          activityIds: 'ksbd.quiz.QuizActivity',
          matches: '[id="com.kaoshibaodian.app:id/close_iv"]',
        },
      ],
    },
  ],
});
