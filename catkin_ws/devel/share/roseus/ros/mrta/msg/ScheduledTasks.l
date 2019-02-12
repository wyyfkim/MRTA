;; Auto-generated. Do not edit!


(when (boundp 'mrta::ScheduledTasks)
  (if (not (find-package "MRTA"))
    (make-package "MRTA"))
  (shadow 'ScheduledTasks (find-package "MRTA")))
(unless (find-package "MRTA::SCHEDULEDTASKS")
  (make-package "MRTA::SCHEDULEDTASKS"))

(in-package "ROS")
;;//! \htmlinclude ScheduledTasks.msg.html


(defclass mrta::ScheduledTasks
  :super ros::object
  :slots (_robot_id _tasks _makespan _travel_time ))

(defmethod mrta::ScheduledTasks
  (:init
   (&key
    ((:robot_id __robot_id) 0)
    ((:tasks __tasks) (let (r) (dotimes (i 0) (push (instance mrta::Task :init) r)) r))
    ((:makespan __makespan) 0)
    ((:travel_time __travel_time) 0.0)
    )
   (send-super :init)
   (setq _robot_id (round __robot_id))
   (setq _tasks __tasks)
   (setq _makespan (round __makespan))
   (setq _travel_time (float __travel_time))
   self)
  (:robot_id
   (&optional __robot_id)
   (if __robot_id (setq _robot_id __robot_id)) _robot_id)
  (:tasks
   (&rest __tasks)
   (if (keywordp (car __tasks))
       (send* _tasks __tasks)
     (progn
       (if __tasks (setq _tasks (car __tasks)))
       _tasks)))
  (:makespan
   (&optional __makespan)
   (if __makespan (setq _makespan __makespan)) _makespan)
  (:travel_time
   (&optional __travel_time)
   (if __travel_time (setq _travel_time __travel_time)) _travel_time)
  (:serialization-length
   ()
   (+
    ;; int32 _robot_id
    4
    ;; mrta/Task[] _tasks
    (apply #'+ (send-all _tasks :serialization-length)) 4
    ;; int32 _makespan
    4
    ;; float32 _travel_time
    4
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; int32 _robot_id
       (write-long _robot_id s)
     ;; mrta/Task[] _tasks
     (write-long (length _tasks) s)
     (dolist (elem _tasks)
       (send elem :serialize s)
       )
     ;; int32 _makespan
       (write-long _makespan s)
     ;; float32 _travel_time
       (sys::poke _travel_time (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; int32 _robot_id
     (setq _robot_id (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;; mrta/Task[] _tasks
   (let (n)
     (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4)
     (setq _tasks (let (r) (dotimes (i n) (push (instance mrta::Task :init) r)) r))
     (dolist (elem- _tasks)
     (send elem- :deserialize buf ptr-) (incf ptr- (send elem- :serialization-length))
     ))
   ;; int32 _makespan
     (setq _makespan (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;; float32 _travel_time
     (setq _travel_time (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;;
   self)
  )

(setf (get mrta::ScheduledTasks :md5sum-) "0a0dfcdd660c4e0812362731470f2461")
(setf (get mrta::ScheduledTasks :datatype-) "mrta/ScheduledTasks")
(setf (get mrta::ScheduledTasks :definition-)
      "int32 robot_id
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
")



(provide :mrta/ScheduledTasks "0a0dfcdd660c4e0812362731470f2461")


