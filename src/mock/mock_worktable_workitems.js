import Mock from 'mockjs';

// task bug req
Mock.mock('workitems_tag/getTaskInfo.json', (option) => {
  console.log(option);
  return {
    task: 1,
    bug: 2,
    req: 3
  };
});