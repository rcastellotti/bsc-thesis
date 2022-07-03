# bsc-thesis
+ [apks](https://drive.google.com/drive/folders/1_T9COrPe95sVOy7lEoF2vNb01mbXYRrZ?usp=sharing)
+ [mobisec native code](https://docs.google.com/presentation/d/14nid9QJrSRUd4T_48KZMhWqKT_UdLg7EM-RH0HFQYdM/edit#slide=id.g42ed32a0b4_0_0)

## generate a signing key
`keytool -genkey -v -keystore key.jks -alias rc -keyalg RSA -keysize 2048 -validity 10000`

## extract an apk

`java -jar ~/bin/apktool_2.6.1.jar d app_name.apk`


## rebuild, align sign and install

`./build.sh app_name`



Installiamo l' APK: 

`~/Android/Sdk/platform-tools/adb install app_name.apk`

```
adb: failed to install nosu.apk: Failure [INSTALL_PARSE_FAILED_NO_CERTIFICATES: Failed collecting certificates for /data/app/vmdl1915796444.tmp/base.apk: Failed to collect certificates from /data/app/vmdl1915796444.tmp/base.apk: Attempt to get length of null array]
```

Dobbiamo firmarlo:

`~/Android/Sdk/build-tools/33.0.0/apksigner sign --ks ../../key.jks  app_name.apk`

Ora installiamolo: 

`~/Android/Sdk/platform-tools/adb install app_name.apk`

```
adb: failed to install nosu.apk: Failure [-124: Failed parse during installPackageLI: Targeting R+ (version 30 and above) requires the resources.arsc of installed APKs to be stored uncompressed and aligned on a 4-byte boundary]
```

Dobbiamo allinearlo, 
va allineato???

~/Android/Sdk/build-tools/33.0.0/zipalign -f -p 4 nosu.apk  aligned-nosu.apk

adb: failed to install aligned-nosu.apk: Failure [INSTALL_PARSE_FAILED_NO_CERTIFICATES: Failed collecting certificates for /data/app/vmdl2022680343.tmp/base.apk: Failed to collect certificates from /data/app/vmdl2022680343.tmp/base.apk: META-INF/KEY0.SF indicates /data/app/vmdl2022680343.tmp/base.apk is signed using APK Signature Scheme v2, but no such signature was found. Signature stripped?]
rc@s369 ~/g/bsc-thesis (main) [1]>

 ~/Android/Sdk/build-tools/33.0.0/apksigner sign --ks ../../key.jks  aligned-nosu.apk

ora installiamolo per davvero



conttrollare safetynet



## com.westernunion.moneytransferr3app.eu

`java -jar ~/bin/apktool_2.6.1.jar d western-union.apk`

`patch -p1 < western-union.patch`

`./build.sh western-union`


## com.revolut.revolut

script frida anche bapp


##


mezza@mailinator.com
mezza123!
username mezza375e'