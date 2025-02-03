# AngularAnychart

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
_  
# Support Comment
We've made changes to the **map1** component from the initial client's repository.


### Initial Task
The initial task was to create an outline for the whole country on the map.

### Solution
To address this, we have taken the following steps:

1. **Added a New Region**: We added an additional region to the map, representing the entire map, named `SA.ALL`.

### Issues Encountered
During the process, we encountered two main issues:
1. The outline stroke was breaking in certain areas of the map.
2. Unexpected interactivity hover may arise when hovering over the regions of the map, where the `SA.ALL` region sometimes gets hovered, which is somewhat an issue.

### Further Actions
To address these issues, we tried the following:
1. **Tried Different Maps**: We experimented with two different maps:
   - Our default map.
   - Adjusted default map.
   - A map from [simplemaps.com](https://simplemaps.com/static/svg/country/sa/admin1/sa.json).

Unfortunately, these steps did not resolve the issues completely.

### Manual Adjustments
We manually adjusted the map using QGIS software to include the `SA.ALL` region.
