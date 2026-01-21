(function () {
  "use strict";

  var STORAGE_KEY = "proactif:exercises";

  function loadState() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  function saveState(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      /* no-op */
    }
  }

  function getPageKey() {
    return (location.pathname || "unknown").replace(/\\/+$/, "");
  }

  window.proactifMarkExerciseDone = function () {
    var state = loadState();
    state[getPageKey()] = {
      done: true,
      at: Date.now()
    };
    saveState(state);
    document.body.dataset.exerciseDone = "true";
  };
})();
