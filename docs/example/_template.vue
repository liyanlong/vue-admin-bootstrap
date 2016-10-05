<template lang="html">
    <input v-if="!icon" v-el:element type="text" class="form-control" @click="openPicker()" />
    <div v-else class="form-group">
       <div v-el:element class="input-group date">
           <input type="text" class="form-control" @mousedown="openPicker()" />
           <span class="input-group-addon" @click="">
               <span :class="['glyphicon ','glyphicon-' + icon]"></span>
           </span>
       </div>
   </div>
   <div class="bootstrap-datetimepicker-widget dropdown-menu"
        v-el:widget
        :class="[vertical]"
        :style="{'display':displayView ? 'block' : 'none'}">
        <ul class="list-unstyled">
            <li class="collapse" :class="{'in': showDatePicker}">
                <div class="datepicker">
                    <div class="datepicker-days" v-show="displayDayView">
                        <table class="table-condensed">
                            <thead>
                                <tr>
                                    <th class="prev" @click="preNextClick(-1, 'months')"><span :class="icons.previous"></span></th>
                                    <th class="picker-switch" colspan="5"
                                    @click="switchMonthView()">
                                        {{stringifyDayHeader(currDate)}}
                                    </th>
                                    <th class="next" @click="preNextClick(1, 'months')"><span :class="icons.next"></span></th>
                                </tr>
                                <tr>
                                    <th v-for="week in text.daysOfWeek" class="dow">{{week}}</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <th colspan="7">hello world</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="datepicker-months" v-show="displayMonthView">

                    </div>
                </div>
            </li>
            <li class="picker-switch accordion-toggle">
                <table class="table-condensed">
                    <tbody>
                        <tr>
                            <td>
                                <a title="Select Time">
                                    <span class="glyphicon glyphicon-time" :class="icons.time"></span>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </li>
            <li class="collaspse">
                <div class="timepicker">
                    <div class="timepicker-picker"></div>
                    <div class="timepicker-hours"></div>
                    <div class="timepicker-minutes"></div>
                </div>
            </li>
        </ul>
   </div>
</template>

<script>
import $ from 'jquery'
// import parseDateTime from 'src/utils/parseDateTime'
// import moment from 'moment'
// import coerceBoolean from 'src/utils/coerceBoolean'
// import coerceNumber from 'src/utils/coerceNumber'
import translations from 'src/utils/translations'
import Input from 'components/forms/Input'

