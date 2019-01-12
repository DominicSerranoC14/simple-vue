export default {
    template: `
        <div>
            {{ name }}
        </div>
    `,

    props: {
        name: { type: String, required: true }
    }
};