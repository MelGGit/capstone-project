import GlobalStyles from '../src/GlobalStyles';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import { RecoilRoot } from 'recoil';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    viewport: {
      defaultViewport: 'Mobile'
    }
  },
}

export const decorators = [
  (Story) => (
    <>
    <GlobalStyles />
      <RecoilRoot>
          <MemoryRouter initialEntries={['/']}>
            <Story />
          </MemoryRouter>
      </RecoilRoot>
    </>
  ),
];