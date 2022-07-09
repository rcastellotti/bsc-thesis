Java.perform(function () {
  var RootPackages = ["com.topjohnwu.magisk"];
  var RootBinaries = ["su", "magisk"];

  var PackageManager = Java.use("android.app.ApplicationPackageManager");
  var NativeFile = Java.use("java.io.File");

  PackageManager.getPackageInfo.overload(
    "java.lang.String",
    "int"
  ).implementation = function (pname, flags) {
    var shouldFakePackage = RootPackages.indexOf(pname) > -1;
    if (shouldFakePackage) {
      send("Bypass root check for package: " + pname);
      pname = "set.package.name.to.a.fake.one.so.we.can.bypass.it";
    }
    return this.getPackageInfo
      .overload("java.lang.String", "int")
      .call(this, pname, flags);
  };

  NativeFile.exists.implementation = function () {
    var name = NativeFile.getName.call(this);
    var shouldFakeReturn = RootBinaries.indexOf(name) > -1;
    if (shouldFakeReturn) {
      send("Bypass return value for binary: " + name);
      return false;
    } else {
      return this.exists.call(this);
    }
  };
});
