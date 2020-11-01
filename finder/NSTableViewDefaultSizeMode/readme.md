# [Finder](../readme.md)

## Set Finder sidebar icon size

> Choose the size of Finder sidebar icons

- **Tested on macOS**:
  * Big Sur
  * Catalina
- **Parameter type**: int

### Set to `1`
```bash
defaults write NSGlobalDomain NSTableViewDefaultSizeMode -int 1 && killall Finder
```
- Small

### Set to `2` (default value)
```bash
defaults write NSGlobalDomain NSTableViewDefaultSizeMode -int 2 && killall Finder
```
- Medium

### Set to `3`
```bash
defaults write NSGlobalDomain NSTableViewDefaultSizeMode -int 3 && killall Finder
```
- Large

### Read current value
```bash
defaults read NSGlobalDomain NSTableViewDefaultSizeMode
```

## Delete current value
```bash
defaults delete NSGlobalDomain NSTableViewDefaultSizeMode && killall Finder
```
