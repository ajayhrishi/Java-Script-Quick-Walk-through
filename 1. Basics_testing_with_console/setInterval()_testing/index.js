let max, count, output;
count = 1;
output = 1;
max = 10;
const stoper = setInterval(outputfunction, 1000);

function outputfunction() {
  document.getElementById("Output").innerHTML = output;
  if (max < count) {
    clearInterval(stoper);
  }
  count += 1;
  output+=1;
}