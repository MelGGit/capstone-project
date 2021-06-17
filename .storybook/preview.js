import React from 'react';
import GlobalStyles from '../src/GlobalStyles';
import { RecoilRoot } from 'recoil';
import { MemoryRouter } from 'react-router-dom';


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
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