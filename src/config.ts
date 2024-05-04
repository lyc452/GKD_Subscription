import categories from './categories';
import globalGroups from './globalGroups';
import apps from './rawApps';
import type { RawSubscription } from './types';

const subsConfig: RawSubscription = {
  id: 404,
  version: 1,
  name: 'LYC\'s GKD Subscription',
  author: 'lyc452',
  supportUri: 'https://github.com/lyc452/subscription',
  updateUrl:
    'https://raw.githubusercontent.com/lyc452/subscription/main/dist/gkd.json5',
  checkUpdateUrl:
    'https://raw.githubusercontent.com/lyc452/subscription/main/dist/gkd.version.json',
  globalGroups,
  categories,
  apps,
};

export default subsConfig;
