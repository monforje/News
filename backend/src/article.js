import axios from 'axios';
import Mercury from '@postlight/mercury-parser';

// Парсит статью по URL и возвращает основные поля
export async function parseArticle(url) {
  let html;

  try {
    const res = await axios.get(url, { responseType: 'text' });
    html = res.data;
  } catch (err) {
    // URL недоступен или произошла сетевая ошибка
    throw new Error(`URL unreachable: ${err.message}`);
  }

  try {
    const parsed = await Mercury.parse(url, { html });
    return {
      title: parsed.title || url,
      author: parsed.author || '',
      publishedAt: parsed.date_published || '',
      htmlContent: parsed.content || '',
      readingTimeSec: parsed.word_count
        ? Math.ceil((parsed.word_count / 200) * 60)
        : 0
    };
  } catch (err) {
    throw new Error(`Failed to parse article: ${err.message}`);
  }
}

