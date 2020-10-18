# [Xcode](../readme.md)

## Show Build Durations

> Show build durations in the Activity Viewer in Xcode's toolbar at the top of the workspace window.

- **Tested on macOS**:
  * Catalina
- **Parameter type**: bool

### Set to `true`
```bash
defaults write com.apple.dt.Xcode ShowBuildOperationDuration -bool true && killall Xcode
```
- Show the build duration in the Xcode's toolbar

### Set to `false` (default value)
```bash
defaults write com.apple.dt.Xcode ShowBuildOperationDuration -bool false && killall Xcode
```
- Do not show the build duration in the Xcode's toolbar

### Read current value
```bash
defaults read com.apple.dt.Xcode ShowBuildOperationDuration
```

## Delete current value
```bash
defaults delete com.apple.dt.Xcode ShowBuildOperationDuration && killall Xcode
```
