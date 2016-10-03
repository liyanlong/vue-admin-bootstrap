<template lang="html">
    <input v-if="!useIcon" type="text" class="form-control"
    v-el:element
    v-model="value"
    :readonly="readonly"
    :placeholder="placeholder"
    @focus="show()" />
    <div v-else class="form-group">
       <div v-el:element class="input-group date">
           <input type="text" class="form-control"
           v-model="value"
           :readonly="readonly"
           :placeholder="placeholder"
           @focus="show()"/>
           <span class="input-group-addon" @click.stop="toggleClick()">
               <span :class="['glyphicon ','glyphicon-' + icon]"></span>
           </span>
       </div>
   </div>
   <div class="bootstrap-datetimepicker-widget dropdown-menu"
        v-el:widget
        :class="[vertical, {
            'pull-right': horizontal === 'right'
        }]"
        :style="{
            'display':displayView ? 'block' : 'none',
            'top':  vertical === 'top' ? 'auto' : inputHeight,
            'right': horizontal === 'right' ? '0px' : 'auto',
            'bottom': vertical === 'bottom' ? 'auto' : inputHeight,
            'left': horizontal === 'left' ? '0px' : 'auto'
        }"
        @click.stop>
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
                                <tr v-for="(index, dates) in dateRange">
                                    <td v-for="d in dates"
                                    :class="d.classes"
                                    @click="daySelect(d.date)">
                                        {{d.text}}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="datepicker-months" v-show="displayMonthView">
                        <table class="table-condensed">
                            <thead>
                                <tr>
                                    <th class="prev" @click="preNextClick(-1, 'years')"><span :class="icons.previous"></span></th>
                                    <th class="picker-switch" colspan="5"
                                    @click="switchYearView()">
                                        {{currDate.getFullYear()}}
                                    </th>
                                    <th class="next" @click="preNextClick(1, 'years')"><span :class="icons.next"></span></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colspan="7">
                                        <span
                                            v-for="(i, month) in text.months"
                                            :class="{
                                                'month': true,
                                                'active': i === parseValue.getMonth() && parseValue.getFullYear() === currDate.getFullYear()
                                            }"
                                            @click="monthSelect(i)">
                                            {{month}}
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="datepicker-years" v-show="displayYearView">
                        <table class="table-condensed">
                            <thead>
                                <tr>
                                    <th class="prev" data-action @click="preNextClick(-10, 'years')">
                                        <span title="Next Decade"
                                         :class="icons.previous"></span>
                                    </th>
                                    <th class="picker-switch" colspan="5" title="Select Decade">
                                        {{stringifyDecadeHeader(currDate)}}
                                    </th>
                                    <th class="next" data-action @click="preNextClick(10, 'years')">
                                        <span title="Previous Decade"
                                        :class="icons.next"></span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colspan="7">
                                        <span data-action v-for="(index, year) in decadeRange"
                                        :class="{
                                            'year': true,
                                            'old': index === 0,
                                            'new': decadeRange.length === index + 1,
                                            'active': year.text === parseValue.getFullYear()
                                        }"
                                        @click.stop="yearSelect(year.text)">
                                            {{year.text}}
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </li>
            <li class="picker-switch accordion-toggle">
                <table class="table-condensed">
                    <tbody>
                        <tr>
                            <td>
                                <a title="Select Time" tabindex="-1">
                                    <span data-action v-show="showDatePicker" :class="icons.time" @click="switchTimePickerView()"></span>
                                    <span data-action v-show="showTimePicker" :class="icons.date" @click="switchDatePickerView()"></span>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </li>
            <li class="collapse" :class="{'in': showTimePicker}">
                <div class="timepicker" >
                    <div class="timepicker-picker" v-show="displayTimePickerView">
                        <table class="table-condensed">
                            <tbody>
                                <tr>
                                    <td>
                                        <a tabindex="-1" title="Increment Hour">
                                            <span data-action
                                            :class="icons.up"
                                            @click="preNextClick(1, 'hours', true)"></span>
                                        </a>
                                    </td>
                                    <td class="separator"></td>
                                    <td>
                                        <a tabindex="-1" title="Increment Minute">
                                            <span data-action
                                            :class="icons.up"
                                            @click="preNextClick(1, 'minutes', true)"></span>
                                        </a>
                                    </td>
                                    <td class="separator"></td>
                                    <td>
                                        <a tabindex="-1" title="Increment Seconds">
                                            <span data-action
                                            :class="icons.up"
                                            @click="preNextClick(1, 'seconds', true)"></span>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span class="timepicker-hour" title="Pick Hour">{{stringifyTime('hours')}}</span>
                                    </td>
                                    <td class="separator">:</td>
                                    <td>
                                        <span class="timepicker-minute" title="Pick Minute">
                                            {{stringifyTime('minutes')}}
                                        </span>
                                    </td>
                                    <td class="separator">:</td>
                                    <td>
                                        <span class="timepicker-second" title="Pick Second">
                                            {{stringifyTime('seconds')}}
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a tabindex="-1" title="Decrement Hour">
                                            <span data-action :class="icons.down"
                                            @click="preNextClick(-1, 'hours', true)"></span>
                                        </a>
                                    </td>
                                    <td class="separator"></td>
                                    <td>
                                        <a tabindex="-1" title="Decrement Minute">
                                            <span data-action :class="icons.down" @click="preNextClick(-1, 'minutes', true)"></span>
                                        </a>
                                    </td>
                                    <td class="separator"></td>
                                    <td>
                                        <a tabindex="-1" title="Decrement Second">
                                            <span data-action :class="icons.down" @click="preNextClick(-1, 'seconds', true)"></span>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="5">
                                        <button
                                            class="btn btn-primary"
                                            tabindex="-1"
                                            title="Toggle Period"
                                            @click="preNextClick(currDate.getHours() - 12 > 0 ? -12 : 12, 'hours')">{{stringifyTime('period')}}</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="timepicker-hours"></div>
                    <div class="timepicker-minutes"></div>
                </div>
            </li>
        </ul>
   </div>
