<template lang="html">
    <doc-section id="DateTimePicker" name="DateTimePicker">
        <date-picker
        use-icon
        icon="calendar"
        value="2016/10/02 12:00:00"
        format="YYYY-MM-DD HH:mm:ss"
        placement="top right"
        use-am-pm></date-picker>
    </doc-section>
</template>

<script>
import docSection from '../layout/docSection'
import docCode from '../layout/docCode'
import docOptions from '../layout/docOptions'
import docCallout from '../layout/docCallout'
import DateTimePicker from 'components/forms/DateTimePicker'
export default {
    components: {
        docSection,
        docCode,
        docOptions,
        docCallout,
        datePicker: DateTimePicker
    },
    methods: {
        foo (e) {
            console.log(e);
            e.preventDefault();
            e.stopPropagation();
        }
    }
}
</script>
