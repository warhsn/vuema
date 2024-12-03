import { PropType } from 'vue';
import { _Addons } from '../interfaces/addons';
export default class Addons {
    hasAddons?: boolean;
    constructor();
    static setup(): {
        hasAddons: {
            type: PropType<_Addons>;
        };
    };
}
