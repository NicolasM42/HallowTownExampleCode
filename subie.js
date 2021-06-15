import * as T from "../libs/CS559-THREE/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import { MathUtils } from "../libs/CS559-THREE/build/three.module.js";

let leg = 0; //defines what leg of the track the car is on

export class subie extends GrObject {
    constructor() {

        let geometry = new T.Geometry();

        //front bumper
        geometry.vertices.push(new T.Vector3(0, 0, 0)); //0
        geometry.vertices.push(new T.Vector3(1, 0, 0)); //1
        geometry.vertices.push(new T.Vector3(0, 0.3, 0)); //2
        geometry.vertices.push(new T.Vector3(1, 0.3, 0)); //3
        geometry.vertices.push(new T.Vector3(-0.25, 0, -0.25)); //4
        geometry.vertices.push(new T.Vector3(-0.25, 0.3, -0.25)); //5
        geometry.vertices.push(new T.Vector3(1.25, 0, -0.25)); //6
        geometry.vertices.push(new T.Vector3(1.25, 0.3, -0.25)); //7
        geometry.vertices.push(new T.Vector3(1, 0.4, -0.25)); //8
        geometry.vertices.push(new T.Vector3(0, 0.4, -0.25)); //9
        //hood
        geometry.vertices.push(new T.Vector3(0, 0.4, -1)); //10
        geometry.vertices.push(new T.Vector3(1, 0.4, -1)); //11
        geometry.vertices.push(new T.Vector3(1.25, 0.3, -1)); //12
        geometry.vertices.push(new T.Vector3(1.25, 0.3, -1.25)); //13
        geometry.vertices.push(new T.Vector3(-0.25, 0.3, -1)); //14
        geometry.vertices.push(new T.Vector3(-0.25, 0.3, -1.25)); //15
        //windsheild
        geometry.vertices.push(new T.Vector3(0, 0.8, -1.5)); //16
        geometry.vertices.push(new T.Vector3(1, 0.8, -1.5)); //17
        //roof
        geometry.vertices.push(new T.Vector3(1, 0.8, -2.5)); //18
        geometry.vertices.push(new T.Vector3(0, 0.8, -2.5)); //19
        //back
        geometry.vertices.push(new T.Vector3(1, 0.3, -2.75)); //20
        geometry.vertices.push(new T.Vector3(0, 0.3, -2.75)); //21
        geometry.vertices.push(new T.Vector3(0, 0, -2.75)); //22
        geometry.vertices.push(new T.Vector3(1, 0, -2.75)); //23
        //left side
        geometry.vertices.push(new T.Vector3(1.25, 0.3, -2.5)); //24
        geometry.vertices.push(new T.Vector3(1.25, 0, -2.5)); //25
        geometry.vertices.push(new T.Vector3(1.25, 0.3, -1.5)); //26
        geometry.vertices.push(new T.Vector3(1, 0.3, -2.75)); //27
        geometry.vertices.push(new T.Vector3(1, 0, -2.75)); //28
        //right side
        geometry.vertices.push(new T.Vector3(-0.25, 0, -2.5)); //29
        geometry.vertices.push(new T.Vector3(-0.25, 0.3, -2.5)); //30
        geometry.vertices.push(new T.Vector3(-0.25, 0.3, -1.5)); //31


        geometry.faceVertexUvs = [[]];

        //construction of front bumper
        let bumper_a = new T.Face3(1, 2, 0);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 1),
            new T.Vector2(1, 1),
            new T.Vector2(1, 1)
          ]);
        geometry.faces.push(bumper_a);
        let bumper_b = new T.Face3(1, 3, 2);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 1),
            new T.Vector2(1, 1),
            new T.Vector2(1, 1)
          ]);
        geometry.faces.push(bumper_b);
        let bumper_c = new T.Face3(3, 9, 2);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 1),
            new T.Vector2(1, 1),
            new T.Vector2(1, 1)
          ]);
        geometry.faces.push(bumper_c);
        let bumper_d = new T.Face3(3, 8, 9);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 1),
            new T.Vector2(1, 1),
            new T.Vector2(1, 1)
          ]);
        geometry.faces.push(bumper_d);
        let bumper_e = new T.Face3(0, 5, 4);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(0.5, 0),
            new T.Vector2(0, 0.5),
            new T.Vector2(0, 0)
          ]);
        geometry.faces.push(bumper_e);
        let bumper_f = new T.Face3(0, 2, 5);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(0.5, 0),
            new T.Vector2(0.5, 0.5),
            new T.Vector2(0, 0.5)
          ]);
        geometry.faces.push(bumper_f);
        let bumper_g = new T.Face3(2, 9, 5);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 1),
            new T.Vector2(1, 1),
            new T.Vector2(1, 1)
          ]);
        geometry.faces.push(bumper_g);
        let bumper_h = new T.Face3(6, 3, 1);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(0.5, 0),
            new T.Vector2(0, 0.5),
            new T.Vector2(0, 0)
          ]);
        geometry.faces.push(bumper_h);
        let bumper_i = new T.Face3(6, 7, 3);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(0.5, 0),
            new T.Vector2(0.5, 0.5),
            new T.Vector2(0, 0.5)
          ]);
        geometry.faces.push(bumper_i);
        let bumper_j = new T.Face3(7, 8, 3);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 1),
            new T.Vector2(1, 1),
            new T.Vector2(1, 1)
          ]);
        geometry.faces.push(bumper_j);
        //construction of hood
        let hood_a = new T.Face3(8, 10, 9);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 1),
            new T.Vector2(1, 1),
            new T.Vector2(1, 1)
          ]);
        geometry.faces.push(hood_a);
        let hood_b = new T.Face3(8, 11, 10);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 1),
            new T.Vector2(1, 1),
            new T.Vector2(1, 1)
          ]);
        geometry.faces.push(hood_b);
        let hood_c = new T.Face3(9, 14, 5);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 1),
            new T.Vector2(1, 1),
            new T.Vector2(1, 1)
          ]);
        geometry.faces.push(hood_c);
        let hood_d = new T.Face3(9, 10, 14);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 1),
            new T.Vector2(1, 1),
            new T.Vector2(1, 1)
          ]);
        geometry.faces.push(hood_d);
        let hood_e = new T.Face3(10, 15, 14);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 1),
            new T.Vector2(1, 1),
            new T.Vector2(1, 1)
          ]);
        geometry.faces.push(hood_e);
        let hood_f = new T.Face3(7, 11, 8);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 1),
            new T.Vector2(1, 1),
            new T.Vector2(1, 1)
          ]);
        geometry.faces.push(hood_f);
        let hood_g = new T.Face3(7, 12, 11);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 1),
            new T.Vector2(1, 1),
            new T.Vector2(1, 1)
          ]);
        geometry.faces.push(hood_g);
        let hood_h = new T.Face3(12, 13, 11);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 1),
            new T.Vector2(1, 1),
            new T.Vector2(1, 1)
          ]);
        geometry.faces.push(hood_h);
        //construction of windsheild
        let windsheild_a = new T.Face3(11, 16, 10);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 0.51),
            new T.Vector2(0, 1),
            new T.Vector2(0, 0.51)
          ]);
        geometry.faces.push(windsheild_a);
        let windsheild_b = new T.Face3(11, 17, 16);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 0.51),
            new T.Vector2(1, 1),
            new T.Vector2(0, 1)
          ]);
        geometry.faces.push(windsheild_b);
        let windsheild_c = new T.Face3(10, 16, 15);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 1),
            new T.Vector2(1, 1),
            new T.Vector2(1, 1)
          ]);
        geometry.faces.push(windsheild_c);
        let windsheild_d = new T.Face3(13, 17, 11);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 1),
            new T.Vector2(1, 1),
            new T.Vector2(1, 1)
          ]);
        geometry.faces.push(windsheild_d);
        //construction of roof
        let roof_a = new T.Face3(17, 19, 16);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 1),
            new T.Vector2(1, 1),
            new T.Vector2(1, 1)
          ]);
        geometry.faces.push(roof_a);
        let roof_b = new T.Face3(17, 18, 19);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 1),
            new T.Vector2(1, 1),
            new T.Vector2(1, 1)
          ]);
        geometry.faces.push(roof_b);
        //construction of back
        let back_a = new T.Face3(21, 19, 18);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 0.51),
            new T.Vector2(1, 1),
            new T.Vector2(0, 1)
          ]);
        geometry.faces.push(back_a);
        let back_b = new T.Face3(21, 18, 20);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 0.51),
            new T.Vector2(0, 1),
            new T.Vector2(0, 0.51)
          ]);
        geometry.faces.push(back_b);
        let back_c = new T.Face3(22, 21, 20);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 1),
            new T.Vector2(1, 1),
            new T.Vector2(1, 1)
          ]);
        geometry.faces.push(back_c);
        let back_d = new T.Face3(22, 20, 23);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 1),
            new T.Vector2(1, 1),
            new T.Vector2(1, 1)
          ]);
        geometry.faces.push(back_d);
        //construction of left_side
        let left_a = new T.Face3(25, 7, 6);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 1),
            new T.Vector2(1, 1),
            new T.Vector2(1, 1)
          ]);
        geometry.faces.push(left_a);
        let left_b = new T.Face3(25, 24, 7);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 1),
            new T.Vector2(1, 1),
            new T.Vector2(1, 1)
          ]);
        geometry.faces.push(left_b);
        let left_c = new T.Face3(26, 17, 13);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 1),
            new T.Vector2(1, 1),
            new T.Vector2(1, 1)
          ]);
        geometry.faces.push(left_c);
        let left_d = new T.Face3(24, 17, 26);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 0.51),
            new T.Vector2(0, 1),
            new T.Vector2(0, 0.51)
          ]);
        geometry.faces.push(left_d);
        let left_e = new T.Face3(24, 18, 17);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 0.51),
            new T.Vector2(1, 1),
            new T.Vector2(0, 1)
          ]);
        geometry.faces.push(left_e);
        let left_f = new T.Face3(28, 24, 25);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 0),
            new T.Vector2(0.5, 0.5),
            new T.Vector2(0.5, 0)
          ]);
        geometry.faces.push(left_f);
        let left_g = new T.Face3(28, 27, 24);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 0),
            new T.Vector2(1, 0.5),
            new T.Vector2(0.5, 0.5)
          ]);
        geometry.faces.push(left_g);
        let left_h = new T.Face3(27, 18, 24);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 1),
            new T.Vector2(1, 1),
            new T.Vector2(1, 1)
          ]);
        geometry.faces.push(left_h);
        //construction of right_side
        let right_a = new T.Face3(4, 30, 29);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 1),
            new T.Vector2(1, 1),
            new T.Vector2(1, 1)
          ]);
        geometry.faces.push(right_a);
        let right_b = new T.Face3(4, 5, 30);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 1),
            new T.Vector2(1, 1),
            new T.Vector2(1, 1)
          ]);
        geometry.faces.push(right_b);
        let right_c = new T.Face3(15, 16, 31);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 1),
            new T.Vector2(1, 1),
            new T.Vector2(1, 1)
          ]);
        geometry.faces.push(right_c);
        let right_d = new T.Face3(31, 19, 30);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 0.51),
            new T.Vector2(0, 1),
            new T.Vector2(0, 0.51)
          ]);
        geometry.faces.push(right_d);
        let right_e = new T.Face3(31, 16, 19);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 0.51),
            new T.Vector2(1, 1),
            new T.Vector2(0, 1)
          ]);
        geometry.faces.push(right_e);
        let right_f = new T.Face3(29, 21, 22);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 0),
            new T.Vector2(0.5, 0.5),
            new T.Vector2(0.5, 0)
          ]);
        geometry.faces.push(right_f);
        let right_g = new T.Face3(29, 30, 21);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 0),
            new T.Vector2(1, 0.5),
            new T.Vector2(0.5, 0.5)
          ]);
        geometry.faces.push(right_g);
        let right_h = new T.Face3(30, 19, 21);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1, 1),
            new T.Vector2(1, 1),
            new T.Vector2(1, 1)
          ]);
        geometry.faces.push(right_h);
    
        geometry.computeFaceNormals();

        let texture = new T.TextureLoader().load("../HallowTown/Textures/Subie.png");
        let material = new T.MeshStandardMaterial({color: "white", map: texture, roughness: 0.3, metalness: 0.5});
        let mesh = new T.Mesh(geometry, material);

        let tire_geom = new T.CylinderGeometry(0.25, 0.25, 0.15, 20, 20);
        let tire_mat = new T.MeshStandardMaterial({color: "black"});
        let tire1 = new T.Mesh(tire_geom, tire_mat);
        mesh.add(tire1);
        tire1.position.z = -0.7;
        tire1.position.x = -0.25;
        tire1.rotateZ(Math.PI / 2);
        let tire2 = new T.Mesh(tire_geom, tire_mat);
        mesh.add(tire2);
        tire2.position.z = -2.3;
        tire2.position.x = -0.25;
        tire2.rotateZ(Math.PI / 2);
        let tire3 = new T.Mesh(tire_geom, tire_mat);
        mesh.add(tire3);
        tire3.position.z = -0.7;
        tire3.position.x = 1.25;
        tire3.rotateZ(Math.PI / 2);
        let tire4 = new T.Mesh(tire_geom, tire_mat);
        mesh.add(tire4);
        tire4.position.z = -2.3;
        tire4.position.x = 1.25;
        tire4.rotateZ(Math.PI / 2);

        super("subaru", mesh);

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