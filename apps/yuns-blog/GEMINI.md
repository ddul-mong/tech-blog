# Gemini Project Configuration: @apps/yuns-blog

This document provides project-specific guidelines and context for the Gemini assistant.

## 1. Project Overview

- **Project Name**: `@apps/yuns-blog`
- **Description**: A blog application built with Next.js.
- **Framework**: Next.js
- **Styling**: Tailwind CSS (using `@dul-mong/tailwind-config`, `tailwind-merge`, and `clsx`).
- **Content**: MDX (using `next-mdx-remote` and various `rehype`/`remark` plugins).

## 2. My Scope

I must perform all tasks exclusively within the `C:/T.M/Coding/tech-blog/apps/yuns-blog/` directory.

## 3. Core Commands

- **Run development server**: `pnpm dev`
- **Create production build**: `pnpm build`
- **Run production server**: `pnpm start`
- **Run linter**: `pnpm lint`

## 4. Coding Conventions

- **Styling**: Use Tailwind CSS utility classes. Combine them using the `cn` utility function (imported from `@/shared/utils/cn`).
- **Components**: Follow the existing structure for creating and organizing React components.
- **Dependencies**: Use `pnpm` to manage dependencies.
- **Code Style**: Adhere to the project's established linting rules (`next lint`).

## 5. Key File Locations

- **Pages**: `src/app/`
- **Blog Posts (MDX)**: `posts/`
- **Reusable Components**: `src/entities/` and `src/shared/`
- **Tailwind Config**: The project uses a shared config from `configs/tailwind-config`.
- **TypeScript Config**: The project uses a shared config from `configs/tsconfig`.
