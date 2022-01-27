import React from 'react';
import type { ActionIconProps } from '@mantine/core';
import { ActionIcon } from '@mantine/core';
import useStyles from './ToolbarButton.styles';

type ToolbarButtonProps = {
  /** Control icon */
  children: React.ReactNode;

  /** Quill specific control */
  controls: string;

  /** Value for quill control */
  value?: string;

  /** Disable active styles */
  noActive?: boolean;
} & ActionIconProps<'button'>;

export function ToolbarButton({
  className,
  children,
  controls,
  value,
  noActive,
  ...others
}: ToolbarButtonProps) {
  const { classes, cx } = useStyles({ noActive }, { name: 'RichTextEditor' });

  return (
    <ActionIcon
      className={cx(classes.control, `ql-${controls}`, className)}
      value={value}
      radius={0}
      {...others}
    >
      {children}
    </ActionIcon>
  );
}

ToolbarButton.displayName = '@mantine/rte/ToolbarButton';