const defaults = {
    icons: {
        time: 'glyphicon glyphicon-time',
        date: 'glyphicon glyphicon-calendar',
        up: 'glyphicon glyphicon-chevron-up',
        down: 'glyphicon glyphicon-chevron-down',
        previous: 'glyphicon glyphicon-chevron-left',
        next: 'glyphicon glyphicon-chevron-right',
        today: 'glyphicon glyphicon-screenshot',
        clear: 'glyphicon glyphicon-trash',
        close: 'glyphicon glyphicon-remove'
    }
}
export default {
    props: {
        icon: {
            type: String,
            default: null
        },
        value: {
            twoWay: true,
            type: String
        },
        lang: {
            type: String,
            default: navigator.language
        },
        placement: {
            type: String,
            default: 'auto'
        },
        format: {
            default: 'YYYY-MM-dd HH:mm:ss'
        }
    },
    data () {
        return {
            currDate: new Date(),
            dateRange: [],
            decadeRange: [],
            displayView: false,
            displayDayView: false,
            displayMonthView: false,
            displayYearView: false,
            displayTimePickerView: false,
            displayHoursView: false,
            displayMinutesView: false
        }
    },
    methods: {

        openPicker () {
            // 如果已经打开了日期组件, 不需要进行再次打开
            if (this.displayView) {
                return;
            }
            this.displayView = true;
            if (this.showDatePicker || this.showTimePicker) {
                return;
            }
            this.displayDayView = true;
        },
        preNextClick (period, type) {
            var time = {
                years: this.currDate.getFullYear(),
                months: this.currDate.getMonth(),
                days: this.currDate.getDate(),
                hours: this.currDate.getHours(),
                minutes: this.currDate.getMinutes(),
                seconds: this.currDate.getSeconds()
            }
            var offset = Math.abs(period);
            var allows = [
                'years',
                'months',
                'days',
                'hours',
                'minutes',
                'seconds'];
            type = ~allows.indexOf(type) && type || 'days';
            if (period === 0) {
                return;
            }

            time[type] = period > 0 ? time[type] + offset : time[type] - offset;
            this.currDate = new Date(time['years'], time['months'], time['days'], time['hours'], time['minutes'], time['seconds']);
        },
        switchMonthView () {
            this.displayDayView = false;
            this.displayMonthView = true;
        },
        // 显示 年-月 header
        stringifyDayHeader () {
            let date = this.currDate;
            return date.getFullYear() + ' ' + this.text.months[date.getMonth()];
        },
        getDayCount (date) {
            let dayCounts = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];
            let year = date.getFullYear();
            let month = date.getMonth();
            // 要求 能被4整除 ， 并且当年数为100的倍数时，需要被 400 整除，才有
            if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
                dayCounts[1] = 29;
            }
            return dayCounts[month];
        },
        setDateRange () {
            const year = this.currDate.getFullYear();
            const month = this.currDate.getMonth();
            const day = this.currDate.getDate();
            const dayCounts = this.getDayCount(this.currDate);
            let dateRange = [];
            let firstDayOfMonth = new Date(year, month, 1);
            let lastDayOfMonth = new Date(year, month, dayCounts);
            let i = 1;
            // 单月的所有天数
            while (i <= dayCounts) {
                let classes = ['day'];
                if (i === day) {
                    classes.push('active');
                }
                dateRange.push({
                    text: i,
                    date: new Date(year, month, i),
                    classes: classes.join(' ')
                });
                i++;
            }

            // 当月第一天的星期数
            let fisrtDay = firstDayOfMonth.getDay();
            if (fisrtDay > 0) {
                // 获取上个月的日数长度
                let lastDayCounts = this.getDayCount(new Date(year, month - 1, day));
                while (fisrtDay--) {
                    let classes = ['old', 'day'];
                    dateRange.unshift({
                        text: lastDayCounts,
                        date: new Date(year, month - 1, lastDayCounts),
                        classes: classes.join(' ')
                    });
                    lastDayCounts--;
                }
            }

            // 获取当月的最后一天的日期数
            let lastDay = lastDayOfMonth.getDay();
            if (lastDay < 6) {
                let j = 1;
                while (lastDay + j <= 6) {
                    let classes = ['new', 'day'];
                    dateRange.push({
                        text: j,
                        date: new Date(year, month + 1, j),
                        classes: classes.join(' ')
                    });
                    j++;
                }
            }
            console.log(dateRange);
        }
    },
    components: {
        bsInput: Input
    },
    computed: {
        text () {
            return translations(this.lang);
        },
        icons () {
            return defaults.icons;
        },
        // 左右对齐
        horizontal () {
            let horizontal = 'auto';
            let $parent = $(this._parent);
            let $widget = $(this.$els.widget);
            let offset = $(this.$els.element).offset();
            if (!~['left', 'right'].indexOf(this.placement)) {
                horizontal = this.placement;
            }
            if (horizontal === 'auto') {
                horizontal = $parent.width() < offset.left + $widget.outerWidth() / 2 &&
                    offset.left + $widget.outerWidth() > $(window).width() ? 'right' : 'left';
            }
            return horizontal;
        },

        // 上下对齐
        vertical () {
            let vertical = 'auto';
            let $element = $(this.$els.element);
            let $widget = $(this.$els.widget);
            let offset = $element.offset();
            if (~['top', 'bottom'].indexOf(this.placement)) {
                vertical = this.placement;
            }
            if (vertical === 'auto') {
                vertical = offset.top + $widget.height() * 1.5 >=
                $(window).height() + $(window).scrollTop() &&
                $widget.height() + $element.outerHeight() < offset.top ? 'top' : 'bottom';
            }
            return vertical;
        },
        showDatePicker () {
            return this.displayDayView || this.displayMonthView || this.displayYearView;
        },
        showTimePicker () {
            return this.displayTimePickerView || this.displayHoursView || this.displayMinutesView;
        }
    },
    watch: {
        currDate (date) {
            // 更新dateRange
            // this.setDateRange();
        }
    },
    created () {
    },

    ready () {
        let $element = $(this.$els.element);
        let widget = this.$els.widget;
        let parent = null;
        console.log($element, this)
        // 设置组件的位置
        if ($element.is('input')) {
            parent = $element.after(widget).parent();
        } else {
            parent = $element[0];
            $element.children().first().after(widget);
        }
        this._parent = parent;
        console.log(this._parent)
    }
}
</script>
