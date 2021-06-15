import * as T from "../libs/CS559-THREE/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

let carouselObCtr = 0;
// A Carousel.
/**
 * @typedef CarouselProperties
 * @type {object}
 * @property {number} [x=0]
 * @property {number} [y=0]
 * @property {number} [z=0]
 * @property {number} [size=1]
 */
export class Carousel extends GrObject {
  /**
   * @param {CarouselProperties} params
   */
  constructor(params = {}) {
    let width = 3;
    let carousel = new T.Group();

    let base_geom = new T.CylinderGeometry(width, width, 1, 32);
    let base_mat = new T.MeshStandardMaterial({
      color: "rgb(252, 119, 3)",
      metalness: 0.3,
      roughness: 0.8
    });
    let base = new T.Mesh(base_geom, base_mat);
    base.translateY(0.5);
    carousel.add(base);

    let platform_group = new T.Group();
    base.add(platform_group);
    platform_group.translateY(0.5);

    let platform_geom = new T.CylinderGeometry(
      0.95 * width,
      0.95 * width,
      0.2,
      32
    );
    let platform_mat = new T.MeshStandardMaterial({
      color: "purple",
      metalness: 0.3,
      roughness: 0.8
    });
    let platform = new T.Mesh(platform_geom, platform_mat);
    platform_group.add(platform);

    let cpole_geom = new T.CylinderGeometry(0.3 * width, 0.3 * width, 3, 16);
    let cpole_mat = new T.MeshStandardMaterial({
      color: "gold",
      metalness: 0.8,
      roughness: 0.5
    });
    let cpole = new T.Mesh(cpole_geom, cpole_mat);
    platform_group.add(cpole);
    cpole.translateY(1.5);

    let ppole_geom = new T.CylinderGeometry(0.2, 0.2, 3, 20, 20);
    let ppole_mat = new T.MeshStandardMaterial({color: "darkgrey", metalness: 0.6, roughness: 0.3});
    let ppole = new T.Mesh(ppole_geom, ppole_mat);
    platform_group.add(ppole);
    ppole.translateY(5);

    let top_trim = new T.Mesh(platform_geom, platform_mat);
    platform_group.add(top_trim);
    top_trim.translateY(3);

    let opole_geom = new T.CylinderGeometry(0.03 * width, 0.03 * width, 3, 16);
    let opole_mat = new T.MeshStandardMaterial({
      color: "#aaaaaa",
      metalness: 0.8,
      roughness: 0.5
    });
    let opole;
    let num_poles = 10;
    let poles = [];
    //let horseGeom = new T.BoxGeometry(width * 0.2, width * 0.2, width * 0.2);
    let horseMat = new T.MeshStandardMaterial({color: "white"});

    let horseBodyGeom = new T.CylinderGeometry(0.1 * width, 0.1 * width, width * 0.3, 20, 20);
    let horseLegGeom = new T.CylinderGeometry(0.02 * width, 0.02 * width, width * 0.2, 20, 20);
    let horseHeadGeom = new T.CylinderGeometry(0.05 * width, 0.02 * width, width * 0.1, 20, 20);
    
    let horseBody;
    let horseRFLeg;
    let horseLFLeg;
    let horseRBLeg;
    let horseLBLeg;
    let horseNeck;
    let horseTail;
    let horseHead;

    //let horse;
    let horsies = [];
    let horseStagger = -0.6
    for (let i = 0; i < num_poles; i++) {
      opole = new T.Mesh(opole_geom, opole_mat);
      platform_group.add(opole);
      opole.translateY(1.5);
      opole.rotateY((2 * i * Math.PI) / num_poles);
      opole.translateX(0.8 * width);
      poles.push(opole);
      //horse = new T.Mesh(horseGeom, horseMat);

      horseBody = new T.Mesh(horseBodyGeom, horseMat);
      horseRFLeg = new T.Mesh(horseLegGeom, horseMat);
      horseLFLeg = new T.Mesh(horseLegGeom, horseMat);
      horseRBLeg = new T.Mesh(horseLegGeom, horseMat);
      horseLBLeg = new T.Mesh(horseLegGeom, horseMat);
      horseNeck = new T.Mesh(horseLegGeom, horseMat);
      horseTail = new T.Mesh(horseLegGeom, horseMat);
      horseHead = new T.Mesh(horseHeadGeom, horseMat);

      opole.add(horseBody);

      horseBody.rotateX(Math.PI / 2);

      horseBody.add(horseNeck);
      horseNeck.rotateX(Math.PI / 4);
      horseNeck.position.y = -width * 0.15;
      horseNeck.position.z = -width * 0.08;

      horseBody.add(horseHead);
      horseHead.position.y = -width * 0.25;
      horseHead.position.z = -width * 0.15;

      horseBody.add(horseTail);
      horseTail.rotateX(Math.PI / 4);
      horseTail.position.y = width * 0.15;
      horseTail.position.z = -width * 0.02;

      horseBody.add(horseRFLeg);
      horseRFLeg.rotateX(Math.PI / 2);
      horseRFLeg.position.x = width * 0.1;
      horseRFLeg.position.y = -width * 0.1;
      horseRFLeg.position.z = width * 0.1;

      horseBody.add(horseLFLeg);
      horseLFLeg.rotateX(Math.PI / 2);
      horseLFLeg.position.x = -width * 0.1;
      horseLFLeg.position.y = -width * 0.1;
      horseLFLeg.position.z = width * 0.1;

      horseBody.add(horseRBLeg);
      horseRBLeg.rotateX(Math.PI / 2);
      horseRBLeg.position.x = width * 0.1;
      horseRBLeg.position.y = width * 0.1;
      horseRBLeg.position.z = width * 0.1;

      horseBody.add(horseLBLeg);
      horseLBLeg.rotateX(Math.PI / 2);
      horseLBLeg.position.x = -width * 0.1;
      horseLBLeg.position.y = width * 0.1;
      horseLBLeg.position.z = width * 0.1;

      horseBody.position.y = horseStagger;
      horseStagger += 0.11;
      horsies.push([horseBody, true]);
    }    

    let roof_geom = new T.ConeGeometry(width, 0.5 * width, 32, 4);
    let roof = new T.Mesh(roof_geom, base_mat);
    carousel.add(roof);
    roof.translateY(4.8);

    // note that we have to make the Object3D before we can call
    // super and we have to call super before we can use this
    super(`Carousel-${carouselObCtr++}`, carousel);
    this.whole_ob = carousel;
    this.platform = platform;
    this.poles = poles;

    // put the object in its place
    this.whole_ob.position.x = params.x ? Number(params.x) : 0;
    this.whole_ob.position.y = params.y ? Number(params.y) : 0;
    this.whole_ob.position.z = params.z ? Number(params.z) : 0;
    let scale = params.size ? Number(params.size) : 1;
    carousel.scale.set(scale, scale, scale);

    this.tick = function(delta, timeOfDay) {
      
      platform_group.rotateY(0.005 * delta);
      horsies.forEach(function(horsey) {

        if (horsey[1]) {
          if (horsey[0].position.y < 0.6) {
            horsey[0].position.y += 0.02;
          } else {
            horsey[1] = false;
          }
        } else {
          if (horsey[0].position.y > -0.6) {
            horsey[0].position.y -= 0.02;
          } else {
            horsey[1] = true;
          }
        }
      });
    };
  }
}
