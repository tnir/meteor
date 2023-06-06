// Source: https://github.com/coreyti/showdown

Package.describe({
  summary: "Markdown-to-HTML processor",
  version: "3.0.0-alpha300.6",
  deprecated: true,
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('3.0-alpha.6');
  api.use('ecmascript@1.0.0-alpha300.6');
  api.use("templating@2.0.0-alpha300.6", "client", {weak: true});
  api.mainModule('template-integration.js', 'client');
});

Package.onTest(function (api) {
  api.use("blaze", "client");
});
