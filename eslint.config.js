import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'

export default [
  {
    ignores: ['dist/**', 'node_modules/**', '*.config.js', 'src/assets/**', 'public/**']
  },
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.{vue,js}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        navigator: 'readonly',
        location: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        requestAnimationFrame: 'readonly',
        FormData: 'readonly',
        FileReader: 'readonly',
        Blob: 'readonly',
        URL: 'readonly',
        process: 'readonly'
      }
    },
    rules: {
      // ===== 关闭纯排版/风格规则（缩进、换行、属性顺序、引号风格）=====
      'vue/html-indent': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/multiline-html-element-content-newline': 'off',
      'vue/attributes-order': 'off',
      'vue/html-self-closing': 'off',
      'vue/html-quotes': 'off',
      'vue/mustache-interpolation-spacing': 'off',
      'vue/html-closing-bracket-newline': 'off',
      'vue/first-attribute-linebreak': 'off',
      'vue/attribute-hyphenation': 'off',
      'vue/v-on-event-hyphenation': 'off',
      'vue/html-closing-bracket-spacing': 'off',
      'vue/v-slot-style': 'off',
      'vue/order-in-components': 'off',
      'vue/require-default-prop': 'off',
      'vue/require-prop-types': 'off',
      'vue/multi-word-component-names': 'off',

      // ===== 潜在真问题：存量降级 warn，不阻断 CI，后续逐步修 =====
      'vue/no-mutating-props': 'warn',
      'vue/require-valid-default-prop': 'warn',
      'vue/valid-define-emits': 'warn',
      'no-useless-assignment': 'warn',
      'vue/no-unused-vars': 'warn',
      'no-useless-escape': 'warn',
      'no-empty': 'warn',
      'vue/no-dupe-keys': 'warn',
      'vue/no-deprecated-slot-attribute': 'warn',
      'vue/no-deprecated-filter': 'warn',
      'no-unused-labels': 'warn',
      'no-redeclare': 'warn',
      'no-prototype-builtins': 'warn',
      'vue/no-template-shadow': 'warn',
      'vue/require-explicit-emits': 'warn',
      'vue/no-v-html': 'warn',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

      // auto-import 自动注入的 API ESLint 识别不到，先关 no-undef
      'no-undef': 'off',
      'vue/no-undef-properties': 'off'
    }
  }
]
