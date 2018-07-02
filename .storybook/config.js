import { configure } from '@storybook/react';

function loadStories() {
  require('../src/components/MusicList/MusicList.stories.js');
}

configure(loadStories, module);
