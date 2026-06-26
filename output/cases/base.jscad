function board_extrude_2_outline_fn(){
    return new CSG.Path2D([[121,42],[121,64]]).appendPoint([-11,64]).appendPoint([-11,-11]).appendPoint([74,-11]).appendPoint([74,-39]).appendPoint([114,-39]).appendPoint([114,1]).appendPoint([101,0]).appendPoint([101,42]).appendPoint([121,42]).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
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
            
            
        
            function main() {
                return base_case_fn();
            }

        