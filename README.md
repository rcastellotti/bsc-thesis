# bsc-thesis

[![](https://img.shields.io/badge/download%20apks-drive.svg)](https://drive.google.com/drive/folders/1_T9COrPe95sVOy7lEoF2vNb01mbXYRrZ)

## generate a signing key
`keytool -genkey -v -keystore key.jks -alias rc -keyalg RSA -keysize 2048 -validity 10000`

## com.westernunion.moneytransferr3app.eu

+ `java -jar ~/bin/apktool_2.6.1.jar d western-union.apk`
+ `patch -p1 < western-union.patch`
+ `./build.sh western-union`


## using frida 

+ `com.pay4vend.bapp`
+ `com.revolut.revolut` 
+ `com.scottyab.rootbeer.sample.debug` 