function base_extrude_2_outline_fn(){
    return new CSG.Path2D([[34.9584865,37.737968],[0.1851567,47.0554536]]).appendPoint([-14.5675289,-8.0023185]).appendPoint([26.0013558,-18.8727183]).appendPoint([29.1071843,-7.2816084]).appendPoint([46.4938492,-11.9403512]).appendPoint([47.7879444,-7.1107221]).appendPoint([59.3790543,-10.2165507]).appendPoint([57.8261401,-16.0121056]).appendPoint([68.4513242,-18.8591151]).appendPoint([63.5337623,-37.2117059]).appendPoint([84.7841304,-42.9057249]).appendPoint([84.94779,-43.4131396]).appendPoint([101.3308309,-54.8846684]).appendPoint([101.8636198,-54.8649122]).appendPoint([114.4823014,-72.8862571]).appendPoint([130.0461903,-61.9883049]).appendPoint([152.4868711,-41.3763721]).appendPoint([167.2395567,13.6814]).appendPoint([78.3743807,37.4927523]).appendPoint([79.9272949,43.2883073]).appendPoint([56.7450751,49.4999643]).appendPoint([55.4509799,44.6703351]).appendPoint([38.064315,49.3290779]).appendPoint([34.9584865,37.737968]).close().innerToCAG()
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

        