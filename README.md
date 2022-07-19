# bsc-thesis

[![](https://img.shields.io/badge/download%20apks-drive.svg)](https://drive.google.com/drive/folders/1_T9COrPe95sVOy7lEoF2vNb01mbXYRrZ)

## generate a signing key
`keytool -genkey -v -keystore key.jks -alias rc -keyalg RSA -keysize 2048 -validity 10000`

`build.sh` is a simple script to rebuild, align, sign and install an apk