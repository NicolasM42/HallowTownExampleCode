import * as T from "../libs/CS559-THREE/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import { shaderMaterial } from "../libs/CS559-Framework/shaderHelper.js";

export class jackOlantern extends GrObject {
    constructor() {
        let pumpkinGeom = new T.SphereGeometry(1, 20, 5);
        let pumpkinMat = shaderMaterial("../HallowTown/Shader Files/jackOlantern.vs",
         "../HallowTown/Shader Files/jackOlantern.fs", {
            side: T.DoubleSide,
            uniforms: {
              orange: { value: new T.Vector3(1.0, 0.45, 0.0) },
              black: { value: new T.Vector3(0.0, 0.0, 0.0) }
            },
          });
        let mesh = new T.Mesh(pumpkinGeom, pumpkinMat);

        let lowerStemGeom = new T.CylinderGeometry(0.2, 0.4, 0.3, 5, 20);
        let middleStemGeom = new T.CylinderGeometry(0.15, 0.2, 0.4, 5, 20);
        let upperStemGeom = new T.CylinderGeometry(0.05, 0.15, 0.7, 5, 20);
        let stemMat = new T.MeshStandardMaterial({color: "darkgreen"});

        let lowerStem = new T.Mesh(lowerStemGeom, stemMat);
        let middleStem = new T.Mesh(middleStemGeom, stemMat);
        let upperStem = new T.Mesh(upperStemGeom, stemMat);

        mesh.add(lowerStem);
        lowerStem.position.y = 1;

        lowerStem.add(middleStem);
        middleStem.position.y = 0.3;

        middleStem.add(upperStem);
        upperStem.rotateX(Math.PI / 6);
        upperStem.position.y = 0.5;
        upperStem.position.z = 0.2;

        super("jackOlantern", mesh);
    }
}