import React from 'react-native';

const ImageResizerAndroid = React.NativeModules.ImageResizerAndroid;

export default {
  createResizedImage: (imagePath, name, newWidth, newHeight, compressFormat, quality, rotation = 0, outputPath) => {
    return new Promise((resolve, reject) => {
      ImageResizerAndroid.createResizedImage(        
        imagePath,
        name,
        newWidth,
        newHeight,
        compressFormat,
        quality,
        rotation,
        outputPath,
        resolve,
        reject
      );
    });
  },
};
