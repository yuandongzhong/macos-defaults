# [Dock](../readme.md)

## Minimize animation effect

> Change the Dock minimize animation.

- **Tested on macOS**:
  * Big Sur
  * Catalina
- **Parameter type**: string
  * genie
  * scale
  * suck

### Requirements
- [`com.apple.dock autohide`](../../dock/autohide/readme.md#set-to-true) must be set to `true`

### Set to `genie` (default value)
```bash
defaults write com.apple.dock mineffect -string genie && killall Dock
```
[Link to a demo video](genie.mp4)

### Set to `scale`
```bash
defaults write com.apple.dock mineffect -string scale && killall Dock
```
[Link to a demo video](scale.mp4)

### Set to `suck`
```bash
defaults write com.apple.dock mineffect -string suck && killall Dock
```
[Link to a demo video](suck.mp4)
- Suck is an secret value you can't find inside the System Preferences

### Read current value
```bash
defaults read com.apple.dock mineffect
```

## Delete current value
```bash
defaults delete com.apple.dock mineffect && killall Dock
```
