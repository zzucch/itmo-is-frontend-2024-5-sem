const startTime = performance.now();

(function () {
  window.onload = function () {
    const endTime = performance.now();
    const loadTimeMs = endTime - startTime;

    const loadTimeInfo = document.createElement("div");
    loadTimeInfo.innerText = `Page loaded in ${loadTimeMs.toFixed(2)} ms`;
    loadTimeInfo.style.backgroundColor = "#222";
    loadTimeInfo.style.color = "#aaa";
    loadTimeInfo.style.padding = "10px";

    document.body.appendChild(loadTimeInfo);
  };
})();
