import { getList, getDetail } from './data/data.js';

function list() {
  return getList();
}

function detail( id ) {
  return getDetail( id );
}


export { list, detail };