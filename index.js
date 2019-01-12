import List from "./components/List.js";
import Timer from "./components/Timer.js";

new Vue({
    el: "#app",

    template: `
    <div class="page-container">
        <Timer v-for="(each, index) in timers" :key="index" />

        <button @click="addTimer" class="lap-button">Add Timer</button>
    </div>
    `,

    components: {
        List,
        Timer
    },

    data() {
        return {
            timers: [ null ]
        }
    },

    methods: {
        addTimer() {
            this.timers.push(null);
        }
    }
});