$(function () {
  var chatContainer = "#chat";
  var chatStyles = function () {
    return {
      apiPath: "http://localhost:8080/",
      width: $("#chat-width").val() + "px",
      height: $("#chat-height").val() + "px",
      title: $("#chat-title").val(),
      placeholder: $("#chat-placeholder").val(),
      backgroundColor: "rgb(" + $("#chat-backgroundcolor").val() + ")",
      backgroundImage: $("#chat-backgroundimage").val(),
      headerHeight: $("#chat-headerheight").val() + "px",
      avatarBackgroundColor:
        "rgb(" + $("#chat-avatar-backgroundcolor").val() + ")",
      avatarImage: $("#chat-avatar-image").val(),
      bubbleStyle: $("#chat-bubble-style").val(),
      bubbleRadius: $("#chat-bubble-radius").val(),
      bubbleColor: "rgb(" + $("#chat-bubble-color").val() + ")",
      bubbleBackgroundColor:
        "rgb(" + $("#chat-bubble-backgroundcolor").val() + ")",
      bubbleFontSize: $("#chat-bubble-fontsize").val() + "px",
    };
  };

  $("#chat-width").on("input", function (e) {
    e.stopPropagation();
    renderChat();
  });

  $("#chat-height").on("input", function (e) {
    e.stopPropagation();
    renderChat();
  });

  $("#chat-headerheight").on("input", function (e) {
    e.stopPropagation();
    renderChat();
  });

  $("#chat-title").on("input", function (e) {
    e.stopPropagation();
    renderChat();
  });

  $("#chat-backgroundcolor").on("input", function (e) {
    e.stopPropagation();
    renderChat();
  });

  $("#chat-backgroundimage").on("input", function (e) {
    e.stopPropagation();
    renderChat();
  });

  $("#chat-placeholder").on("input", function (e) {
    e.stopPropagation();
    renderChat();
  });

  $("#chat-avatar-image").on("input", function (e) {
    e.stopPropagation();
    renderChat();
  });

  $("#chat-avatar-backgroundcolor").on("input", function (e) {
    e.stopPropagation();
    renderChat();
  });

  $("#chat-bubble-style").on("change", function (e) {
    e.stopPropagation();
    renderChat();
  });

  $("#chat-bubble-radius").on("input", function (e) {
    e.stopPropagation();
    renderChat();
  });

  $("#chat-bubble-color").on("input", function (e) {
    e.stopPropagation();
    renderChat();
  });

  $("#chat-bubble-backgroundcolor").on("input", function (e) {
    e.stopPropagation();
    renderChat();
  });

  $("#chat-bubble-fontsize").on("input", function (e) {
    e.stopPropagation();
    renderChat();
  });

  function renderChat() {
    WebChat.renderWebChat(chatStyles(), document.querySelector(chatContainer));
  }

  renderChat();
});
