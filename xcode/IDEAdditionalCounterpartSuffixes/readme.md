# [Xcode](../readme.md)

## Add Additional Counterpart Suffixes

> Add additional counterpart suffixes that Xcode should consider in the "Related Items > Counterparts" menu.

- **Tested on macOS**:
  * Catalina
- **Parameter type**: array-add

### Set to `"ViewModel" "View"`
```bash
defaults write com.apple.dt.Xcode IDEAdditionalCounterpartSuffixes -array-add "ViewModel" "View" && killall Xcode
```
- Add the "ViewModel" and "View" counterpart suffixes (Useful for Model-View-ViewModel (MVVM) architectures).

### Set to `"Router" "Interactor" "Builder"`
```bash
defaults write com.apple.dt.Xcode IDEAdditionalCounterpartSuffixes -array-add "Router" "Interactor" "Builder" && killall Xcode
```
- Add the "Router", "Interactor" and "Builder" counterpart suffixes (Useful for RIB architectures).

### Read current value
```bash
defaults read com.apple.dt.Xcode IDEAdditionalCounterpartSuffixes
```

## Delete current value
```bash
defaults delete com.apple.dt.Xcode IDEAdditionalCounterpartSuffixes && killall Xcode
```
