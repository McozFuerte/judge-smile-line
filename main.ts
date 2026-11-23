import * as fs from "node:fs";

const ENTRY = "A comment in the failing test said \"you've got this\"; I wrote it last week, and today it finally worked.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", ENTRY + "\n");
console.log(ENTRY);
