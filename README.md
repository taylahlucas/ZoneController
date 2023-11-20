# ZoneController-React
A simple interface for a device zone controllers read from JSON data.
Select the zones icon to toggle the zone on and off.

https://github.com/taylahlucas/ZoneController-React/assets/53559103/6a78a2cc-4e47-4bef-b482-7c4501670a0a

### Assumptions

- When no icon is provided for a zone, a default icon will be used.
- Data pulled from data.json is static.

# Setup

cd zone-controller

npm run build     // Initial setup

npm start

## Testing

cd zone-controller
npm test

# Folder Navigation

- /components - Reusable components
- /data - Given sample data in JSON format
- /services - Redux services
- /utils - Utility files
- /__tests__ - Tests for Redux logic

# Packages

### UI

- @mui/material
- @emotion/react
- @emotion/styled

### Utils

- @prop-types
- @reduxjs/toolkit
- @react-test-renderer

# Assets

- For ease of development, icons have been imported from icons8.com.
- For zones without icons, a default icon has been provided.
