(function () {
  window.onload = function () {
    const loadTimeMs =
      window.performance.timing.domComplete -
      window.performance.timing.requestStart;

    const loadTimeInfo = document.createElement("div");
    loadTimeInfo.innerText = `Page loaded in ${loadTimeMs} ms`;
    loadTimeInfo.style.backgroundColor = "#222";
    loadTimeInfo.style.color = "#aaa";
    loadTimeInfo.style.padding = "10px";

    document.body.appendChild(loadTimeInfo);
  };
})();
