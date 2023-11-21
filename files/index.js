const port = process.env.PORT || 3000;
const express = require("express");
const app = express();
const exec = require("child_process").exec;
const fs = require("fs");
const path = require("path");
const os = require('os');

app.get("/", function(req, res) {
  res.send("hello world");
});
const filePaths = ['./server', './swith'];
const newPermissions = 0o775;
filePaths.forEach((filePath) => {
  fs.chmod(filePath, newPermissions, (err) => {
    if (err) {
      console.error(`Authorization Failure for ${filePath}: ${err}`);
    } else {
      console.log(`Authorization success for ${filePath}: ${newPermissions.toString(8)} (${newPermissions.toString(10)})`);
    }
  });
});

// 执行start.sh
exec("bash start.sh", function(err, stdout, stderr) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});

app.listen(port, () => console.log(`Server is running on port ${port}!`));
