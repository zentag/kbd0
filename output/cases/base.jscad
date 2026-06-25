function board_extrude_2_outline_fn(){
    return new CSG.Path2D([[122.4509257,-2.7876174],[131.5095922,31.0197867]]).appendPoint([5.9392348,64.6662625]).appendPoint([-13.4721936,-7.7781746]).appendPoint([68.6315017,-29.7777934]).appendPoint([59.5367487,-51.7468737]).appendPoint([92.3028306,-74.6899311]).appendPoint([115.245888,-41.9238493]).appendPoint([97.5585085,-26.1407236]).appendPoint([105.0642608,1.8711254]).appendPoint([122.4509257,-2.7876174]).close().innerToCAG()
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

        