</template>

<script>
import $ from 'jquery'
import {dateFormats, timeFormats, indexOfKey} from 'src/utils/global'
import parseDateTime from 'src/utils/parseDateTime'
import stringifyDateTime from 'src/utils/stringifyDateTime'
import coerceBoolean from 'src/utils/coerceBoolean'
import translations from 'src/utils/translations'
import Input from 'components/forms/Input'

const dateTimePickerList = [];

// 关闭其它下拉菜单
function closeWidget (e) {
    if (e && e.which === 3) {
        return;
    }
    $(dateTimePickerList).each(function (index, vm) {
        var input = vm.input;
        if (!vm.displayView) {
            return;
        }
        if (e && e.type === 'click' && input === e.target) {
            return;
        }
        vm.close();
    });
};

// 文档注册关闭菜单事件
$(document).on('click.vab.datetimepciker', closeWidget);

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
const now = new Date();

export default {
    props: {
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
        },
        focusOnShow: {
            type: Boolean,
            coerce: coerceBoolean,
            default: true
        },
        readonly: {
            type: Boolean,
            coerce: coerceBoolean,
            default: false
        },
        placeholder: {
            type: String,
            default: null
        },
        useAmPm: {
            type: Boolean,
            coerce: coerceBoolean,
            default: false
        },
        useIcon: {
            type: Boolean,
            coerce: coerceBoolean,
            default: false
        }
    },
    data () {
        return {
            // 当前组件的显示日期
            currDate: null,
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
        show () {
            // 如果已经打开了日期组件, 不需要进行再次打开
            if (this.displayView) {
                return;
            }
            this.displayView = true;

            // 如果组件视图已经有一个展开状态,则不做任何操作
            if (this.showDatePicker || this.showTimePicker) {
                return;
            }
            this.displayDayView = true;
        },
        toggleClick () {
            if (this.displayView) {
                this.close();
            } else {
                this.show();
            }
        },
        close () {
            this.displayView = false;
        },
        preNextClick (period, type, updateValue) {
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

            if (updateValue) {
                this.value = stringifyDateTime(this.currDate, this.format);
            }
        },
        daySelect (date) {
            this.currDate = date
            this.value = stringifyDateTime(date, this.format);
        },
        monthSelect (month) {
            let date = this.currDate;
            this.currDate = new Date(
                date.getFullYear(),
                month,
                date.getDate(),
                date.getHours(),
                date.getMinutes(),
                date.getSeconds()
            );
            this.displayMonthView = false;
            this.displayDayView = true;
        },
        yearSelect (year) {
            let date = this.currDate;
            this.displayYearView = false;
            this.displayMonthView = true;
            this.currDate = new Date(
                year,
                date.getMonth(),
                date.getDate(),
                date.getHours(),
                date.getMinutes(),
                date.getSeconds()
            );
        },
        // 切换至月视图
        switchMonthView () {
            this.displayDayView = false;
            this.displayMonthView = true;
        },
        // 切换至年视图 区间 0 ~ 10
        switchYearView () {
            this.displayMonthView = false;
            this.displayYearView = true;
        },
        // 切换至时间视图
        switchTimePickerView () {
            this.displayDayView = this.displayMonthView = this.displayYearView = false;
            this.displayTimePickerView = true;
        },
        switchDatePickerView () {
            this.displayTimePickerView = this.displayHoursView = this.displayMinutesView = false;
            this.displayDayView = true;
        },
        // 显示 年-月 header
        stringifyDayHeader () {
            let date = this.currDate;
            return date.getFullYear() + ' ' + this.text.months[date.getMonth()];
        },
        stringifyDecadeHeader (date) {
            const yearStr = date.getFullYear().toString()
            const firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0
            const lastYearOfDecade = parseInt(firstYearOfDecade, 10) + 10
            return firstYearOfDecade + '-' + lastYearOfDecade
        },
        // 显示12时
        stringifyTime (type) {
            type = ~['hours', 'minutes', 'seconds', 'period'].indexOf(type) ? type : null;
            let date = this.currDate;
            switch (type) {
            case 'hours': {
                let showHours = date.getHours();
                if (this.useAmPm) {
                    showHours = showHours > 12 ? showHours - 12 : showHours;
                }
                return showHours < 10 ? '0' + showHours : showHours;
            }
            case 'minutes': {
                let showMinutes = date.getMinutes();
                return showMinutes < 10 ? '0' + showMinutes : showMinutes;
            }
            case 'seconds': {
                let showSeconds = date.getSeconds();
                return showSeconds < 10 ? '0' + showSeconds : showSeconds;
            }
            case 'period': {
                let showHours = date.getHours();
                return showHours >= 12 ? 'PM' : 'AM';
            }
            }
            return '';
        },
        getDayCounts (date) {
            let dayCounts = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            let year = date.getFullYear();
            let month = date.getMonth();
            // 要求 能被4整除 ， 并且当年数为100的倍数时，需要被 400 整除，才有
            if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
                dayCounts[1] = 29;
            }
            return dayCounts[month];
        },
        // 设置 当月的 range 和 当年的range
        setDateRange () {
            const years = this.currDate.getFullYear();
            const months = this.currDate.getMonth();
            const days = this.currDate.getDate();
            const hours = this.currDate.getHours();
            const minutes = this.currDate.getMinutes();
            const seconds = this.currDate.getSeconds();
            const dayCounts = this.getDayCounts(this.currDate);
            const valueDate = this.parseValue;
            const yearStr = years.toString()
            const firstYearOfDecade = (yearStr.substring(0, yearStr.length - 1) + 0) - 1;
            let decadeRange = [];
            let dateRange = [];
            let firstDayOfMonth = new Date(years, months, 1);
            for (let i = 0; i < 12; i++) {
                decadeRange.push({
                    text: firstYearOfDecade + i
                });
            }
            // 重置 i
            let i = 1;
            // 单月的所有天数
            while (i <= dayCounts) {
                let classes = ['day'];

                // 是否为今天
                if (i === now.getDate()) {
                    if (years === now.getFullYear() && months === now.getMonth()) {
                        classes.push('today');
                    }
                }
                // 是否为选中
                if (i === valueDate.getDate()) {
                    if (years === valueDate.getFullYear() && months === valueDate.getMonth()) {
                        classes.push('active');
                    }
                }
                dateRange.push({
                    text: i,
                    date: new Date(years, months, i, hours, minutes, seconds),
                    classes: classes.join(' ')
                });
                i++;
            }

            // 获取当月第一天的星期数
            let fisrtDay = firstDayOfMonth.getDay();
            if (fisrtDay > 0) {
                // 获取上个月的日数长度
                let lastDayCounts = this.getDayCounts(new Date(years, months - 1, days));

                while (fisrtDay--) {
                    let classes = ['old', 'day'];
                    dateRange.unshift({
                        text: lastDayCounts,
                        date: new Date(years, months - 1, lastDayCounts, hours, minutes, seconds),
                        classes: classes.join(' ')
                    });
                    lastDayCounts--;
                }
            }

            // 获取当月的最后一天的日期数
            // let lastDay = lastDayOfMonth.getDay();
            let j = 1;
            while (dateRange.length < 42) {
                let classes = ['new', 'day'];
                dateRange.push({
                    text: j,
                    date: new Date(years, months + 1, j++, hours, minutes, seconds),
                    classes: classes.join(' ')
                });
            }

            // 格式化成二维数组
            let dateRangeFomart = [];
            let dates = [];
            for (i = 0; i < 42;) {
                dates.push(dateRange[i++]);
                if (i % 7 === 0) {
                    dateRangeFomart.push(dates);
                    dates = [];
                }
            }
            this.dateRange = dateRangeFomart;
            this.decadeRange = decadeRange;
        }
    },
    components: {
        bsInput: Input
    },
    computed: {
        icon () {
            let format = this.format;
            if (~indexOfKey(dateFormats, format)) {
                return 'calendar';
            }
            if (~indexOfKey(timeFormats, format)) {
                return 'time';
            }
            return 'calendar';
        },
        text () {
            return translations(this.lang);
        },
        input () {
            let ipt = null;
            if ($(this.$els.element).is('input')) {
                ipt = this.$els.element;
            } else {
                ipt = $(this.$els.element).find('input')[0];
            }
            return ipt;
        },
        inputHeight: {
            cache: false,
            get () {
                return this.input.offsetHeight + 'px';
            }
        },
        // 按钮集合
        icons () {
            return defaults.icons;
        },
        // 左右对齐
        horizontal () {
            let horizontal = 'left';
            $.each(['left', 'right'], (index, val) => {
                if (~this.placement.indexOf(val)) {
                    horizontal = val;
                    return false;
                }
            });
            return horizontal;
        },

        // 上下对齐
        vertical () {
            let vertical = 'bottom';
            $.each(['top', 'bottom'], (index, val) => {
                if (~this.placement.indexOf(val)) {
                    vertical = val;
                    return false;
                }
            });
            return vertical;
        },
        parseValue () {
            return parseDateTime(this.value);
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
            this.setDateRange();
        }
    },
    // 未渲染
    created () {
        this.currDate = new Date();
    },
    ready () {
        let $element = $(this.$els.element);
        let widget = this.$els.widget;
        let parent = null;

        // 设置组件的位置
        if ($element.is('input')) {
            parent = $element.after(widget).parent();
        } else {
            parent = $element[0];
            $element.children().first().after(widget);
        }
        this._parent = parent;

        // 设置 日期
        this.currDate = this.parseValue;

        dateTimePickerList.push(this);
        console.log(dateTimePickerList)
    },
    beforeDestroy () {
        var index = -1;
        $.each(dateTimePickerList, (vm, offset) => {
            if (vm === this) {
                index = offset;
            }
        });
        if (index >= 0) {
            dateTimePickerList.splice(index, 1);
        }
    }
}
</script>
