<template lang="html">
    <slot></slot>
    <div v-el:popover v-if="show" :class="[class, effect,  placement,  {
          'in': inShow
        }]"  :style="{
              display: displayShow ? 'block' : 'none',
              left: position.left + 'px',
              top: position.top + 'px'
          }" role="tooltip">
      <div class="tooltip-arrow"></div>
      <div class="tooltip-inner">
        <slot name="tooltip-content">{{{content}}}</slot>
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
        },
        'class': {
            type: String,
            default: 'tooltip'
        }
    }
};
</script>
