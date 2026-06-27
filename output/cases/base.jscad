function base_extrude_2_outline_fn(){
    return new CSG.Path2D([[103,0.5],[103,61.5]]).appendPoint([-11,61.5]).appendPoint([-11,-10.5]).appendPoint([74,-10.5]).appendPoint([78.2545927,-14.3710059]).appendPoint([71.0721697,-34.1045509]).appendPoint([108.6598745,-47.7853567]).appendPoint([121.6566399,-12.0770371]).appendPoint([104.7421727,-5.9206745]).appendPoint([103,0.5]).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
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
            
            
        
            function main() {
                return base_case_fn();
            }

        