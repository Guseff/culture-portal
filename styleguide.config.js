module.exports = {
  title: 'Culture Portal by RSS Team - StyleGuide',
  components: './src/components/StyleGuide/*.tsx',
  exampleMode: 'hide',
  showSidebar: false,
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json'
  ).parse,
  sections: [
    {
      name: 'Culture Portal by RSS Team - StyleGuide',
      content: 'src/components/StyleGuide/StyleGuide.md',
    },
  ],
  template: {
    favicon: './src/assets/icons/favicon.ico',
  },
};
