const MacRunner = require('../../mac-runner')
const { compressPngImage } = require('../../utils')

module.exports = {
  run: async (outputPath) => {
    console.log('> Recording screenshot disable-shadow with param set to false')

    try {
      const runner = new MacRunner()
      runner
        .setDefault('com.apple.screencapture', 'disable-shadow', '-bool false')
        .activateApp('Safari')
        .keyTap('l', 'command')
        .typeString('https://www.apple.com/macos/')
        .keyTap('enter')
        .captureApp('Safari', `${outputPath}/false-tmp.png`, false)
        .closeApp('Safari')
        .deleteDefault('com.apple.screencapture', 'disable-shadow')
    } catch (runnerError) {
      logRollbackInfo()
      throw new Error(runnerError)
    }

    try {
      await compressPngImage(screenshot, outputPath, 'false')
    } catch (compressPngImageError) {
      logRollbackInfo()
      throw new Error(compressPngImageError)
    }

    return { filepath: `${outputPath}/false`, isVideo: false }
  }
}

function logRollbackInfo() {
  console.info('Please manually run this command to make sure everything is properly reset:')
  console.info('defaults delete com.apple.screencapture disable-shadow')
}
