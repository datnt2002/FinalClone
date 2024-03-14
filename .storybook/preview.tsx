import type { Preview } from "@storybook/react";
import "./../src/app/globals.css";
import * as DocBlock from '@storybook/blocks'
import React from "react";
import { withThemeByClassName } from "@storybook/addon-themes";

const preview: Preview = {
  parameters: {
    docs: {
      page: () => <>
      <DocBlock.Title></DocBlock.Title>
      <DocBlock.Description></DocBlock.Description>
      <DocBlock.Primary></DocBlock.Primary>
      <DocBlock.Controls></DocBlock.Controls>
      </>
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [withThemeByClassName({
      themes: {
          // nameOfTheme: 'classNameForTheme',
          light: '',
          dark: 'dark',
      },
      defaultTheme: 'light',
  })]
};

export default preview;
