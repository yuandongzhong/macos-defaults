# [Screenshots](../readme.md)

## Choose screenshot format

> Choose the screenshots image format.

- **Tested on macOS**:
  * Big Sur
  * Catalina
- **Parameter type**: string

### Set to `png` (default value)
```bash
defaults write com.apple.screencapture type -string png
```
- The generated image is a png

### Set to `jpg`
```bash
defaults write com.apple.screencapture type -string jpg
```
- The generated image is a jpg

### Read current value
```bash
defaults read com.apple.screencapture type
```

## Delete current value
```bash
defaults delete com.apple.screencapture type
```
