# Custom Scrollbar Coloring
This sample project implements a directive to override the color of the scrollbar on the web.

Take a look at `scrollbar.directive.ts`. The coloring for the background/foreground of the scrollbar can be modified here.

To apply to a page you can use `<ion-content appScrollbarTheme>`.

> A common mistake is to not include the component correctly on the page. In the example `appScrollbarTheme` is added to `component.module.ts` and wherever it is used we make sure it is imported. Eg in `home.module.ts` we add `ComponentsModule` to `imports`.