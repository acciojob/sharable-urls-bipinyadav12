document.getElementById("button").addEventListener("click", function() {
            // Get the input values
            const name = document.getElementById("name").value.trim();
            const year = document.getElementById("year").value.trim();

            // Base URL
            let url = "https://localhost:8080/";

            // Build query string based on input values
            const queryParams = [];
            if (name) queryParams.push(`name=${encodeURIComponent(name)}`);
            if (year) queryParams.push(`year=${encodeURIComponent(year)}`);

            // Update the URL with query parameters if present
            if (queryParams.length > 0) {
                url += '?' + queryParams.join('&');
            }

            // Display the updated URL in the <h3> element
            document.getElementById("url").textContent = url;
        });