(() => {
  const input = document.getElementById("site-search-query");
  const results = document.getElementById("site-search-results");
  const status = document.getElementById("site-search-status");
  if (!input || !results || !status) return;
  let posts = [];
  const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
  const script = document.currentScript;
  const indexURL = script ? script.dataset.indexUrl : "index.json";
  fetch(indexURL).then((response) => response.json()).then((data) => {
    posts = data;
    input.addEventListener("input", () => render(input.value));
  }).catch(() => { status.textContent = "Search is currently unavailable."; });
  function render(query) {
    const term = query.trim().toLowerCase();
    if (!term) { results.innerHTML = ""; status.textContent = "Type to search all posts."; return; }
    const matches = posts.filter((post) => [post.title, post.summary, post.content, ...(post.tags || [])].join(" ").toLowerCase().includes(term));
    status.textContent = `${matches.length} result${matches.length === 1 ? "" : "s"} found.`;
    results.innerHTML = matches.map((post) => `<article class="rounded-md border border-neutral-200 p-5 dark:border-neutral-700"><h2 class="text-2xl font-bold"><a href="${escapeHTML(post.permalink)}" class="hover:underline">${escapeHTML(post.title)}</a></h2><p class="mt-2 text-sm text-neutral-500">${escapeHTML((post.tags || []).join(" · "))}</p><p class="mt-3">${escapeHTML(post.summary || "")}</p></article>`).join("") || "<p>No posts matched your search.</p>";
  }
})();
