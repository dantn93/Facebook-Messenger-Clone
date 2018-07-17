case "$1" in
   'ios')
      react-native run-ios --simulator="iPhone 7"
      ;;
   'android')
      react-native run-android
      ;;
esac