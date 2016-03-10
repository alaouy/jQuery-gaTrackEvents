# jQuery-gaTrackEvents
Lightweight jQuery plugin to quickly tag [Google Universal Analytic](https://developers.google.com/analytics/devguides/collection/analyticsjs/events) events through a data attribute via the HTML markup.

## Installation
Include the plugin file after jQuery, and initialize your Universal Analytics snippet.

## Instructions
For each element you wish to track an event on, add the following data attribute **data-ga-click** and specify the [event's attributes](https://developers.google.com/analytics/devguides/collection/analyticsjs/eventCategoryevents#event_fields).
```html
<a href="#" data-ga-click="Category, Action, Label, Value">Link</a>
```
