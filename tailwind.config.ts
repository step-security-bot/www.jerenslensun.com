import type { Config } from 'tailwindcss'

export default {
    darkMode: ['class'],
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        fontFamily: {
            display: ['Merriweather', 'serif'],
            body: ['Merriweather', 'serif'],
        },
        extend: {
            boxShadow: {
                'elevation-0':
                    'rgba(0, 0, 0, 0.2) 0px 0px 0px 0px, rgba(0, 0, 0, 0.14) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 0px 0px 0px',
                'elevation-1':
                    'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
                'elevation-2':
                    'rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px',
                'elevation-3':
                    'rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px',
                'elevation-4':
                    'rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px',
                'elevation-5':
                    'rgba(0, 0, 0, 0.2) 0px 7px 8px -4px, rgba(0, 0, 0, 0.14) 0px 12px 17px 2px, rgba(0, 0, 0, 0.12) 0px 5px 22px 4px',
            },
            opacity: {
                '8': '.08',
                '16': '.16',
            },
            colors: {
                primary: 'rgb(var(--md-sys-color-primary) / <alpha-value>)',
                'on-primary':
                    'rgb(var(--md-sys-color-on-primary) / <alpha-value>)',
                'primary-container':
                    'rgb(var(--md-sys-color-primary-container) / <alpha-value>)',
                'on-primary-container':
                    'rgb(var(--md-sys-color-on-primary-container) / <alpha-value>)',
                secondary: 'rgb(var(--md-sys-color-secondary) / <alpha-value>)',
                'on-secondary':
                    'rgb(var(--md-sys-color-on-secondary) / <alpha-value>)',
                'secondary-container':
                    'rgb(var(--md-sys-color-secondary-container) / <alpha-value>)',
                'on-secondary-container':
                    'rgb(var(--md-sys-color-on-secondary-container) / <alpha-value>)',
                tertiary: 'var(--md-sys-color-tertiary)',
                'on-tertiary': 'var(--md-sys-color-on-tertiary)',
                'tertiary-container': 'var(--md-sys-color-tertiary-container)',
                'on-tertiary-container':
                    'var(--md-sys-color-on-tertiary-container)',
                error: 'var(--md-sys-color-error)',
                'on-error': 'var(--md-sys-color-on-error)',
                'error-container': 'var(--md-sys-color-error-container)',
                'on-error-container': 'var(--md-sys-color-on-error-container)',
                warning: 'var(--md-sys-color-warning)',
                'on-warning': 'var(--md-sys-color-on-warning)',
                'warning-container': 'var(--md-sys-color-warning-container)',
                'on-warning-container':
                    'var(--md-sys-color-on-warning-container)',
                success: 'var(--md-sys-color-success)',
                'on-success': 'var(--md-sys-color-on-success)',
                'success-container': 'var(--md-sys-color-success-container)',
                'on-success-container':
                    'var(--md-sys-color-on-success-container)',
                background: 'var(--md-sys-color-background)',
                'on-background': 'var(--md-sys-color-on-background)',
                surface: 'var(--md-sys-color-surface)',
                'on-surface': 'var(--md-sys-color-on-surface)',
                outline: 'var(--md-sys-color-outline)',
            },
            gridTemplateColumns: {
                'auto-fill': 'repeat(auto-fit, minmax(350px, 1fr))',
                'auto-fill-lg': 'repeat(auto-fit, minmax(400px, 1fr))',
            },
            height: {
                '9/10': '90vh',
                '1/10': '10vh',
                '40rem': '40rem',
            },
            minHeight: {
                '9/10': '90vh',
            },
            margin: ({ theme }) => ({
                '10vw': '10vw',
                ...theme('spacing'),
            }),
            padding: ({ theme }) => ({
                '5vw': '5vw',
                ...theme('spacing'),
            }),
            typography: () => ({
                DEFAULT: {
                    css: {
                        // maxWidth: '',
                    },
                },
            }),
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
    ],
} satisfies Config
