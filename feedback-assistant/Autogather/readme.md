# [Feedback Assistant](../readme.md)

## Autogather

> Choose whether to autogather large files when submitting a feedback report.

Can result in a slow Mac and important upload metrics.


- **Tested on macOS**:
  * Monterey
  * Big Sur
- **Parameter type**: bool

### Set to `true` (default value)
```bash
defaults write com.apple.appleseed.FeedbackAssistant Autogather -bool true
```
- Feedback Assistant gathers large files when submitting a report

### Set to `false`
```bash
defaults write com.apple.appleseed.FeedbackAssistant Autogather -bool false
```
- Do not autogather large files when submitting a report

### Read current value
```bash
defaults read com.apple.appleseed.FeedbackAssistant Autogather
```

## Delete current value
```bash
defaults delete com.apple.appleseed.FeedbackAssistant Autogather
```
