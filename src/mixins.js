import moment from "moment";

export default {
    methods: {
        formatDateTime(timestamp) {
            return moment(timestamp.toDate()).format('YYYY-MM-DD hh:mm:ss')
        },
        fromNow(timestamp) {
            return moment(timestamp.toDate()).fromNow()
        },
    }
}
