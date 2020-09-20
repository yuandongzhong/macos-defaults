# [Dock](../readme.md)

## Show recents

> Show recently used apps in a separate section of the Dock.

- **Tested on macOS**:
  * Big Sur
  * Catalina
- **Parameter type**: bool

### Set to `true` (default value)
```bash
defaults write com.apple.dock show-recents -bool true && killall Dock
```
![Example output with value set to true](true.png)
- Display recent apps in the Dock

### Set to `false`
```bash
defaults write com.apple.dock show-recents -bool false && killall Dock
```
![Example output with value set to false](false.png)
- Do not display recent apps in the Dock

### Read current value
```bash
defaults read com.apple.dock show-recents
```

## Delete current value
```bash
defaults delete com.apple.dock show-recents && killall Dock
```
