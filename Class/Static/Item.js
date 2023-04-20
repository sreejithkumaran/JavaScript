class Item {
    static count = 0;
    
    constructor(name, quantity) {
      this.name = name;
      this.quantity = quantity;
      this.constructor.count++;
    }
    
    static getCount() {
      return Item.count;
    }
  }
  
  let pen = new Item('Pen', 5);
  let notebook = new Item('notebook', 10);
  
  console.log(Item.getCount()); // 2