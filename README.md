## Culture Portal About Belarussian Writers

##### Website made with TypeScript and Redux.

### How can you navigate in this repository?

- At the **src/components/** you can find all components used to develop this website.

- At the **src/views/** you can find pages that appear by navigating on website.

- There are also a couple of Redux settings paths in **src/**.

* At the **src/components/StyleGuide/** lies everything relates to the styleguide.

### StyleGuide using

We create styleguide via React Styleguidist library, so it's a page we must to **deploy**.

We can do it in our current repository.

For development we use _StyleGuide DevServer_ which runs through the command:

- **npx styleguidist server**
  by link http://localhost:6060/

StyleGuide building path happends through the command:

- **npx styleguidist build** at the _styleguide/_ path which used for deploy.

On the main website we insert url deploy on the styleguide page.

### Netlify using

For deployment we use Netlify service. So we can:

1. Run **npm run build** to build the project.
2. Run **npm run deploy** to deploy the project.
