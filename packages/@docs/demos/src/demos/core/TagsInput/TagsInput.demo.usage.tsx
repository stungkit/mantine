import React from 'react';
import { MantineDemo } from '@mantinex/demo';
import { TagsInput } from '@mantine/core';

const code = `
import { TagsInput } from '@mantine/core';

function Demo() {
  return <TagsInput label="Press Enter to submit a tag" placeholder="Enter tag" />;
}
`;

function Demo() {
  return <TagsInput label="Press Enter to submit a tag" placeholder="Enter tag" />;
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
