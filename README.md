

# Breadth First Search. 
## Find the shortest path between A and B.

# ![Map App Form](https://github.com/jonroman/mapap/blob/master/screenshots/scrrenshot1.PNG "Map App Form")
# ![Map App Result](https://github.com/jonroman/mapap/blob/master/screenshots/scrrenshot2.PNG "Map App Result")
# ![Map App Shortest path](https://github.com/jonroman/mapap/blob/master/screenshots/scrrenshot3.PNG "Map App Shortest Path")

# ![Software Engineer](https://github.com/jonroman/mapap/blob/master/screenshots/headshot.PNG "Jon Roman")
Author : Jon Roman

## Getting started
1. Install [Node.js](https://nodejs.org/en/)
2. `npm install` to install node modules
3. `node app.js` OR nodemon app.js

## NOTE
### The breadth first search code
### FILE: public/angular-app/map/map-controller.js

# Example maps... copy and paste

##########
#A...#...#
#.#.##.#.#
#.#.##.#.#
#.#....#B#
#.#.##.#.#
#....#...#
##########
 
OR
 
###############B#############################################
##.....########.#......................................#...##
##.###.#........####################################.#.#.#.##
##.###.#.#########..........#########.......########.#.#.#.##
##.#####...........########.#.......#.#####.########.#.#.#.##
##.########################.#.#####.#.#...#.########.#.#.#.##
##............................#####.#.##.##.########.#.#.#.##
##.###.############################.#.##.##.########.#.#.#.##
##.###.##...#...#...#...#...#.......#.##.##.########.#.#.#.##
##.###....#...#...#...#...#...#######.##.##.########.#.#.#.##
##.##################################.##.##.########.#.#.#.##
##.......................................##.########.#.#.#.##
###########################################.########.#.#.#.##
###...............................#########..........#.#.#.##
########################.###########################.#.#.#.##
#........................#...........................#.#.#.##
#.######################.#############################.#.#.##
#.#..........#.........................................#.#.##
#.#.########.#.#########################################.#.##
#.#........#.#.#.........................................#.##
#.##########.#.#.#########################################.##
#............#.#.##........................................##
##############.#.#############################.#####.########
#..............................................#####........#
########################A####################################
 
OR 
 
 
#######################################################################################################################################################################################
#A......#.....#.....#.#.....#.#...#.#.......#.....#.#...#.......#...........#...#.............#.....#.......#.........#.....#.....#...........#.#...................#.....#...........#
#.#######.#.#.#.###.#.#####.#.#.#.#.#####.#.#.###.#.#######.#.###.#.#.#.#.#####.#.#########.#.###.#.#.#.#.#.#.#.#.###.#.#####.#.#.#.#.#.#.#.#.#.#.#.###.#####.#.#.#.#.#.#.#.#.#.#.#.#.#
#.....#.#.....#.#...#.......#.......#...#...#.#.......#.....#.....#.........#...#...#.....#.........#.#...#.#.#.#.#...#.#...#.....#...#...#...#.#...#.#.#.#...........#.#.......#.#...#
#.#####.#.#.#.#.#.###.###.#.###.#.#.#.###.#.#.#.#.#.#.###.#.#.#######.#.#.#.###.#.#.#.#.#######.#.###.###.#.#.###.#####.#.#.#.#####.###.#.#.#########.#.#.#.###.#####.#.#.#####.#.#.###
#...#...#.#.#.....#...#.............#.#.......#.......#.#...#.#.........#.......#.#.....#.......#.......................#.#...#.#.#...#...#.#.#...#...#.......#.........#...#.#.....#.#
#.#.###.#.#.#.#.#.#.#.#.#.###.#.#.#.#.#.###.###.###.#.#.#.#.###.###.###.#.#.#####.#.#.#.#.#.#.#.#.###.#.###########.#.#.#.#.#.#.#.###.###.#.#.#.#.#.#.#.#.#.#.#####.###.#.###.#.#####.#
#...#...#...#...#.#.#.#...#...#...#...#.....#...................#...#.#.....#...........#.....#.#.#...#.#...#.........#.#.......#...........#...#.....#...#.#...............#.#.......#
#.#.#.#.###.#.#.###.#######.#.#.#.#.#.#.###.#.###.#.#.#.###.#.#.#.#.#.#.#####.#.#.###.#.#.###.#.#.#.#.#.###.###.#.#.#.#####.#.###########.#.#.#.#########.#.#.###.###.###.#.#.###.#.#.#
#.#.........#...#.....#.....#.#...#...#.....#...............#...#.......#.#.#.......#.#...#.....#.#.#.........#.#.........#...#...#.........#.#...#.#.#...........#.....#.......#.....#
#.#.#.#.#.###.#.#.#.#.#.#.###.#########.#.#.###.#.#.#####.#####.#.#####.#.#.###.#.#.#.#.#.#.#.#.#.#.#.#.#.###.###.###.#.#.###.###.#.#.#.#.#.###.#.#.#.#.#.#####.###.#.#.#######.#.###.#
#...#.........#...#.#...#.#.#...........#.#.#...........#.......#.#.#.....#...#.#.#.#...#.......#.........#...#.....#...#.....#.#.....#.#...#.....#.#...#.....#.#.#.#.............#...#
#.#.###########.###.#.###.#.#####.#.#.#.###.#.###.#.#.#.#########.#.#.#####.#.#.#.#.#.#.#####.#.#.#.###.#.#.#.#.###############.#.###.#.#.#.#.#.###.###.#.#.#.#.#.#.#####.#.#.###.#.###
#.....#.#...........#.#.............#.#...........#.....#.#.....#...#.#.#.#...........#.#.....#...#.....#...#.....#...........#.#.#...#.........#.#.....#...#.......#.....#...#.......#
#####.#.#.#.#.#.#####.#.#####.#.#.#.#.###.#.#.###.#######.#.#.#####.#.#.#.#.#.#####.###.#.###.#.#.#.#####.#.#.###.#.###.#.###.#.#.###.#.###.###.#.#.#.#.###.#.#####.#.#.#.#####.#.###.#
#.....#.#.....#.#.......#.......#.....#...#...#...............#.....#...........#.........#.....#.#.#.............#.#...#.#.....#.#...#...#...#.........#.....#...#...#...........#...#
#.#.#.###.#.###.#.#.#.###.#.###.#.#.#.###.###.#.###.#.#.#.#####.#.#.#.###.#####.#####.#.#.#.###.#.###.###.#####.#.#.#.#.#.###.###.#.###.#.#.#.#.#.#####.#####.#.#.#.###.#.#.#.#####.###
#...#.....#.#.......#.....#.#.....#...#...#.#.#.....#...#.#...#.#.....................#.....#.....#.....#.......#.........#...#...#...#.#.#.#...#.#.#...#...#.....#.#.......#...#.....#
#####.###.###.#.#.#.#.#.#.###.#.#.#.#####.#.#.#.#.#.#######.#.#.#.#.#.#######.###.#.###.#.#.###.#.#.#.#.#.#####.#.#.#.###.#.###.###.#.###.#.###.#.#.#.#.###.#.###.###.#####.###.#.#####
#.....#.....#...#.....#.#...#...#.........#...................#.....#...#.........#.....#...........#...#.#.......#.#...#...#...............#.......#...#.........#.............#.....#
#.#.#.#.#######.#.#.#########.#######.###.#####.###.#.###.#.#######.#.###.#.###.###.###.#####.#####.###.#.#.#.#.#.#.#.###.#.#.#######.#.#.#.#.#.#.#.#.#####.#.#.#.#.#.#.###.#.#.###.#.#
#.#.#.......#...#.#...#.......#.................#.....#...#.......#.#.....#.....#.#...#.#.....#...#.#.......#...#.....#.....#.....#.......#.....#...#.#...#.....#...#.#.#...#...#.....#
###.#.#####.#.###.###.#.#.###.#.###.#####.#.#.#######.#.#########.#####.#.#.#.###.#.#.#.###.#######.#.#########.#.#.#.#.#.#.#####.###.###.###.#.#.#.#.#.#.#.###.#.#.#.#.#####.#.#.###.#
#.#...#.....#.....#.#.....#...#...#.#...#...#.#.#.#.....#.....#.#.#.#.....#.................#.#.#...#...#...#.#.#.#.#.#...#...#.#.............#.#...#...#.#.#.......#.........#.#.....#
#.###.#.###.#.#.#.#.###.#.#.###.#####.#.###.#.#.#.#.#.###.#.#.#.#.#.#.#.#.#.#.#####.###.#.###.#.#.###.#.#.#.#.#.#.#.#.#.###.#.#.###.#.#.#.#######.#.###.#.#.#.###.#.#.#.###.###.#.#.#.#
#.#...#.....#.....#.#...#...#.......#...#.....#.#.#.....#.#...#...#...#.#.........#.....#...#.#...#...#...#.#.#.......#...#.#...#...#.#...#.....#.......#.......#.#.....#.#...#.#.....#
#.#.#.#.#.#.#.###.#.###.#.#.#.###.###.#.#.###.###.#.#.#.#.###.#.#.#.#.#.#.#########.#.#.#.#.#.#######.#.###.#.#.#.#.#.#.###.#.###.#######.#.#.#.#.###.#.#.#.#.#.#.#.#####.###.#.#.###.#
#.....#.....#.#...#.#.#...#.....#.....#.#...#.....#.....#.....#.#.#...#...#.#.....#.#.#...#...#.......#.....#...........#...#.#...#.......#.......#.#.#...#.#...#.#.#...........#.....#
#.#####.#####.#####.#.###.#########.#.#.#.#.###.#.#.#.#.#.#.#.#####.###.#.#.#.###.#.###.#.#####.###.#####.#####.#.###.###.#.#.#.#.#.###.#.#.#####.#.#.###.###.###.#.#.#.#.#.###.###.#.#
#.....#...#...#.#...#.........#.................#.#.....#.#.....#.........#...#.....#...#.#.....#.......#.......#.....#.#.#.......#.#...#.#...#.#.........#.........#...#.....#.....#.#
#.###.#####.#.#.#.#.#.#######.#.#####.#########.#.#.###.#.#####.#.#####.###.#.#.#.#.###.#.#.#.#.###.#.#####.#.###.###.#.#.#.###.#.#.#.#.#.#.#.#.#.#####.#.#.###.#.#.#.#.#.#.#.###.###.#
#.#...#.#.....#...#.#.#.......#.#.................#...#.....#...............#.........#...#.#.#...#.#...#...#.........#.....#...........#.#...........#.....#.#.#.#...#...#...#.#.#...#
#.#.#.#.#.###.#######.#.#.#.###.#.#.#.###.#.#.###.###.#.###.#.#####.#.#.#.#.#.###.#########.#.#.#.#.#.#.#######.###.#.#.###.#.#.###.#.###.#.#.###.#.#.#.#.#.#.#.#.#.###.#####.#.###.#.#
#.#.....#.....#.#.......#...#...#...#.#...#.....#.......#...#...#...#.#.#...#...#.....#.#...#...........#.........#...#.#...#...#...#...#...........#.#.#...#...........#.....#.#.....#
###.#.###.#####.#.#.#.#.#.###.#.#.#####.#.#.#.#.#.#.#.###.###.#.#.###.#.###.###.#####.#.#.###.#.#.###.#.#.#.###.#####.###.#####.#.#.###.#.#####.#.#.#.#####.###.###.###.#.#.#.#.#.#.###
#.........#.....#.....#...#...............#.#...#.#.#.....#.#...#...#.#...............#.......#.......#.#...#.#...........#.#.#...............#...#.........#...............#...#...#.#
#.#.#.###.#.#####.#.#.#.#.#.#.###.###.###.#####.#.#####.###.#.#.###.#.###.###.#####.#####.#####.#########.###.#.#.#.#.#.#.#.#.#.#.#.#.###.#.#.###.#####.###.#####.###.#.###.###.#.#.#.#
#.....#.#.............#...#.......#.#.............#.#...#.#...#...#.#.....#.#.#...#.#.....#...#...........#.....#.#.#...#...................#.....#.....#...............#.....#.#.....#
#.#####.#.###.#.#######.###.###.#.#.#.###.###.#.###.#.#.#.###.#.#.#.#####.#.###.###.#########.#.#####.#.#.#.#.#.#.#.#####.#########.#.#.#.#.###.###.#.#####.#.#.###.#####.#.#.###.###.#
#...#.....#.#.#.#...............#.........#.....#.......#.........#...........#...#.......#.#...#.......#.....#...#.#...#.#...#.#.....#...........#.................#...#.#.#.#...#.#.#
#.#.#.#####.#.###.###.#.#.#####.#.#####.###.#.###.#.#######.#.#.###.###.###.#.#.#.#.#.#.#.#.#.#.#.#.#######.#######.#.#.###.###.#.###.#.###.#.#.#.#.#.#######.#.#.###.#.###.#####.#.#.#
#.....#.#.....#...#...#.#.......#...#.............#...#.....#...#.#.......#.....#...#...#.#.....#.#...........#.......#.#...#...#.#...#.#.#.....#...............#...#.#.#...#...#.....#
#####.#.#.#.###.#.###.#.#####.#######.#############.#.#.#.#.#.###.#.#.###.#.#####.#.#.#.#####.#.#.###.###.#.#.#.###.#.#.###.#.#.#.#.#.#.#.#.#.###.###.#.#######.###.#.#####.#######.###
#.....#...........#.....#.....#.......#...#...#.......#.....#.#...#.#.#...#.#...#.....#.......#...#...#...#.#.#.#.....#.....#...#.#...#.......#...#...#.....#...#...#.........#.#....B#
#######################################################################################################################################################################################
