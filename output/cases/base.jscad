function board_extrude_2_outline_fn(){
    return new CSG.Path2D([[97.687918,-25.6577607],[113.4758798,33.2637149]]).appendPoint([5.2921873,62.2514479]).appendPoint([-13.3427841,-7.2952117]).appendPoint([68.7609112,-29.2948305]).appendPoint([59.8235369,-51.3372977]).appendPoint([92.5896188,-74.2803551]).appendPoint([114.3855234,-43.1525774]).appendPoint([97.687918,-25.6577607]).close().innerToCAG()
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

        