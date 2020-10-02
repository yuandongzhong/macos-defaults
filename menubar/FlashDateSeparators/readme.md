# [Menu Bar](../readme.md)

## Flash clock time separators

> When enabled, the clock indicator (which by default is the colon) will flash on and off each second.

- **Tested on macOS**:
- **Parameter type**: bool

### Set to `false` (default value)
```bash
defaults write com.apple.menuextra.clock FlashDateSeparators -bool false && killall SystemUIServer
```
[Link to a demo video](false.mp4)
- The time separator stays solid continuously.

### Set to `true`
```bash
defaults write com.apple.menuextra.clock FlashDateSeparators -bool true && killall SystemUIServer
```
[Link to a demo video](true.mp4)
- The time separator flashes every second.

### Read current value
```bash
defaults read com.apple.menuextra.clock FlashDateSeparators
```

## Delete current value
```bash
defaults delete com.apple.menuextra.clock FlashDateSeparators && killall SystemUIServer
```
