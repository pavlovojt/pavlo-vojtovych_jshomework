const City = function (name, mista, quantity, materyk) { 
     this.name = name; 
     this.mista = mista; 
     this.quantity = quantity;
      this.materyk = materyk;
     this.SayQuantity = function ()
      { console.log(`in this city live ${this.quantity} people`);
     };
    };
     const london = new City("London", 250, 111111, "europa");
     const lviv = new City("Lviv", 300, 22222222 , "europa");
     const odessa = new City("Odessa", 56, 33333333, "europa");
london.SayQuantity();lviv.SayQuantity();odessa.SayQuantity();