# AGENTS.md

## Cursor Cloud specific instructions

### Project overview

TeVe is a cross-platform IPTV player built with Flutter/Dart targeting Android and iOS. It fetches ~10,000 free live TV channels from the [iptv-org API](https://iptv-org.github.io) and uses a FastAPI+SQLite backend (separate repo) for auth and favorites.

### Flutter version compatibility

This project requires **Flutter 3.7.x** (Dart 2.19.x). The `pubspec.yaml` SDK constraint is `>=2.18.0-271.7.beta <3.7.0`, but the locked dependency versions (especially `google_fonts` 3.0.1, `cached_network_image` 3.2.3) are incompatible with Flutter 3.10+ due to:
- `AssetManifest` naming conflict introduced in Flutter 3.10
- `DecoderCallback` type removal in Flutter 3.13
- `Paint.enableDithering` removal in Flutter 3.13

Flutter 3.7.12 (Dart 2.19.6) is the verified working version. It is installed at `/opt/flutter-sdk/flutter/bin`.

### Environment setup

The Flutter SDK, Android SDK, and Java 17 are pre-installed:
- **Flutter**: `/opt/flutter-sdk/flutter/bin` (added to PATH in `~/.bashrc`)
- **Android SDK**: `~/android-sdk` (ANDROID_HOME)
- **Java 17**: `/usr/lib/jvm/java-17-openjdk-amd64` (JAVA_HOME) — required because Gradle 7.4 is incompatible with Java 21

### Key commands

| Task | Command |
|------|---------|
| Install deps | `flutter pub get` |
| Lint/analyze | `flutter analyze` |
| Build APK (debug) | `flutter build apk --debug` |
| Build web | `flutter config --enable-web && flutter build web` |
| Run web dev server | `flutter run -d web-server --web-port=8080 --web-hostname=0.0.0.0` |
| Run tests | `flutter test` (no test directory exists currently) |

### Backend

The original backend at `https://web-7-ush.cloud.okteto.net` (Okteto free tier) is likely offline. Auth (login/signup) and favorites features require the [Teve-Backend](https://github.com/7-USH/Teve-Backend) to be running. The backend URL is hardcoded in `lib/Utils/teve_theme.dart` (`dbURL` constant).

### Gotchas

- Running `flutter pub get` or `flutter` commands may auto-modify `.metadata`, `android/build.gradle`, and `pubspec.lock`. Revert these with `git checkout` if unintended.
- The `web/` directory is not committed. Running `flutter create --platforms=web .` generates it. For web builds, enable web first: `flutter config --enable-web`.
- No test directory exists. `flutter test` exits cleanly with "Test directory not found."
- The `wakelock_windows` plugin warning during `flutter pub get` is harmless — it only affects Windows builds.
