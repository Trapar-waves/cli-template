# @trapar-waves/cli-template

![npm version](https://img.shields.io/npm/v/@trapar-waves/cli-template)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/cli-template)
![License](https://img.shields.io/github/license/Trapar-waves/cli-template)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/cli-template)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/cli-template/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[English](../README.md) | [中文](./README-CN.md) | [日本語](./README-JP.md)

> Шаблон разработки CLI на основе современного инструментария, интегрирующий TypeScript, tsup для сборки, consola для логирования и другие ключевые компоненты для ускорения создания высококачественных CLI-проектов.

![cli-template hero](../assets/readme/hero.svg)

![Features](../assets/readme/headers/features.svg)

- **Инструментарий CLI:** Интегрирует `ts-node` (для прямого выполнения TypeScript во время разработки) и `tsup` (для продакшн-сборок), поддерживая полный рабочий процесс от отладки до развёртывания.
- **Поддержка TypeScript:** Полная конфигурация TypeScript (включая `tsconfig.json`) с проверкой типов и автодополнением для обеспечения удобства сопровождения кода.
- **Структурированное логирование:** Реализует логирование с уровнями (info/warn/error), пользовательское форматирование и контекстные сообщения через `consola` для повышения эффективности отладки.
- **Парсинг данных:** Встроенный `destr` для безопасного парсинга JSON-подобных данных (например, аргументов CLI, конфигурационных файлов), предотвращающий исключения `JSON.parse`.
- **Стилизация терминала:** Использует легковесный `picocolors` для кроссплатформенной поддержки цветов терминала (160+ цветовых кодов) и стилей (жирный/подчёркнутый) для улучшения интерактивности CLI.
- **Качество кода:** Интегрированный ESLint (на основе `@antfu/eslint-config`) для автоматической проверки стиля кода, обнаружения ошибок и применения лучших практик.
- **Git Hooks:** Интегрированы `husky` и `lint-staged` для проверок перед коммитом.

![Tech Stack](../assets/readme/headers/tech-stack.svg)

- **Язык:** `TypeScript` — типизированное надмножество JavaScript со статической проверкой типов и современным синтаксисом.
- **Инструмент сборки:** `tsup` — быстрый бандлер на основе esbuild, поддерживающий ESM, CommonJS и генерацию объявлений типов.
- **Логирование:** `consola` — библиотека структурированного логирования с сообщениями уровня, пользовательскими темами и поддержкой контекста.
- **Обработка данных:** `destr` — безопасный парсер для JSON-подобных строк (например, аргументов CLI), предотвращающий ошибки `JSON.parse`.
- **Стилизация терминала:** `picocolors` — легковесная кроссплатформенная библиотека цветов терминала с 160+ цветовыми кодами и стилями (жирный/подчёркнутый).
- **Линтинг кода:** `ESLint` + `@antfu/eslint-config` — современные правила линтинга JavaScript/TypeScript с автоматическим исправлением стилевых и ошибочных проблем.
- **Менеджер пакетов:** `pnpm` — менеджер пакетов с адресацией по содержимому, обеспечивающий более быструю установку и меньшее использование дискового пространства.

Полный список зависимостей смотрите в [package.json](../package.json).

![Getting Started](../assets/readme/headers/getting-started.svg)

### Предварительные требования

- Node.js (рекомендуется >= 18.x)
- Менеджер пакетов (npm, yarn или pnpm)

### Установка

1. Создайте новый проект с помощью шаблона:

   ```bash
   pnpm create trapar-waves
   ```

2. Перейдите в директорию проекта и установите зависимости:

   ```bash
   pnpm install
   ```

3. Запустите сервер разработки:

   ```bash
   pnpm start
   ```

![Project Structure](../assets/readme/headers/project-structure.svg)

```
├── bin/                  # Точки входа CLI
│   ├── run               # Продакшн скрипт входа
│   └── run.ts            # Скрипт входа для разработки
├── src/                  # Исходный код
│   ├── index.ts          # Основная логика приложения
│   └── logger.ts         # Конфигурация логгера (consola)
├── dist/                 # Скомпилированный вывод (генерируется tsup)
├── tsconfig.json         # Конфигурация TypeScript
├── eslint.config.mjs     # Конфигурация ESLint
├── lint-staged.config.js # Конфигурация Lint-staged
├── renovate.json         # Конфигурация бота Renovate
└── package.json          # Зависимости и скрипты проекта
```

![Contributing](../assets/readme/headers/contributing.svg)

Участие приветствуется и высоко ценится! Пожалуйста, следуйте этим шагам для вклада:

1. Fork репозиторий
2. Создайте ветку для новой функции (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте изменения (`git commit -m 'Add some amazing feature'`)
4. Отправьте изменения в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

![License](../assets/readme/headers/license.svg)

MIT License © 2025 Trapar Waves

## 👤 Автор

- **Rikka:** [admin@rikka.cc](mailto:admin@rikka.cc)
- **Профиль GitHub:** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 Ссылки

- **Репозиторий:** [https://github.com/Trapar-waves/cli-template](https://github.com/Trapar-waves/cli-template)
- **Issues:** [https://github.com/Trapar-waves/cli-template/issues](https://github.com/Trapar-waves/cli-template/issues)
