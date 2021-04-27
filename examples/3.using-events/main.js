$(function () {
  var chatContainer = "#chat";
  var chatButton = "#chat-button";
  var chatQ0 = "#chat-q0";
  var chatQ1 = "#chat-q1";
  var chatQ2 = "#chat-q2";
  var chatQ3 = "#chat-q3";
  var chatQ4 = "#chat-q4";
  var openButton = "#btn-open";
  var minimizeButton = "#btn-minimize";
  var unminimizeButton = "#btn-unminimize";
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
  var CHAT_SEND = "CHAT_SEND";

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

  var sendChatAction = function (value) {
    return {
      type: CHAT_SEND,
      payload: value,
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
    $(openButton).css({
      display: "none",
    });
    $(minimizeButton).css({
      display: "inline-block",
    });
    $(unminimizeButton).css({
      display: "inline-block",
    });
    $(closeButton).css({
      display: "inline-block",
    });
  };

  var handleFinish = function () {
    // Do something when finishing a WebChat
    $(chatButton).css({
      display: "flex",
    });
    $(openButton).css({
      display: "inline-block",
    });
    $(minimizeButton).css({
      display: "none",
    });
    $(unminimizeButton).css({
      display: "none",
    });
    $(closeButton).css({
      display: "none",
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
        case "CHAT_SEND": {
          console.log("post chat done");
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

  // Q0
  $(chatQ0).on("click", function (e) {
    e.stopPropagation();
    window.postMessage(sendChatAction($(chatQ0).text()), "*");
  });

  // Q1
  $(chatQ1).on("click", function (e) {
    e.stopPropagation();
    window.postMessage(sendChatAction($(chatQ1).text()), "*");
  });

  // Q2
  $(chatQ2).on("click", function (e) {
    e.stopPropagation();
    window.postMessage(sendChatAction($(chatQ2).text()), "*");
  });

  // Q3
  $(chatQ3).on("click", function (e) {
    e.stopPropagation();
    window.postMessage(sendChatAction($(chatQ3).text()), "*");
  });

  // Q4
  $(chatQ4).on("click", function (e) {
    e.stopPropagation();
    window.postMessage(sendChatAction($(chatQ4).text()), "*");
  });

  // Start WebChat
  $(openButton).on("click", function (e) {
    e.stopPropagation();
    window.postMessage(startChatAction(), "*");
  });

  // Minimize WebChat
  $(minimizeButton).on("click", function (e) {
    e.stopPropagation();
    window.postMessage(minimizeChatAction(), "*");
  });

  // Unminimize WebChat
  $(unminimizeButton).on("click", function (e) {
    e.stopPropagation();
    if (state.isMinimized) {
      window.postMessage(unminimizeChatAction(), "*");
    }
  });

  // Close WebChat
  $(closeButton).on("click", function (e) {
    e.stopPropagation();
    window.postMessage(finishChatAction(), "*");
  });
});
