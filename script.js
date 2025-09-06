function addRecommendation() {
  const nameInput = document.getElementById("recommend_name");
  const messageInput = document.getElementById("recommend_message");
  const recommendationsList = document.getElementById("recommendations_list");

  const name = nameInput.value.trim();
  const message = messageInput.value.trim();

  if (message === "") {
    messageInput.focus();
    return;
  }

  // Create new recommendation card
  const card = document.createElement("div");
  card.classList.add("recommendation-card");
  card.innerHTML = `<p>
    <span class="quote-mark">“</span>
    ${message}${name ? "<br><br><b>– " + name + "</b>" : ""}
    <span class="quote-mark">”</span>
  </p>`;
  recommendationsList.appendChild(card);

  // Scroll to bottom if needed (optional)
  card.scrollIntoView({ behavior: "smooth", block: "end" });

  // Clear form fields
  nameInput.value = "";
  messageInput.value = "";

  // Show popup
  showPopup(true);
}

// Form submit event
document.getElementById("recommend_form").addEventListener("submit", function(e) {
  e.preventDefault();
  addRecommendation();
});

function showPopup(show) {
  const popup = document.getElementById('popup');
  if (show) {
    popup.classList.remove('popup-hidden');
  } else {
    popup.classList.add('popup-hidden');
  }
}

// Optional: Hide popup on ESC key
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") showPopup(false);
});
