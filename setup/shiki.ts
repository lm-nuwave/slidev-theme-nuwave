/**
 * Vesper Theme — Custom Shiki Syntax Highlighting
 * Catppuccin Latte (light) + Catppuccin Mocha (dark)
 *
 * Exports a plain function — Slidev calls setup/shiki.ts default export as a function.
 * No imports needed; @slidev/types may not be installed locally in the theme directory.
 */
export default () => {
  return {
    theme: {
      // ── Light theme (Catppuccin Latte) ─────────────────────────────────
      light: {
        name: 'vesper-light',
        type: 'light',
        bg: '#eff1f5',
        fg: '#4c4f69',
        colors: {
          'editor.background':                 '#eff1f5',
          'editor.foreground':                 '#4c4f69',
          'editor.lineHighlightBackground':    '#ccd0da',
          'editorLineNumber.foreground':       '#9ca0b0',
          'editorLineNumber.activeForeground': '#6c6f85',
          'editorCursor.foreground':           '#8839ef',
          'editor.selectionBackground':        '#8839ef44',
        },
        tokenColors: [
          {
            scope: ['comment', 'punctuation.definition.comment'],
            settings: { foreground: '#8c8fa1', fontStyle: 'italic' },
          },
          {
            scope: [
              'keyword', 'keyword.control', 'keyword.operator',
              'keyword.declaration', 'storage.type', 'storage.modifier',
            ],
            settings: { foreground: '#8839ef', fontStyle: 'bold' },
          },
          {
            scope: ['string', 'string.quoted', 'string.template', 'string.interpolated'],
            settings: { foreground: '#40a02b' },
          },
          {
            scope: ['punctuation.definition.string'],
            settings: { foreground: '#179299' },
          },
          {
            scope: ['constant.numeric', 'constant.language.boolean'],
            settings: { foreground: '#fe640b' },
          },
          {
            scope: ['entity.name.function', 'meta.function-call', 'support.function'],
            settings: { foreground: '#1e66f5', fontStyle: 'bold' },
          },
          {
            scope: ['entity.name.class', 'entity.name.type', 'support.class', 'support.type'],
            settings: { foreground: '#df8e1d', fontStyle: 'bold' },
          },
          {
            scope: ['variable', 'variable.other', 'meta.definition.variable'],
            settings: { foreground: '#4c4f69' },
          },
          {
            scope: ['constant', 'constant.other'],
            settings: { foreground: '#fe640b' },
          },
          {
            scope: ['keyword.operator', 'punctuation.accessor'],
            settings: { foreground: '#04a5e5' },
          },
          {
            scope: ['variable.parameter', 'meta.parameter'],
            settings: { foreground: '#7287fd', fontStyle: 'italic' },
          },
          {
            scope: ['meta.decorator', 'entity.name.tag'],
            settings: { foreground: '#d20f39' },
          },
          {
            scope: ['support.type.property-name', 'variable.other.property'],
            settings: { foreground: '#179299' },
          },
          {
            scope: ['punctuation', 'meta.brace'],
            settings: { foreground: '#7c7f93' },
          },
          {
            scope: ['entity.name.module', 'support.module'],
            settings: { foreground: '#8839ef' },
          },
          {
            scope: ['entity.name.tag.yaml', 'support.type.property-name.yaml'],
            settings: { foreground: '#1e66f5' },
          },
          {
            scope: [
              'support.function.builtin.shell', 'keyword.other.shell',
              'entity.name.command.shell', 'meta.function-call.shell',
            ],
            settings: { foreground: '#d20f39', fontStyle: 'bold' },
          },
          {
            scope: ['markup.heading', 'entity.name.section.markdown'],
            settings: { foreground: '#8839ef', fontStyle: 'bold' },
          },
        ],
      },

      // ── Dark theme (Catppuccin Mocha) ──────────────────────────────────
      dark: {
        name: 'vesper-dark',
        type: 'dark',
        bg: '#1e1e2e',
        fg: '#cdd6f4',
        colors: {
          'editor.background':                 '#1e1e2e',
          'editor.foreground':                 '#cdd6f4',
          'editor.lineHighlightBackground':    '#313244',
          'editorLineNumber.foreground':       '#6c7086',
          'editorLineNumber.activeForeground': '#a6adc8',
          'editorCursor.foreground':           '#cba6f7',
          'editor.selectionBackground':        '#cba6f744',
        },
        tokenColors: [
          {
            scope: ['comment', 'punctuation.definition.comment'],
            settings: { foreground: '#7f849c', fontStyle: 'italic' },
          },
          {
            scope: [
              'keyword', 'keyword.control', 'keyword.operator',
              'keyword.declaration', 'storage.type', 'storage.modifier',
            ],
            settings: { foreground: '#cba6f7', fontStyle: 'bold' },
          },
          {
            scope: ['string', 'string.quoted', 'string.template', 'string.interpolated'],
            settings: { foreground: '#a6e3a1' },
          },
          {
            scope: ['punctuation.definition.string'],
            settings: { foreground: '#94e2d5' },
          },
          {
            scope: ['constant.numeric', 'constant.language.boolean'],
            settings: { foreground: '#fab387' },
          },
          {
            scope: ['entity.name.function', 'meta.function-call', 'support.function'],
            settings: { foreground: '#89b4fa', fontStyle: 'bold' },
          },
          {
            scope: ['entity.name.class', 'entity.name.type', 'support.class', 'support.type'],
            settings: { foreground: '#f9e2af', fontStyle: 'bold' },
          },
          {
            scope: ['variable', 'variable.other', 'meta.definition.variable'],
            settings: { foreground: '#cdd6f4' },
          },
          {
            scope: ['constant', 'constant.other'],
            settings: { foreground: '#fab387' },
          },
          {
            scope: ['keyword.operator', 'punctuation.accessor'],
            settings: { foreground: '#89dceb' },
          },
          {
            scope: ['variable.parameter', 'meta.parameter'],
            settings: { foreground: '#b4befe', fontStyle: 'italic' },
          },
          {
            scope: ['meta.decorator', 'entity.name.tag'],
            settings: { foreground: '#f38ba8' },
          },
          {
            scope: ['support.type.property-name', 'variable.other.property'],
            settings: { foreground: '#94e2d5' },
          },
          {
            scope: ['punctuation', 'meta.brace'],
            settings: { foreground: '#9399b2' },
          },
          {
            scope: ['entity.name.module', 'support.module'],
            settings: { foreground: '#cba6f7' },
          },
          {
            scope: ['entity.name.tag.yaml', 'support.type.property-name.yaml'],
            settings: { foreground: '#89b4fa' },
          },
          {
            scope: [
              'support.function.builtin.shell', 'keyword.other.shell',
              'entity.name.command.shell', 'meta.function-call.shell',
            ],
            settings: { foreground: '#f38ba8', fontStyle: 'bold' },
          },
          {
            scope: ['markup.heading', 'entity.name.section.markdown'],
            settings: { foreground: '#cba6f7', fontStyle: 'bold' },
          },
        ],
      },
    },
  }
}
