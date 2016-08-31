<template>
  <slot></slot>
  <div v-el:popover  v-if="show" :class="['popover', effect, placement, {
        'in': inShow
      }]" :style="{
            display: displayShow ? 'block' : 'none',
            left: position.left + 'px',
            top: position.top + 'px'
        }">
    <div class="arrow"></div>
    <h3 class="popover-title" v-if="title">
      <slot name="popover-title">{{title}}</slot>
    </h3>
    <div class="popover-content">
      <slot>{{{content}}}</slot>
    </div>
  </div>
</template>

<script>
import PopoverMixin from './mixins/popoverMixins.js'
export default {
    mixins: [PopoverMixin],
    props: {
        trigger: {
            type: String,
            default: 'click'
        }
    }
}
</script>
