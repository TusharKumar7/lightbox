const gallery = document.getElementById("gallery");
const previewBox = document.getElementById("preview-box");
const selectedImage = document.getElementById("selected-image");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const previewContainer = document.getElementById("preview-container");


const imageUrl = [
    "images/img1.jpeg",
    "images/img2.jpeg",
    "images/img3.jpeg",
    "images/img4.jpeg",
    "images/img5.jpeg",
    "images/img6.jpeg",
    "images/img7.jpeg",
    "images/img8.jpeg",
    "images/img9.jpeg",
    "images/img10.jpeg",
    "images/img11.jpeg",
    "images/img12.jpeg",
    "images/img13.jpeg",
    "images/img14.jpeg",
    "images/img15.jpeg",
    "images/img16.jpeg",
    "images/img17.jpeg",
    "images/img18.jpeg",
    "images/img19.jpeg",
    "images/img20.jpeg",
    "images/img21.jpeg",
    "images/img22.jpeg",
    "images/img23.jpeg",
    "images/img24.jpeg",
    "images/img25.jpeg",
    "images/img26.jpeg",
    "images/img27.jpeg",
    "images/img28.jpeg",
    "images/img29.jpeg",
    "images/img30.jpeg",
];

let selectedImageNumber;

for (let i = 0; i < imageUrl.length; i++) {
    const image = document.createElement("img");
    image.classList.add("image");
    image.setAttribute("src", imageUrl[i]);
    image.onclick = () => {
        previewBox.style.display = "flex";
        selectedImage.setAttribute("src", `/images/img${i + 1}.jpeg`);
        selectedImageNumber = i + 1;
        showNavButtons();
        previewBox.classList.add("zoom-in");
    };
    gallery.appendChild(image);
}


const showNavButtons = () => {
    if (selectedImageNumber === imageUrl.length) {
        prevBtn.classList.remove("hidden");
        nextBtn.classList.add("hidden");
    } else if (selectedImageNumber === 1) {
        prevBtn.classList.add("hidden")
        nextBtn.classList.remove("hidden");
    } else {
        prevBtn.classList.remove("hidden")
        nextBtn.classList.remove("hidden");
    }
}

nextBtn.onclick = () => {
    if (selectedImageNumber < imageUrl.length) {
        selectedImageNumber++;
        selectedImage.setAttribute(
            "src",
            `/images/img${selectedImageNumber}.jpeg`
        );
    }
    showNavButtons();
};

prevBtn.onclick = () => {
    if (selectedImageNumber > 0) {
        selectedImageNumber--;
        selectedImage.setAttribute(
            "src",
            `/images/img${selectedImageNumber}.jpeg`
        );
    }
    showNavButtons();
};

previewBox.onclick = (e) => {
    previewBox.style.display = "none";
}

previewContainer.onclick = (e) => {
    e.stopPropagation();
}