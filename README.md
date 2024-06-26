# npm install --legacy-peer-deps

### npm create next-app events-next

### TS, ESLint, Tailwind CSS, src/ directory = Yes
### App Router, import alias = No

### В файле postcss.config.js добавь autoprefixer в список плагинов:
- tailwindcss: {},

### npm install autoprefixer --save-dev

### удаляем ^ в зависимостях package.json и снова делаем
### npm i

### npm install --save-dev prisma

### npx prisma init

### Наполняем сущностями файл prisma\schema.prisma
### npx prisma migrate dev
### Для взаимодействия с базой данных из браузера:
- npx prisma studio

### https://www.prisma.io/docs/orm/overview/prisma-in-your-stack/fullstack#getserversideprops

### https://trpc.io/
### https://trpc.io/docs/client/nextjs/setup
### npm install @trpc/server@next @trpc/client@next @trpc/react-query@next @trpc/next@next @tanstack/react-query@latest zod
### tsconfig.json => "strict": true,

### https://trpc.io/docs/client/nextjs/ssr
### npm i superjson

### npm install @tailwindcss/forms

### npm i react-hook-form

### https://react-hook-form.com/get-started#SchemaValidation
### npm install @hookform/resolvers --legacy-peer-deps

### https://next-auth.js.org/getting-started/example
### npm install next-auth --legacy-peer-deps
### https://next-auth.js.org/providers/credentials

### https://trpc.io/docs/server/context
### https://trpc.io/docs/server/middlewares

### Структура проекта:

```
+---prisma
|   |   dev.db
|   |   schema.prisma
|   |
|   \---migrations
|       |   migration_lock.toml
|       |
|       \---20240513101227_init
|               migration.sql
|
+---public
|       bgImage.jpg
|       favicon.png
|       poster.png
|       rs.svg
|       to-up.svg
|
\---src
    +---entities
    |   \---event
    |       |   index.ts
    |       |
    |       \---ui
    |               card.tsx
    |               detail.tsx
    |               styled-div.tsx
    |
    +---features
    |   +---auth
    |   |       auth.constants.ts
    |   |
    |   +---create-event
    |   |   |   index.ts
    |   |   |
    |   |   \---ui
    |   |           form.tsx
    |   |
    |   +---join-event
    |   |   |   index.ts
    |   |   |
    |   |   \---ui
    |   |           button.tsx
    |   |
    |   \---leave-event
    |       |   index.ts
    |       |
    |       \---ui
    |               button.tsx
    |
    +---layout
    |       footer.tsx
    |       header.tsx
    |       index.ts
    |
    +---pages
    |   |   404.tsx
    |   |   index.tsx
    |   |   signup.tsx
    |   |   _app.tsx
    |   |   _document.tsx
    |   |
    |   +---api
    |   |   +---auth
    |   |   |       next-auth.d.ts
    |   |   |       signup.ts
    |   |   |       [...nextauth].ts
    |   |   |
    |   |   \---trpc
    |   |           [trpc].ts
    |   |
    |   \---events
    |       |   create.tsx
    |       |   [id].tsx
    |       |
    |       \---[id]
    |               edit.tsx
    |
    +---server
    |   |   context.ts
    |   |   db.ts
    |   |   trpc.ts
    |   |
    |   \---routes
    |           event.ts
    |           index.ts
    |
    +---shared
    |   |   constants.ts
    |   |
    |   +---api
    |   |       index.ts
    |   |       metadata.ts
    |   |       schema.ts
    |   |
    |   \---utils
    |           auth.ts
    |           scroll.ts
    |
    \---styles
            globals.css

```
