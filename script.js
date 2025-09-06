// Add Recommendation Function
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

  // Recommendation text with quote marks and optional name
  card.innerHTML = `<p>
    <span class="quote-mark">“</span>
    ${message}${name ? "<br><br><b>– " + name + "</b>" : ""}
    <span class="quote-mark">”</span>
  </p>`;

  recommendationsList.appendChild(card);

  // Clear form fields
  nameInput.value = "";
  messageInput.value = "";
}

// Event Listener for form submit
document.getElementById("recommend_form").addEventListener("submit", function(e) {
  e.preventDefault();
  addRecommendation();
});
