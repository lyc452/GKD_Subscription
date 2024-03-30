import categories from './categories';
import globalGroups from './globalGroups';
import apps from './rawApps';
import type { RawSubscription } from './types';

const subsConfig: RawSubscription = {
  id: 0,
  version: 0,
  name: 'GKD订阅',
  author: 'lyc452',
  supportUri: 'https://github.com/lyc452/subscription',
  updateUrl:
    'https://raw.githubusercontent.com/lyc452/subscription/main/dist/gkd.json5',
  checkUpdateUrl:
    'https://github.com/lyc452/subscription/blob/main/dist/gkd.version.json',
  globalGroups,
  categories,
  apps,
};

export default subsConfig;
