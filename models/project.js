const orm = require('orm').connect('mysql://root:root@localhost/todolist');
exports.modelProject = orm.define('project', {
    idproject: {type: 'serial', key: true},
    name: String,
    begin: String,
    end: String
});