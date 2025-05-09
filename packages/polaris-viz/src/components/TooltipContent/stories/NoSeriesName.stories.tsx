import {DARK_THEME} from '@shopify/polaris-viz-core';
import type {Story} from '@storybook/react';

export {META as default} from './meta';

import type {TooltipContentProps} from '../../../components';

import {Template} from './data';

export const NoSeriesName: Story<TooltipContentProps> = Template.bind({});

NoSeriesName.args = {
  title: 'Tuesday',
  data: [
    {
      shape: 'Line',
      data: [
        {
          key: 'Sessions from Google ads',
          value: '5250',
          color: DARK_THEME.seriesColors.all[0],
        },
        {
          key: 'Sessions from Facebook ads',
          value: '650',
          color: DARK_THEME.seriesColors.all[1],
        },
      ],
    },
  ],
};
