# Balanced News — Backend

Node.js + Express API Gateway для Balanced News.

## Запуск

```bash
npm install
npm run dev
```

## Основные эндпоинты
- `GET /feed?x&y&client_ts` — получить 4 карточки новостей
- `GET /article?url` — получить HTML статьи
- `POST /reaction` — отправить реакцию пользователя

## Окружение
- Redis (кеш)
- PostgreSQL (реакции)
- NewsAPI (`NEWSAPI_KEY` в переменных окружения)

Перед первым запуском скопируйте файл `.env.example` в `.env` и заполните реальные значения переменных.

## Структура src/
- `index.js` — основной сервер Express
- `feed.js` — логика подбора источников
- `newsapi.js` — интеграция с NewsAPI
- `cache.js` — работа с Redis
- `article.js` — парсинг статьи (заглушка)
- `db.js` — работа с PostgreSQL
- `sources.json` — список СМИ с координатами

## Зависимости
- express, axios, redis, pg, dotenv, cors 