angular.module('mapquest').controller('MapController', MapController);

function MapController($routeParams){
    var vm = this;
    var input = $routeParams.map_input;
    vm.title = 'MAPP APP';
    vm.myTextarea = 'Please enter your maze here';
	vm.map = [];

    vm.mapIt = function () {
		var start = new Date().getMilliseconds(); //start timer
		vm.showme = true;
		Vehicle.raw_input = vm.mapMaze;
		Vehicle.inputToArray();
		Vehicle.splitMap();
		Vehicle.readMap();
		Vehicle.findRoutes();
		Vehicle.markRoutes();
		vm.map = Vehicle.map;
		try {

			vm.shortestPath1           = JSON.stringify(Vehicle.routes[0].path.reverse());
			vm.shortestPathNumOfSteps1 = Vehicle.routes[0].path.length;
			vm.shortestPath2           = JSON.stringify(Vehicle.routes[1].path.reverse());
			vm.shortestPathNumOfSteps2 = Vehicle.routes[1].path.length;
		} catch (e) {
			console.log(e.message);
		}
		Vehicle.reset();
		var end = new Date().getMilliseconds();
		console.log("end == " + end);
		vm.timer = end - start + " milliseconds"; // end timer
    };

	vm.reset = function () {
		vm.showme = false;
		vm.mapMaze = null; 
		vm.map = null;
		vm.myTextarea = '';
		vm.shortestPath1 = '';
		vm.shortestPath2 = '';
		vm.shortestPathNumOfSteps1 = '';
		vm.shortestPathNumOfSteps2 = '';
		location.reload();
	}

   	var Vehicle = {
		raw_input : '',
		grid      : [],
		map       : [],
		x_max     : 0,
		y_max     : 0,
		start     : {},
		end       : {},
		routes    : [],
		reset : function () {
			raw_input = '';
			grid      = [];
			map       = [];
			x_max     = 0;
			y_max     = 0;
			start     = {};
			end       = {};
			routes    = [];
		},
		inputToArray : function() {
			this.grid = this.raw_input.trim().split('\n');
		},
		splitMap : function() {
			this.y_max = this.grid.length;
			this.x_max = this.grid[0].length;
			for(i=0; i < this.grid.length; i++) {
				console.log(this.grid[i]);
				this.map[i] = this.grid[i].split('');
			}
		},
		readMap : function() {
			for(y=0; y < this.map.length; y++) {
				var mapped = this.map[y];
				for(x=0; x < mapped.length; x++){
					if (mapped[x] == 'A') {
						this.start = {x:x,y:y};
					}
					if (mapped[x] == 'B') {
						this.end = {x:x,y:y};
					}
				}
			}
		},
		/*
		 * @brief 
		 */
		findRoutes : function() {
			var start_location = {
				location    : this.start,
				path        : [],
				character   : "A"
			};
			start_location.path.push(this.start);
			var queue = [start_location];
			var visited_nodes = [];
			var i = 0;
			while (queue.length > 0) {
				i++;
				var parent = queue.shift();
				visited_nodes.push(parent.location);
				var valid_children = this.findChildren(parent);
				for(i=0; i < valid_children.length; i++) {
					if(valid_children[i].character == "B"){
						break;				
					}
					queue.push(valid_children[i]);
				}
			}
		  // No valid path found
		  return false;
		},
		newChild : function (x, y, parent_path, value) {
			return {
				location    : {x:x,y:y},
				path        : [{x:x,y:y}].concat(parent_path),
				character   : value
			};
		},
		findChildren : function (parent) {
			var valid_children = [];
			var x = parent.location.x;
			var y = parent.location.y;
			var parent_path = parent.path;
			var possible_children = [{x:x+1,y:y},{x:x-1,y:y},{x:x,y:y+1},{x:x,y:y-1}];
			for(t=0; t < possible_children.length; t++) {
				var new_path = [];
				var child_x = possible_children[t].x;
				var child_y = possible_children[t].y;
				if (child_y >= this.y_max || child_x >= this.x_max) {
					// If child is out of bounds
					continue;
				} else if (this.map[child_y][child_x] == ".") {
					this.map[child_y][child_x] = "v"; //visited
					var child = this.newChild(child_x, child_y, parent_path, this.map[child_y][child_x]);					
					valid_children.push(child);
				} else if (this.map[child_y][child_x] == "B") {
					var child = this.newChild(child_x, child_y, parent_path, this.map[child_y][child_x]);
					// track the length of each valid path
					this.routes.push(child);
					valid_children.push(child);
				}
			}
			return valid_children;
		},
		/*
		 * @brief Updates the map characters "." and replaces with a number.
		 * This function will diplay multiple routes if exists.
		 */
		markRoutes : function () {
			for(i=0; i < this.routes.length; i++){
				var route = this.routes[i];
				for(t=0; t < route.path.length; t++) {
				    var value = this.map[route.path[t].y][route.path[t].x];
					if (value == 'v') {
						this.map[route.path[t].y][route.path[t].x] = i.toString();
					}
				}
				
			}
			// Turn V's back into "." for display
			for (i=0; i < this.map.length; i++) {
				for (t=0; t < this.map[i].length; t++) {
					if (this.map[i][t] == "v") {
						this.map[i][t] = ".";
					}
				}
			}
		},
		/*
		 * @brief Write the array information to HTML for the viewer to see
		 */
		displayMap : function () {
			//var route = this.routes[0];
			//var c = "";
			//for(i=0; i < this.map.length; i++){
			//	$("#dynamicTable").append('<div class="row" id="row_'+i+'"><div id="container_'+i+'"></div></div>');
			//	for (y=0; y < this.map[i].length; y++) {
			//	    c = "block";
			//		if (this.map[i][y] == "0") {c = "path"}
			//		else if  (this.map[i][y] == ".") {c = "open"}
			//		else if (this.map[i][y] == "A") {c = "start"}
			//		else if (this.map[i][y] == "B") {c = "goal"}
			//		$("div#container_"+i).append('<div class="td '+c+'" id="td_'+y+'">'+this.map[i][y]+'</td>');		
			//	}
			//}
			//$("#path").html(JSON.stringify(this.routes[0].path));
		}
	};


}
