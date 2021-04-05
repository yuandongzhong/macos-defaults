# [Miscellaneous](../readme.md)

## Disable application quarantine message

> Turn off the “Application Downloaded from Internet” quarantine warning.

⚠️ Stopped working on Big Sur.


- **Tested on macOS**:
  * Catalina
- **Parameter type**: bool

### Set to `true` (default value)
```bash
defaults write com.apple.LaunchServices LSQuarantine -bool true
```
- "Application Downloaded from Internet" popup will display

### Set to `false`
```bash
defaults write com.apple.LaunchServices LSQuarantine -bool false
```
- "Application Downloaded from Internet" popup will not display

### Read current value
```bash
defaults read com.apple.LaunchServices LSQuarantine
```

## Delete current value
```bash
defaults delete com.apple.LaunchServices LSQuarantine
```
