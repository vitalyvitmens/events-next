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
