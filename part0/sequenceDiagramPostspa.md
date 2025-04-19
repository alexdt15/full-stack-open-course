sequenceDiagram
participant User
participant Browser
participant Server

    User->>Browser: Type "new note from spa"
    User->>Browser: Submit form
    Browser->>Server: POST /new_note_spa with note content
    Server-->>Browser: 200 OK ("note created")
    Browser->>Browser: Execute JavaScript file code to render new note without refreshing page
