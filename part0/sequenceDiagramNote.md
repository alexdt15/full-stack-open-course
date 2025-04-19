sequenceDiagram
participant User
participant Browser
participant Server

    User->>Browser: Type "new note world!"
    User->>Browser: Submit form
    Browser->>Server: POST /new_note
    Server-->>Browser: 200 OK
    Server->>Server: Save note
    Server->>Server: Call GET /notes
    Server-->>Browser: HTML document with the form
    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    Server-->>Browser: the css file
    deactivate server
    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    Server-->>Browser: the JavaScript file
    deactivate server
    Server-->>Browser: JSON list of notes
    Browser
    Note right of browser: Browser executes js code to parse and list the notes
