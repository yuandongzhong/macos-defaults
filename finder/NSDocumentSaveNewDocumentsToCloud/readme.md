# [Finder](../readme.md)

## Save to disk or iCloud by default

> Choose whether the default file save location is on disk or iCloud

- **Tested on macOS**:
  * Catalina
- **Parameter type**: bool

### Set to `true` (default value)
```bash
defaults write NSGlobalDomain NSDocumentSaveNewDocumentsToCloud -bool true
```
- iCloud Documents is the default directory opened in the fileviewer dialog when saving a new document

### Set to `false`
```bash
defaults write NSGlobalDomain NSDocumentSaveNewDocumentsToCloud -bool false
```
- home directory is opened in the fileviewer dialog when saving a new document

### Read current value
```bash
defaults read NSGlobalDomain NSDocumentSaveNewDocumentsToCloud
```

## Delete current value
```bash
defaults delete NSGlobalDomain NSDocumentSaveNewDocumentsToCloud
```
