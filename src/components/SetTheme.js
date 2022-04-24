import $ from "jquery";

const lightmode = () => {
  $("body").css({ background: "whitesmoke" });
  $("body, input, button").css({ color: "black" });
  $("body, input, button").css({ fontFamily: "sans-serif" });
  $(".messages").css({ background: "white" });

  $("input").css({
    border: "none",
    background: "white",
    padding: "3%",
    margin: "2%",
  });
  $("button").css({
    border: "none",
    background: "white",
    color: "black",
    padding: "3%",
    margin: "2%",
  });

  $(".sentByYou.msg span").css({ background: "deepskyblue" });
  $(".sentByOther.msg span").css({ background: "limegreen" });

  localStorage.setItem("theme", 1);
};

const darkmode = () => {
  $("body").css({ background: "#2E2E2E" });
  $("body, input, button").css({ color: "white" });
  $("body, input, button").css({ fontFamily: "sans-serif" });
  $(".messages").css({ background: "#323232" });

  $("input").css({
    border: "none",
    background: "#5A5A5A",
    padding: "3%",
    margin: "2%",
  });
  $("button").css({
    border: "none",
    background: "#5A5A5A",
    color: "white",
    padding: "3%",
    margin: "2%",
  });

  $(".sentByYou.msg span").css({ background: "blue" });
  $(".sentByOther.msg span").css({ background: "green" });

  localStorage.setItem("theme", 2);
};

const terminal = () => {
  $("body").css({ background: "black" });
  $("body, input, button").css({ color: "white" });
  $("body, input, button").css({ fontFamily: "monospace" });
  $(".messages").css({ background: "black" });

  $("input").css({
    border: "none",
    background: "#171717",
    padding: "3%",
    margin: "2%",
  });
  $("button").css({
    border: "none",
    background: "#171717",
    color: "white",
    padding: "3%",
    margin: "2%",
  });

  $(".sentByYou.msg span").css({ background: "black" });
  $(".sentByOther.msg span").css({ background: "black" });

  localStorage.setItem("theme", 3);
};

const oldweb = () => {
  $("body").css({
    background: "url(https://wallpaperaccess.com/full/698524.jpg)",
    backgroundSize: "cover",
  });
  $("body, input, button").css({ color: "white" });
  $("body, input, button").css({ fontFamily: "serif" });
  $(".messages").css({ background: "transparent" });

  $("input").css({
    border: "none",
    background: "#323232",
    padding: "3%",
    margin: "2%",
  });
  $("button").css({
    border: "none",
    background: "#323232",
    color: "white",
    padding: "3%",
    margin: "2%",
  });

  $(".sentByYou.msg span").css({ background: "blue" });
  $(".sentByOther.msg span").css({ background: "green" });

  localStorage.setItem("theme", 4);
};

const colourful = () => {
  $("body").css({ background: "skyblue" });
  $("body, input, button").css({ color: "black" });
  $("body, input, button").css({ fontFamily: "Futura, sans-serif" });
  $(".messages").css({ background: "lightblue" });

  $("input").css({
    border: "none",
    background: "yellow",
    padding: "3%",
    margin: "2%",
  });
  $("button").css({
    border: "none",
    background: "orange",
    color: "black",
    padding: "3%",
    margin: "2%",
  });

  $(".sentByYou.msg span").css({ background: "deepskyblue" });
  $(".sentByOther.msg span").css({ background: "limegreen" });
  localStorage.setItem("theme", 5);
};

const city = () => {
  $("body").css({
    background: "url(https://wallpaperaccess.com/full/3200332.jpg)",
    backgroundSize: "cover",
  });
  $("body, input, button").css({ color: "white" });
  $("body, input, button").css({ fontFamily: "sans-serif" });
  $(".messages").css({ background: "transparent" });

  $("input").css({
    border: "none",
    background: "white",
    color: "black",
    padding: "3%",
    margin: "2%",
  });
  $("button").css({
    border: "none",
    background: "white",
    color: "black",
    padding: "3%",
    margin: "2%",
  });

  $(".sentByYou.msg span").css({ background: "blue" });
  $(".sentByOther.msg span").css({ background: "green" });

  localStorage.setItem("theme", 6);
};

export default function SetTheme() {
  return (
    <div className="settheme">
      <button onClick={lightmode}>Light mode</button>
      <button onClick={darkmode}>Dark mode</button>
      <button onClick={terminal}>Terminal</button>
      <button onClick={oldweb}>90's web</button>
      <button onClick={colourful}>Colourful</button>
      <button onClick={city}>City</button>
    </div>
  );
}

export const userTheme = async () => {
  let usersTheme = (await localStorage.getItem("theme")) || 1;
  if (usersTheme == 1) {
    lightmode();
  }
  if (usersTheme == 2) {
    darkmode();
  }
  if (usersTheme == 3) {
    terminal();
  }
  if (usersTheme == 4) {
    oldweb();
  }
  if (usersTheme == 5) {
    colourful();
  }
  if (usersTheme == 6) {
    city();
  }
};
