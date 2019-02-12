#!/usr/bin/python2.7

import os
import sys
from PIA import PIA
import pickle
from Logger import Logger

cur_dir = os.path.dirname(os.path.realpath(__file__))
sys.path.append(os.path.abspath(cur_dir + "/.."))
from DataGenerator import DataSet

if __name__ == "__main__":

    if len(sys.argv) < 2:
        exit(1)        

    data_dir = "../../data/"
    file_name = 'dataset' + sys.argv[1] + '.pickle'
    
    dataset = pickle.load(open(data_dir + file_name))
    ##print(dataset.p_graphs)
    p_graph = dataset.p_graphs[5]
    robots = dataset.robots

    pia = PIA(p_graph, robots, Logger)
    pia.allocate_tasks()
