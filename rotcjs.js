const images = [
  "https://media.licdn.com/dms/image/v2/D4E22AQHfYgoRzwqmDw/feedshare-shrink_1280/B4EZ4EG9xSIAAM-/0/1778185395533?e=1779926400&v=beta&t=P1cnu3k1a_ERkIKONKc57_TQoZ5gqPpjzrW_LhKHVws",
  "https://media.licdn.com/dms/image/v2/D4E22AQGJo1XoYU8OWw/feedshare-image-high-res/B4EZ4EG9ttKAAU-/0/1778185395304?e=1779926400&v=beta&t=l7ujuwbua2Dqi4-bkwCVickLApgeTMzVCy4BRwR0A5w",
  "https://media.licdn.com/dms/image/v2/D4E22AQGX-OZ2e1t0fg/feedshare-shrink_1280/B4EZ4I_0.5JcAM-/0/1778267410714?e=1779926400&v=beta&t=TAm6BOJpufhG1gxMxzhbGHs2CorJkk3zqEStMLRRLzY",
  "https://media.licdn.com/dms/image/v2/D4E22AQGj7IS4gnreYA/feedshare-shrink_480/B4EZ4I_0.4HYAk-/0/1778267410769?e=1779926400&v=beta&t=fSMVH5VFbAmmaddGJckEeU2YnzFsikopu0y_C1aOljk",
  "https://media.licdn.com/dms/image/v2/D4E22AQFr-4kgsm_STA/feedshare-shrink_480/B4EZ4I_0_LJMAk-/0/1778267410786?e=1779926400&v=beta&t=ADY8YnmCgijqaf9w1RVdYG9xnXNupL85jVe4dRmWDSg",
  "https://media.licdn.com/dms/image/v2/D4E22AQE3_cyMbv1lSQ/feedshare-shrink_480/B4EZ4EG9rQJgAk-/0/1778185395143?e=1779926400&v=beta&t=3sP-m_EnqEGpFnFh_HbicuyHwIMQxx-NCMYQRm_LDzI"
];

let index = 0;
let intervalId;

function changeImage(direction = 1) {
  index += direction;
  if (index >= images.length) {
    index = 0;
  } else if (index < 0) {
    index = images.length - 1;
  }

  const slideshow = document.getElementById("slideshow");
  slideshow.style.opacity = 0; // Fade out
  setTimeout(() => {
    slideshow.src = images[index];
    slideshow.style.opacity = 1; // Fade in
  }, 300); // Half the transition time
}

function nextImage() {
  changeImage(1);
}

function prevImage() {
  changeImage(-1);
}

function startSlideshow() {
  intervalId = setInterval(() => changeImage(1), 3000);
}

function stopSlideshow() {
  clearInterval(intervalId);
}

// Initialize slideshow
document.addEventListener("DOMContentLoaded", () => {
  const slideshow = document.getElementById("slideshow");
  if (slideshow) {
    // Pause on hover
    slideshow.addEventListener("mouseover", stopSlideshow);
    slideshow.addEventListener("mouseout", startSlideshow);

    // Start the slideshow
    startSlideshow();
  }
});