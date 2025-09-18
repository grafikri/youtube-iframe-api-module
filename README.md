# YouTube IFrame Api Module

This is an npm module version of the YouTube Player API for IFrame embeds. It automatically adds the iframe_api script to the browser. You can then refer to <a href="https://developers.google.com/youtube/iframe_api_reference" target="_blank">the YouTube Player API for IFrame API reference</a>.

> For the React version you can check out [react-youtube-iframe-player](https://github.com/grafikri/react-youtube-iframe-player).

## Installation

```bash
npm install youtube-iframe-api-module
```


```js
import { loadScript } from 'youtube-iframe-api-module';

loadScript(() => {
  // Player 1
  const player = new YT.Player('player-one', {
    height: '390',
    width: '640',
    videoId: 'M7lc1UVf-VE'
  });
})

loadScript(() => {
  // Player 2
  const player = new YT.Player('player-two', {
    height: '390',
    width: '640',
    videoId: 'M7lc1UVf-VE'
  });
})
```

