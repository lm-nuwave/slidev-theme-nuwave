export default {
  plugins: [
    {
      name: 'lz-string-esm-shim',
      transform(code: string, id: string) {
        if (id.includes('/lz-string/libs/lz-string.js')) {
          return (
            code.replace(/module\.exports\s*=\s*LZString/, '') +
            '\nexport default LZString;\n'
          )
        }
      },
    },
  ],
}
