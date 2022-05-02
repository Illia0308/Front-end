function sendEmail() {
  console.log("Gromcode party invitation was sent!");
}
function sendEmailList() {
  for (let i = 0; i <= 30; i += 1) {
    sendEmail();
  }
}
sendEmailList();
