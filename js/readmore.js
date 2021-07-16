

var readMoreBtns = document.querySelectorAll(".read-more-btn");
readMoreBtns.forEach(function(readMoreBtn) {
  readMoreBtn.addEventListener("click", (e) => {
    e.target.previousElementSibling.classList.toggle("show-more");
    if (readMoreBtn.innerText === "READ MORE") {
      readMoreBtn.innerText = "READ LESS";
    } else {
      readMoreBtn.innerText = "READ MORE";
    }
  })
})
