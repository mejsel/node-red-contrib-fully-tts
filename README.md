## Synopsis

This node-red node enables the voice output of a string on a fully web browser instance through it's Javascript interface.
Fully is an Android fullscreen browser.
Link to the developer website: https://www.ozerov.de/fully-kiosk-browser/de/
Link to Google play store: https://play.google.com/store/apps/details?id=de.ozerov.fully

## Code Example

The node takes a string as <code>msg.payload</code>. The configuration includes a host name or an IP and a password.
Remote administration has to be enabled. Keep the default port 2323 as preset.

## Motivation

The Fully fullscreen browser can perfectly be used as a homeautomation dashboard. But it does not support the onboard text-to-speech capabilities of the webview engine. Instead is offers this feature via its own REST interface.

## Installation

Install through the node-red web-interface or via <code>npm install node-red-contrib-fully-tts</code>.

## API Reference

See https://www.ozerov.de/fully-kiosk-browser/#rest for more REST commands.

## Tests

A Dockerfile is provided to create a nodered container with the node preinstalled.

## Contributors

Mejsel (marcel.indlekofer@gmail.com)

## License

GPL license.
