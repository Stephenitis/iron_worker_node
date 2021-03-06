// Generated by CoffeeScript 1.3.3
(function() {
  var Client, apiClient, _;

  _ = require('underscore');

  apiClient = require('./api_client');

  Client = (function() {

    function Client(options) {
      this.api = new apiClient.APIClient(options);
    }

    Client.prototype.codesList = function(options, cb) {
      return this.api.codesList(options, function(error, body) {
        if (!(error != null)) {
          return cb(error, body.codes);
        } else {
          return cb(error, body);
        }
      });
    };

    Client.prototype.codesGet = function(codeId, cb) {
      return this.api.codesGet(codeId, function(error, body) {
        if (!(error != null)) {
          return cb(error, body);
        } else {
          return cb(error, body);
        }
      });
    };

    Client.prototype.codesDelete = function(codeId, cb) {
      return this.api.codesDelete(codeId, function(error, body) {
        if (!(error != null)) {
          return cb(error, body);
        } else {
          return cb(error, body);
        }
      });
    };

    Client.prototype.codesRevisions = function(codeId, options, cb) {
      return this.api.codesRevisions(codeId, options, function(error, body) {
        if (!(error != null)) {
          return cb(error, body.revisions);
        } else {
          return cb(error, body);
        }
      });
    };

    Client.prototype.codesDownload = function(codeId, options, cb) {
      return this.api.codesDownload(codeId, options, function(error, body) {
        if (!(error != null)) {
          return cb(error, body);
        } else {
          return cb(error, body);
        }
      });
    };

    Client.prototype.tasksList = function(options, cb) {
      return this.api.tasksList(options, function(error, body) {
        if (!(error != null)) {
          return cb(error, body.tasks);
        } else {
          return cb(error, body);
        }
      });
    };

    Client.prototype.tasksGet = function(taskId, cb) {
      return this.api.tasksGet(taskId, function(error, body) {
        if (!(error != null)) {
          return cb(error, body);
        } else {
          return cb(error, body);
        }
      });
    };

    Client.prototype.tasksCreate = function(codeName, params, options, cb) {
      var payload;
      payload = '';
      if (typeof params === 'string') {
        payload = params;
      } else {
        payload = JSON.stringify(params);
      }
      return this.api.tasksCreate(codeName, payload, options, function(error, body) {
        if (!(error != null)) {
          return cb(error, body.tasks[0]);
        } else {
          return cb(error, body);
        }
      });
    };

    Client.prototype.tasksCancel = function(taskId, cb) {
      return this.api.tasksCancel(taskId, function(error, body) {
        if (!(error != null)) {
          return cb(error, body);
        } else {
          return cb(error, body);
        }
      });
    };

    Client.prototype.tasksCancelAll = function(codeId, cb) {
      return this.api.tasksCancelAll(codeId, function(error, body) {
        if (!(error != null)) {
          return cb(error, body);
        } else {
          return cb(error, body);
        }
      });
    };

    Client.prototype.tasksLog = function(taskId, cb) {
      return this.api.tasksLog(taskId, function(error, body) {
        if (!(error != null)) {
          return cb(error, body);
        } else {
          return cb(error, body);
        }
      });
    };

    Client.prototype.tasksSetProgress = function(taskId, options, cb) {
      return this.api.tasksSetProgress(taskId, options, function(error, body) {
        if (!(error != null)) {
          return cb(error, body);
        } else {
          return cb(error, body);
        }
      });
    };

    Client.prototype.tasksWaitFor = function(taskId, options, cb) {
      var sleep, tasksWaitForBind;
      tasksWaitForBind = _.bind(this.tasksWaitFor, this);
      sleep = options.sleep;
      if (!(sleep != null)) {
        sleep = 5;
      }
      return this.tasksGet(taskId, function(error, body) {
        if (!(error != null)) {
          if (body.status === 'queued' || body.status === 'running') {
            return _.delay(tasksWaitForBind, sleep * 1000, taskId, options, cb);
          } else {
            return cb(error, body);
          }
        } else {
          return cb(error, body);
        }
      });
    };

    Client.prototype.schedulesList = function(options, cb) {
      return this.api.schedulesList(options, function(error, body) {
        if (!(error != null)) {
          return cb(error, body.tasks);
        } else {
          return cb(error, body);
        }
      });
    };

    Client.prototype.schedulesGet = function(scheduleId, cb) {
      return this.api.schedulesGet(scheduleId, function(error, body) {
        if (!(error != null)) {
          return cb(error, body);
        } else {
          return cb(error, body);
        }
      });
    };

    Client.prototype.schedulesCreate = function(codeName, params, options, cb) {
      var payload;
      payload = '';
      if (typeof params === 'string') {
        payload = params;
      } else {
        payload = JSON.stringify(params);
      }
      return this.api.schedulesCreate(codeName, payload, options, function(error, body) {
        if (!(error != null)) {
          return cb(error, body.schedules[0]);
        } else {
          return cb(error, body);
        }
      });
    };

    Client.prototype.schedulesCancel = function(scheduleId, cb) {
      return this.api.schedulesCancel(scheduleId, function(error, body) {
        if (!(error != null)) {
          return cb(error, body);
        } else {
          return cb(error, body);
        }
      });
    };

    return Client;

  })();

  module.exports.Client = Client;

}).call(this);
