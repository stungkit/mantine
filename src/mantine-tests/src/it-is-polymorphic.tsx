import React from 'react';
import { render } from '@testing-library/react';

function TestComponent(props: any) {
  return <mark data-test-prop {...props} />;
}

export function itIsPolymorphic(
  Component: React.ElementType,
  requiredProps: Record<string, any>,
  selector?: string
) {
  const getTarget = (container: HTMLElement): HTMLElement =>
    selector ? container.querySelector(selector) : (container.firstChild as HTMLElement);

  it('is polymorphic', () => {
    const { container: withTag } = render(
      <Component component="a" href="https://mantine.dev" {...requiredProps} />
    );
    const { container: withComponent } = render(
      <Component component={TestComponent} {...requiredProps} />
    );

    expect(getTarget(withTag).tagName).toBe('A');
    expect(getTarget(withComponent).tagName).toBe('MARK');
  });
}
