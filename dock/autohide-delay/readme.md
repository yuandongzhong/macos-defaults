# [Dock](../readme.md)

## Autohide delay

> Change the Dock opening delay.

- **Tested on macOS**:
  * Monterey
  * Big Sur
  * Catalina
  * Mojave
- **Parameter type**: float

### Requirements
- [`com.apple.dock autohide`](../../dock/autohide/readme.md#set-to-true) must be set to `true`

### Set to `0.5` (default value)
```bash
defaults write com.apple.dock autohide-delay -float 0.5 && killall Dock
```
[Link to a demo video](0.5.mp4)
- By default, the Dock only opens if the mouse doesn't move for 0.5 seconds

### Set to `0`
```bash
defaults write com.apple.dock autohide-delay -float 0 && killall Dock
```
[Link to a demo video](0.mp4)
- Remove the autohide delay, the Dock appears instantly

### Read current value
```bash
defaults read com.apple.dock autohide-delay
```

## Delete current value
```bash
defaults delete com.apple.dock autohide-delay && killall Dock
```
