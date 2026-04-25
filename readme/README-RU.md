# @trapar-waves/cli-template

![npm version](https://img.shields.io/npm/v/@trapar-waves/cli-template)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/cli-template)
![License](https://img.shields.io/github/license/Trapar-waves/cli-template)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/cli-template)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/cli-template/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[English](../README.md) | [中文](/readme/README-CN.md) | [日本語](/readme/README-JP.md)

> Шаблон разработки CLI на базе современных инструментов, интегрирующий TypeScript, инструмент сборки tsup, систему логирования consola и другие ядровые компоненты для ускорения настройки высококачественных CLI-проектов.

## ✨ Особенности

- **Инструментарий CLI:** Интегрирует `ts-node` (для прямого выполнения TypeScript во время разработки) и `tsup` (для сборки уровня производства), поддерживая весь рабочий процесс от отладки до развертывания.
- **Поддержка TypeScript:** Полная конфигурация TypeScript (включая `tsconfig.json`) с проверкой типов и автодополнением для обеспечения поддерживаемости кода.
- **Структурированное логирование:** Реализует логирование с уровнями (info/warn/error), пользовательское форматирование и контекстно-зависимые сообщения через `consola` для повышения эффективности отладки.
- **Разбор данных:** Встроенный `destr` для безопасного разбора JSON-подобных данных (например, аргументов CLI, конфигурационных файлов), предотвращая исключения от `JSON.parse`.
- **Стилизация терминала:** Использует легковесный `picocolors` для кроссплатформенной поддержки цветов терминала (160+ цветовых кодов) и стилей (полужирный/подчеркнутый) для улучшения интерактивности CLI.
- **Качество кода:** Интегрированный ESLint (основанный на `@antfu/eslint-config`) для автоматической проверки стиля кода, обнаружения ошибок и обеспечения соблюдения лучших практик.
- **Быстрые сборки:** Конфигурация по умолчанию `tsup` поддерживает вывод ESM, исходные карты и генерацию объявлений типов, с более чем на 30% быстрее временем сборки по сравнению с традиционными инструментами.

## 💻 Технологический стек

- **Язык:** `TypeScript`：Типизированный суперсет JavaScript с статической проверкой типов и современным синтаксисом.
- **Инструмент сборки:** `tsup`：Быстрый бандлер на основе esbuild, поддерживающий вывод ESM, CommonJS и объявлений типов.
- **Логирование:** `consola`：Структурированная библиотека логирования с сообщениями разного уровня, пользовательскими темами и поддержкой контекста.
- **Обработка данных:** `destr`：Безопасный парсер для JSON-подобных строк (например, аргументов CLI) для предотвращения ошибок `JSON.parse`.
- **Стилизация терминала:** `picocolors`：Легковесная кроссплатформенная библиотека цветов терминала с 160+ цветовыми кодами и стилями (полужирный/подчеркнутый).
- **Линтинг кода:** `ESLint` + `@antfu/eslint-config`：Современные правила линтинга JavaScript/TypeScript с автопоправкой для проблем со стилем и ошибками.
- **Менеджер пакетов:** `pnpm`：Контент-адрессованный менеджер пакетов с более быстрыми установками и сниженным использованием диска (см. `pnpm-lock.yaml`).

Полный список зависимостей см. в [package.json](package.json).

## 🚀 Начало работы

Следуйте этим инструкциям, чтобы запустить проект локально.

### Предварительные требования

Убедитесь, что у вас установлены следующие компоненты:

- Node.js (рекомендуется версия >= 18.x)
- Пакетный менеджер (npm, yarn или pnpm)

```bash
node -v
npm -v
```

### Установка

Использование `create-trapar-waves` для создания нового проекта:

```bash
pnpm create trapar-waves
```

Или, если вы предпочитаете настроить шаблон вручную:

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/Trapar-waves/cli-template.git
   cd cli-template
   ```
2. Установите зависимости:
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

### Разработка

Запуск CLI в режиме разработки с помощью `ts-node`:

```bash
pnpm start
# or
npm run start
```

### Сборка

Сборка CLI для продакшена с помощью `tsup`:

```bash
pnpm build
# or
npm run build
```

Это приведет к выводу скомпилированного JavaScript в каталог `dist`.

## 🤝 Участие в разработке

Вклад в проект приветствуется и очень ценится! Чтобы внести вклад, следуйте этим шагам:

1. Сделайте форк репозитория
2. Создайте ветку с функцией (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте свои изменения (`git commit -m 'Add some amazing feature'`)
4. Отправьте изменения в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

Перед коммитом убедитесь, что ваш код соответствует правилам линтинга проекта, запустив `pnpm lint`.

## 👤 Author

- **Rikka:** (admin@rikka.cc)
- **GitHub Profile:** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 📄 Лицензия

Этот проект лицензирован по лицензии MIT - подробности см. в файле [LICENSE](../LICENSE).

## 🔗 Links

- **Репозиторий:** [https://github.com/Trapar-waves/cli-template](https://github.com/Trapar-waves/cli-template)
- **Домашняя страница:** [https://github.com/Trapar-waves/cli-template](https://github.com/Trapar-waves/cli-template)
- **Проблемы:** [https://github.com/Trapar-waves/cli-template/issues](https://github.com/Trapar-waves/cli-template/issues)
