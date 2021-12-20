# [Dock](../readme.md)

## Icon size

> Set the icon size of Dock items in pixels.

- **Tested on macOS**:
  * Monterey
  * Big Sur
  * Catalina
- **Parameter type**: int

### Set to `36`
```bash
defaults write com.apple.dock tilesize -int 36 && killall Dock
```
![Example output with value set to 36](36.png)
- Dock icon size of 36 pixels.

### Set to `48` (default value)
```bash
defaults write com.apple.dock tilesize -int 48 && killall Dock
```
![Example output with value set to 48](48.png)
- Dock icon size of 48 pixels.

### Read current value
```bash
defaults read com.apple.dock tilesize
```

## Delete current value
```bash
defaults delete com.apple.dock tilesize && killall Dock
```
