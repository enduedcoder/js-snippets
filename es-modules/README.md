# ES modules

the main idea of modules is to import and export the different section of the code from different files into other files which allows you to break your code into smaller maintainable code that is easy to understand

`export`: there there two ways to export:

1. export
2. default export - you can only default export only one thing from a your file (if you are exporting class, then class will be deafult export)

`type="module"`: we use this attribute to tell browser that we can using module in the our javascript application. (this is usually used when we use `import` in our application and the browser throws error like `unexpected identifier` when it parses `import` keyword)
**To fix:**

<script type="module" src="./main.js"></script>

`import`:
we can also change the name of the default imported objects. and we can rename the non-default export member of the module but with a different format i.e., using `as` keyword
// Default exported member
import U from './user.js';

//Non-deafult exported member
import { printName as printUserName} from './user.js';

`Note` : import and export is not usually supported in older browser so use Babel which will help with that since it that all necessary conversion and get the modules rendered in the older browser byt converting them to older-browser code

Reference:
https://www.youtube.com/watch?v=cRHQNNcYf6s&list=PLZlA0Gpn_vH9k5ju1yq9qCDqvtuTVgTr6&index=10
