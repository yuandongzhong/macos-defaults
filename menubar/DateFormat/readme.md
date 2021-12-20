# [Menu Bar](../readme.md)

## Set menubar digital clock format

> This setting configures the time and date format for the menubar digital clock.
Accepted values depend on your Language & Region settings.

- `ss` for seconds.
- `HH` for 24-hour clock.
- `EEE` for 3-letter day of the week.
- `d MMM` for day of the month and 3-letter month.


- **Tested on macOS**:
  * Monterey
  * Big Sur
  * Catalina
- **Parameter type**: string

### Set to `"EEE d MMM HH:mm:ss"`
```bash
defaults write com.apple.menuextra.clock DateFormat -string "EEE d MMM HH:mm:ss"
```
[Link to a demo video](EEE_d_MMM_HH.mm.ss.mp4)
- Thu 18 Aug 21:46:18

### Set to `"EEE h:mm:ss"`
```bash
defaults write com.apple.menuextra.clock DateFormat -string "EEE h:mm:ss"
```
[Link to a demo video](EEE_h.mm.ss.mp4)
- Thu 9:46:18

### Set to `"EEE HH:mm:ss"`
```bash
defaults write com.apple.menuextra.clock DateFormat -string "EEE HH:mm:ss"
```
[Link to a demo video](EEE_HH.mm.ss.mp4)
- Thu 21:46:18

### Read current value
```bash
defaults read com.apple.menuextra.clock DateFormat
```

## Delete current value
```bash
defaults delete com.apple.menuextra.clock DateFormat
```
