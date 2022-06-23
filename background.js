let color = '#3aa757';

//runs when extension in clicked or executed
//chrome is a masterclass
//runtime is a class that runs in the background
//storage is a class that stores data, gets and sets data to the storage

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});
