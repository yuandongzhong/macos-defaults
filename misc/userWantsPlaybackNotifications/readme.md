# [Miscellaneous](../readme.md)

## Show Music song notifications

> Display a notification when a new song starts in the Music app.

- **Tested on macOS**:
  * Catalina
- **Parameter type**: bool

### Set to `false` (default value)
```bash
defaults write com.apple.Music userWantsPlaybackNotifications -bool false && killall Music
```
- Notifications will not be displayed.

### Set to `true`
```bash
defaults write com.apple.Music userWantsPlaybackNotifications -bool true && killall Music
```
- Notifications will be displayed.

### Read current value
```bash
defaults read com.apple.Music userWantsPlaybackNotifications
```

## Delete current value
```bash
defaults delete com.apple.Music userWantsPlaybackNotifications && killall Music
```
