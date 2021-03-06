#... Dijkstra's algorithm ...# 

"""

Dijkstra's algorithm is an algorithm for finding the shortest path between nodes in a graph,
which may represent, for example, road networks.

In Dijkstra’s algorithm, we generate a SPT (shortest path tree) with given source as root. 
We maintain two sets, one set contains vertices included in shortest path tree, other set 
includes vertices not yet included in shortest path tree. At every step of the algorithm, 
we find a vertex which is in the other set (set of not yet included) and has minimum 
distance from source.

Below are the detailed steps used in Dijkstra’s algorithm to find the shortest path from 
a single source vertex to all other vertices in the given graph.

Algorithm

1) Create a set sptSet (shortest path tree set) that keeps track of vertices included in 
shortest path tree, i.e., whose minimum distance from source is calculated and finalized. 
Initially, this set is empty.

2) Assign a distance value to all vertices in the input graph. Initialize all distance 
values as INFINITE. Assign distance value as 0 for the source vertex so that it is picked first.

3) While sptSet doesn’t include all vertices

….a) Pick a vertex u which is not there in sptSetand has minimum distance value.
….b) Include u to sptSet.
….c) Update distance value of all adjacent vertices of u. To update the distance 
     values, iterate through all adjacent vertices. For every adjacent vertex v, if 
     sum of distance value of u (from source) and weight of edge u-v, is less than 
     the distance value of v, then update the distance value of v.

"""