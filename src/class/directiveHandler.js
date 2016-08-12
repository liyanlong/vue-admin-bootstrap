import Vue from 'vue'
export default {
    register: function (directives) {
        if (typeof directives === 'string') {
            directives = [directives];
        }
        if (!Array.isArray(directives)) {
            return;
        }
        directives.forEach(directive => {
            directive(Vue);
        });
    }
}
