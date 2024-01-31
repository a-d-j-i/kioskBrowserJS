interface WebViewIneterface {
  getId: () => string;
}

declare var android: WebViewIneterface;

async function main() {
  let id = "android not found";
  try {
    id = android.getId();
  } catch (err) {
    console.log("android not found", err);
  }
  let imgElem = document.getElementById("mainImg") as HTMLImageElement;
  if (!imgElem) {
    imgElem = document.createElement("img") as HTMLImageElement;
    imgElem.setAttribute("id", "mainImg");
    const mainElem = document.getElementById("main");
    mainElem.appendChild(imgElem);
  }
  imgElem.classList.add("center-fit");
  const images = [
    'https://bigpizza.com.ar/wp-content/uploads/2024/01/muzzarella-3.jpg',
    "https://bigpizza.com.ar/wp-content/uploads/2024/01/3-empanadas-1.jpg",
    "https://bigpizza.com.ar/wp-content/uploads/2024/01/bbox-post-1.jpg",
    "https://bigpizza.com.ar/wp-content/uploads/2024/01/dupla-individual23-1.jpg",
    "https://bigpizza.com.ar/wp-content/uploads/2024/01/gran-dupla23-1.jpg"
  ]
  let idx = 0;
  imgElem.src = images[idx++]
  setInterval(() => {
    imgElem.src = images[idx++]
    if (idx === images.length) idx = 0;
  }, 5000)
}


window.onload = async () => main().catch(err => console.error(err));
