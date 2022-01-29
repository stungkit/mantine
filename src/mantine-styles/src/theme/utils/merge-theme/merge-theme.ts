import type { MantineThemeOverride, MantineThemeBase, MantineTheme } from '../../types';
import { attachFunctions } from '../../functions/attach-functions';

export function mergeTheme(
  currentTheme: MantineThemeBase,
  themeOverride?: MantineThemeOverride
): MantineTheme {
  if (!themeOverride) {
    return attachFunctions(currentTheme);
  }

  return attachFunctions(
    // @ts-expect-error
    Object.keys(currentTheme).reduce<MantineThemeBase>((acc, key) => {
      if (key === 'headings' && themeOverride.headings) {
        const sizes = themeOverride.headings.sizes
          ? Object.keys(currentTheme.headings.sizes).reduce<MantineThemeBase['headings']['sizes']>(
              (headingsAcc, h) => {
                headingsAcc[h] = {
                  ...currentTheme.headings.sizes[h],
                  ...themeOverride.headings.sizes[h],
                };
                return headingsAcc;
              },
              {}
            )
          : currentTheme.headings.sizes;
        return {
          ...acc,
          headings: {
            ...currentTheme.headings,
            ...themeOverride.headings,
            sizes,
          },
        };
      }

      acc[key] =
        typeof themeOverride[key] === 'object'
          ? { ...currentTheme[key], ...themeOverride[key] }
          : themeOverride[key] || currentTheme[key];
      return acc;
    }, {})
  );
}
