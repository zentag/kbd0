function board_extrude_2_outline_fn(){
    return new CSG.Path2D([[121,42],[121,64]]).appendPoint([-11,64]).appendPoint([-11,-11]).appendPoint([74,-11]).appendPoint([74,-39]).appendPoint([114,-39]).appendPoint([114,1]).appendPoint([101,0]).appendPoint([101,42]).appendPoint([121,42]).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}


function switch_holes_extrude_2_outline_fn(){
    return new CSG.Path2D([[96.1,-16.9],[109.9,-16.9]]).appendPoint([109.9,-3.1]).appendPoint([96.1,-3.1]).appendPoint([96.1,-16.9]).close().innerToCAG()
.union(
    new CSG.Path2D([[96.1,-34.9],[109.9,-34.9]]).appendPoint([109.9,-21.1]).appendPoint([96.1,-21.1]).appendPoint([96.1,-34.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[78.1,-16.9],[91.9,-16.9]]).appendPoint([91.9,-3.1]).appendPoint([78.1,-3.1]).appendPoint([78.1,-16.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[78.1,-34.9],[91.9,-34.9]]).appendPoint([91.9,-21.1]).appendPoint([78.1,-21.1]).appendPoint([78.1,-34.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[83.1,4.1],[96.9,4.1]]).appendPoint([96.9,17.9]).appendPoint([83.1,17.9]).appendPoint([83.1,4.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[65.1,4.1],[78.9,4.1]]).appendPoint([78.9,17.9]).appendPoint([65.1,17.9]).appendPoint([65.1,4.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[11.1,11.1],[24.9,11.1]]).appendPoint([24.9,24.9]).appendPoint([11.1,24.9]).appendPoint([11.1,11.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[83.1,40.1],[96.9,40.1]]).appendPoint([96.9,53.9]).appendPoint([83.1,53.9]).appendPoint([83.1,40.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[83.1,22.1],[96.9,22.1]]).appendPoint([96.9,35.9]).appendPoint([83.1,35.9]).appendPoint([83.1,22.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[65.1,40.1],[78.9,40.1]]).appendPoint([78.9,53.9]).appendPoint([65.1,53.9]).appendPoint([65.1,40.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[65.1,22.1],[78.9,22.1]]).appendPoint([78.9,35.9]).appendPoint([65.1,35.9]).appendPoint([65.1,22.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[47.1,10.1],[60.9,10.1]]).appendPoint([60.9,23.9]).appendPoint([47.1,23.9]).appendPoint([47.1,10.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[29.1,5.1],[42.9,5.1]]).appendPoint([42.9,18.9]).appendPoint([29.1,18.9]).appendPoint([29.1,5.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[11.1,29.1],[24.9,29.1]]).appendPoint([24.9,42.9]).appendPoint([11.1,42.9]).appendPoint([11.1,29.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[11.1,-6.9],[24.9,-6.9]]).appendPoint([24.9,6.9]).appendPoint([11.1,6.9]).appendPoint([11.1,-6.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[-6.9,11.1],[6.9,11.1]]).appendPoint([6.9,24.9]).appendPoint([-6.9,24.9]).appendPoint([-6.9,11.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[-6.9,-6.9],[6.9,-6.9]]).appendPoint([6.9,6.9]).appendPoint([-6.9,6.9]).appendPoint([-6.9,-6.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[-6.9,29.1],[6.9,29.1]]).appendPoint([6.9,42.9]).appendPoint([-6.9,42.9]).appendPoint([-6.9,29.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[47.1,46.1],[60.9,46.1]]).appendPoint([60.9,59.9]).appendPoint([47.1,59.9]).appendPoint([47.1,46.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[47.1,28.1],[60.9,28.1]]).appendPoint([60.9,41.9]).appendPoint([47.1,41.9]).appendPoint([47.1,28.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[29.1,41.1],[42.9,41.1]]).appendPoint([42.9,54.9]).appendPoint([29.1,54.9]).appendPoint([29.1,41.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[29.1,23.1],[42.9,23.1]]).appendPoint([42.9,36.9]).appendPoint([29.1,36.9]).appendPoint([29.1,23.1]).close().innerToCAG()
).extrude({ offset: [0, 0, 2] });
}




                function base_case_fn() {
                    

                // creating part 0 of case base
                let base__part_0 = board_extrude_2_outline_fn();

                // make sure that rotations are relative
                let base__part_0_bounds = base__part_0.getBounds();
                let base__part_0_x = base__part_0_bounds[0].x + (base__part_0_bounds[1].x - base__part_0_bounds[0].x) / 2
                let base__part_0_y = base__part_0_bounds[0].y + (base__part_0_bounds[1].y - base__part_0_bounds[0].y) / 2
                base__part_0 = translate([-base__part_0_x, -base__part_0_y, 0], base__part_0);
                base__part_0 = rotate([0,0,0], base__part_0);
                base__part_0 = translate([base__part_0_x, base__part_0_y, 0], base__part_0);

                base__part_0 = translate([0,0,0], base__part_0);
                let result = base__part_0;
                
            
                    return result;
                }
            
            

                function sw_holes_case_fn() {
                    

                // creating part 0 of case sw_holes
                let sw_holes__part_0 = switch_holes_extrude_2_outline_fn();

                // make sure that rotations are relative
                let sw_holes__part_0_bounds = sw_holes__part_0.getBounds();
                let sw_holes__part_0_x = sw_holes__part_0_bounds[0].x + (sw_holes__part_0_bounds[1].x - sw_holes__part_0_bounds[0].x) / 2
                let sw_holes__part_0_y = sw_holes__part_0_bounds[0].y + (sw_holes__part_0_bounds[1].y - sw_holes__part_0_bounds[0].y) / 2
                sw_holes__part_0 = translate([-sw_holes__part_0_x, -sw_holes__part_0_y, 0], sw_holes__part_0);
                sw_holes__part_0 = rotate([0,0,0], sw_holes__part_0);
                sw_holes__part_0 = translate([sw_holes__part_0_x, sw_holes__part_0_y, 0], sw_holes__part_0);

                sw_holes__part_0 = translate([0,0,0], sw_holes__part_0);
                let result = sw_holes__part_0;
                
            
                    return result;
                }
            
            

                function switchplate_case_fn() {
                    

                // creating part 0 of case switchplate
                let switchplate__part_0 = base_case_fn();

                // make sure that rotations are relative
                let switchplate__part_0_bounds = switchplate__part_0.getBounds();
                let switchplate__part_0_x = switchplate__part_0_bounds[0].x + (switchplate__part_0_bounds[1].x - switchplate__part_0_bounds[0].x) / 2
                let switchplate__part_0_y = switchplate__part_0_bounds[0].y + (switchplate__part_0_bounds[1].y - switchplate__part_0_bounds[0].y) / 2
                switchplate__part_0 = translate([-switchplate__part_0_x, -switchplate__part_0_y, 0], switchplate__part_0);
                switchplate__part_0 = rotate([0,0,0], switchplate__part_0);
                switchplate__part_0 = translate([switchplate__part_0_x, switchplate__part_0_y, 0], switchplate__part_0);

                switchplate__part_0 = translate([0,0,0], switchplate__part_0);
                let result = switchplate__part_0;
                
            

                // creating part 1 of case switchplate
                let switchplate__part_1 = sw_holes_case_fn();

                // make sure that rotations are relative
                let switchplate__part_1_bounds = switchplate__part_1.getBounds();
                let switchplate__part_1_x = switchplate__part_1_bounds[0].x + (switchplate__part_1_bounds[1].x - switchplate__part_1_bounds[0].x) / 2
                let switchplate__part_1_y = switchplate__part_1_bounds[0].y + (switchplate__part_1_bounds[1].y - switchplate__part_1_bounds[0].y) / 2
                switchplate__part_1 = translate([-switchplate__part_1_x, -switchplate__part_1_y, 0], switchplate__part_1);
                switchplate__part_1 = rotate([0,0,0], switchplate__part_1);
                switchplate__part_1 = translate([switchplate__part_1_x, switchplate__part_1_y, 0], switchplate__part_1);

                switchplate__part_1 = translate([0,0,0], switchplate__part_1);
                result = result.subtract(switchplate__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return switchplate_case_fn();
            }

        