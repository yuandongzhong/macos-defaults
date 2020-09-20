# [Screenshots](../readme.md)

## Display thumbnail

> Choose whether to display a thumbnail after taking a screenshot.

- **Tested on macOS**:
  * Big Sur
  * Catalina
- **Parameter type**: bool

### Set to `true` (default value)
```bash
defaults write com.apple.screencapture show-thumbnail -bool true
```
- Display the thumbnail after taking a screenshot

### Set to `false`
```bash
defaults write com.apple.screencapture show-thumbnail -bool false
```
- Do not display the thumbnail

### Read current value
```bash
defaults read com.apple.screencapture show-thumbnail
```

## Delete current value
```bash
defaults delete com.apple.screencapture show-thumbnail
```
