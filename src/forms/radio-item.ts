export default class RadioItem
{
    id: Number | string;
    label: string;
    disabled?: boolean | undefined;

    constructor(id: Number | string, label: string, disabled: boolean | undefined) {
        this.id = id
        this.label = label
        this.disabled = disabled
    }
}