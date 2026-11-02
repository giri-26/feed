
const form = document.getElementById("feedbackForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const feedbackData = {
        name: document.getElementById("name").value.trim(),
        department: document.getElementById("department").value.trim(),
        session: document.getElementById("session").value.trim(),
        feedback: document.getElementById("feedback").value.trim(),
        suggestions: document.getElementById("suggestions").value.trim()
    };

    console.log("Feedback submitted:", feedbackData);

    // Clear the form before displaying the message
    form.reset();

    alert("Feedback submitted successfully!");
});