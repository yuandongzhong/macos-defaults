# [Time Machine](../readme.md)

## Don&#x27;t offer new disks for Time Machine backup

> Prevent Time Machine from prompting to use newly connected storage as backup volumes.

- **Tested on macOS**:
  * Catalina
- **Parameter type**: bool

### Set to `false` (default value)
```bash
defaults write com.apple.TimeMachine DoNotOfferNewDisksForBackup -bool false
```
- When a new disk is connected, system prompts to ask if you want to use it as a backup volume.

### Set to `true`
```bash
defaults write com.apple.TimeMachine DoNotOfferNewDisksForBackup -bool true
```
- When a new disk is connected, system does not prompt to ask if you want to use it as a backup volume.

### Read current value
```bash
defaults read com.apple.TimeMachine DoNotOfferNewDisksForBackup
```

## Delete current value
```bash
defaults delete com.apple.TimeMachine DoNotOfferNewDisksForBackup
```
