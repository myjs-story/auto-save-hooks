// Model: mail
import { LOCAL_STORAGE_KEY } from "./constants";

export const getMail = () => {
  const data = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY));
  return data.mail;
};

export const saveMail = (draft) => {
  window.localStorage.setItem(
    LOCAL_STORAGE_KEY,
    JSON.stringify({ mail: { ...draft } })
  );
  console.log(draft, " - Successfully saved!");
};
