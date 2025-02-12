import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '200.html', // Specify a fallback page for SPA mode
      strict: false // Ignore the error for dynamic routes
    }),
    paths: {
      base: ''
    },
    prerender: {
      handleHttpError: ({ path, referrer, message }) => {
        // Ignore 404 errors for paths that do not begin with the base path
        if (path.startsWith('')) {
          return;
        }
        throw new Error(message);
      }
    }
  }
};