# [Miscellaneous](../readme.md)

## Enable spring loading for all Dock items

> Drag a file over an icon in the Dock, hover, and the application will open. The behaviour is unchanged if the app is already open. This behaviour has been observed with Preview, Quicktime, and iWork (Keynote, Pages, Numbers).

- **Tested on macOS**:
  * Big Sur
  * Catalina
- **Parameter type**: bool

### Set to `false` (default value)
```bash
defaults write com.apple.dock enable-spring-load-actions-on-all-items -bool false && killall Dock
```
- Spring loading is disabled for Dock items.

### Set to `true`
```bash
defaults write com.apple.dock enable-spring-load-actions-on-all-items -bool true && killall Dock
```
- Spring loading is enabled for Dock items.

### Read current value
```bash
defaults read com.apple.dock enable-spring-load-actions-on-all-items
```

## Delete current value
```bash
defaults delete com.apple.dock enable-spring-load-actions-on-all-items && killall Dock
```
