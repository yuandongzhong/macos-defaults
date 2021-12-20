# [Miscellaneous](../readme.md)

## Help Menu position

> Choose whether the Help Menu should be always-on-top.

- **Tested on macOS**:
  * Monterey
  * Big Sur
  * Catalina
  * Mojave
- **Parameter type**: bool

### Set to `false` (default value)
```bash
defaults write com.apple.helpviewer DevMode -bool false
```
- By default, the Help Menu is always-on-top

### Set to `true`
```bash
defaults write com.apple.helpviewer DevMode -bool true
```
- The Help Menu can go behind other windows

### Read current value
```bash
defaults read com.apple.helpviewer DevMode
```

## Delete current value
```bash
defaults delete com.apple.helpviewer DevMode
```
