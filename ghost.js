import * as T from "../libs/CS559-THREE/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import { SphereGeometry } from "../libs/CS559-THREE/build/three.module.js";

let t = 0;

export class ghost extends GrObject {
    constructor(height, range) {

        let geometry = new T.Geometry();

        geometry.vertices.push(new T.Vector3(0, 0, 0)); //0: central point

        //lower cloak verticies
        geometry.vertices.push(new T.Vector3(0, -3, 1)); //1
        geometry.vertices.push(new T.Vector3(-Math.sqrt(2)/2, -3, Math.sqrt(2)/2)); //2
        geometry.vertices.push(new T.Vector3(-1, -3, 0)); //3
        geometry.vertices.push(new T.Vector3(-Math.sqrt(2)/2, -3, -Math.sqrt(2)/2)); //4
        geometry.vertices.push(new T.Vector3(0, -3, -1)); //5
        geometry.vertices.push(new T.Vector3(Math.sqrt(2)/2, -3, -Math.sqrt(2)/2)); //6
        geometry.vertices.push(new T.Vector3(1, -3, 0)); //7
        geometry.vertices.push(new T.Vector3(Math.sqrt(2)/2, -3, Math.sqrt(2)/2)); //8

        //upper cloack vertices
        geometry.vertices.push(new T.Vector3(-0.3, -2, 0.5)); //9
        geometry.vertices.push(new T.Vector3(-0.4, -2, 0.25)); //10
        geometry.vertices.push(new T.Vector3(-0.4, -2, -0.18)); //11
        geometry.vertices.push(new T.Vector3(-0.3, -2, -0.44)); //12
        geometry.vertices.push(new T.Vector3(0.2, -2, -0.6)); //13
        geometry.vertices.push(new T.Vector3(0.5, -2, -0.15)); //14
        geometry.vertices.push(new T.Vector3(0.62, -2, 0.2)); //15
        geometry.vertices.push(new T.Vector3(0.42, -2, 0.56)); //16

        geometry.faceVertexUvs = [[]];

        let cloak_a = new T.Face3(1, 0, 9);
        geometry.faces.push(cloak_a);
        let cloak_b = new T.Face3(9, 0, 2);
        geometry.faces.push(cloak_b);
        let cloak_c = new T.Face3(2, 0, 10);
        geometry.faces.push(cloak_c);
        let cloak_d = new T.Face3(10, 0, 3);
        geometry.faces.push(cloak_d);
        let cloak_e = new T.Face3(3, 0, 11);
        geometry.faces.push(cloak_e);
        let cloak_f = new T.Face3(11, 0, 4);
        geometry.faces.push(cloak_f);
        let cloak_g = new T.Face3(4, 0, 12);
        geometry.faces.push(cloak_g);
        let cloak_h = new T.Face3(12, 0, 5);
        geometry.faces.push(cloak_h);
        let cloak_i = new T.Face3(5, 0, 13);
        geometry.faces.push(cloak_i);
        let cloak_j = new T.Face3(13, 0, 6);
        geometry.faces.push(cloak_j);
        let cloak_k = new T.Face3(6, 0, 14);
        geometry.faces.push(cloak_k);
        let cloak_l = new T.Face3(14, 0, 7);
        geometry.faces.push(cloak_l);
        let cloak_m = new T.Face3(7, 0, 15);
        geometry.faces.push(cloak_m);
        let cloak_n = new T.Face3(15, 0, 8);
        geometry.faces.push(cloak_n);
        let cloak_o = new T.Face3(8, 0, 16);
        geometry.faces.push(cloak_o);
        let cloak_p = new T.Face3(16, 0, 1);
        geometry.faces.push(cloak_p);

        geometry.computeFaceNormals();

        let cloak_mat = new T.MeshStandardMaterial({color: "white"});
        let cloak = new T.Mesh(geometry, cloak_mat);

        let head_geom = new T.SphereGeometry(0.4, 20, 20);
        let texture = new T.TextureLoader().load("../HallowTown/Textures/GhostFace.png");
        let head_mat = new T.MeshStandardMaterial({color: "white", map: texture});
        let head = new T.Mesh(head_geom, head_mat);
        head.rotateY(-Math.PI / 2);
        cloak.add(head);

        super("ghost", cloak);

        this.tick = function(delta, timeOfDay) {
            delta = delta / 10;
            t += 0.01 * delta;
            cloak.position.y = range * Math.sin(t) + height;           
        };
    }
}