function base_extrude_2_outline_fn(){
    return new CSG.Path2D([[103,0.5],[103,61.5]]).appendPoint([-11,61.5]).appendPoint([-11,-10.5]).appendPoint([74,-10.5]).appendPoint([78.2545927,-14.3710059]).appendPoint([71.0721697,-34.1045509]).appendPoint([108.6598745,-47.7853567]).appendPoint([121.6566399,-12.0770371]).appendPoint([104.7421727,-5.9206745]).appendPoint([103,0.5]).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}


function switch_holes_extrude_2_outline_fn(){
    return new CSG.Path2D([[83.1,4.1],[96.9,4.1]]).appendPoint([96.9,17.9]).appendPoint([83.1,17.9]).appendPoint([83.1,4.1]).close().innerToCAG()
.union(
    new CSG.Path2D([[65.1,4.1],[78.9,4.1]]).appendPoint([78.9,17.9]).appendPoint([65.1,17.9]).appendPoint([65.1,4.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[11.1,10.1],[24.9,10.1]]).appendPoint([24.9,23.9]).appendPoint([11.1,23.9]).appendPoint([11.1,10.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[83.1,38.1],[96.9,38.1]]).appendPoint([96.9,51.9]).appendPoint([83.1,51.9]).appendPoint([83.1,38.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[83.1,21.1],[96.9,21.1]]).appendPoint([96.9,34.9]).appendPoint([83.1,34.9]).appendPoint([83.1,21.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[65.1,38.1],[78.9,38.1]]).appendPoint([78.9,51.9]).appendPoint([65.1,51.9]).appendPoint([65.1,38.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[65.1,21.1],[78.9,21.1]]).appendPoint([78.9,34.9]).appendPoint([65.1,34.9]).appendPoint([65.1,21.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[47.1,10.1],[60.9,10.1]]).appendPoint([60.9,23.9]).appendPoint([47.1,23.9]).appendPoint([47.1,10.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[29.1,5.1],[42.9,5.1]]).appendPoint([42.9,18.9]).appendPoint([29.1,18.9]).appendPoint([29.1,5.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[11.1,27.1],[24.9,27.1]]).appendPoint([24.9,40.9]).appendPoint([11.1,40.9]).appendPoint([11.1,27.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[11.1,-6.9],[24.9,-6.9]]).appendPoint([24.9,6.9]).appendPoint([11.1,6.9]).appendPoint([11.1,-6.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[-6.9,10.1],[6.9,10.1]]).appendPoint([6.9,23.9]).appendPoint([-6.9,23.9]).appendPoint([-6.9,10.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[-6.9,-6.9],[6.9,-6.9]]).appendPoint([6.9,6.9]).appendPoint([-6.9,6.9]).appendPoint([-6.9,-6.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[-6.9,27.1],[6.9,27.1]]).appendPoint([6.9,40.9]).appendPoint([-6.9,40.9]).appendPoint([-6.9,27.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[47.1,44.1],[60.9,44.1]]).appendPoint([60.9,57.9]).appendPoint([47.1,57.9]).appendPoint([47.1,44.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[47.1,27.1],[60.9,27.1]]).appendPoint([60.9,40.9]).appendPoint([47.1,40.9]).appendPoint([47.1,27.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[29.1,39.1],[42.9,39.1]]).appendPoint([42.9,52.9]).appendPoint([29.1,52.9]).appendPoint([29.1,39.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[29.1,22.1],[42.9,22.1]]).appendPoint([42.9,35.9]).appendPoint([29.1,35.9]).appendPoint([29.1,22.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[76.1561819,-32.1239401],[89.1239401,-36.8438181]]).appendPoint([93.8438181,-23.8760599]).appendPoint([80.8760599,-19.1561819]).appendPoint([76.1561819,-32.1239401]).close().innerToCAG()
).union(
    new CSG.Path2D([[98.8849915,-22.3055281],[111.8527497,-27.0254061]]).appendPoint([116.5726277,-14.0576479]).appendPoint([103.6048695,-9.3377699]).appendPoint([98.8849915,-22.3055281]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.0706491,-38.2803027],[106.0384073,-43.0001807]]).appendPoint([110.7582853,-30.0324225]).appendPoint([97.7905271,-25.3125445]).appendPoint([93.0706491,-38.2803027]).close().innerToCAG()
).union(
    new CSG.Path2D([[81.9705243,-16.1491655],[94.9382825,-20.8690435]]).appendPoint([99.6581605,-7.9012853]).appendPoint([86.6904023,-3.1814073]).appendPoint([81.9705243,-16.1491655]).close().innerToCAG()
).extrude({ offset: [0, 0, 2] });
}




                function base_case_fn() {
                    

                // creating part 0 of case base
                let base__part_0 = base_extrude_2_outline_fn();

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

        