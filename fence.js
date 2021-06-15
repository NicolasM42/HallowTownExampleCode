import * as T from "../libs/CS559-THREE/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

export class fence extends GrObject {
    constructor() {
        let pole_geom = new T.CylinderGeometry(0.1, 0.1, 2, 20, 20);
        let crossbar_geom = new T.BoxGeometry(3, 0.1, 0.4);
        let spike_geom = new T.ConeGeometry(0.25, 1, 20, 20);

        let metal = new T.MeshStandardMaterial({color: "darkgrey", roughness: 0.2, metalness: 0.8});

        let lower_crossbar = new T.Mesh(crossbar_geom, metal);
        let left_pole = new T.Mesh(pole_geom, metal);
        let middle_pole = new T.Mesh(pole_geom, metal);
        let right_pole = new T.Mesh(pole_geom, metal);
        let upper_crossbar = new T.Mesh(crossbar_geom, metal);
        let spike = new T.Mesh(spike_geom, metal);

        lower_crossbar.add(left_pole);
        left_pole.position.x = -1.3;
        left_pole.position.y = 0.6;

        lower_crossbar.add(middle_pole);
        middle_pole.position.y = 0.6;

        middle_pole.add(spike);
        spike.position.y = 1.5;

        lower_crossbar.add(right_pole);
        right_pole.position.x = 1.3;
        right_pole.position.y = 0.6;

        lower_crossbar.add(upper_crossbar);
        upper_crossbar.position.y = 1.3;

        super("fence", lower_crossbar);
    }
}