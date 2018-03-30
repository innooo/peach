import Mock from 'mockjs';
import workitemList from './json/json_worktable_workitems_content.json';

// task bug req
Mock.mock('workitems_tag/content/getTaskInfo.json', (option) => {
  let arr = [];
  let tag = JSON.parse(option.body).tag;
  let item = JSON.parse(option.body).item;
  console.log(option);
  if(item) {
    workitemList.forEach((v, index) => {
      if(v.tag == tag && v.item == item) {
        arr.push(v);
      }
    });
  } else {
    workitemList.forEach((v, index) => {
      if(v.tag == tag) {
        arr.push(v);
      }
    });
  }
  return arr;
});