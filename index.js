let currentlyOpenContent = null;
function displayDropContent(card, contentId) {
  const radio = card.querySelector(".radio");
  const dropContent = document.querySelector(`#${contentId}`);
  radio.checked = true;
  // If the user clicks on same card again it minimize for now Iam commenting that..
  if (dropContent === currentlyOpenContent) {
    // content.style.display = "none";
    // currentlyOpenContent = null;
    // radio.checked = false;
    return;
  }

  // If the user clicks on the other card already opened card minimizes and
  // removes the dynamically added class

  if (currentlyOpenContent) {
    currentlyOpenContent.style.display = "none";
    const openProductCard = currentlyOpenContent.closest(
      ".productCardContainer"
    );
    openProductCard.classList.remove("activeProductContainer");
  }
  // we are updating the currentlyOpenContent variable with current element and adding the
  //  Class dynamically
  currentlyOpenContent = dropContent;
  dropContent.style.display = "block";
  card.classList.add("activeProductContainer");
}
