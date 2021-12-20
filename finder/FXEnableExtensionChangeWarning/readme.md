# [Finder](../readme.md)

## Changing file extension warning

> Choose whether to display a warning when changing a file extension.

- **Tested on macOS**:
  * Monterey
  * Big Sur
  * Catalina
  * Mojave
- **Parameter type**: bool

### Set to `true` (default value)
```bash
defaults write com.apple.finder FXEnableExtensionChangeWarning -bool true && killall Finder
```
[Link to a demo video](true.mp4)
- Display a warning when changing a file extension in the Finder

### Set to `false`
```bash
defaults write com.apple.finder FXEnableExtensionChangeWarning -bool false && killall Finder
```
[Link to a demo video](false.mp4)
- Do not display the warning

### Read current value
```bash
defaults read com.apple.finder FXEnableExtensionChangeWarning
```

## Delete current value
```bash
defaults delete com.apple.finder FXEnableExtensionChangeWarning && killall Finder
```
