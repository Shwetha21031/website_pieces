document.onmousemove = (e) => {
  let body = document.querySelector("body");
  let star = document.createElement("span");
  let x = e.pageX;
  let y = e.pageY;
  let size = Math.random()*30;

  star.style.left = x +'px';
  star.style.top = y + 'px';
  star.style.width = size+ 'px';
  star.style.height = size+'px';
  body.appendChild(star);

  setTimeout(()=>{
    star.remove();
  },2000);
};
