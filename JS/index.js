const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const data = document.querySelector(".data");

btn.addEventListener("click", () => {
    fetch("https://api.imgflip.com/get_memes")
    .then((res) => {return res.json();})
    .then((finalData) => {
      let memes = finalData.data.memes;
      let index = +input.value;
      if (index >= 0 && index < memes.length) {
        let meme = memes[index];
        data.innerHTML = `
            <h2 class="my-3">${meme.name}</h2>
            <img class="w-100" src="${meme.url}" alt="">`;
      } else {
        data.innerHTML = `<h2 class="my-3 text-danger">Please Enter Valid Number</h2>`;
      }
    });
});
