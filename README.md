# sw-cjs2esm
让 script module 为所欲为  直接在浏览器中使用 import 引入 cjs库


# 使用

在使用esm 之前执行一下代码
```
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(function(reg) {
    // registration worked
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
}
```

引入示例
```
import XXX from "xxx.com/ccc" // 如果这个库是cjs库

import XXX from "xxx.com/ccc?++esm" // 增加?++esm 支持 esm

```


直接在浏览器中使用 import 享受吧。
