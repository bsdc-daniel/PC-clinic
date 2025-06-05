
function searchText() {
      // Remove previous highlights
      const previousHighlights = document.querySelectorAll('.highlight');
      previousHighlights.forEach(el => {
        el.outerHTML = el.innerText;
      });

      const searchTerm = document.getElementById("searchInput").value.toLowerCase();
      if (!searchTerm) return;

      const bodyText = document.body.innerHTML;
      const regex = new RegExp(`(${searchTerm})`, 'gi');

      document.body.innerHTML = bodyText.replace(regex, '<span class="highlight">$1</span>');
    }