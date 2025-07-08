# Dashboard test project

## Відповіді на запитання щодо архітектури проєкту

## 1. Організація компонентів

Я б організував компоненти за принципами Feature-Sliced Design, як вже почато у цьому проєкті. Для повторного використання створив би:

- **UI Kit** у `shared/ui` з повністю декомпозованими компонентами без бізнес-логіки та композиційні компоненти на рівні `widgets` для складних блоків інтерфейсу.
  Тому що це дозволить уникнути дублювання коду та спростить тестування.

## 2. Робота з API

Для роботу з API у масштабному проєкті я б використав:
- **RTK Query** для кешування, автоматичної інвалідації та повторних запитів у поєднанні з GraphQL та Apollo Client для оптимізації запитів і отримання лише потрібних даних в одному запиті, що значно зменшує кількість звернень до сервера порівняно зі стандартними REST API.

## 3. Масштабування проєкту

Для масштабування проєкту я б:

- Впровадив **повноцінний FSD** з усіма шарами (entities, features, pages)
- Використав **динамічні імпорти** та розподілив бандл для оптимізації завантаження
- Впровадив **continuous integration** з автоматичною перевіркою типів та лінтингом

## 4. Основні ризики у фронтенд-частині

Головні ризики, які я бачу:

- **Продуктивність при роботі з великими обсягами даних** (списки проксі, моніторинг)
- **Неузгодженість інтерфейсу** при розростанні команди розробників
- **Складність підтримки стану** при збільшенні кількості взаємозалежних компонентів
- **Проблеми з безпекою** при роботі з чутливими даними (платіжні методи, авторизація)

Для мінімізації цих ризиків рекомендую впровадити суворі code review, автоматизоване тестування та чіткі стандарти коду.

## 📋 Project Overview

Dashboard is a modern web application for managing proxy servers, developed using cutting-edge web development technologies. The platform offers a convenient interface for purchasing, configuring, and monitoring proxy servers for business needs.

## 🛠️ Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + a bit of common CSS :)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) and [React Redux](https://react-redux.js.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Icons**: [Lucide React](https://lucide.dev/) and [Tabler Icons](https://tabler-icons.io/)

## 🏗️Project Architecture
The project is built on Feature-Sliced Design (FSD) methodology, which provides a structured approach to frontend architecture. FSD divides the application into layers with clear responsibilities and boundaries:
### Directory Structure
``` 
src/
├── app/            # Next.js application (entry points)
├── shared/         # Reusable elements (UI kit, libs, API)
│   ├── lib/        # Utilities and helper functions
│   ├── store/      # Redux store configuration
│   └── ui/         # UI components library
└── widgets/        # Compositional components (business logic blocks)
    ├── Aside/      # Sidebar navigation widget
    ├── Header/     # Application header widget
    ├── Plans/      # Subscription plans widget
    ├── Proxies/    # Proxy management widget
    └── Summary/    # Order summary widget
```

Each feature and widget follows the FSD module structure with model (business logic), ui (presentation), and api (data access) folders where applicable, ensuring clear separation of concerns.

## ✨ Key Features

- **Proxy Selection and Configuration**: Flexible system for choosing the number of IP addresses and locations
- **Flexible Subscription Plans**: Monthly and annual plans with progressive discounts
- **Promo Code System**: Support for discount codes for marketing campaigns
- **Responsive Interface**: Full support for mobile and desktop devices
- **Optimized Pricing**: Automatic price calculation based on the number of proxies

## 🚀 Getting Started

### Requirements

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```shell script
git clone https://github.com/yourusername/dashboard.git
cd dashboard
```

2. Install dependencies:
```shell script
npm install
# or
yarn
```

3. Run the project in development mode:
```shell script
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building the Project

```shell script
npm run build
# or
yarn build
```

## 🧩 Component Structure

The project uses a component approach with a clear separation of responsibilities:

- **UI Components**: Atomic components (buttons, input fields, dropdown menus)
- **Widgets**: Compositional components that combine UI elements to solve specific tasks
- **Models**: Redux slices for application state management