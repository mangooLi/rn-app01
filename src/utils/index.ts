

import assign from 'lodash.assign';
import filter from 'lodash.filter';
import map from 'lodash.map'
import debounce from 'lodash.debounce';
import noop from 'lodash.noop';
import remove from 'lodash.remove';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn')


import {getSize,WindowHeight,WindowWidth} from './size';

export {
    assign,
    getSize,
    filter,
    map,
    debounce,
    noop,
    
    moment,

    WindowHeight,
    WindowWidth,
    remove
}



// export * from 'lodash.filter';
