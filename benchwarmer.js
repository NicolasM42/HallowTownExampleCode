import * as T from "../libs/CS559-THREE/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

export class benchwarmer extends GrObject {
    constructor() {

        //code for unused person sitting on bench
        /*
        let geometry = new T.Geometry();

        geometry.vertices.push(new T.Vector3(0, 0, 0)); //0
        geometry.vertices.push(new T.Vector3(1, 0, 0)); //1
        geometry.vertices.push(new T.Vector3(0, 1, 0)); //2
        geometry.vertices.push(new T.Vector3(1, 1, 0)); //3
        geometry.vertices.push(new T.Vector3(0, 0, -1)); //4
        geometry.vertices.push(new T.Vector3(1, 0, -1)); //5
        geometry.vertices.push(new T.Vector3(0, 1, -1)); //6
        geometry.vertices.push(new T.Vector3(1, 1, -1)); //7

        geometry.faceVertexUvs = [[]];

        let front_a = new T.Face3(0, 1, 2);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(0, 1/2),
            new T.Vector2(1/2, 1/2),
            new T.Vector2(0, 1)
          ]);
        geometry.faces.push(front_a);
        let front_b = new T.Face3(1, 3, 2);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1/2, 1/2),
            new T.Vector2(1/2, 1),
            new T.Vector2(0, 1)
          ]);
        geometry.faces.push(front_b);

        let left_a = new T.Face3(4, 0, 6);
        geometry.faces.push(left_a);
        let left_b = new T.Face3(0, 2, 6);
        geometry.faces.push(left_b);

        let back_a = new T.Face3(4, 7, 5);
        geometry.faces.push(back_a);
        let back_b = new T.Face3(4, 6, 7);
        geometry.faces.push(back_b);

        let right_a = new T.Face3(1, 5, 3);
        geometry.faces.push(right_a);
        let right_b = new T.Face3(5, 7, 3);
        geometry.faces.push(right_b);

        let top_a = new T.Face3(2, 3, 6);
        geometry.faces.push(top_a);
        let top_b = new T.Face3(6, 3, 7);
        geometry.faces.push(top_b);

        let bottom_a = new T.Face3(0, 5, 1);
        geometry.faces.push(bottom_a);
        let bottom_b = new T.Face3(0, 4, 5);
        geometry.faces.push(bottom_b);

        geometry.computeFaceNormals();

        let texture = new T.TextureLoader().load("../HallowTown/Textures/MiscTextureSheet.png");
        let material = new T.MeshStandardMaterial({map: texture, color: "white"});
        let head = new T.Mesh(geometry, material);

        let bodyGeom = new T.BoxGeometry(1, 2, 0.5);
        let appendageGeom = new T.BoxGeometry(0.5, 2, 0.5);
        let clothingMat = new T.MeshStandardMaterial({color: "rgb(50, 0, 50)"});

        let body = new T.Mesh(bodyGeom, clothingMat);
        body.position.z = -0.5;
        body.position.x = 0.5;
        head.add(body);
        body.position.y = -1;
        let leftArm = new T.Mesh(appendageGeom, clothingMat);
        body.add(leftArm);
        leftArm.position.x = -1;
        leftArm.rotateZ(-Math.PI / 10);
        let rightArm = new T.Mesh(appendageGeom, clothingMat);
        body.add(rightArm);
        rightArm.position.x = 1;
        rightArm.rotateZ(Math.PI / 10);
        let leftLeg = new T.Mesh(appendageGeom, clothingMat);
        body.add(leftLeg);
        leftLeg.position.y = -1;
        leftLeg.position.x = -0.3;
        leftLeg.position.z = 1;
        leftLeg.rotateX(Math.PI / 2);
        let rightLeg = new T.Mesh(appendageGeom, clothingMat);
        body.add(rightLeg);
        rightLeg.position.y = -1;
        rightLeg.position.x = 0.3;
        rightLeg.position.z = 1;
        rightLeg.rotateX(Math.PI / 2);
        */

        let seatGeom = new T.BoxGeometry(4, 0.25, 1);
        let sideGeom = new T.BoxGeometry(0.25, 1.5, 1.5);
        let benchMat = new T.MeshStandardMaterial({color: "grey", metalness: 0.6, roughness: 0.3});

        let seat = new T.Mesh(seatGeom, benchMat);
        let left_side = new T.Mesh(sideGeom, benchMat);
        let right_side = new T.Mesh(sideGeom, benchMat);

        seat.position.y = -1.25;
        seat.add(left_side);
        left_side.position.x = -2;
        left_side.position.y = -0.5;
        seat.add(right_side);
        right_side.position.x = 2;
        right_side.position.y = -0.5;

        super("benchwarmer", seat);
    }
}