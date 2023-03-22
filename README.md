# 🕉 @sensethenlove/global-style


### 🙏 Description
Global styling for body, html, common keyframes, common styles & [rem assistance](https://stackoverflow.com/questions/59920538)

### ☯️ Install
```bash
pnpm add @sensethenlove/global-style
```

### 💛 Add styling to site
```ts
import '@sensethenlove/global-style/lib/index.css'
```

### 💙 Here are the styles
```scss
body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

html {
  font-size: 62.5%; /* https://stackoverflow.com/questions/59920538 */
}

body {
  font-size: 1.8rem;
  line-height: 1.369;

  * {
    box-sizing: border-box;
  }
}

@keyframes fade-in-from-above {
  0% {
    opacity: 0;
    transform: translateY(-9rem);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-out-and-slide-up {
  0% {
    opacity: 1;
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    transform: translateY(-9rem);
  }
}

@keyframes subtle-fade-in-from-above {
  0% {
    opacity: 0;
    transform: translateY(-0.9rem);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes subtle-fade-out-and-slide-up {
  0% {
    opacity: 1;
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    transform: translateY(-0.9rem);
  }
}

.pr-text {
  padding-right: 0.45rem;
}
```

### 💖 Our helpful packages!
* [@sensethenlove/jwt](https://www.npmjs.com/package/@sensethenlove/jwt)
* [@sensethenlove/toast](https://www.npmjs.com/package/@sensethenlove/toast)
* [@sensethenlove/env-write](https://www.npmjs.com/package/@sensethenlove/env-write)
* [@sensethenlove/svelte-modal](https://www.npmjs.com/package/@sensethenlove/svelte-modal)
* [@sensethenlove/svelte-turnstile](https://www.npmjs.com/package/@sensethenlove/svelte-turnstile)
* [@sensethenlove/loop-backwards](https://www.npmjs.com/package/@sensethenlove/loop-backwards)
