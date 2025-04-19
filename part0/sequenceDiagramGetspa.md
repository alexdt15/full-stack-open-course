sequenceDiagram
participant User
participant Browser
participant Server

    User->>Browser: Navigate to https://studies.cs.helsinki.fi/exampleapp/spa
    Browser->>Server: GET /spa
    Server-->>Browser: HTML document
    Note right of Browser: HTML includes links to main.css and spa.js
    Browser->>Server: GET /main.css
    Server-->>Browser: main.css
    Browser->>Server: GET /spa.js
    Server-->>Browser: spa.js
    Browser->>Server: GET /data.json
    Server-->>Browser: JSON file with list of notes
    Browser->>Browser: Execute JavaScript to draw notes from JSON into the HTML
