// Model: mail
import { LOCAL_STORAGE_KEY } from "./constants";

export const getMail = () =>
  JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY) ?? {});

export const saveMail = (draft) => {
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(draft));
  console.log(draft, " - Successfully saved!");
};
