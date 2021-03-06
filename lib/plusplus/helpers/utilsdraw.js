/**
 * Static utilities for drawing.
 * @author Collin Hover - collinhover.com
 **/
ig.module( 
	'plusplus.helpers.utilsdraw' 
)
.requires(
	'plusplus.helpers.utilsmath' 
)
.defines( function(){ "use strict";

var _um = ig.utilsmath;
var _ud = ig.utilsdraw = {};

/**
 * Pixel perfectly fills a polygon defined by vertices in context with r, g, b, a (optionally, add instead of set color).
 * @param {CanvasContext2D} context to draw into.
 * @param {Object} bounds of context to draw into.
 * @param {Array} polygon vertices.
 * @param {Number} red.
 * @param {Number} green.
 * @param {Number} blue.
 * @param {Number} alpha.
 * @param {Boolean} (optional, default = false ) add to existing color.
 * @param {Object} ( optional, default = boundsContext ) bounds of polygon.
 **/
_ud.pixelFillPolygon = function ( context, boundsContext, vertices, r, g, b, a, add, boundsVertices ) {
	
	// find bounding box of vertices
	
	var bminX = boundsContext.minX;
	var bminY = boundsContext.minY;
	
	var minX, minY, maxX, maxY;
	
	if ( boundsVertices ) {
		
		minX = Math.floor( boundsVertices.minX );
		minY = Math.floor( boundsVertices.minY );
		maxX = Math.ceil( boundsVertices.maxX );
		maxY = Math.ceil( boundsVertices.maxY );
		
	}
	else {
		
		minX = bminX;
		minY = bminY;
		maxX = boundsContext.maxX;
		maxY = boundsContext.maxY;
		
	}
	
	// extra 1 is for stability with rounding
	
	var imageX = minX - bminX - 1;
	var imageY = minY - bminY - 1;
	var width = maxX - minX + 1;
	var height = maxY - minY + 1;
	
	var r255 = r * 255;
	var g255 = g * 255;
	var b255 = b * 255;
	var a255 = a * 255;
	
	// draw inside vertices
	
	var shape = context.getImageData( imageX, imageY, width, height );
	
	if ( add === true ) {
		
		for ( var x = 0; x < width; x++ )  {
			for ( var y = 0; y < height; y++ )  {
				
				if ( _um.pointInPolygon( x + minX, y + minY, vertices ) ) {
					
					var index = ( x + y * width ) * 4;
					
					shape.data[ index ] += r255;
					shape.data[ index + 1 ] += g255;
					shape.data[ index + 2 ] += b255;
					shape.data[ index + 3 ] += a255;
					
				}
				
			}
		}
	
	}
	else {
		
		for ( var x = 0; x < width; x++ )  {
			for ( var y = 0; y < height; y++ )  {
				
				if ( _um.pointInPolygon( x + minX, y + minY, vertices ) ) {
					
					var index = ( x + y * width ) * 4;
					
					shape.data[ index ] = r255;
					shape.data[ index + 1 ] = g255;
					shape.data[ index + 2 ] = b255;
					shape.data[ index + 3 ] = a255;
					
				}
				
			}
		}
		
	}
	
	context.putImageData( shape, imageX, imageY );
	
};

/**
 * Fills a polygon defined by vertices in context.
 * @param {CanvasContext2D} context to draw into.
 * @param {Array} polygon vertices.
 * @param {Number} x offset.
 * @param {Number} y offset.
 * @param {Number} red.
 * @param {Number} green.
 * @param {Number} blue.
 * @param {Number} alpha.
 * @param {Number} scale after offset.
 **/
_ud.fillPolygon = function ( context, vertices, offsetX, offsetY, r, g, b, a, scale ) {
	
	offsetX = offsetX || 0;
	offsetY = offsetY || 0;
	scale = scale || 1;
	
	var vertex = vertices[ 0 ];
	
	context.save();
	
	context.fillStyle = 'rgba(' + r || 255 + ',' + g || 255 + ',' + b || 255 + ',' + a || 1 + ')';
	context.beginPath();
	context.moveTo( ( vertex.x + offsetX ) * scale, ( vertex.y + offsetY ) * scale );
	
	for ( var i = 1, il = vertices.length; i< il; i++ ) {
		vertex = vertices[ i ];
		context.lineTo( ( vertex.x + offsetX ) * scale, ( vertex.y + offsetY ) * scale );
	}
	
	context.fill();
	context.restore();
	
};

} );