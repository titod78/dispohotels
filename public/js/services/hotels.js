import { getList, getDetail } from './data/data.js';

/**
 * Returns hotel list
 * @return {Function}
 */
function list() {
  return getList();
}

/**
 * Returns hotel detail
 * @param  {String} id Hotel identifier
 * @return {Function}    Hotel data
 */
function detail( id ) {
  return getDetail( id );
}


export { list, detail };