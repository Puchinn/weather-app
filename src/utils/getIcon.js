import { icons } from "../components/icons/icons.jsx";

function getIcon(code, is_day) {
  const findedIcon = icons.find((icon) => icon.code === code);
  const icon = is_day ? findedIcon.day : findedIcon.night;

  return icon;
}

export { getIcon };
