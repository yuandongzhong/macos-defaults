# [Dock](../readme.md)

## Autohide

> Autohides the Dock. You can toggle the Dock using `⌥ alt`+`⌘ cmd`+`d`.

- **Tested on macOS**:
  * Big Sur
  * Catalina
  * Mojave
- **Parameter type**: bool

### Set to `false` (default value)
```bash
defaults write com.apple.dock autohide -bool false && killall Dock
```
- Always display the Dock

### Set to `true`
```bash
defaults write com.apple.dock autohide -bool true && killall Dock
```
- Autohide the Dock when the mouse is out

### Read current value
```bash
defaults read com.apple.dock autohide
```

## Delete current value
```bash
defaults delete com.apple.dock autohide && killall Dock
```
