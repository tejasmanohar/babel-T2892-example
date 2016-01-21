don't usually do this but i committed node_modules/ this time to pin version
and build of the node modules for others to see

run `npm start`

```javascript
SyntaxError: /Users/tejas/Repos/tejasmanohar/babel-T2892-example/fn.js: "t" is read-only (This is an error on an internal node. Probably an internal error. Location has been estimated.)
  1 |
  2 | export default function (a, b) {
  3 |   return async (ctx, next) => {
  4 |     const t = 2
  5 |   }
  6 | }
  7 |
    at File.buildCodeFrameError (/Users/tejas/Repos/tejasmanohar/babel-T2892-example/node_modules/babel-core/lib/transformation/file/index.js:408:15)
    at NodePath.buildCodeFrameError (/Users/tejas/Repos/tejasmanohar/babel-T2892-example/node_modules/babel-traverse/lib/path/index.js:148:26)
    at PluginPass.Scope (/Users/tejas/Repos/tejasmanohar/babel-T2892-example/node_modules/babel-plugin-check-es2015-constants/lib/index.js:33:29)
    at PluginPass.newFn (/Users/tejas/Repos/tejasmanohar/babel-T2892-example/node_modules/babel-traverse/lib/visitors.js:326:17)
    at newFn (/Users/tejas/Repos/tejasmanohar/babel-T2892-example/node_modules/babel-traverse/lib/visitors.js:293:19)
    at NodePath._call (/Users/tejas/Repos/tejasmanohar/babel-T2892-example/node_modules/babel-traverse/lib/path/context.js:74:18)
    at NodePath.call (/Users/tejas/Repos/tejasmanohar/babel-T2892-example/node_modules/babel-traverse/lib/path/context.js:46:17)
    at NodePath.visit (/Users/tejas/Repos/tejasmanohar/babel-T2892-example/node_modules/babel-traverse/lib/path/context.js:104:12)
    at TraversalContext.visitQueue (/Users/tejas/Repos/tejasmanohar/babel-T2892-example/node_modules/babel-traverse/lib/context.js:153:16)
    at TraversalContext.visitMultiple (/Users/tejas/Repos/tejasmanohar/babel-T2892-example/node_modules/babel-traverse/lib/context.js:108:17)
    at TraversalContext.visit (/Users/tejas/Repos/tejasmanohar/babel-T2892-example/node_modules/babel-traverse/lib/context.js:195:19)
```
