chrome.contextMenus.create({
  id: "CRT",
  title: "CRT",
  contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "CRT") {
    const selectedText = info.selectionText;
    const archiveUrl = `https://crt.sh/?q=${selectedText}`
    chrome.tabs.create({ url: archiveUrl });
  }
});
