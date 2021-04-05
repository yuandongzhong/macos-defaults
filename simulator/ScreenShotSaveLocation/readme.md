# [Simulator](../readme.md)

## Set screenshot location

> Set default location for Simulator screenshots.

Note that the folder has to exist in the filesystem.


- **Tested on macOS**:
  * Catalina
- **Parameter type**: string

### Set to `~/Pictures/Screenshots` (default value)
```bash
defaults write com.apple.iphonesimulator ScreenShotSaveLocation -string ~/Pictures/Screenshots
```

### Set to `~/Pictures/Simulator Screenshots`
```bash
defaults write com.apple.iphonesimulator ScreenShotSaveLocation -string ~/Pictures/Simulator Screenshots
```

### Read current value
```bash
defaults read com.apple.iphonesimulator ScreenShotSaveLocation
```

## Delete current value
```bash
defaults delete com.apple.iphonesimulator ScreenShotSaveLocation
```
