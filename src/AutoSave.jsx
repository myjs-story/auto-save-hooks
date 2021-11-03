// simple auto-save component
import React, { useCallback, useEffect } from "react";
import debounce from "lodash.debounce";
import { saveMail } from "./mailModel";
import { DEBOUNCE_SAVE_DELAY_MS } from "./constants";

export default function AutoSave({ draftMail }) {
  const saveDraftData = useCallback((draftMail) => saveMail(draftMail), []);

  const debouncedSave = useCallback(
    debounce(async (newDraft) => {
      saveDraftData(newDraft);
    }, DEBOUNCE_SAVE_DELAY_MS),
    []
  );

  useEffect(() => {
    console.log("ue: ", draftMail);

    if (draftMail) {
      debouncedSave(draftMail);
    }
  }, [draftMail, debouncedSave]);

  return null;
}
