import ListItem from "./ListItem.js";

export default {
    components: {
        ListItem
    },

    template: `<div>
        <h2>List</h2>

        <ListItem
            v-for="item in list"
            :key="item.value"
            :name="item.name"
        />
    </div>`,

    data() {
        return {
            list: [
                { name: "One", value: 1 },
                { name: "Two", value: 2 },
                { name: "Three", value: 3 },
            ]
        }
    }
};