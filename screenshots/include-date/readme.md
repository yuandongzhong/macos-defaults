# [Screenshots](../readme.md)

## Include date

> Include date and time in screenshot filenames.

- **Tested on macOS**:
  * Big Sur
  * Catalina
- **Parameter type**: bool

### Set to `true` (default value)
```bash
defaults write com.apple.screencapture include-date -bool true
```
- Screenshot 2020-01-09 at 13.27.20.png

### Set to `false`
```bash
defaults write com.apple.screencapture include-date -bool false
```
- Screenshot.png
- Screenshot 1.png

### Read current value
```bash
defaults read com.apple.screencapture include-date
```

## Delete current value
```bash
defaults delete com.apple.screencapture include-date
```
