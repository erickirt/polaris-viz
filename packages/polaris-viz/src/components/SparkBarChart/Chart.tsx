import {Fragment} from 'react';
import {useTransition} from '@react-spring/web';
import {
  ANIMATION_MARGIN,
  SparkBarSeries,
  useChartContext,
} from '@shopify/polaris-viz-core';

import {XMLNS} from '../../constants';

import styles from './SparkBarChart.scss';
import type {SparkBarChartProps} from './SparkBarChart';

export function Chart({
  data,
  targetLine,
  accessibilityLabel,
}: SparkBarChartProps) {
  const {shouldAnimate, containerBounds} = useChartContext();
  const {width, height} = containerBounds;

  const viewboxHeight = height + ANIMATION_MARGIN * 2;

  return (
    <Fragment>
      {accessibilityLabel ? (
        <span className={styles.VisuallyHidden}>{accessibilityLabel}</span>
      ) : null}

      <svg
        xmlns={XMLNS}
        aria-hidden
        viewBox={`0 -${ANIMATION_MARGIN} ${width} ${viewboxHeight}`}
        style={{
          transform: `translateY(-${ANIMATION_MARGIN}px)`,
        }}
        className={styles.Svg}
        height={viewboxHeight}
        width={width}
      >
        <SparkBarSeries
          data={data}
          targetLine={targetLine}
          height={height}
          shouldAnimate={shouldAnimate}
          useTransition={useTransition}
          width={width}
        />
      </svg>
    </Fragment>
  );
}
