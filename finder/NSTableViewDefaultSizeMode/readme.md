# [Finder](../readme.md)

## Set sidebar icon size

> Choose the size of Finder sidebar icons

- **Tested on macOS**:
  * Monterey
  * Big Sur
  * Catalina
- **Parameter type**: int

### Set to `1`
```bash
defaults write NSGlobalDomain NSTableViewDefaultSizeMode -int 1 && killall Finder
```
![Example output with value set to 1](1.png)
- Small

### Set to `2` (default value)
```bash
defaults write NSGlobalDomain NSTableViewDefaultSizeMode -int 2 && killall Finder
```
![Example output with value set to 2](2.png)
- Medium

### Set to `3`
```bash
defaults write NSGlobalDomain NSTableViewDefaultSizeMode -int 3 && killall Finder
```
![Example output with value set to 3](3.png)
- Large

### Read current value
```bash
defaults read NSGlobalDomain NSTableViewDefaultSizeMode
```

## Delete current value
```bash
defaults delete NSGlobalDomain NSTableViewDefaultSizeMode && killall Finder
```
