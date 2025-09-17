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

const src = "https://www.youtube.com/iframe_api"


const isScriptPresent = () => {
  const isAdded = !!document.querySelector(`script[src="${src}"]`);
  return isAdded
}




const addScript = () => {
  const tag = document.createElement('script');
  tag.src = src;
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
}


const arrCallbacks: Function[] = []


const defineCallback = () => {
  window.onYouTubeIframeAPIReady = () => {
    arrCallbacks.forEach(callback => callback())
  }
}

export const loadScript = (callback: () => void) => {
  if (!!window.YT) {
    callback()
    return
  }

  arrCallbacks.push(callback)

  if (!isScriptPresent()) {
    defineCallback()
    addScript()
  }
}