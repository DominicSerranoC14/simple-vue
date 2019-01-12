const getStartOfDay = () => moment().startOf("day");
const initialTimeString = "00:00:00";

const template = `
<div class="timer-container">
    <div>{{ timeString }}</div>

    <button @click="startTimer">Start</button>

    <button @click="stopTimer">Stop</button>

    <button @click="resetTimer">Reset</button>
</div>
`;

export default {
    template,

    data() {
        return {
            interval: null,
            timeObject: getStartOfDay(),
            timeString: initialTimeString
        }
    },

    methods: {
        resetTimer() {
            this.timeObject = getStartOfDay();
            this.timeString = initialTimeString;
        },

        startTimer() {
            this.interval = setInterval(() => {
                this.timeString = this.timeObject.add(1, "millisecond").format("mm:ss.SS");
            }, 1);
        },

        stopTimer() {
            clearInterval(this.interval);
        }
    }
};