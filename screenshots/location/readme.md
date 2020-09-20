# [Screenshots](../readme.md)

## Set location

> Set default screenshot location.

- **Tested on macOS**:
  * Big Sur
  * Catalina
- **Parameter type**: string

### Set to `~/Desktop` (default value)
```bash
defaults write com.apple.screencapture location -string ~/Desktop && killall SystemUIServer
```

### Set to `~/Pictures`
```bash
defaults write com.apple.screencapture location -string ~/Pictures && killall SystemUIServer
```

### Read current value
```bash
defaults read com.apple.screencapture location
```

## Delete current value
```bash
defaults delete com.apple.screencapture location && killall SystemUIServer
```
