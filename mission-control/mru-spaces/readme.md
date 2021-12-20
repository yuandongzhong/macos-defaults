# [Mission Control](../readme.md)

## Rearrange automatically

> Choose whether to rearrange Spaces automatically.

- **Tested on macOS**:
  * Monterey
  * Big Sur
  * Catalina
  * Mojave
- **Parameter type**: bool

### Set to `true` (default value)
```bash
defaults write com.apple.dock mru-spaces -bool true && killall Dock
```
- Do reorder Spaces based on most recent use

### Set to `false`
```bash
defaults write com.apple.dock mru-spaces -bool false && killall Dock
```
- Keep the Spaces arrangement

### Read current value
```bash
defaults read com.apple.dock mru-spaces
```

## Delete current value
```bash
defaults delete com.apple.dock mru-spaces && killall Dock
```
