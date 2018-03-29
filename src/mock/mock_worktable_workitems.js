import Mock from 'mockjs';

// task bug req
Mock.mock('workitems_tag/getTaskInfo.json', (option) => {
  switch(JSON.parse(option.body).type) {
    case 'workitems_pending':
      return Mock.mock({
        'task|0-50': 5,
        'bug|0-50': 5,
        'req|0-50': 5,
        'pending|0-10': 2
      });
      break;
    case 'workitems_create':
      return Mock.mock({
        'task|0-50': 5,
        'bug|0-50': 5,
        'req|0-50': 5,
        'pending|0-10': 2
      });
      break;
    case 'workitems_follow':
      return Mock.mock({
        'task|0-50': 5,
        'bug|0-50': 5,
        'req|0-50': 5,
        'pending|0-10': 2
      });
      break;
    case 'workitems_collect':
      return Mock.mock({
        'task|0-50': 5,
        'bug|0-50': 5,
        'req|0-50': 5,
        'pending|0-10': 2
      });
      break;
    default:
      return {
        task: 0,
        bug: 0,
        req: 0,
        pending: 0
      };
  }
});