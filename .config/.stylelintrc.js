module.exports = {
  extends: 'stylelint-config-recommended',
  plugins: [
    /**
     * add plugins
     * docs: https://stylelint.io/user-guide/configure#plugins
     */
    'stylelint-scss',
  ],
  ignoreFiles: [
    /**
     * ignore certain files
     * docs: https://stylelint.io/user-guide/configure#ignorefiles
     */
    // 'my-file.css',
    // '**/my-directory/*.css'
  ],
  rules: {
    /**
     * add custom rules
     * docs: https://stylelint.io/user-guide/rules/list
     */
    'at-rule-no-unknown': [
      true,
      {
        'ignoreAtRules': [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'extends',
          'layer',
        ],
      },
    ],
    'no-descending-specificity': null,
    'declaration-block-trailing-semicolon': null,
    'block-no-empty': null,
    'declaration-no-important': null,
    'no-missing-end-of-source-newline': null,
    'selector-class-pattern': null,
    'selector-list-comma-newline-after': null,
    'selector-no-qualifying-type': null,
    'scss/operator-no-unspaced': null,
    'scss/dollar-variable-default': null,
    'font-weight-notation': null,
    'font-family-no-missing-generic-family-keyword': null,
    'number-leading-zero': null,
    'selector-pseudo-element-colon-notation': null,
    'color-hex-case': null,
    'string-quotes': null,
    'property-no-vendor-prefix': null,
    'value-no-vendor-prefix': null,
    'declaration-colon-space-after': null,
    'declaration-block-no-duplicate-custom-properties': null,
    'no-duplicate-selectors': null,
    'no-invalid-position-at-import-rule': null
  }
}
