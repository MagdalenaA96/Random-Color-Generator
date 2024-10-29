const randomColor = {
  button: document.querySelector("#random-color-btn"),
  input: document.querySelector("#hex-code-color"),
  init: function () {
    this.button.addEventListener("click", (e) => {
      this.getRandomColor();
    });

    this.input.addEventListener("click", (e) => {
      this.copyColorToClipboard();
    });

    this.getRandomColor();
  },
  getRandomColor: function () {
    const newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    this.input.value = newColor;
    document.body.style.background = newColor;
  },
  copyColorToClipboard: function () {
    const value = this.input.value;

    navigator.clipboard
      .writeText(value)
      .then(alert(`Color ${value} has been copied to the clipboard.`));
  },
};

randomColor.init();
