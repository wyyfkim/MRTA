# MRTA

Environment setup

1. Install ROS.

2. Run catkin_make under catkin_ws directory to build the package.

3. Automate sourcing “setup.bash” file (https://answers.ros.org/question/206876/how-often-do-i-need-to-source-setupbash/). You can manually source the setup file each time you open a new terminal, but automation just makes things easier.

4. Open a new terminal, cd to the project directory, install three required modules by typing the following commands:
    pip install bitarray
    pip install networkx
    pip install Task

5. Open a new terminal, type `roscore` to start the server.



Follow these two steps to run auction-based task allocation algorithm:

1. generate precedence graph 

Navigate to `catkin_ws/src/mrta/src` folder and run `DataGenerator.py`. This will generate `data/dataset1.pickle` file.

2. start robots

Navigate to `catkin_ws/src/mrta/src/PIA` folder and run `start_robot.py 1`.

3. allocate tasks

Navigate to `catkin_ws/src/mrta/src/PIA` folder and run `allocate_tasks.py 1`.

