export default class TemplateNode {
    constructor(templateId) {
        this.template = document.getElementById(templateId);
    }

    render(data) {
        let clone = this.template.content.cloneNode(true);
        for (const [key, value] of Object.entries(data)) {
            let element = clone.querySelector(`[data="${key}"]`);
            if (element) {
                element.innerText = value;
            }
        }
        this.template.before(clone);
    }
}
