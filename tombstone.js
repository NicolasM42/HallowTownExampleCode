import * as T from "../libs/CS559-THREE/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

export class tombstone extends GrObject {
    constructor() {

        let geometry = new T.Geometry();

        geometry.vertices.push(new T.Vector3(0, 0, 0)); //0
        geometry.vertices.push(new T.Vector3(1, 0, 0)); //1
        geometry.vertices.push(new T.Vector3(0, 1, 0)); //2
        geometry.vertices.push(new T.Vector3(1, 1, 0)); //3

        geometry.vertices.push(new T.Vector3(0, 0, -0.3)); //4
        geometry.vertices.push(new T.Vector3(1, 0, -0.3)); //5
        geometry.vertices.push(new T.Vector3(0, 1, -0.3)); //6
        geometry.vertices.push(new T.Vector3(1, 1, -0.3)); //7

        geometry.faceVertexUvs = [[]];

        let front_a = new T.Face3(0, 1, 2);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(0, 0),
            new T.Vector2(1/2, 0),
            new T.Vector2(0, 1/2)
          ]);
        geometry.faces.push(front_a);
        let front_b = new T.Face3(1, 3, 2);
        geometry.faceVertexUvs[0].push([
            new T.Vector2(1/2, 0),
            new T.Vector2(1/2, 1/2),
            new T.Vector2(0, 1/2)
          ]);
        geometry.faces.push(front_b);

        let left_a = new T.Face3(0, 6, 4);
        geometry.faces.push(left_a);
        let left_b = new T.Face3(0, 2, 6);
        geometry.faces.push(left_b);

        let back_a = new T.Face3(5, 4, 7);
        geometry.faces.push(back_a);
        let back_b = new T.Face3(4, 6, 7);
        geometry.faces.push(back_b);

        let right_a = new T.Face3(3, 1, 5);
        geometry.faces.push(right_a);
        let right_b = new T.Face3(3, 5, 7);
        geometry.faces.push(right_b);

        geometry.computeFaceNormals();

        let texture = new T.TextureLoader().load("../HallowTown/Textures/MiscTextureSheet.png");
        let tombstoneFrontMat = new T.MeshStandardMaterial({color: "grey", map: texture});
        let lowerTombMesh = new T.Mesh(geometry, tombstoneFrontMat);

        let tombstoneMat = new T.MeshStandardMaterial({color: "rgb(75, 75, 75)"});
        let upperTombGeom = new T.CylinderGeometry(0.5, 0.5, 0.29, 20, 20);
        let upperTombMesh = new T.Mesh(upperTombGeom, tombstoneMat);
        lowerTombMesh.add(upperTombMesh);
        upperTombMesh.position.y = 1;
        upperTombMesh.position.z = -0.15;
        upperTombMesh.position.x = 0.5;
        upperTombMesh.rotateX(Math.PI / 2);

        super("tombstone", lowerTombMesh);
    }
}