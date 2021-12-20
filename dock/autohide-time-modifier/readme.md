# [Dock](../readme.md)

## Autohide animation time

> Change the Dock opening and closing animation times.

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
defaults write com.apple.dock autohide-time-modifier -float 0.5 && killall Dock
```
[Link to a demo video](0.5.mp4)
- By default, the Dock opening and closing animations take 0.5 seconds

### Set to `2`
```bash
defaults write com.apple.dock autohide-time-modifier -float 2 && killall Dock
```
[Link to a demo video](2.mp4)
- Increase the Dock animation time

### Set to `0`
```bash
defaults write com.apple.dock autohide-time-modifier -float 0 && killall Dock
```
[Link to a demo video](0.mp4)
- Remove the Dock autohide animation

### Read current value
```bash
defaults read com.apple.dock autohide-time-modifier
```

## Delete current value
```bash
defaults delete com.apple.dock autohide-time-modifier && killall Dock
```
