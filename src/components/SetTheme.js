import $ from "jquery";

const lightmode = () => {
  $("body, .homepage").css({ background: "whitesmoke" });
  $("body, input, button, select").css({ color: "black" });
  $("body, input, button, select").css({ fontFamily: "sans-serif" });
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
  $("#down-button").css({ color: "grey" });

  $("select").css({ background: "white" });

  localStorage.setItem("theme", 1);
};

const darkmode = () => {
  $("body, .homepage").css({ background: "#2E2E2E" });
  $("body, input, button, select").css({ color: "white" });
  $("body, input, button, select").css({ fontFamily: "sans-serif" });
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
  $("#down-button").css({ color: "grey" });

  $("select").css({ background: "#323232" });

  localStorage.setItem("theme", 2);
};

const terminal = () => {
  $("body, .homepage").css({ background: "black" });
  $("body, input, button, select").css({ color: "white" });
  $("body, input, button, select").css({ fontFamily: "monospace" });
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
  $("#down-button").css({ color: "grey" });

  $("select").css({ background: "black" });

  localStorage.setItem("theme", 3);
};

const oldweb = () => {
  $("body, .homepage").css({ background: "black" });
  $(".homepage").css({
    background: "url(https://wallpaperaccess.com/full/698524.jpg)",
    backgroundRepeat: "no-repeat",
  });
  $("body, input, button, select").css({ color: "white" });
  $("body, input, button, select").css({ fontFamily: "serif" });
  $(".messages").css({ background: "black", opacity: 0.8 });

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
  $("#down-button").css({ color: "grey" });

  $("select").css({ background: "black" });

  localStorage.setItem("theme", 4);
};

const colourful = () => {
  $("body, .homepage").css({ background: "skyblue" });
  $("body, input, button, select").css({ color: "black" });
  $("body, input, button, select").css({ fontFamily: "Futura, sans-serif" });
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
  $("#down-button").css({ color: "grey" });

  $("select").css({ background: "lightblue" });

  localStorage.setItem("theme", 5);
};

const city = () => {
  $("body, .homepage").css({ background: "black" });
  $(".homepage").css({
    background: "url(https://wallpaperaccess.com/full/399993.jpg)",
    backgroundRepeat: "no-repeat",
  });
  $("body, input, button, select").css({ color: "white" });
  $("body, input, button, select").css({ fontFamily: "sans-serif" });
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
  $("#down-button").css({ color: "white" });

  $("select").css({ background: "white", color: "black" });

  localStorage.setItem("theme", 6);
};

const gradientlight = () => {
  $("body, .homepage").css({ background: "whitesmoke" });
  $("body, input, button, select").css({ color: "black" });
  $("body, input, button, select").css({ fontFamily: "sans-serif" });
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
  $("#down-button").css({ color: "grey" });

  $("select").css({ background: "white" });

  localStorage.setItem("theme", 7);
};

const gradientdark = () => {
  $("body, .homepage").css({ background: "#2E2E2E" });
  $("body, input, button, select").css({ color: "white" });
  $("body, input, button, select").css({ fontFamily: "sans-serif" });
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
  $("#down-button").css({ color: "grey" });

  $("select").css({ background: "#323232" });

  localStorage.setItem("theme", 8);
};

const appel = () => {
  $("body").css({
    background:
      "url(https://media.idownloadblog.com/wp-content/uploads/2021/10/macOS-Monterey-Apple-Stock-Wallpaper-still-1-1200x1200.jpg)",
    backgroundSize: "cover",
  });
  $("body, input, button, select").css({ color: "black" });
  $("body, input, button, select").css({
    fontFamily: "BlinkMacSystemFont, sans-serif",
  });
  $(".homepage").css({ background: "transparent" });
  $(".messages").css({ background: "white" });

  $("input").css({
    border: "none",
    background: "whitesmoke",
  });
  $("button").css({
    border: "none",
    background: "whitesmoke",
    color: "black",
  });

  $(".sentByYou span").css({ background: "#1888FF" });
  $(".sentByOther span").css({ background: "#f0ecec", color: "black" });
  $("#down-button").css({ color: "grey" });

  $("select").css({ background: "white" });

  localStorage.setItem("theme", 9);
};

export default function SetTheme() {
  return (
    <div className="settheme">
      <p>Set theme:</p>
      <select onChange={(e) => localStorage.setItem("theme", e.target.value)}>
        <option selected disabled>
          -- Select theme --
        </option>
        <option value="1">Light mode</option>
        <option value="7">Light gradient</option>
        <option value="2">Dark mode</option>
        <option value="8">Dark gradient</option>
        <option value="3">Terminal</option>
        <option value="4">90's web</option>
        <option value="5">Colourful</option>
        <option value="6">City</option>
        <option value="9">Appel</option>
      </select>
    </div>
  );
}

export const userTheme = async () => {
  let usersTheme = parseInt(await localStorage.getItem("theme")) || 1;
  if (usersTheme === 1) lightmode();
  if (usersTheme === 2) darkmode();
  if (usersTheme === 3) terminal();
  if (usersTheme === 4) {
    oldweb();
  } else $(".messages").css({ opacity: 1 });
  if (usersTheme === 5) colourful();
  if (usersTheme === 6) city();
  if (usersTheme === 7) gradientlight();
  if (usersTheme === 8) gradientdark();
  if (usersTheme === 9) {
    appel();
  } else $(".sentByOther span").css({ color: "white" });
};
