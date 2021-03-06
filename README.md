Impact++ (r2)
========
  
[See it in Action!](http://collinhover.github.com/mimic "Mimic")

####Overview
A series of extensions and additions to the [Impact javascript engine](http://impactjs.com "ImpactJS")

####Core Goal
The core goal of this project is to add some basic elements to Impact to make it easier and faster to start developing full featured games. Impact is a great engine, but it is fairly minimal to start. We've already created a slew of extra functionality, so why should you have to create it too?  
  
We also don't want to overlap too much with Jesse Freeman's [Impact Bootstrap](https://github.com/gamecook/Impact-Bootstrap "Impact-Bootstrap"), so you should definitely check it out also!  

####Features
* Box2D Physics (v2.1a + lots of performance/bug fixes)  
	* Physics ready entities with multi-type collision ignore checks (pass-through)  
	* 60+ new tiles for the collision map  
	* Debug draw
* Utilities to convert Collision-maps to Box2D Physics shapes  
	* Solid Shapes ( convex )
	* Edge Shapes ( convex or concave )
	* Climbable Shapes ( convex )
	* One-way Shapes for up, down, left, or right ( convex )
* Lighting
	* Realtime moving and highly optimized  
	* Dynamic alpha and/or color  
	* Shadows  
	* Entities can cast shadows fully, only from edges (hollow), or none
	* Gradient or full  
	* Pixel perfect  
* Character classes (abstract)
	* Static 
	* Moving with options to jump, climb, and handle some preset animations
* Cloneable Hierarchy class (abstract)  
* Abilities class (based on Hierarchy)  
* Huge list of Utility functions such as AABB intersections, Point-in-Polygon, and more  
* SignalsJS library integration for a fantastic event system  
* TWEENJS library integration  
  
And more to come! If you have anything to add, please don't hesitate to make a pull request!   

##How to Use
```
Note that unlike Impact Bootstrap, not all modules/classes will be loaded automatically!
```  
* Download and merge the **lib** folder into your new or existing ImpactJS project directory
* Don't forget the ImpactJS engine, we can't provide this
* Have your main game extend **lib/plusplus/core/game.js**
* Require modules from **lib/plusplus**  
  
##Contributors
[Collin Hover](http://collinhover.com "Collin Hover")  

---
  
*Copyright (C) 2013-Present Collin Hover and other contributors*  
*For full license and information, see [LICENSE](https://github.com/collinhover/impactextended/blob/master/LICENSE).*