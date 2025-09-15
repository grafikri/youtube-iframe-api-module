# Youtube IFrame Api Module

This is an npm module version of the YouTube Player API for IFrame embeds. It automatically adds the https://www.youtube.com/iframe_api script to the browser. You can then refer to <a href="https://developers.google.com/youtube/iframe_api_reference" target="_blank">the YouTube Player API for IFrame API reference</a>.

## Installation

```bash
npm install youtube-iframe-api-module
```


The `onYouTubeIframeAPIReady()` method is called when the YouTube IFrame API has loaded and is ready to use.

```js
import { onYouTubeIframeAPIReady } from 'youtube-iframe-api-module';

onYouTubeIframeAPIReady(() => {
  // Create a new YouTube player with IFrame API
  const player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'M7lc1UVf-VE',
    playerVars: {
      playsinline: 1
    },
  });
});
```

