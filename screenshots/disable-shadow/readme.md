# [Screenshots](../readme.md)

## Disable shadow

> Disable screenshot shadow when capturing an app (`⌘ cmd`+`⇧ shift`+`4` then `space`).

- **Tested on macOS**:
  * Big Sur
  * Catalina
  * Mojave
- **Parameter type**: bool

### Set to `false` (default value)
```bash
defaults write com.apple.screencapture disable-shadow -bool false
```
![Example output with value set to false](false.png)
- Add a shadow to screenshots

### Set to `true`
```bash
defaults write com.apple.screencapture disable-shadow -bool true
```
![Example output with value set to true](true.png)
- Remove the default shadow from screenshots

### Read current value
```bash
defaults read com.apple.screencapture disable-shadow
```

## Delete current value
```bash
defaults delete com.apple.screencapture disable-shadow
```
