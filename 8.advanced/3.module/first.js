

/*         ______Named Import______          */

import { name, message } from "./second.js";
import * as iam from "./second.js"
import { name as nam, message as msg} from "./second.js";

console.log(name, message)
console.log(iam.name)
console.log(nam, msg)

/*         ______Default Import______          */

import external from "./second.js"
console.log(external)

/*         ______Function Import______          */

import {myFunc} from "./second.js";
myFunc()