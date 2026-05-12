/**
 * NuWave Theme — Custom Shiki Syntax Highlighting
 * NuWave light mode + NuWave navy dark mode
 *
 * Exports a plain function — Slidev calls setup/shiki.ts default export as a function.
 * No imports needed; @slidev/types may not be installed locally in the theme directory.
 */
export default () => {
  return {
    theme: {
      // ── Light theme (NuWave Stone Fog) ─────────────────────────────────
      light: {
        name: 'nuwave-light',
        type: 'light',
        bg: '#ECEEF2',
        fg: '#1B3A6B',
        colors: {
          'editor.background':                 '#ECEEF2',
          'editor.foreground':                 '#1B3A6B',
          'editor.lineHighlightBackground':    '#D4D6DA',
          'editorLineNumber.foreground':       '#9BA8B5',
          'editorLineNumber.activeForeground': '#6A80A0',
          'editorCursor.foreground':           '#1EADC4',
          'editor.selectionBackground':        '#1EADC444',
        },
        tokenColors: [
          {
            scope: ['comment', 'punctuation.definition.comment'],
            settings: { foreground: '#8A96A3', fontStyle: 'italic' },
          },
          {
            scope: [
              'keyword', 'keyword.control', 'keyword.operator',
              'keyword.declaration', 'storage.type', 'storage.modifier',
            ],
            settings: { foreground: '#1EADC4', fontStyle: 'bold' },
          },
          {
            scope: ['string', 'string.quoted', 'string.template', 'string.interpolated'],
            settings: { foreground: '#5BAB5A' },
          },
          {
            scope: ['punctuation.definition.string'],
            settings: { foreground: '#1EADC4' },
          },
          {
            scope: ['constant.numeric', 'constant.language.boolean'],
            settings: { foreground: '#E07820' },
          },
          {
            scope: ['entity.name.function', 'meta.function-call', 'support.function'],
            settings: { foreground: '#2B7DC8', fontStyle: 'bold' },
          },
          {
            scope: ['entity.name.class', 'entity.name.type', 'support.class', 'support.type'],
            settings: { foreground: '#E07820', fontStyle: 'bold' },
          },
          {
            scope: ['variable', 'variable.other', 'meta.definition.variable'],
            settings: { foreground: '#1B3A6B' },
          },
          {
            scope: ['constant', 'constant.other'],
            settings: { foreground: '#E07820' },
          },
          {
            scope: ['keyword.operator', 'punctuation.accessor'],
            settings: { foreground: '#1EADC4' },
          },
          {
            scope: ['variable.parameter', 'meta.parameter'],
            settings: { foreground: '#5BB8E8', fontStyle: 'italic' },
          },
          {
            scope: ['meta.decorator', 'entity.name.tag'],
            settings: { foreground: '#D04040' },
          },
          {
            scope: ['support.type.property-name', 'variable.other.property'],
            settings: { foreground: '#1EADC4' },
          },
          {
            scope: ['punctuation', 'meta.brace'],
            settings: { foreground: '#8A96A3' },
          },
          {
            scope: ['entity.name.module', 'support.module'],
            settings: { foreground: '#2B7DC8' },
          },
          {
            scope: ['entity.name.tag.yaml', 'support.type.property-name.yaml'],
            settings: { foreground: '#2B7DC8' },
          },
          {
            scope: [
              'support.function.builtin.shell', 'keyword.other.shell',
              'entity.name.command.shell', 'meta.function-call.shell',
            ],
            settings: { foreground: '#E07820', fontStyle: 'bold' },
          },
          {
            scope: ['markup.heading', 'entity.name.section.markdown'],
            settings: { foreground: '#2B7DC8', fontStyle: 'bold' },
          },
        ],
      },

      // ── Dark theme (NuWave Navy) ────────────────────────────────────────
      dark: {
        name: 'nuwave-dark',
        type: 'dark',
        bg: '#0F2340',
        fg: '#E8EDF5',
        colors: {
          'editor.background':                 '#0F2340',
          'editor.foreground':                 '#E8EDF5',
          'editor.lineHighlightBackground':    '#162B4A',
          'editorLineNumber.foreground':       '#4A6A92',
          'editorLineNumber.activeForeground': '#90A8C0',
          'editorCursor.foreground':           '#1EADC4',
          'editor.selectionBackground':        '#1EADC444',
        },
        tokenColors: [
          {
            scope: ['comment', 'punctuation.definition.comment'],
            settings: { foreground: '#4A6A92', fontStyle: 'italic' },
          },
          {
            scope: [
              'keyword', 'keyword.control', 'keyword.operator',
              'keyword.declaration', 'storage.type', 'storage.modifier',
            ],
            settings: { foreground: '#5BB8E8', fontStyle: 'bold' },
          },
          {
            scope: ['string', 'string.quoted', 'string.template', 'string.interpolated'],
            settings: { foreground: '#5BAB5A' },
          },
          {
            scope: ['punctuation.definition.string'],
            settings: { foreground: '#1EADC4' },
          },
          {
            scope: ['constant.numeric', 'constant.language.boolean'],
            settings: { foreground: '#E07820' },
          },
          {
            scope: ['entity.name.function', 'meta.function-call', 'support.function'],
            settings: { foreground: '#5BB8E8', fontStyle: 'bold' },
          },
          {
            scope: ['entity.name.class', 'entity.name.type', 'support.class', 'support.type'],
            settings: { foreground: '#E07820', fontStyle: 'bold' },
          },
          {
            scope: ['variable', 'variable.other', 'meta.definition.variable'],
            settings: { foreground: '#E8EDF5' },
          },
          {
            scope: ['constant', 'constant.other'],
            settings: { foreground: '#E07820' },
          },
          {
            scope: ['keyword.operator', 'punctuation.accessor'],
            settings: { foreground: '#1EADC4' },
          },
          {
            scope: ['variable.parameter', 'meta.parameter'],
            settings: { foreground: '#90A8C0', fontStyle: 'italic' },
          },
          {
            scope: ['meta.decorator', 'entity.name.tag'],
            settings: { foreground: '#E86B28' },
          },
          {
            scope: ['support.type.property-name', 'variable.other.property'],
            settings: { foreground: '#1EADC4' },
          },
          {
            scope: ['punctuation', 'meta.brace'],
            settings: { foreground: '#4A6A92' },
          },
          {
            scope: ['entity.name.module', 'support.module'],
            settings: { foreground: '#5BB8E8' },
          },
          {
            scope: ['entity.name.tag.yaml', 'support.type.property-name.yaml'],
            settings: { foreground: '#5BB8E8' },
          },
          {
            scope: [
              'support.function.builtin.shell', 'keyword.other.shell',
              'entity.name.command.shell', 'meta.function-call.shell',
            ],
            settings: { foreground: '#E86B28', fontStyle: 'bold' },
          },
          {
            scope: ['markup.heading', 'entity.name.section.markdown'],
            settings: { foreground: '#5BB8E8', fontStyle: 'bold' },
          },
        ],
      },
    },
  }
}
