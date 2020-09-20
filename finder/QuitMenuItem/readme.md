# [Finder](../readme.md)

## Quit

> Add a quit option to the Finder.

- **Tested on macOS**:
  * Big Sur
- **Parameter type**: bool

### Set to `false` (default value)
```bash
defaults write com.apple.finder QuitMenuItem -bool false && killall Finder
```
- Hide the Finder "Quit" option

### Set to `true`
```bash
defaults write com.apple.finder QuitMenuItem -bool true && killall Finder
```
- Display the Finder "Quit" option

### Read current value
```bash
defaults read com.apple.finder QuitMenuItem
```

## Delete current value
```bash
defaults delete com.apple.finder QuitMenuItem && killall Finder
```
