import List from "./components/List.js";
import Timer from "./components/Timer.js";

new Vue({
    el: "#app",

    template: `
    <div class="page-container">
        <Timer
            v-for="({ id }, index) in timers"
            :key="index"
            :removeTimer="removeTimer"
            :timerCount="timers.length"
            :timerId="id"
        />

        <button @click="addTimer" class="lap-button">Add Timer</button>
    </div>
    `,

    components: {
        List,
        Timer
    },

    data() {
        return {
            timers: [ { id: 1 } ]
        }
    },

    methods: {
        addTimer() {
            this.timers.push({ id: this.timers.length + 1 });
        },

        removeTimer(id) {
            this.timers = this.timers.filter(timer => timer.id !== id);
        }
    }
});