document.getElementById("shorten-btn").addEventListener("click", async () => {
  const longUrl = document.getElementById("long-url").value.trim();
  const resultDiv = document.getElementById("result");
  const shortUrlAnchor = document.getElementById("short-url");

  if (!longUrl.startsWith("http://") && !longUrl.startsWith("https://")) {
    alert("Please enter a valid URL starting with http:// or https://");
    return;
  }

  try {
    const response = await fetch("/url", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: longUrl }),
    });

    if (!response.ok) throw new Error("Failed to shorten the URL.");

    const data = await response.json();
    const shortUrl = `${window.location.origin}/url/${data.id}`; // Correct short URL
    shortUrlAnchor.href = shortUrl;
    shortUrlAnchor.textContent = shortUrl;

    resultDiv.classList.remove("hidden");
  } catch (error) {
    alert(error.message);
  }
});

// Handle the copy button
document.getElementById("copy-btn").addEventListener("click", () => {
  const shortUrl = document.getElementById("short-url").textContent;

  if (!shortUrl) {
    alert("No shortened URL available to copy.");
    return;
  }

  // Use the Clipboard API to copy the text
  navigator.clipboard.writeText(shortUrl)
    .then(() => {
      alert("Shortened URL copied to clipboard!");
    })
    .catch(err => {
      console.error("Failed to copy text: ", err);
      alert("Failed to copy URL to clipboard.");
    });
});
