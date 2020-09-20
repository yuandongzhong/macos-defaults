# [Dock](../readme.md)

## Position

> Set the Dock position

- **Tested on macOS**:
  * Big Sur
  * Catalina
- **Parameter type**: string
  * left
  * bottom
  * right

### Set to `left`
```bash
defaults write com.apple.dock orientation -string left && killall Dock
```
![Example output with value set to left](left.png)
- Put the Dock on the left of the screen

### Set to `bottom` (default value)
```bash
defaults write com.apple.dock orientation -string bottom && killall Dock
```
![Example output with value set to bottom](bottom.png)
- Put the Dock on the bottom of the screen

### Set to `right`
```bash
defaults write com.apple.dock orientation -string right && killall Dock
```
![Example output with value set to right](right.png)
- Put the Dock on the right of the screen

### Read current value
```bash
defaults read com.apple.dock orientation
```

## Delete current value
```bash
defaults delete com.apple.dock orientation && killall Dock
```
