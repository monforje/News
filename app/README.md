# Balanced News — App

Мобильное приложение на React Native (Expo).

## Запуск

```bash
npm install
npm start
```

## Основные экраны
- Splash
- Quiz
- Feed (лента)
- Article (статья)

## Хранилище
- AsyncStorage: bias-вектор, отложенные реакции

## Настройка URL сервера

Адрес backend задаётся переменной окружения `EXPO_PUBLIC_API_BASE_URL`. Если переменная не указана, используется `http://localhost:3001`.

### Пример для разработки

```bash
EXPO_PUBLIC_API_BASE_URL=https://your-dev-url.ngrok.app npm start
```

### Пример для продакшена

При сборке укажите продакшен URL:

```bash
EXPO_PUBLIC_API_BASE_URL=https://api.example.com expo build
```
