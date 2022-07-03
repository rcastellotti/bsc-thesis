echo "building: $1";

java -jar ~/bin/apktool_2.6.1.jar b $1 -output rebuilt-$1.apk
~/Android/Sdk/build-tools/33.0.0/zipalign -f -p 4 rebuilt-$1.apk  aligned-rebuilt-$1.apk
~/Android/Sdk/build-tools/33.0.0/apksigner sign --ks ~/key.jks  aligned-rebuilt-$1.apk
~/Android/Sdk/platform-tools/adb install aligned-rebuilt-$1.apk

echo "cleanup"
rm -rf aligned-rebuilt-$1.apk.idsig
