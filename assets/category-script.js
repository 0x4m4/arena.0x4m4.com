document.addEventListener('DOMContentLoaded', function() {
    // Get the category name from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    if (category) {
        // Update the title and header
        document.title = `SSCIT CYBER ARENA - ${category}`;
        document.querySelector('h1').textContent = category;
        document.querySelector('h1').setAttribute('data-text', category);

        // Fetch the MD file
        fetch(`notes/${category.toLowerCase().replace(/ /g, '-')}.md`)
            .then(response => response.text())
            .then(markdown => {
                // Convert markdown to HTML
                const html = marked(markdown);
                // Insert the HTML into the content div
                document.getElementById('content').innerHTML = html;
            })
            .catch(error => {
                console.error('Error loading content:', error);
                document.getElementById('content').innerHTML = '<p>Error loading content. Please try again later.</p>';
            });
    } else {
        document.getElementById('content').innerHTML = '<p>Category not specified.</p>';
    }
});