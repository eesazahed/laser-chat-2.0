import $ from "jquery";

const lightmode = () => {
  $("body").css({ background: "whitesmoke" });
  $("body, input, button").css({ color: "black" });
  $("body, input, button").css({ fontFamily: "sans-serif" });
  $(".messages").css({ background: "white" });

  $("input").css({
    border: "none",
    background: "white",
  });
  $("button").css({
    border: "none",
    background: "white",
    color: "black",
  });

  $(".sentByYou span").css({ background: "deepskyblue" });
  $(".sentByOther span").css({ background: "limegreen" });

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
  });
  $("button").css({
    border: "none",
    background: "#5A5A5A",
    color: "white",
  });

  $(".sentByYou span").css({ background: "blue" });
  $(".sentByOther span").css({ background: "green" });

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
  });
  $("button").css({
    border: "none",
    background: "#171717",
    color: "white",
  });

  $(".sentByYou span, .sentByOther span").css({ background: "black" });

  localStorage.setItem("theme", 3);
};

const oldweb = () => {
  $("body").css({
    background: "url(https://wallpaperaccess.com/full/698524.jpg)",
    backgroundSize: "cover",
  });
  $("body, input, button").css({ color: "white" });
  $("body, input, button").css({ fontFamily: "serif" });
  $(".messages").css({ background: "black", opacity: 0.9 });

  $("input").css({
    border: "none",
    background: "#323232",
  });
  $("button").css({
    border: "none",
    background: "#323232",
    color: "white",
  });

  $(".sentByYou span").css({ background: "blue" });
  $(".sentByOther span").css({ background: "green" });

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
  });
  $("button").css({
    border: "none",
    background: "orange",
    color: "black",
  });

  $(".sentByYou span").css({ background: "deepskyblue" });
  $(".sentByOther span").css({ background: "limegreen" });
  localStorage.setItem("theme", 5);
};

const city = () => {
  $("body").css({
    background: "url(https://wallpaperaccess.com/full/3200332.jpg)",
    backgroundSize: "cover",
  });
  $("body, input, button").css({ color: "white" });
  $("body, input, button").css({ fontFamily: "sans-serif" });
  $(".messages").css({ background: "white" });

  $("input").css({
    border: "none",
    background: "white",
    color: "black",
  });
  $("button").css({
    border: "none",
    background: "white",
    color: "black",
  });

  $(".sentByYou span").css({ background: "deepskyblue" });
  $(".sentByOther span").css({ background: "limegreen" });

  localStorage.setItem("theme", 6);
};

const gradientlight = () => {
  $("body").css({ background: "whitesmoke" });
  $("body, input, button").css({ color: "black" });
  $("body, input, button").css({ fontFamily: "sans-serif" });
  $(".messages").css({ background: "white" });

  $("input").css({
    border: "none",
    background: "white",
  });
  $("button").css({
    border: "none",
    background: "white",
    color: "black",
  });

  $(".sentByYou span, .sentByOther span").css({
    background:
      "linear-gradient(55deg, rgb(80, 96, 255) 0%, rgb(140, 71, 255) 40%, rgb(211, 79, 196) 81%, rgb(244, 89, 154) 100%)",
  });
  localStorage.setItem("theme", 7);
};

const gradientdark = () => {
  $("body").css({ background: "#2E2E2E" });
  $("body, input, button").css({ color: "white" });
  $("body, input, button").css({ fontFamily: "sans-serif" });
  $(".messages").css({ background: "#323232" });

  $("input").css({
    border: "none",
    background: "#5A5A5A",
  });
  $("button").css({
    border: "none",
    background: "#5A5A5A",
    color: "white",
  });

  $(".sentByYou span, .sentByOther span").css({
    background:
      "linear-gradient(55deg, rgb(80, 96, 255) 0%, rgb(140, 71, 255) 40%, rgb(211, 79, 196) 81%, rgb(244, 89, 154) 100%)",
  });

  localStorage.setItem("theme", 8);
};

export default function SetTheme() {
  return (
    <div className="settheme">
      <button onClick={lightmode}>Light mode</button>
      <button onClick={gradientlight}>Light gradient</button>
      <button onClick={darkmode}>Dark mode</button>
      <button onClick={gradientdark}>Dark gradient</button>
      <button onClick={terminal}>Terminal</button>
      <button onClick={oldweb}>90's web</button>
      <button onClick={colourful}>Colourful</button>
      <button onClick={city}>City</button>
    </div>
  );
}

export const userTheme = async () => {
  let usersTheme = (await localStorage.getItem("theme")) || 1;
  if (parseInt(usersTheme) === 1) lightmode();
  if (parseInt(usersTheme) === 2) darkmode();
  if (parseInt(usersTheme) === 3) terminal();
  if (parseInt(usersTheme) === 4) oldweb();
  if (parseInt(usersTheme) === 5) colourful();
  if (parseInt(usersTheme) === 6) city();
  if (parseInt(usersTheme) === 7) gradientlight();
  if (parseInt(usersTheme) === 8) gradientdark();
};
