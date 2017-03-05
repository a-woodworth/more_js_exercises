function nicknameFunction() {
  if (yesNick.checked) {
    nick.style.display = "inline";
    nickname.setAttribute('required', true);
  } else {
    nickname.removeAttribute('required');
    nick.style.display = "none";
  }
}
