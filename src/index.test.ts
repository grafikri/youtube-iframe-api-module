import { loadScript } from "./index";
import { waitFor } from '@testing-library/dom';


const src = "https://www.youtube.com/iframe_api";

beforeEach(() => {
  document.body.innerHTML = ""; // clean DOM
  delete (window as any).YT;
  delete (window as any).onYouTubeIframeAPIReady;

  const scriptTag = document.createElement('script');
  scriptTag.src = 'test-script.js';
  document.head.appendChild(scriptTag);
});

afterEach(() => {
  document.head.innerHTML = '';
});


const callOnYouTubeIframeAPIReady = () => {
  window.YT = {}
  window.onYouTubeIframeAPIReady()
}

describe('API test', () => {

  test("adds script only once if not present", () => {
    const callback = jest.fn();

    loadScript(callback);
    loadScript(callback);
    loadScript(callback);

    const script = document.querySelectorAll(`script[src="${src}"]`);
    expect(script.length).toBe(1)
  });


  test("call callbacks when onYouTubeIframeAPIReady() get called", async () => {
    const callback1 = jest.fn();
    const callback2 = jest.fn();

    loadScript(callback1);
    loadScript(callback2);

    setTimeout(() => {
      callOnYouTubeIframeAPIReady() // simulate api call
    }, 10);

    await waitFor(() => expect(callback1).toHaveBeenCalledTimes(1))
    await waitFor(() => expect(callback2).toHaveBeenCalledTimes(1))
    await waitFor(() => expect(window.YT).toEqual({}))

  });

  test("call callbacks if the YT object present", async () => {
    const callback1 = jest.fn();
    const callback2 = jest.fn();

    window.YT = {}

    loadScript(callback1);
    loadScript(callback2);

    await waitFor(() => expect(callback1).toHaveBeenCalledTimes(1))
    await waitFor(() => expect(callback2).toHaveBeenCalledTimes(1))
    await waitFor(() => expect(window.YT).toEqual({}))

  });




})



