# [TextEdit](../readme.md)

## Set default document format

> Set default document format as rich text (.rtf) or plain text (.txt).

- **Tested on macOS**:
  * Monterey
  * Big Sur
- **Parameter type**: bool

### Set to `true` (default value)
```bash
defaults write com.apple.TextEdit RichText -bool true && killall TextEdit
```
![Example output with value set to true](true.png)
- Rich text is enabled.

### Set to `false`
```bash
defaults write com.apple.TextEdit RichText -bool false && killall TextEdit
```
![Example output with value set to false](false.png)
- Rich text is disabled.

### Read current value
```bash
defaults read com.apple.TextEdit RichText
```

## Delete current value
```bash
defaults delete com.apple.TextEdit RichText && killall TextEdit
```
