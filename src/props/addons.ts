import { PropType } from 'vue'
import { _Addons } from '../interfaces/addons';

export default class Addons {
    
    hasAddons?: boolean;

    constructor() {
        this.hasAddons = false
    }

    public static setup() {
        return {
            hasAddons: {
                type: Object as PropType<_Addons>
            }
        }
    }
}