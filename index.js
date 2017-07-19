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
