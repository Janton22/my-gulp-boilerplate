const { src, series, parallel, dest, watch } = require(“gulp");




function watcher() {
        watch(["src/images/*"], series(images, syncReload));
    }