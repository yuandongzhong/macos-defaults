# [Finder](../readme.md)

## Adjust toolbar title rollover delay

> Choose the delay of the auto-hidden document-proxy icon.

- **Tested on macOS**:
  * Big Sur
- **Parameter type**: float

### Set to `0.5` (default value)
```bash
defaults write NSGlobalDomain NSToolbarTitleViewRolloverDelay -float 0.5 && killall Finder
```
[Link to a demo video](0.5.mp4)
- By default, the toolbar title hovering delay takes 0.5 seconds

### Set to `0`
```bash
defaults write NSGlobalDomain NSToolbarTitleViewRolloverDelay -float 0 && killall Finder
```
[Link to a demo video](0.mp4)
- Remove the delay when hovering the toolbar title

### Set to `1`
```bash
defaults write NSGlobalDomain NSToolbarTitleViewRolloverDelay -float 1 && killall Finder
```
[Link to a demo video](1.mp4)
- Increase the delay when hovering the toolbar title

### Read current value
```bash
defaults read NSGlobalDomain NSToolbarTitleViewRolloverDelay
```

## Delete current value
```bash
defaults delete NSGlobalDomain NSToolbarTitleViewRolloverDelay && killall Finder
```
