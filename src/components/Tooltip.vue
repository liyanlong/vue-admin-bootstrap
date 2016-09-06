<template lang="html">
    <span v-el:trigger :class="class" :tabindex="trigger == 'focus' ? 0: ''">
        <slot></slot>
    </span>
    <div v-el:popover v-if="show" :class="[tooltipClass, effect,  placement,  {
          'in': inShow
        }]"  :style="{
              display: displayShow ? 'block' : 'none',
              left: position.left + 'px',
              top: position.top + 'px'
          }" role="tooltip">
      <div class="tooltip-arrow"></div>
      <div class="tooltip-inner">
          <slot name="content">{{{content}}}</slot>
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
        'tooltipClass': {
            type: String,
            default: 'tooltip'
        }
    },
    computed: {
        slots () {
            return this._slotContents;
        }
    }
};
</script>
