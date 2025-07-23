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
├── components/
│   ├── ui/                 # 通用组件（Button、Modal 等）
│   ├── layout/             # 页面布局组件
│   └── features/           # 与业务强相关的组件（如 TaskList）
├── hooks/            # 自定义hooks
├── lib/              # 业务逻辑函数、状态转换器（如 reducer）
├── types/            # 全局类型定义（接口、枚举、公共 Props 等）
├── services/         # 封装和管理 API 请求
├── constants/        # 枚举、提示、配置常量
├── utils/            # 通用工具函数 / 方法封装
├── public/           # 公共静态资源
├── styles/           # 全局样式（TailwindCSS 引用等）
├── tailwind.config.ts  # TailwindCSS 配置
├── tsconfig.json     # TypeScript 配置
└── ...

