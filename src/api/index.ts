import request from '../utils/request';

export const fetchData = () => request({
  url: './table.json',
  method: 'get',
});
