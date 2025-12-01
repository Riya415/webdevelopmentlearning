let b = 1,
  c = 1,
  g = 0,
  s = 0,
  i = 0;

const img = document.getElementById("image");

console.log(img.src);

if (
  img ===
  "http://127.0.0.1:5500/JavaScript/BasicsOfJavaScript/PhotoEditingTool/index.html"
) {
  document.getElementById("image").style.display = "none";
}

function uploadimage() {
  const file = document.getElementById("Upload").files[0];
  const fileURL = URL.createObjectURL(file);

  document.getElementById("image").src = fileURL;
  document.getElementById("image").style.display = "block";
  document.getElementById("uploadLabel").style.display = "none";
  applyFilter();
}

function applyFilter() {
  document.getElementById("image").style.filter = ` brightness(${b}) 
                                                    contrast(${c}) 
                                                    grayscale(${g}%) 
                                                    sepia(${s}%)
                                                    invert(${i}%)`;
}

function changeBrightness() {
  const value = document.getElementById("Brightness").value;
  b = (value * 2) / 100;
  applyFilter();
}

function changeContrast() {
  const value = document.getElementById("Contrast").value;
  c = (value * 2) / 100;
  applyFilter();
}

function changeGrayScale() {
  const value = document.getElementById("GrayScale").value;
  g = value;
  applyFilter();
}

function changeSepia() {
  const value = document.getElementById("Sepia").value;
  s = value;
  applyFilter();
}

function changeInvert() {
  const value = document.getElementById("Invert").value;
  i = value;
  applyFilter();
}

function reset() {
  b = 1;
  c = 1;
  g = 0;
  s = 0;
  i = 0;

  applyFilter();
  document.getElementById("Brightness").value = "50";
  document.getElementById("Contrast").value = "50";
  document.getElementById("Sepia").value = "0";
  document.getElementById("Invert").value = "0";
  document.getElementById("Grayscale").value = "0";
}

function downlaod() {
  const image = document.getElementById("image");

  if (
    img ===
    "http://127.0.0.1:5500/JavaScript/BasicsOfJavaScript/PhotoEditingTool/index.html"
  ) {
    alert("Please Upload The Image First");
    return;
  }
  if (!img.complete) {
    alert("image upload is in progress please wait....");
    return;
  }
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  console.log(canvas.width , canvas.height);
  const filter = getComputedStyle(img).filter;
  ctx.filter = filter === "none" ? "none" : filter;
  ctx.drawImage(img, 0 , 0  , canvas.width , canvas.height);
  const dataURL = canvas.toDataURL("img/png")
  const a = document.createElement("a");
  anchorTag.href = dataURL;
  anchorTag.downlaod="editedImage.png";
  document.body.appendChild(anchorTag);
  anchorTag.click();
  document.body.removeChild(anchorTag);

}
