const fs = require("fs");
fs.writeFile("message.txt", "My name is aayush", (error) => {
  if (error) throw error;
  console.log("The file has been added");
});
