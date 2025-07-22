# Next.js + React 19 + TailwindCSS 4 Starter

这是一个基于 [Next.js](https://nextjs.org/) 15、[React](https://react.dev/) 19 和 [Tailwind CSS](https://tailwindcss.com/) 4 构建的前端项目模板，适合快速开发现代 Web 应用。

## ✨ 技术栈

- ⚛️ React 19 + Server Components 支持
- 🚀 Next.js 15（使用 Turbopack 开发）
- 💨 Tailwind CSS 4 + Tailwind Merge
- 🧩 Radix UI（无样式的基础组件）
- 🎨 Lucide React（开源图标库）
- 🧠 clsx + class-variance-authority：高效样式组合
- 📦 TypeScript + ESlint + PostCSS

## 📦 项目结构

```bash
.
├── app/              # Next.js App Router 目录（页面和布局）
├── components/       # 通用 React 组件
├── styles/           # 全局样式（TailwindCSS 引用等）
├── types/            # 全局类型定义（接口、枚举、公共 Props 等）
├── utils/            # 工具函数 / 方法封装
├── public/           # 公共静态资源
├── tailwind.config.ts  # TailwindCSS 配置
├── tsconfig.json     # TypeScript 配置
└── ...

