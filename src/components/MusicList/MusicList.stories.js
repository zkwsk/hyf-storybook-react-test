import React from 'react';

import { storiesOf } from '@storybook/react';


import MusicList from './MusicList';
import artistList1 from '../../../.storybook/data/ArtistApi/artist-list-1';
import artistList2 from '../../../.storybook/data/ArtistApi/artist-list-2';


storiesOf('Music List', module)
  .add('with 3 artists', () => <MusicList artistList={artistList1} />)
  .add('with many artists', () => <MusicList artistList={artistList2} />);
