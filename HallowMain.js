import { groundCover } from "./GroundCover.js";
import { house1 } from "./house1.js";
import { house2 } from "./house2.js";
import { house3 } from "./house3.js";
import { pine_tree } from "./pinetree.js";
import { subie } from "./subie.js";
import { volks } from "./volks.js";
import { volksMove } from "./volksMove.js"
import { MerryGoRound } from "./MerryGoRound.js";
import { Swing } from "./Swing.js";
import { Carousel } from "./Carousel.js";
import { jackOlantern } from "./jackOlantern.js";
import { tombstone } from "./tombstone.js";
import { fence } from "./fence.js";
import { benchwarmer } from "./benchwarmer.js";
import { skelly } from "./Skelly.js";
import { ghost } from "./ghost.js";
import * as Loaders from "../libs/CS559-Framework/loaders.js";
import { broomstick } from "./broomstick.js";
import { smokestack } from "./smokestack.js";


export function HallowMain(world) {

    let newGround = new groundCover();
    world.add(newGround);

/////////////////////////////////////////////////////////////////////////
    let simpleHouse1 = new house3();
    simpleHouse1.setScale(2);
    simpleHouse1.objects[0].translateX(-7);
    simpleHouse1.objects[0].translateZ(25);
    simpleHouse1.objects[0].rotateY(Math.PI / 2);
    world.add(simpleHouse1);

    let simpleHouse2 = new house3();
    simpleHouse2.setScale(2);
    simpleHouse2.objects[0].translateX(-7);
    simpleHouse2.objects[0].translateZ(55);
    simpleHouse2.objects[0].rotateY(Math.PI / 2);
    world.add(simpleHouse2);

    let simpleHouse3 = new house3();
    simpleHouse3.setScale(2);
    simpleHouse3.objects[0].translateX(37);
    simpleHouse3.objects[0].translateZ(73);
    simpleHouse3.objects[0].rotateY(Math.PI);
    world.add(simpleHouse3);

    let simpleHouse4 = new house3();
    simpleHouse4.setScale(2);
    simpleHouse4.objects[0].translateX(60);
    simpleHouse4.objects[0].translateZ(55);
    world.add(simpleHouse4);

    let simpleHouse5 = new house3();
    simpleHouse5.setScale(2);
    simpleHouse5.objects[0].translateX(78);
    simpleHouse5.objects[0].translateZ(-20);
    simpleHouse5.objects[0].rotateY(Math.PI / 2);
    world.add(simpleHouse5);

    let simpleHouse6 = new house3();
    simpleHouse6.setScale(2);
    simpleHouse6.objects[0].translateX(73);
    simpleHouse6.objects[0].translateZ(-80);
    simpleHouse6.objects[0].rotateY(Math.PI);
    world.add(simpleHouse6);

    let smokestack1 = new smokestack();
    smokestack1.objects[0].translateY(10);
    smokestack1.objects[0].translateX(72);
    smokestack1.objects[0].translateZ(-76);
    world.add(smokestack1);

    let simpleHouse7 = new house3();
    simpleHouse7.setScale(2);
    simpleHouse7.objects[0].translateX(20);
    simpleHouse7.objects[0].translateZ(-83);
    simpleHouse7.objects[0].rotateY(Math.PI);
    world.add(simpleHouse7);

    let simpleHouse8 = new house3();
    simpleHouse8.setScale(2);
    simpleHouse8.objects[0].translateX(-10);
    simpleHouse8.objects[0].translateZ(-51);
    world.add(simpleHouse8);

////////////////////////////////////////////////////////////////////////  
    let doubleEve1 = new house1();
    doubleEve1.setScale(2);
    doubleEve1.objects[0].translateX(25);
    doubleEve1.objects[0].translateZ(13);
    doubleEve1.objects[0].rotateY(Math.PI);
    world.add(doubleEve1);

    let doubleEve2 = new house1();
    doubleEve2.setScale(2);
    doubleEve2.objects[0].translateX(35);
    doubleEve2.objects[0].translateZ(57);
    world.add(doubleEve2);

    let doubleEve3 = new house1();
    doubleEve3.setScale(2);
    doubleEve3.objects[0].translateX(10);
    doubleEve3.objects[0].translateZ(76);
    doubleEve3.objects[0].rotateY(Math.PI);
    world.add(doubleEve3);

    let doubleEve4 = new house1();
    doubleEve4.setScale(2);
    doubleEve4.objects[0].translateX(80);
    doubleEve4.objects[0].translateZ(74);
    doubleEve4.objects[0].rotateY(Math.PI);
    world.add(doubleEve4);

    let doubleEve5 = new house1();
    doubleEve5.setScale(2);
    doubleEve5.objects[0].translateX(80);
    doubleEve5.objects[0].translateZ(10);
    doubleEve5.objects[0].rotateY(Math.PI / 2);
    world.add(doubleEve5);

    let doubleEve6 = new house1();
    doubleEve6.setScale(2);
    doubleEve6.objects[0].translateX(80);
    doubleEve6.objects[0].translateZ(-45);
    doubleEve6.objects[0].rotateY(Math.PI / 2);
    world.add(doubleEve6);

    let doubleEve7 = new house1();
    doubleEve7.setScale(2);
    doubleEve7.objects[0].translateX(10);
    doubleEve7.objects[0].translateZ(-51);
    world.add(doubleEve7);

    let doubleEve8 = new house1();
    doubleEve8.setScale(2);
    doubleEve8.objects[0].translateX(38);
    doubleEve8.objects[0].translateZ(-17);
    doubleEve8.objects[0].rotateY(-Math.PI / 2);
    world.add(doubleEve8);

    let smokestack2 = new smokestack();
    smokestack2.objects[0].translateY(10);
    smokestack2.objects[0].translateX(43);
    smokestack2.objects[0].translateZ(-16);
    world.add(smokestack2);
///////////////////////////////////////////////////////////////////////
    let leanTo1 = new house2();
    leanTo1.setScale(2);
    leanTo1.objects[0].translateX(10);
    leanTo1.objects[0].translateZ(40);
    leanTo1.objects[0].rotateY(-Math.PI / 2);
    world.add(leanTo1);

    let leanTo2 = new house2();
    leanTo2.setScale(2);
    leanTo2.objects[0].translateX(50);
    leanTo2.objects[0].translateZ(77);
    leanTo2.objects[0].rotateY(Math.PI);
    world.add(leanTo2);

    let smokestack3 = new smokestack();
    smokestack3.objects[0].translateY(8);
    smokestack3.objects[0].translateX(47);
    smokestack3.objects[0].translateZ(80);
    world.add(smokestack3);

    let leanTo3 = new house2();
    leanTo3.setScale(2);
    leanTo3.objects[0].translateX(83);
    leanTo3.objects[0].translateZ(35);
    leanTo3.objects[0].rotateY(Math.PI / 2);
    world.add(leanTo3);

    let leanTo4 = new house2();
    leanTo4.setScale(2);
    leanTo4.objects[0].translateX(47);
    leanTo4.objects[0].translateZ(-82);
    leanTo4.objects[0].rotateY(Math.PI);
    world.add(leanTo4);

    let leanTo5 = new house2();
    leanTo5.setScale(2);
    leanTo5.objects[0].translateX(-10);
    leanTo5.objects[0].translateZ(-75);
    leanTo5.objects[0].rotateY(-Math.PI / 2);
    world.add(leanTo5);

    let leanTo6 = new house2();
    leanTo6.setScale(2);
    leanTo6.objects[0].translateX(40);
    leanTo6.objects[0].translateZ(-35);
    leanTo6.objects[0].rotateY(-Math.PI / 2);
    world.add(leanTo6);
////////////////////////////////////////////////////////////////////
    let tree1 = new pine_tree();
    tree1.setScale(2);
    tree1.objects[0].translateY(0.5);
    tree1.objects[0].translateX(-25);
    tree1.objects[0].translateZ(-80);
    world.add(tree1);

    let tree2 = new pine_tree();
    tree2.setScale(2);
    tree2.objects[0].translateY(0.5);
    tree2.objects[0].translateX(-27);
    tree2.objects[0].translateZ(-55);
    world.add(tree2);

    let tree3 = new pine_tree();
    tree3.setScale(2);
    tree3.objects[0].translateY(0.5);
    tree3.objects[0].translateX(-10);
    tree3.objects[0].translateZ(65);
    world.add(tree3);

    let tree4 = new pine_tree();
    tree4.setScale(2);
    tree4.objects[0].translateY(0.5);
    tree4.objects[0].translateX(-5);
    tree4.objects[0].translateZ(78);
    world.add(tree4);

    let tree5 = new pine_tree();
    tree5.setScale(2);
    tree5.objects[0].translateY(0.5);
    tree5.objects[0].translateX(20);
    tree5.objects[0].translateZ(83);
    world.add(tree5);

    let tree6 = new pine_tree();
    tree6.setScale(2);
    tree6.objects[0].translateY(0.5);
    tree6.objects[0].translateX(60);
    tree6.objects[0].translateZ(86);
    world.add(tree6);

    let tree7 = new pine_tree();
    tree7.setScale(2);
    tree7.objects[0].translateY(0.5);
    tree7.objects[0].translateX(90);
    tree7.objects[0].translateZ(90);
    world.add(tree7);

    let tree8 = new pine_tree();
    tree8.setScale(2);
    tree8.objects[0].translateY(0.5);
    tree8.objects[0].translateX(75);
    tree8.objects[0].translateZ(50);
    world.add(tree8);

    let tree9 = new pine_tree();
    tree9.setScale(2);
    tree9.objects[0].translateY(0.5);
    tree9.objects[0].translateX(65);
    tree9.objects[0].translateZ(32);
    world.add(tree9);

    let tree10 = new pine_tree();
    tree10.setScale(2);
    tree10.objects[0].translateY(0.5);
    tree10.objects[0].translateX(38);
    tree10.objects[0].translateZ(38);
    world.add(tree10);

    let tree11 = new pine_tree();
    tree11.setScale(2);
    tree11.objects[0].translateY(0.5);
    tree11.objects[0].translateX(52);
    tree11.objects[0].translateZ(13);
    world.add(tree11);

    let tree12 = new pine_tree();
    tree12.setScale(2);
    tree12.objects[0].translateY(0.5);
    tree12.objects[0].translateX(76);
    tree12.objects[0].translateZ(-34);
    world.add(tree12);

    let tree13 = new pine_tree();
    tree13.setScale(2);
    tree13.objects[0].translateY(0.5);
    tree13.objects[0].translateX(58);
    tree13.objects[0].translateZ(-62);
    world.add(tree13);

    let tree14 = new pine_tree();
    tree14.setScale(2);
    tree14.objects[0].translateY(0.5);
    tree14.objects[0].translateX(31);
    tree14.objects[0].translateZ(-54);
    world.add(tree14);

    let tree15 = new pine_tree();
    tree15.setScale(2);
    tree15.objects[0].translateY(0.5);
    tree15.objects[0].translateX(22);
    tree15.objects[0].translateZ(-19);
    world.add(tree15);

    let tree16 = new pine_tree();
    tree16.setScale(2);
    tree16.objects[0].translateY(0.5);
    tree16.objects[0].translateX(-14);
    tree16.objects[0].translateZ(0);
    world.add(tree16);

    let tree17 = new pine_tree();
    tree17.setScale(2);
    tree17.objects[0].translateY(0.5);
    tree17.objects[0].translateX(-50);
    tree17.objects[0].translateZ(-25);
    world.add(tree17);

    let tree18 = new pine_tree();
    tree18.setScale(2);
    tree18.objects[0].translateY(0.5);
    tree18.objects[0].translateX(-67);
    tree18.objects[0].translateZ(-32);
    world.add(tree18);

    let tree19 = new pine_tree();
    tree19.setScale(2);
    tree19.objects[0].translateY(0.5);
    tree19.objects[0].translateX(-88);
    tree19.objects[0].translateZ(21);
    world.add(tree19);

    let tree20 = new pine_tree();
    tree20.setScale(2);
    tree20.objects[0].translateY(0.5);
    tree20.objects[0].translateX(-65);
    tree20.objects[0].translateZ(10);
    world.add(tree20);

    let tree21 = new pine_tree();
    tree21.setScale(2);
    tree21.objects[0].translateY(0.5);
    tree21.objects[0].translateX(-79);
    tree21.objects[0].translateZ(-24);
    world.add(tree21);

    let tree22 = new pine_tree();
    tree22.setScale(2);
    tree22.objects[0].translateY(0.5);
    tree22.objects[0].translateX(-86);
    tree22.objects[0].translateZ(-49);
    world.add(tree22);

    let tree23 = new pine_tree();
    tree23.setScale(2);
    tree23.objects[0].translateY(0.5);
    tree23.objects[0].translateX(-33);
    tree23.objects[0].translateZ(25);
    world.add(tree23);

    let tree24 = new pine_tree();
    tree24.setScale(2);
    tree24.objects[0].translateY(0.5);
    tree24.objects[0].translateX(-38);
    tree24.objects[0].translateZ(11);
    world.add(tree24);

    let tree25 = new pine_tree();
    tree25.setScale(2);
    tree25.objects[0].translateY(0.5);
    tree25.objects[0].translateX(-30);
    tree25.objects[0].translateZ(80);
    world.add(tree25);

    let tree26 = new pine_tree();
    tree26.setScale(2);
    tree26.objects[0].translateY(0.5);
    tree26.objects[0].translateX(-47);
    tree26.objects[0].translateZ(90);
    world.add(tree26);

    let tree27 = new pine_tree();
    tree27.setScale(2);
    tree27.objects[0].translateY(0.5);
    tree27.objects[0].translateX(-69);
    tree27.objects[0].translateZ(85);
    world.add(tree27);
///////////////////////////////////////////////////////////////////
    let jack1 = new jackOlantern();
    jack1.setScale(2);
    jack1.objects[0].translateY(13.5);
    jack1.objects[0].translateX(10);
    jack1.objects[0].translateZ(-27);
    world.add(jack1);

    let jack2 = new jackOlantern();
    jack2.objects[0].translateY(1);
    jack2.objects[0].translateX(-5);
    jack2.objects[0].translateZ(17);
    world.add(jack2);

    let jack3 = new jackOlantern();
    jack3.objects[0].translateY(1);
    jack3.objects[0].translateX(2);
    jack3.objects[0].translateZ(73);
    world.add(jack3);

    let jack4 = new jackOlantern();
    jack4.objects[0].translateY(1);
    jack4.objects[0].translateX(72);
    jack4.objects[0].translateZ(72.5);
    world.add(jack4);

    let jack5 = new jackOlantern();
    jack5.objects[0].translateY(1);
    jack5.objects[0].translateX(83);
    jack5.objects[0].translateZ(37);
    world.add(jack5);

    let jack6 = new jackOlantern();
    jack6.objects[0].translateY(1);
    jack6.objects[0].translateX(83);
    jack6.objects[0].translateZ(-55);
    world.add(jack6);

    let jack7 = new jackOlantern();
    jack7.objects[0].translateY(1);
    jack7.objects[0].translateX(73);
    jack7.objects[0].translateZ(-83);
    world.add(jack7);

    let jack8 = new jackOlantern();
    jack8.objects[0].translateY(1);
    jack8.objects[0].translateX(12);
    jack8.objects[0].translateZ(-84.5);
    world.add(jack8);

    let jack9 = new jackOlantern();
    jack9.objects[0].translateY(1);
    jack9.objects[0].translateX(-10);
    jack9.objects[0].translateZ(-78);
    world.add(jack9);

    let jack10 = new jackOlantern();
    jack10.objects[0].translateY(1);
    jack10.objects[0].translateX(18);
    jack10.objects[0].translateZ(-49);
    world.add(jack10);

    let jack11 = new jackOlantern();
    jack11.objects[0].translateY(1);
    jack11.objects[0].translateX(38);
    jack11.objects[0].translateZ(-18);
    world.add(jack11);

    let jack12 = new jackOlantern();
    jack12.objects[0].translateY(1);
    jack12.objects[0].translateX(-63);
    jack12.objects[0].translateZ(-63);
    world.add(jack12);
///////////////////////////////////////////////////////////////////
    let subie1 = new subie();
    subie1.setScale(2.5);
    subie1.objects[0].translateX(-12);
    subie1.objects[0].translateZ(-89);
    subie1.objects[0].rotateY(Math.PI / 2);
    subie1.objects[0].translateY(0.7);
    subie1.rideable = subie1.objects[0];
    world.add(subie1);

    let vw1 = new volksMove();
    vw1.setScale(2.5);
    vw1.objects[0].translateY(0.7);
    vw1.objects[0].translateX(85);
    vw1.objects[0].translateZ(67);
    vw1.objects[0].rotateY(Math.PI / 2);
    world.add(vw1);

    let vw2 = new volks();
    vw2.setScale(2.5);
    vw2.objects[0].translateY(0.7);
    vw2.objects[0].translateX(45);
    vw2.objects[0].translateZ(0);
    vw2.objects[0].rotateY(Math.PI / 2);
    world.add(vw2);

    let vw3 = new volks();
    vw3.setScale(2.5);
    vw3.objects[0].translateY(0.7);
    vw3.objects[0].translateX(85);
    vw3.objects[0].translateZ(80);
    world.add(vw3);
/////////////////////////////////////////////////////////////
    let hauntedMgr = new MerryGoRound();
    hauntedMgr.setScale(2);
    hauntedMgr.objects[0].translateX(0);
    hauntedMgr.objects[0].translateZ(-10);
    world.add(hauntedMgr);

    let hauntedSwing = new Swing();
    hauntedSwing.setScale(2.5);
    hauntedSwing.objects[0].translateX(17);
    hauntedSwing.objects[0].translateZ(-7);
    hauntedSwing.objects[0].rotateY(Math.PI / 2);
    world.add(hauntedSwing);

    let hauntedCarousel = new Carousel();
    hauntedCarousel.setScale(2);
    hauntedCarousel.objects[0].translateX(10);
    hauntedCarousel.objects[0].translateZ(-27);
    world.add(hauntedCarousel);
/////////////////////////////////////////////////////////////
    let tomb1 = new tombstone();
    tomb1.setScale(2);
    tomb1.objects[0].translateY(0.7);
    tomb1.objects[0].translateX(-85);
    tomb1.objects[0].translateZ(-88);
    world.add(tomb1);

    let tomb2 = new tombstone();
    tomb2.setScale(2);
    tomb2.objects[0].translateY(0.7);
    tomb2.objects[0].translateX(-82);
    tomb2.objects[0].translateZ(-74);
    world.add(tomb2);

    let tomb3 = new tombstone();
    tomb3.setScale(2);
    tomb3.objects[0].translateY(0.7);
    tomb3.objects[0].translateX(-71);
    tomb3.objects[0].translateZ(-79);
    world.add(tomb3);

    let tomb4 = new tombstone();
    tomb4.setScale(2);
    tomb4.objects[0].translateY(0.7);
    tomb4.objects[0].translateX(-63);
    tomb4.objects[0].translateZ(-84);
    world.add(tomb4);

    let tomb5 = new tombstone();
    tomb5.setScale(2);
    tomb5.objects[0].translateY(0.7);
    tomb5.objects[0].translateX(-59);
    tomb5.objects[0].translateZ(-73);
    world.add(tomb5);

    let fence1 = new fence();
    fence1.setScale(2);
    fence1.objects[0].translateY(0.7);
    fence1.objects[0].translateX(-90);
    fence1.objects[0].translateZ(-95);
    world.add(fence1);

    let fence2 = new fence();
    fence2.setScale(2);
    fence2.objects[0].translateY(0.7);
    fence2.objects[0].translateX(-84);
    fence2.objects[0].translateZ(-95);
    world.add(fence2);

    let fence3 = new fence();
    fence3.setScale(2);
    fence3.objects[0].translateY(0.7);
    fence3.objects[0].translateX(-78);
    fence3.objects[0].translateZ(-95);
    world.add(fence3);

    let fence4 = new fence();
    fence4.setScale(2);
    fence4.objects[0].translateY(0.7);
    fence4.objects[0].translateX(-72);
    fence4.objects[0].translateZ(-95);
    world.add(fence4);

    let fence5 = new fence();
    fence5.setScale(2);
    fence5.objects[0].translateY(0.7);
    fence5.objects[0].translateX(-66);
    fence5.objects[0].translateZ(-95);
    world.add(fence5);
    
    let fence6 = new fence();
    fence6.setScale(2);
    fence6.objects[0].translateY(0.7);
    fence6.objects[0].translateX(-60);
    fence6.objects[0].translateZ(-95);
    world.add(fence6);

    let fence7 = new fence();
    fence7.setScale(2);
    fence7.objects[0].translateY(0.7);
    fence7.objects[0].translateX(-54);
    fence7.objects[0].translateZ(-95);
    world.add(fence7);

    let fence8 = new fence();
    fence8.setScale(2);
    fence8.objects[0].translateY(0.7);
    fence8.objects[0].translateX(-51);
    fence8.objects[0].translateZ(-92);
    fence8.objects[0].rotateY(Math.PI / 2);
    world.add(fence8);

    let fence9 = new fence();
    fence9.setScale(2);
    fence9.objects[0].translateY(0.7);
    fence9.objects[0].translateX(-51);
    fence9.objects[0].translateZ(-86);
    fence9.objects[0].rotateY(Math.PI / 2);
    world.add(fence9);

    let fence10 = new fence();
    fence10.setScale(2);
    fence10.objects[0].translateY(0.7);
    fence10.objects[0].translateX(-51);
    fence10.objects[0].translateZ(-80);
    fence10.objects[0].rotateY(Math.PI / 2);
    world.add(fence10);

    let fence11 = new fence();
    fence11.setScale(2);
    fence11.objects[0].translateY(0.7);
    fence11.objects[0].translateX(-51);
    fence11.objects[0].translateZ(-74);
    fence11.objects[0].rotateY(Math.PI / 2);
    world.add(fence11);

    let fence12 = new fence();
    fence12.setScale(2);
    fence12.objects[0].translateY(0.7);
    fence12.objects[0].translateX(-51);
    fence12.objects[0].translateZ(-68);
    fence12.objects[0].rotateY(Math.PI / 2);
    world.add(fence12);

    let fence13 = new fence();
    fence13.setScale(2);
    fence13.objects[0].translateY(0.7);
    fence13.objects[0].translateX(-93);
    fence13.objects[0].translateZ(-92);
    fence13.objects[0].rotateY(Math.PI / 2);
    world.add(fence13);

    let fence14 = new fence();
    fence14.setScale(2);
    fence14.objects[0].translateY(0.7);
    fence14.objects[0].translateX(-93);
    fence14.objects[0].translateZ(-86);
    fence14.objects[0].rotateY(Math.PI / 2);
    world.add(fence14);

    let fence15 = new fence();
    fence15.setScale(2);
    fence15.objects[0].translateY(0.7);
    fence15.objects[0].translateX(-93);
    fence15.objects[0].translateZ(-80);
    fence15.objects[0].rotateY(Math.PI / 2);
    world.add(fence15);

    let fence16 = new fence();
    fence16.setScale(2);
    fence16.objects[0].translateY(0.7);
    fence16.objects[0].translateX(-93);
    fence16.objects[0].translateZ(-74);
    fence16.objects[0].rotateY(Math.PI / 2);
    world.add(fence16);

    let fence17 = new fence();
    fence17.setScale(2);
    fence17.objects[0].translateY(0.7);
    fence17.objects[0].translateX(-93);
    fence17.objects[0].translateZ(-68);
    fence17.objects[0].rotateY(Math.PI / 2);
    world.add(fence17);

    let fence18 = new fence();
    fence18.setScale(2);
    fence18.objects[0].translateY(0.7);
    fence18.objects[0].translateX(-90);
    fence18.objects[0].translateZ(-65);
    world.add(fence18);

    let fence19 = new fence();
    fence19.setScale(2);
    fence19.objects[0].translateY(0.7);
    fence19.objects[0].translateX(-84);
    fence19.objects[0].translateZ(-65);
    world.add(fence19);

    let fence20 = new fence();
    fence20.setScale(2);
    fence20.objects[0].translateY(0.7);
    fence20.objects[0].translateX(-60);
    fence20.objects[0].translateZ(-65);
    world.add(fence20);

    let fence21 = new fence();
    fence21.setScale(2);
    fence21.objects[0].translateY(0.7);
    fence21.objects[0].translateX(-54);
    fence21.objects[0].translateZ(-65);
    world.add(fence21);
/////////////////////////////////////////////////////////////////
    let bench = new benchwarmer();
    bench.objects[0].translateY(2.5);
    bench.objects[0].translateX(-10);
    bench.objects[0].translateZ(-20);
    bench.objects[0].rotateY(Math.PI / 2);
    world.add(bench);
//////////////////////////////////////////////////////////////////
    let titan = new skelly();
    titan.setScale(3);
    titan.objects[0].translateY(-10);
    titan.objects[0].translateX(-115);
    titan.objects[0].translateZ(70);
    titan.objects[0].rotateY(Math.PI / 2);
    world.add(titan);

    let skull1 = new Loaders.ObjGrObject({
        obj:"../HallowTown/Skull.obj",
        norm: 3.0,
        callback: function (obj) {
            console.log(obj);
            obj.objects.forEach(ob => console.log(ob));
        }
    });
    skull1.setScale(7);
    skull1.objects[0].translateY(10);
    skull1.objects[0].translateX(-113);
    skull1.objects[0].translateZ(70);
    skull1.objects[0].rotateY(Math.PI / 2);
    world.add(skull1);
//////////////////////////////////////////////////////////////////
    let casper = new ghost(15, 5);
    casper.setScale(2);
    casper.objects[0].translateX(-80);
    casper.objects[0].translateZ(-80);
    casper.rideable = casper.objects[0];
    world.add(casper);

    let ghost2 = new ghost(28, 7);
    ghost2.setScale(2);
    ghost2.objects[0].translateX(-75);
    ghost2.objects[0].translateZ(-88);
    world.add(ghost2);

    let ghost3 = new ghost(25, 3);
    ghost3.setScale(2);
    ghost3.objects[0].translateX(-63);
    ghost3.objects[0].translateZ(-74);
    world.add(ghost3);
/////////////////////////////////////////////////////////////////////
    let haunted_broom = new broomstick();
    haunted_broom.setScale(2);
    haunted_broom.objects[0].translateY(30);
    haunted_broom.rideable = haunted_broom.objects[0];
    world.add(haunted_broom);
    
}