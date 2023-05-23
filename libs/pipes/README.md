<h1 align="center">Ngx Armory - Pipes</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/@ngx-armory/pipes"><img src="https://img.shields.io/npm/v/@ngx-armory/pipes.svg?style=flat-square" alt="npm"></a>
  <a href="https://github.com/maicongodinho/ngx-armory/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="MIT licensed"></a>
  <br>
  <i>Enhance your Angular projects with a wide range of pipes</i>
</p>

<br>

## Table of contents

- [Installation](#installation)
- [Changelog](https://github.com/maicongodinho/ngx-armory/blob/main/libs/pipes/CHANGELOG.md)
- [Conditional](#boolean)
  - [isNull](#isnull)

## Installation

1. Use npm to install the package

```terminal
$ npm install @ngx-armory/pipes --save
```

2. You could add to your standalone component or module a specific pipe such as `IsNullPipe`.

```typescript
import {IsNullPipe} from '@ngx-armory/pipes';

@NgModule({
 // ...
 imports: [
   // ...
   IsNullPipe
 ]
})
```

```typescript
import { IsNullPipe } from '@ngx-armory/pipes';

@Component({
  // ..
  standalone: true,
  imports: [IsNullPipe],
})
export class AppComponent {}
```

3. Pipes are also injectable and can be used in Components / Services / etc..

```typescript
import { IsNullPipe } from '@ngx-armory/pipes';

@Component({
  // ..
  providers: [IsNullPipe],
})
export class AppComponent {
  constructor(private isNullPipe: IsNullPipe) {
    const nullable = null;
    this.isNullPipe.transform(nullable); // Returns: true
  }
  // ..
}
```

4. You can also use pipes as part of your template for ex.

```html
<p>{{ "foo" | isNull }}</p>
<!-- Output: false -->
```

This library was generated with [Nx](https://nx.dev).
