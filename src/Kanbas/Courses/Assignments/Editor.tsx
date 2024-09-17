export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      {/* Assignment Name */}
      <label htmlFor="wd-name">Assignment Name</label>
      <br />
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />

      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <br />

      <table>
        {/* Points Input */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br />

        {/* Assignment Group Dropdown */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option>Assignments</option>
            </select>
          </td>
        </tr>
        <br />

        {/* Display Grade as Dropdown */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade As</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option>Percentage</option>
            </select>
          </td>
        </tr>
        <br />

        {/* Submission Type Dropdown */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option>Online</option>
            </select>
          </td>
        </tr>
        <br />

        <tr>
          <td>
            <label>Online Entry Options</label>
            <br />
            <input type="checkbox" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label>
            <br />
            <input type="checkbox" id="wd-website-url" />
            <label htmlFor="wd-website-url">Website URL</label>
            <br />
            <input type="checkbox" id="wd-media-recordings" />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
            <br />
            <input type="checkbox" id="wd-student-annotation" />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
            <br />
            <input type="checkbox" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Uploads</label>
            <br />
          </td>
        </tr>
        <br />

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign to</label>
          </td>
          <td>
            <input id="wd-assign-to" value="Everyone" />
          </td>
        </tr>
        <br />

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-due-date">Due</label>
          </td>
          <td>
            <input type="date" id="wd-due-date" value="2024-05-13" />
            <br />
          </td>
        </tr>
        <br />

        <tr>
          <td align="left" valign="top">
            <label htmlFor="wd-available-from">Available from</label>
            <br />
            <input type="date" id="wd-available-from" value="2024-05-06" />
            <br />
          </td>
          <td align="left" valign="top">
            <label htmlFor="wd-available-until">Until</label>
            <br />
            <input type="date" id="wd-available-until" value="2024-05-20" />
            <br />
          </td>
        </tr>
        <br />
        <br />
      </table>

      <div id="wd-buttons-container">
        <button id="wd-cancel" onClick={() => alert("Canceled!")} type="button">
          Cancel
        </button>
        <button id="wd-ok" onClick={() => alert("OK!")} type="button">
          OK
        </button>
      </div>

      <br />
    </div>
  );
}
