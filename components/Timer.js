import moment from "moment";

const getStartOfDay = () => moment().startOf("day");
const initialTimeString = "00:00:00";

export default {
    template: `
        <div class="timer-container">
            <div>{{ timeString }}</div>

            <button
                @click="startTimer"
                :disabled="isActive"
            >
                Start
            </button>

            <button
                @click="stopTimer"
                :disabled="!isActive"
            >
                Stop
            </button>

            <button
                @click="resetTimer"
                :disabled="isActive || !interval"
            >
                Reset
            </button>

            <template v-if="timerCount !== 1">
                <button @click="() => removeTimer(timerId)">Delete</button>
            </template>
        </div>
    `,

    props: {
        removeTimer: { type: Function, required: true },
        timerCount: { type: Number, required: true },
        timerId: { type: Number, required: true },
    },

    data() {
        return {
            interval: null,
            isActive: false,
            timeObject: getStartOfDay(),
            timeString: initialTimeString
        }
    },

    methods: {
        intervalHandler() {
            this.timeString = this.timeObject.add(1, "millisecond").format("mm:ss.SS");
        },

        resetTimer() {
            this.interval = null;
            this.timeObject = getStartOfDay();
            this.timeString = initialTimeString;
        },

        startTimer() {
            this.isActive = true;

            if (this.interval) clearInterval(this.interval);

            this.interval = setInterval(this.intervalHandler, 1);
        },

        stopTimer() {
            this.isActive = false;
            clearInterval(this.interval);
        }
    }
};