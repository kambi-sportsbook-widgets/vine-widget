# vine-widget

![](https://github.com/kambi-sportsbook-widgets/vine-widget/blob/master/screenshot.jpg?raw=true)

A widget that shows an embedded vine video.

This is a C-widget that means that it is not provided by Kambi directly, instead the operators that want to use this need to build and host the widget themselves. Please see Build Instructions.

## Configuration

Arguments and default values:
```json
"args": {
    "title": "",
    "height": 400,
    "vineUrl": "https://vine.co/v/i1YL03VM0a7"
}
```
1. title - string - title to show in the widget
2. height - number - height of the video
3. vineUrl - string - url to video

### Build Instructions

Please refer to the [core-library](https://github.com/kambi-sportsbook-widgets/widget-core-library)
