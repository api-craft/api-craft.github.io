// Simple Markdown parser using showdown.js
// Add this line in your HTML head to include showdown:
// <script src="https://cdn.jsdelivr.net/npm/showdown/dist/showdown.min.js"></script>

function loadMarkdown(path) {
  fetch(path)
    .then(res => res.text())
    .then(md => {
      const converter = new showdown.Converter();
      const html = converter.makeHtml(md);
      document.getElementById("content").innerHTML = html;
    })
    .catch(err => {
      document.getElementById("content").innerHTML = "<p>Failed to load content.</p>";
      console.error(err);
    });
}
