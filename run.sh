case "$1" in
      'ios')
            react-native run-ios --simulator="iPhone X"
            ;;
      'android')
            react-native run-android
            ;;
      'install')
            yarn install
            react-native eject
            react-native link
            ;;
esac