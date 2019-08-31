var car = function(brand, color, year, distance){
    this.brand=brand;
    this.color=color;
    this.year=year;
    this.distance=distance;
    this.lastOilCheck=lastOilCheck;
}

car.prototype.drive= function(kilometers){
    this.distance = this.distance + kilometers;

      // if(lastOilChecl >= lastOilCheck + 10000){
      //   console.log('zmien olej');
      //   lastOilCheck=lastOilChecl+
      // }
        console.log('You have traveled for 10 000km or more, please check your oil.');
    }
    console.log("distance = " + this.distance);
}

car.prototype.changeColor = function(colorChange){
    this.color = colorChange;
    console.log('Kolor zmieniony na ' + colorChange);
}
