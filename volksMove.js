import * as T from "../libs/CS559-THREE/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

let leg = 2;

export class volksMove extends GrObject {
    constructor() {

        let geometry = new T.Geometry();

        //front
        geometry.vertices.push(new T.Vector3(0, 0, 0)); //0
        geometry.vertices.push(new T.Vector3(1, 0, 0)); //1
        geometry.vertices.push(new T.Vector3(0, 0.6, 0)); //2
        geometry.vertices.push(new T.Vector3(1, 0.6, 0)); //3
        geometry.vertices.push(new T.Vector3(1.25, 0, -0.25)); //4
        geometry.vertices.push(new T.Vector3(1.25, 0.6, -0.25)); //5
        geometry.vertices.push(new T.Vector3(-0.25, 0, -0.25)); //6
        geometry.vertices.push(new T.Vector3(-0.25, 0.6, -0.25)); //7
        geometry.vertices.push(new T.Vector3(1, 1, -0.25)); //8
        geometry.vertices.push(new T.Vector3(0, 1, -0.25)); //9
        //left
        geometry.vertices.push(new T.Vector3(1.25, 0, -2.25)); //10
        geometry.vertices.push(new T.Vector3(1.25, 0.6, -2.25)); //11
        geometry.vertices.push(new T.Vector3(1, 1, -2.25)); //12
        //back
        geometry.vertices.push(new T.Vector3(1, 0, -2.5)); //13
        geometry.vertices.push(new T.Vector3(1, 0.6, -2.5)); //14
        geometry.vertices.push(new T.Vector3(0, 0.6, -2.5)); //15
        geometry.vertices.push(new T.Vector3(0, 0, -2.5)); //16
        geometry.vertices.push(new T.Vector3(-0.25, 0, -2.25)); //17
        geometry.vertices.push(new T.Vector3(-0.25, 0.6, -2.25)); //18
        geometry.vertices.push(new T.Vector3(0, 1, -2.25)); //19

        //construction of front
        let front_a = new T.Face3(1, 2, 0);
        geometry.faces.push(front_a);
        let front_b = new T.Face3(1, 3, 2);
        geometry.faces.push(front_b);
        let front_c = new T.Face3(0, 7, 6);
        geometry.faces.push(front_c);
        let front_d = new T.Face3(0, 2, 7);
        geometry.faces.push(front_d);
        let front_e = new T.Face3(4, 3, 1);
        geometry.faces.push(front_e);
        let front_f = new T.Face3(4, 5, 3);
        geometry.faces.push(front_f);
        let front_g = new T.Face3(2, 9, 7);
        geometry.faces.push(front_g);
        let front_h = new T.Face3(3, 9, 2);
        geometry.faces.push(front_h);
        let front_i = new T.Face3(3, 8, 9);
        geometry.faces.push(front_i);
        let front_j = new T.Face3(5, 8, 3);
        geometry.faces.push(front_j);
        //construction of left
        let left_a = new T.Face3(10, 5, 4);
        geometry.faces.push(left_a);
        let left_b = new T.Face3(10, 11, 5);
        geometry.faces.push(left_b);
        let left_c = new T.Face3(11, 8, 5);
        geometry.faces.push(left_c);
        let left_d = new T.Face3(11, 12, 8);
        geometry.faces.push(left_d);
        //construction of back
        let back_a = new T.Face3(16, 14, 13);
        geometry.faces.push(back_a);
        let back_b = new T.Face3(16, 15, 14);
        geometry.faces.push(back_b);
        let back_c = new T.Face3(13, 11, 10);
        geometry.faces.push(back_c);
        let back_d = new T.Face3(13, 14, 11);
        geometry.faces.push(back_d);
        let back_e = new T.Face3(17, 15, 16);
        geometry.faces.push(back_e);
        let back_f = new T.Face3(17, 18, 15);
        geometry.faces.push(back_f);
        let back_g = new T.Face3(14, 12, 11);
        geometry.faces.push(back_g);
        let back_h = new T.Face3(15, 12, 14);
        geometry.faces.push(back_h);
        let back_i = new T.Face3(15, 19, 12);
        geometry.faces.push(back_i);
        let back_j = new T.Face3(18, 19, 15);
        geometry.faces.push(back_j);
        //construction of right
        let right_a = new T.Face3(6, 18, 17);
        geometry.faces.push(right_a);
        let right_b = new T.Face3(6, 7, 18);
        geometry.faces.push(right_b);
        let right_c = new T.Face3(7, 19, 18);
        geometry.faces.push(right_c);
        let right_d = new T.Face3(7, 9, 19);
        geometry.faces.push(right_d);
        //construction of top
        let top_a = new T.Face3(19, 8, 12);
        geometry.faces.push(top_a);
        let top_b = new T.Face3(19, 9, 8);
        geometry.faces.push(top_b);

        geometry.computeFaceNormals();
        
        let material = new T.MeshStandardMaterial({color: "aqua", roughness: 0.3, metalness: 0.6});
        let mesh = new T.Mesh(geometry, material);

        let tire_geom = new T.CylinderGeometry(0.25, 0.25, 0.15, 20, 20);
        let tire_mat = new T.MeshStandardMaterial({color: "black"});
        let tire1 = new T.Mesh(tire_geom, tire_mat);
        mesh.add(tire1);
        tire1.position.z = -0.5;
        tire1.position.x = -0.25;
        tire1.rotateZ(Math.PI / 2);
        let tire2 = new T.Mesh(tire_geom, tire_mat);
        mesh.add(tire2);
        tire2.position.z = -2;
        tire2.position.x = -0.25;
        tire2.rotateZ(Math.PI / 2);
        let tire3 = new T.Mesh(tire_geom, tire_mat);
        mesh.add(tire3);
        tire3.position.z = -0.5;
        tire3.position.x = 1.25;
        tire3.rotateZ(Math.PI / 2);
        let tire4 = new T.Mesh(tire_geom, tire_mat);
        mesh.add(tire4);
        tire4.position.z = -2;
        tire4.position.x = 1.25;
        tire4.rotateZ(Math.PI / 2);

        super("vwbus", mesh);

        this.tick = function(delta, timeOfDay) {
            delta = delta / 20;
            switch(leg) {
              case 0:
                mesh.position.x += 1 * delta;
                if (mesh.position.x >= 90) {
                  leg = 1;
                  mesh.rotateY(-Math.PI / 2);
                }
                break;
              case 1:
                mesh.position.z += 1 * delta;
                if (mesh.position.z >= 65) {
                  leg = 2;
                  mesh.rotateY(-Math.PI / 2);
                }
                break;
              case 2:
                mesh.position.x -= 1 * delta;
                if (mesh.position.x <= 1.5) {
                  leg = 3;
                  mesh.rotateY(-Math.PI / 2);
                }
                break;
              case 3:
                mesh.position.z -= 1 * delta;
                if (mesh.position.z <= 6) {
                  leg = 4;
                  mesh.rotateY(-Math.PI / 2);
                }
                break;
              case 4:
                mesh.position.x += 1 * delta;
                if (mesh.position.x >= 32) {
                  leg = 5;
                  mesh.rotateY(Math.PI / 2);
                }
                break;
              case 5:
                mesh.position.z -= 1 * delta;
                if (mesh.position.z <= -42) {
                  leg = 6;
                  mesh.rotateY(Math.PI / 2);
                }
                break;
              case 6:
                mesh.position.x -= 1 * delta;
                if (mesh.position.x <= -16) {
                  leg = 7;
                  mesh.rotateY(-Math.PI / 2);
                }
                break;
              case 7:
                mesh.position.z -= 1 * delta;
                if (mesh.position.z <= -90) {
                  leg = 0;
                  mesh.rotateY(-Math.PI / 2);
                }
                break;
              default:
                console.log("Something went wrong with the car driving around the track!");
            }
          };
    }
}