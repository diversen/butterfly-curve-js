/* Package: butterfly-curve. Version: 1.0.0. License: MIT. Author: dennis iversen. Homepage: https://github.com/diversen/butterfly-curve-js#readme   */ (function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.butterflyCurve = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
        function butterflyCurve () {
            
            this.const12 = 12;
            this.const5 = 5;
            this.const4 = 4;
            this.const2 = 2;
            
            this.getX = function (t) {
                return Math.sin(t)*this.getBase(t);
            };
            this.getY = function(t) {
                return Math.cos(t)*this.getBase(t);
            };
            this.getBase = function (t) {
                var base = Math.pow(
                        Math.E, Math.cos(t)) - 
                        this.const2*Math.cos(this.const4*t) - 
                        Math.pow(Math.sin(t/this.const12), this.const5);
                return base;
            };
            this.getXY = function (t) {
                var x = this.getX(t);
                var y = this.getY(t);
                return {x: x, y: y};
            }
        };


module.exports = butterflyCurve;

},{}]},{},[1])(1)
});