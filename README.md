# Translation setup demo for Angular using ngx-translate

Split up translation files into multiple json files per component/module.

## General steps

- Install the dependencies and devDependencies and start the server.

```sh
npm install --save-dev merge-jsons-webpack-plugin @angular-builders/custom-webpack
npm install @ngx-translate/core @ngx-translate/http-loader
```

- Create `webpack.config.js` and update `angular.json` file to use custom webpack build

```
    ...
    "architect": {
        "build": {
          "builder": "@angular-builders/custom-webpack:browser",
          "options": {
            ...
            "customWebpackConfig": {
              "path": "./webpack.config.js"
            }
          },
         ...
          "serve": {
              "builder": "@angular-builders/custom-webpack:dev-server",
               ...
            },
    ...
```

- Configure for translation in app module

```
...
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  const translationFilePath = environment.filePath + 'assets/i18n/';
  return new TranslateHttpLoader(http, translationFilePath);
}
@NgModule({
  ...
  imports: [
    ...
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
      isolate: false,
    }),
    ...
  ],
  ...
})
```

- Add translation files under path `assets/i18n/`.
