# [Finder](../readme.md)

## Show hidden files

> Show hidden files in the Finder.

- **Tested on macOS**:
  * Big Sur
  * Catalina
- **Parameter type**: bool

### Set to `false` (default value)
```bash
defaults write com.apple.Finder AppleShowAllFiles -bool false && killall Finder
```
![Example output with value set to false](false.png)
- Do not show hidden files inside the Finder

### Set to `true`
```bash
defaults write com.apple.Finder AppleShowAllFiles -bool true && killall Finder
```
![Example output with value set to true](true.png)
- Show hidden files inside the Finder

### Read current value
```bash
defaults read com.apple.Finder AppleShowAllFiles
```

## Delete current value
```bash
defaults delete com.apple.Finder AppleShowAllFiles && killall Finder
```
