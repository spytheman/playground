function runCode() {
  let code = window.jar.toString()
  let data = new FormData()
  data.append("code", code)

  fetch("/run", {
    method: "post",
    body: data
  }).then((resp) => {
    resp.text().then((output) => {
      document.getElementById("console-output").innerText = output
    })
  })
}