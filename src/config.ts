import categories from './categories';
import globalGroups from './globalGroups';
import apps from './rawApps';
import type { RawSubscription } from './types';

const subsConfig: RawSubscription = {
  id: 0,
  version: 0,
  name: '默认订阅',
  author: 'lisonge',
  supportUri: 'https://github.com/lyc452/subscription',
  updateUrl:
    'https://github.com/lyc452/subscription/blob/main/',
  checkUpdateUrl:
    'https://github.com/lyc452/subscription/blob/main/dist/gkd.version.json',
  globalGroups,
  categories,
  apps,
};

export default subsConfig;
