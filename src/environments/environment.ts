// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// export const environment = {
//   production: false,
//   stripe_token: 'STRIPE_TOKEN',
//   paypal_token: 'PAYPAL_TOKEN'
// };

export const environment = {
  production: false,
  urlApi: 'http://localhost:4000/',
  bucket: 'woapp-test',
  urlS3Files: 'https://woapp-test.s3.amazonaws.com/',
  urlS3FilesCategory: 'https://woapp-test.s3.amazonaws.com/Inventory/Category/',
  AWS_ACCESS_KEY_ID: "AKIAXTG54MMVTLDTSENL",
  AWS_SECRET_ACCESS_KEY: "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",
  AWS_REGION: "us-east-1",

  stripe_token: 'STRIPE_TOKEN',
  paypal_token: 'PAYPAL_TOKEN'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
