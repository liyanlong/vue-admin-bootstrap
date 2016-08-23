<template lang="html">
    <div class="modal"  v-if="show" transition="fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close"  aria-label="Close"  @click="closeModal"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">
                        <slot name="title">title</slot>
                    </h4>
                </div>
                <div class="modal-body">
                    <slot>
                        <p>One fine body&hellip;</p>
                    </slot>
                </div>
                <div class="modal-footer">
                    <slot name="foot">
                        <button type="button" class="btn btn-default" @click="closeModal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </slot>
                </div>
            </div>
        </div>
    </div>
    <div class="modal-backdrop fade in" style="z-index: 1040;"></div>
</template>

<script>
export default {
    props: ['show'],
    data () {
        return {
            transition: 'fade',
            fadeIn: false
        };
    },
    computed: {},
    compiled () {
        console.log('compile');
    },
    ready () {

    },
    attached () {
        console.log('attached');
        this.$appendTo('body');
    },
    detached () {
        console.log('detach');
    },
    destroyed () {

    },
    methods: {
        closeModal () {
            this.show = false;
            this.$emit('close-modal');
        }
    },
    components: {},
    watch: {
        show (val, oldValue) {
            if (val) {
                // modal-open body 添加 样式
                document.body.classList.add('modal-open');
            } else {
                document.body.classList.remove('modal-open');
            }
        }
    }
};
</script>

<style>
.fade-transition{
    opacity: 1;
    display: block;
    transition: opacity .15s linear;
}
.fade-enter{
    opacity: 0;
}
.fade-leave{
    opacity: 0;
}
</style>
