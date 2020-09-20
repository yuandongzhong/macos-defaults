# [Finder](../readme.md)

## Show extensions

> Show all file extensions in the Finder.

- **Tested on macOS**:
  * Big Sur
- **Parameter type**: bool

### Set to `false` (default value)
```bash
defaults write NSGlobalDomain AppleShowAllExtensions -bool false && killall Finder
```
- Do not show all file extensions inside the Finder

### Set to `true`
```bash
defaults write NSGlobalDomain AppleShowAllExtensions -bool true && killall Finder
```
- Show all file extensions inside the Finder

### Read current value
```bash
defaults read NSGlobalDomain AppleShowAllExtensions
```

## Delete current value
```bash
defaults delete NSGlobalDomain AppleShowAllExtensions && killall Finder
```
