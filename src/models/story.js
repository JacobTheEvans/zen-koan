import jugglingdb from "jugglingdb";
let Schema = jugglingdb.Schema;
let schema  = new Schema("postgres", {
  database: "scraper",
  username: "postgres"
  host: "localhost",
  password: "scraper",
});

let Story = schema.define({
  title: {type: "String", length: 1000, index: true},
  text: {type: "Date", length: 10500}
});

export default Story;
