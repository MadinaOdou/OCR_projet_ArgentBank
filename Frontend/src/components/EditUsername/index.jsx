import "./index.css";

function EditUsername() {
  return (
    <form>
      <h3 className="edit-form-title">Edit user info</h3>
      <div className="flex-row">
        <label htmlFor="username">User name:</label>
        <input type="text" id="username" placeholder="Ben_hg" />
      </div>
      <div className="flex-row">
        <label htmlFor="firstname">First name:</label>
        <input type="firstname" id="firstname" />
      </div>
      <div className="flex-row">
        <label htmlFor="lastname">Last name:</label>
        <input type="lastname" id="lastname" />
      </div>
      <div className="edit-form-buttons">
        <button className="save-button edit-button">Save</button>
        <button className="cancel-button edit-button">Cancel</button>
      </div>
    </form>
  );
}

export default EditUsername;
