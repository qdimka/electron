'use strict'

const { NativeImage, nativeImage } = process.electronBinding('native_image')

const nativeGetter = nativeImage.isTemplateImage
const nativeSetter = nativeImage.setTemplateImage
Object.defineProperty(NativeImage.prototype, 'isMacTemplateImage', {
  get: () => nativeGetter.call(this),
  set: (img) => nativeSetter.call(this, img)
})

module.exports = nativeImage
