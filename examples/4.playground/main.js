$(function () {
  var chatContainer = "#chat";
  var chatButton = "#chat-button";
  var minimizeButton = "#btn-minimize";
  var closeButton = "#btn-close";

  /**
   * state
   */
  var state = {
    isMinimized: false,
  };

  /**
   * Messaging Action Types
   */
  var CHAT_START = "CHAT_START";
  var CHAT_FINISH = "CHAT_FINISH";
  var CHAT_MINIMIZE = "CHAT_MINIMIZE";
  var CHAT_UNMINIMIZE = "CHAT_UNMINIMIZE";

  var startChatAction = function () {
    return {
      type: CHAT_START,
      payload: {},
    };
  };

  var finishChatAction = function () {
    return {
      type: CHAT_FINISH,
      payload: {},
    };
  };

  var minimizeChatAction = function () {
    return {
      type: CHAT_MINIMIZE,
      payload: {},
    };
  };

  var unminimizeChatAction = function () {
    return {
      type: CHAT_UNMINIMIZE,
      payload: {},
    };
  };

  var handleMinimize = function () {
    // Do something when minimizing a WebChat
    state.isMinimized = true;
  };

  var handleUnminimize = function () {
    // Do something when minimizing a WebChat
    state.isMinimized = false;
  };

  var handleStart = function () {
    // Do something when starting a WebChat
    $(chatButton).css({
      display: "none",
    });
    $(chatContainer).css({
      display: "block",
    });
  };

  var handleFinish = function () {
    // Do something when finishing a WebChat
    $(chatButton).css({
      display: "flex",
    });
  };

  var handleMessage = function (e) {
    var data = e.data;
    if (data && data.type) {
      switch (data.type) {
        case "CHAT_START": {
          handleStart();
          break;
        }
        case "CHAT_FINISH": {
          handleFinish();
          break;
        }
        case "CHAT_MINIMIZE": {
          handleMinimize();
          break;
        }
        case "CHAT_UNMINIMIZE": {
          handleUnminimize();
          break;
        }
      }
    }
  };

  window.addEventListener("message", handleMessage);

  // Start WebChat
  $(chatButton).on("click", function (e) {
    e.stopPropagation();
    window.postMessage(startChatAction(), "*");
  });

  // Minimize or Unminimize WebChat
  $(minimizeButton).on("click", function (e) {
    e.stopPropagation();
    if (state.isMinimized) {
      window.postMessage(unminimizeChatAction(), "*");
    } else {
      window.postMessage(minimizeChatAction(), "*");
    }
  });

  // Close WebChat
  $(closeButton).on("click", function (e) {
    e.stopPropagation();
    window.postMessage(finishChatAction(), "*");
  });
});
