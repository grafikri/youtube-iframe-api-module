declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: unknown;
  }
}

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  const YT: any;
}

const loadApi = () => {
  const tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
}


export const onYouTubeIframeAPIReady = (callback: () => void) => {
  window.onYouTubeIframeAPIReady = () => {
    callback()
  }
  loadApi()
}
