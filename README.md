# ZoneController-React
A simple interface for a device zone controller.
Select the zones icon to toggle the zone on and off.

### Assumptions

- When no icon is provided for a zone, a default icon will be used.
- Data pulled from data.json is static.

# Setup

cd zone-controller
npm start

# Assets

- For ease of development, icons have been imported from icons8.com.
- For zones without icons, a default icon has been provided.

# Packages

### UI

- @mui/material
- @emotion/react
- @emotion/styled

### Utils
- @prop-types
- @reduxjs/toolkit

## Testing

cd zone-controller
npm test