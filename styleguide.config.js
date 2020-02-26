module.exports = {
  title: 'Culture Portal by Team#14 - StyleGuide',
  components: './src/components/StyleGuide/*.tsx',
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json'
  ).parse,
  sections: [
    {
      name: 'Culture Portal by Team#14 - StyleGuide',
      content: 'src/components/StyleGuide/StyleGuide.md',
    },
  ],
};
