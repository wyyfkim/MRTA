// Auto-generated. Do not edit!

// (in-package mrta.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;
let Task = require('./Task.js');

//-----------------------------------------------------------

class ScheduledTasks {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.robot_id = null;
      this.tasks = null;
      this.makespan = null;
      this.travel_time = null;
    }
    else {
      if (initObj.hasOwnProperty('robot_id')) {
        this.robot_id = initObj.robot_id
      }
      else {
        this.robot_id = 0;
      }
      if (initObj.hasOwnProperty('tasks')) {
        this.tasks = initObj.tasks
      }
      else {
        this.tasks = [];
      }
      if (initObj.hasOwnProperty('makespan')) {
        this.makespan = initObj.makespan
      }
      else {
        this.makespan = 0;
      }
      if (initObj.hasOwnProperty('travel_time')) {
        this.travel_time = initObj.travel_time
      }
      else {
        this.travel_time = 0.0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type ScheduledTasks
    // Serialize message field [robot_id]
    bufferOffset = _serializer.int32(obj.robot_id, buffer, bufferOffset);
    // Serialize message field [tasks]
    // Serialize the length for message field [tasks]
    bufferOffset = _serializer.uint32(obj.tasks.length, buffer, bufferOffset);
    obj.tasks.forEach((val) => {
      bufferOffset = Task.serialize(val, buffer, bufferOffset);
    });
    // Serialize message field [makespan]
    bufferOffset = _serializer.int32(obj.makespan, buffer, bufferOffset);
    // Serialize message field [travel_time]
    bufferOffset = _serializer.float32(obj.travel_time, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type ScheduledTasks
    let len;
    let data = new ScheduledTasks(null);
    // Deserialize message field [robot_id]
    data.robot_id = _deserializer.int32(buffer, bufferOffset);
    // Deserialize message field [tasks]
    // Deserialize array length for message field [tasks]
    len = _deserializer.uint32(buffer, bufferOffset);
    data.tasks = new Array(len);
    for (let i = 0; i < len; ++i) {
      data.tasks[i] = Task.deserialize(buffer, bufferOffset)
    }
    // Deserialize message field [makespan]
    data.makespan = _deserializer.int32(buffer, bufferOffset);
    // Deserialize message field [travel_time]
    data.travel_time = _deserializer.float32(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += 40 * object.tasks.length;
    return length + 16;
  }

  static datatype() {
    // Returns string type for a message object
    return 'mrta/ScheduledTasks';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '0a0dfcdd660c4e0812362731470f2461';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 robot_id
    Task[] tasks
    int32 makespan
    float32 travel_time
    ================================================================================
    MSG: mrta/Task
    int32 id
    int32 start_time
    int32 finish_time
    int32 est
    int32 lst
    int32 eft
    int32 lft
    int32 duration
    int32[2] location
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new ScheduledTasks(null);
    if (msg.robot_id !== undefined) {
      resolved.robot_id = msg.robot_id;
    }
    else {
      resolved.robot_id = 0
    }

    if (msg.tasks !== undefined) {
      resolved.tasks = new Array(msg.tasks.length);
      for (let i = 0; i < resolved.tasks.length; ++i) {
        resolved.tasks[i] = Task.Resolve(msg.tasks[i]);
      }
    }
    else {
      resolved.tasks = []
    }

    if (msg.makespan !== undefined) {
      resolved.makespan = msg.makespan;
    }
    else {
      resolved.makespan = 0
    }

    if (msg.travel_time !== undefined) {
      resolved.travel_time = msg.travel_time;
    }
    else {
      resolved.travel_time = 0.0
    }

    return resolved;
    }
};

module.exports = ScheduledTasks;
