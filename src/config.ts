import categories from './categories';
import globalGroups from './globalGroups';
import apps from './rawApps';
import type { RawSubscription } from './types';

const subsConfig: RawSubscription = {
  id: 404,
  version: 1,
  name: 'LYC\'s GKD Subscription',
  author: 'lyc452',
  supportUri: 'https://github.com/lyc452/GKD_Subscription',
  checkUpdateUrl: './gkd.version.json5',
  globalGroups,
  categories,
  apps,
};

export default subsConfig;
