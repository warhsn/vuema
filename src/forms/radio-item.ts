export default class RadioItem
{
    id: Number | string;
    label: string;
    disabled?: boolean;

    constructor(id: Number | string, label: string) {
        this.id = id
        this.label = label
    }
}