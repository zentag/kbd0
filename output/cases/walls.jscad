function base_extrude_10_outline_fn(){
    return new CSG.Path2D([[34.9584865,37.737968],[0.1851567,47.0554536]]).appendPoint([-14.5675289,-8.0023185]).appendPoint([26.0013558,-18.8727183]).appendPoint([29.1071843,-7.2816084]).appendPoint([46.4938492,-11.9403512]).appendPoint([47.7879444,-7.1107221]).appendPoint([59.3790543,-10.2165507]).appendPoint([57.8261401,-16.0121056]).appendPoint([68.4513242,-18.8591151]).appendPoint([63.5337623,-37.2117059]).appendPoint([84.7841304,-42.9057249]).appendPoint([84.94779,-43.4131396]).appendPoint([101.3308309,-54.8846684]).appendPoint([101.8636198,-54.8649122]).appendPoint([114.4823014,-72.8862571]).appendPoint([130.0461903,-61.9883049]).appendPoint([152.4868711,-41.3763721]).appendPoint([167.2395567,13.6814]).appendPoint([78.3743807,37.4927523]).appendPoint([79.9272949,43.2883073]).appendPoint([56.7450751,49.4999643]).appendPoint([55.4509799,44.6703351]).appendPoint([38.064315,49.3290779]).appendPoint([34.9584865,37.737968]).close().innerToCAG()
.extrude({ offset: [0, 0, 10] });
}


function inner_base_extrude_10_outline_fn(){
    return new CSG.Path2D([[36.3727,35.2884783],[1.5993703,44.6059639]]).appendPoint([-12.1180392,-6.5881049]).appendPoint([24.5871422,-16.4232286]).appendPoint([27.6929708,-4.8321187]).appendPoint([45.0796356,-9.4908615]).appendPoint([46.3737309,-4.6612324]).appendPoint([61.8285441,-8.8023371]).appendPoint([60.2756298,-14.597892]).appendPoint([70.9008139,-17.4449015]).appendPoint([65.983252,-35.7974923]).appendPoint([85.3017685,-40.9738732]).appendPoint([86.0949429,-41.7748356]).appendPoint([102.4779838,-53.2463643]).appendPoint([103.5019239,-53.7177593]).appendPoint([114.9734526,-70.1008002]).appendPoint([130.5373415,-59.2028479]).appendPoint([151.0726575,-38.9268823]).appendPoint([164.790067,12.2671865]).appendPoint([75.9248909,36.0785387]).appendPoint([77.4778052,41.8740937]).appendPoint([58.1592887,47.0504746]).appendPoint([56.8651934,42.2208454]).appendPoint([39.4785286,46.8795882]).appendPoint([36.3727,35.2884783]).close().innerToCAG()
.extrude({ offset: [0, 0, 10] });
}




                function _walls_add_case_fn() {
                    

                // creating part 0 of case _walls_add
                let _walls_add__part_0 = base_extrude_10_outline_fn();

                // make sure that rotations are relative
                let _walls_add__part_0_bounds = _walls_add__part_0.getBounds();
                let _walls_add__part_0_x = _walls_add__part_0_bounds[0].x + (_walls_add__part_0_bounds[1].x - _walls_add__part_0_bounds[0].x) / 2
                let _walls_add__part_0_y = _walls_add__part_0_bounds[0].y + (_walls_add__part_0_bounds[1].y - _walls_add__part_0_bounds[0].y) / 2
                _walls_add__part_0 = translate([-_walls_add__part_0_x, -_walls_add__part_0_y, 0], _walls_add__part_0);
                _walls_add__part_0 = rotate([0,0,0], _walls_add__part_0);
                _walls_add__part_0 = translate([_walls_add__part_0_x, _walls_add__part_0_y, 0], _walls_add__part_0);

                _walls_add__part_0 = translate([0,0,0], _walls_add__part_0);
                let result = _walls_add__part_0;
                
            
                    return result;
                }
            
            

                function _walls_subtract_case_fn() {
                    

                // creating part 0 of case _walls_subtract
                let _walls_subtract__part_0 = inner_base_extrude_10_outline_fn();

                // make sure that rotations are relative
                let _walls_subtract__part_0_bounds = _walls_subtract__part_0.getBounds();
                let _walls_subtract__part_0_x = _walls_subtract__part_0_bounds[0].x + (_walls_subtract__part_0_bounds[1].x - _walls_subtract__part_0_bounds[0].x) / 2
                let _walls_subtract__part_0_y = _walls_subtract__part_0_bounds[0].y + (_walls_subtract__part_0_bounds[1].y - _walls_subtract__part_0_bounds[0].y) / 2
                _walls_subtract__part_0 = translate([-_walls_subtract__part_0_x, -_walls_subtract__part_0_y, 0], _walls_subtract__part_0);
                _walls_subtract__part_0 = rotate([0,0,0], _walls_subtract__part_0);
                _walls_subtract__part_0 = translate([_walls_subtract__part_0_x, _walls_subtract__part_0_y, 0], _walls_subtract__part_0);

                _walls_subtract__part_0 = translate([0,0,0], _walls_subtract__part_0);
                let result = _walls_subtract__part_0;
                
            
                    return result;
                }
            
            

                function walls_case_fn() {
                    

                // creating part 0 of case walls
                let walls__part_0 = _walls_add_case_fn();

                // make sure that rotations are relative
                let walls__part_0_bounds = walls__part_0.getBounds();
                let walls__part_0_x = walls__part_0_bounds[0].x + (walls__part_0_bounds[1].x - walls__part_0_bounds[0].x) / 2
                let walls__part_0_y = walls__part_0_bounds[0].y + (walls__part_0_bounds[1].y - walls__part_0_bounds[0].y) / 2
                walls__part_0 = translate([-walls__part_0_x, -walls__part_0_y, 0], walls__part_0);
                walls__part_0 = rotate([0,0,0], walls__part_0);
                walls__part_0 = translate([walls__part_0_x, walls__part_0_y, 0], walls__part_0);

                walls__part_0 = translate([0,0,0], walls__part_0);
                let result = walls__part_0;
                
            

                // creating part 1 of case walls
                let walls__part_1 = _walls_subtract_case_fn();

                // make sure that rotations are relative
                let walls__part_1_bounds = walls__part_1.getBounds();
                let walls__part_1_x = walls__part_1_bounds[0].x + (walls__part_1_bounds[1].x - walls__part_1_bounds[0].x) / 2
                let walls__part_1_y = walls__part_1_bounds[0].y + (walls__part_1_bounds[1].y - walls__part_1_bounds[0].y) / 2
                walls__part_1 = translate([-walls__part_1_x, -walls__part_1_y, 0], walls__part_1);
                walls__part_1 = rotate([0,0,0], walls__part_1);
                walls__part_1 = translate([walls__part_1_x, walls__part_1_y, 0], walls__part_1);

                walls__part_1 = translate([0,0,0], walls__part_1);
                result = result.subtract(walls__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return walls_case_fn();
            }

        