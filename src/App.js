import { useCallback, useState } from "react";
import AutoSave from "./AutoSave";
import { getMail } from "./mailModel";
import "./styles.css";

export default function App() {
  const [draft, setDraft] = useState({});
  getMail();
  const updateDraft = useCallback((e) => {
    setDraft(
      {
        ...draft,
        [e.target.name]: e.target.value
      },
      []
    );
  });

  return (
    <div className="App">
      <h1>Hello, It's AutoSave with hooks!!</h1>
      <h2>just a sample code</h2>
      <form>
        <fieldset>
          <legend>New Mail</legend>
          <label>
            <div>TO:</div>
            <input
              type="text"
              name="to"
              value={draft.to}
              onChange={updateDraft}
            />
          </label>
          <label>
            <div>Subject:</div>
            <input
              type="text"
              name="subject"
              value={draft.subject}
              onChange={updateDraft}
            />
          </label>
          <label>
            <div>Body:</div>
            <textarea name="body" value={draft.body} onChange={updateDraft} />
          </label>
          <AutoSave draftMail={draft} />
        </fieldset>
      </form>
    </div>
  );
}
