const skeleton = `
<div class="container">
<div class="header">
  <div id="date"></div>
</div>
<div class="content">
  <ul id="list"></ul>
</div>
<div class="add-to-do">
  <container id="form">
    <input
      placeholder="ToDo"
      id="input"
      class="formspace"
      type="text"
      requiered
    />
    <label for="start">Date:</label>

    <input type="date" id="start" name="trip-start">

    <label for="priority">Priority:</label>

    <select id="priority" name="priority" class="formspace" required>
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
    <textarea
      placeholder="Add a description here"
      id="description"
      class="formspace"
      required
    ></textarea>
    <button name="submit" id="submit" class="formspace">Submit</button>
  </container>
</div>
</div>
`;

export default skeleton;